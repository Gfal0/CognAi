import { NextResponse } from "next/server";

import { sendWelcomeEmail } from "@/lib/email";
import { hashPassword } from "@/lib/password";
import { prisma } from "@/lib/prisma";
import { createSessionToken, sessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (name.length < 2) {
      return NextResponse.json({ error: "Informe seu nome completo." }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Informe um email valido." }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "A senha precisa ter pelo menos 8 caracteres." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ error: "Ja existe uma conta com esse email." }, { status: 409 });
    }

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashPassword(password),
        profile: {
          create: {
            fullName: name
          }
        }
      },
      include: {
        profile: true
      }
    });

    const token = await createSessionToken({
      sub: user.id,
      email: user.email,
      name: user.profile?.fullName || name
    });

    const response = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.profile?.fullName || name
      }
    });

    response.cookies.set(sessionCookie.name, token, sessionCookie.options);

    try {
      await sendWelcomeEmail({
        email: user.email,
        name: user.profile?.fullName || name
      });
    } catch (error) {
      console.error(error);
    }

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Nao foi possivel concluir o cadastro. Verifique o banco e tente novamente." },
      { status: 500 }
    );
  }
}

