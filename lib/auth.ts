import { SignJWT, jwtVerify } from "jose";

/**
 * Auth.ts
 * ----------
 * Authentication library untuk website RPL.
 * 
 * Format: TypeScript
 */

// Helper function untuk mendapatkan secret key dari environment variables
function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET belum di-set di .env.local");
  return new TextEncoder().encode(secret);
}

export type TokenPayload = {
  username: string;
};

export async function signToken(payload: TokenPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(getSecret());
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret());
  return payload;
}
