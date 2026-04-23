import { NextResponse } from "next/server";
import { ensureAdminFromEnv, verifyAdminCredentials } from "@/lib/firebase-store";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { username?: string; password?: string }
    | null;

  const sessionToken = process.env.ADMIN_SESSION_TOKEN;

  if (!sessionToken) {
    return NextResponse.json({ message: "Server auth configuration is missing." }, { status: 500 });
  }

  if (!body?.username || !body?.password) {
    return NextResponse.json({ message: "Username and password are required." }, { status: 400 });
  }

  try {
    await ensureAdminFromEnv();
    const isValid = await verifyAdminCredentials(body.username, body.password);

    if (!isValid) {
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
    }
  } catch (error) {
    console.error("Admin login failed:", error);
    const message = error instanceof Error ? error.message : "Firebase auth check failed.";
    return NextResponse.json({ message }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: "admin_session",
    value: sessionToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
