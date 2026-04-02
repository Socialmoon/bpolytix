import { NextResponse } from "next/server";
import { saveCareerSubmission } from "@/lib/firebase-store";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        fullName?: string;
        email?: string;
        phone?: string;
        position?: string;
        message?: string;
      }
    | null;

  if (!body?.fullName || !body?.email || !body?.phone || !body?.position || !body?.message) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  try {
    await saveCareerSubmission({
      fullName: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      position: body.position.trim(),
      message: body.message.trim(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Firebase write failed.";
    return NextResponse.json({ message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
