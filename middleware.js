import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("next-auth.session-token") 
    // console.log(token)

  // If not logged in → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin?csrf=true", request.url));
  }

  // If logged in → allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/services"],
};
