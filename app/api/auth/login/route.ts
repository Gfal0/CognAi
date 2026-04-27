import { NextResponse } from "next/server";

import { verifyPassword } from "@/lib/password";
import { prisma } from "@/lib/prisma";
import { createSessionToken, sessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        profile: true
      }
    });

    if (!user?.passwordHash || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: "Email ou senha invalidos." }, { status: 401 });
    }

    const token = await createSessionToken({
      sub: user.id,
      email: user.email,
      name: user.profile?.fullName || "Aluno"
    });

    const response = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.profile?.fullName || "Aluno"
      }
    });

    response.cookies.set(sessionCookie.name, token, sessionCookie.options);

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Nao foi possivel entrar agora." }, { status: 500 });
  }
}

