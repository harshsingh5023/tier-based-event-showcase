import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/events(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/events', req.url));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
