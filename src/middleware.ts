import { updateSession } from "@/lib/supabase/middleware";
import { apiAuthPrefix, authRoutes, PrivateRoutes } from "@/routes";
import { jwtDecode } from "jwt-decode";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = await updateSession(request);
  // API routes
  if (request.nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return supabaseResponse;
  }

  if (PrivateRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const session = await supabase.auth.getSession();
    const decoded = jwtDecode<any>(session.data.session?.access_token || "");

    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    const role = decoded.user_role;

    console.log(role);

    if (role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    return supabaseResponse;
  }

  // auth routes
  if (authRoutes.includes(request.nextUrl.pathname)) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // if (user) {
    //   return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
    // }
    return supabaseResponse;
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
