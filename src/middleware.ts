import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// bisa di jadikan untuk fitur login
export function mainMiddleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

// konfigurasi pages yang tidak boleh di buka sebelum user login
export default withAuth(mainMiddleware, ["/profile"]);
