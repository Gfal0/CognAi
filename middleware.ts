import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/flashcards", "/library", "/simulados", "/admin"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtected = protectedRoutes.some((route) => path.startsWith(route));

  if (!isProtected) {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get("cognai-session");

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/flashcards/:path*", "/library/:path*", "/simulados/:path*", "/admin/:path*"]
};

