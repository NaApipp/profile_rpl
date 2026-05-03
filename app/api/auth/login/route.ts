
/**
 * /api/auth/login/route.ts
 * ----------
 * API untuk login admin pada website RPL SMKN 4 Kendal. baseon data user yang telah di mock
 * 
 * Format: Next.js Route Handler
 */

import { NextResponse } from "next/server";
import { USERS } from "@/lib/user";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const username = body?.username?.toString() ?? "";
  const password = body?.password?.toString() ?? "";

  const user = USERS.find((u) => u.username === username && u.password === password);
  if (!user) {
    return NextResponse.json({ error: "Username / password salah" }, { status: 401 });
  }

  const token = await signToken({ username: user.username});

  return NextResponse.json({
    token,
    user: { username: user.username },
  });
}
