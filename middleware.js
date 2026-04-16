import { NextResponse } from "next/server";

/**
 * Pass request pathname to Server Components (e.g. root layout generateMetadata)
 * so a single canonical URL can be built for all non-/KCE routes.
 */
export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
