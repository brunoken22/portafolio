import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendinblue";

export async function POST(request: NextRequest) {
  const body = await request.json();
  await sendEmail(body);
  return NextResponse.json({ body, message: "El mensaje se esta enviado" });
}
