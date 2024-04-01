import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// bisa di jadikan untuk fitur login
export function middleware(req: NextRequest) {
  const isLogin = false;
  if (isLogin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

// konfigurasi pages yang tidak boleh di buka sebelum user login
export const config = {
  matcher: ["/product", "/product/:product"],
};
