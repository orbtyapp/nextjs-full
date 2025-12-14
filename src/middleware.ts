import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add custom headers
  response.headers.set("x-middleware-cache", "no-cache");
  response.headers.set("x-powered-by", "cf-deploy");
  response.headers.set("x-request-id", crypto.randomUUID());

  // Log request (visible in Cloudflare dashboard)
  console.log(`[Middleware] ${request.method} ${request.nextUrl.pathname}`);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
