import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { sessionCookie, verifySessionToken } from "@/lib/session";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(sessionCookie.name)?.value;
  const session = await verifySessionToken(token);

  if (!session) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      id: session.sub,
      email: session.email,
      name: session.name
    }
  });
}

