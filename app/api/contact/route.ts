import { NextResponse } from "next/server";
import { saveContactSubmission } from "@/lib/firebase-store";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { name?: string; email?: string; company?: string; message?: string }
    | null;

  if (!body?.name || !body?.email || !body?.company || !body?.message) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  try {
    await saveContactSubmission({
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company.trim(),
      message: body.message.trim(),
    });
  } catch (error) {
    console.error("Contact submission failed:", error);
    const message = error instanceof Error ? error.message : "Firebase write failed.";
    return NextResponse.json({ message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
