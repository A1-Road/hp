import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest) {
 const path = request.nextUrl.pathname;
 const english = path === "/en" || path.startsWith("/en/");
 const requestHeaders = new Headers(request.headers);
 requestHeaders.set("x-site-locale", english ? "en" : "ja");
 if (english) {
  const url = request.nextUrl.clone();
  url.pathname = path.slice(3) || "/";
  return NextResponse.rewrite(url, {request:{headers:requestHeaders}});
 }
 return NextResponse.next({request:{headers:requestHeaders}});
}
export const config = {matcher:["/((?!api|_next|.*\\..*).*)"]};
