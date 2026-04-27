import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { verifySessionToken } from "@/lib/session";

const protectedRoutes = ["/dashboard", "/flashcards", "/library", "/simulados", "/admin"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtected = protectedRoutes.some((route) => path.startsWith(route));

  if (!isProtected) {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get("cognai-session")?.value;
  const session = await verifySessionToken(sessionToken);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/flashcards/:path*", "/library/:path*", "/simulados/:path*", "/admin/:path*"]
};
