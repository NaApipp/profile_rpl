/**
 * /api/auth/logout/route.ts
 * ----------
 * API untuk logout admin pada website RPL SMKN 4 Kendal. 
 * ----------------------------------------------------------------
 * 
 * Format: Next.js Route Handler
 */

import { NextResponse } from "next/server";

export async function POST() {
  // Stateless (JWT). Logout cukup di client: hapus token dari sessionStorage.
  return NextResponse.json({ ok: true });
}
