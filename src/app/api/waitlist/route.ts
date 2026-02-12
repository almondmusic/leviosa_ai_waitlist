import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const sellerStage = formData.get("seller_stage")?.toString() ?? "";

    if (!email) {
      return NextResponse.redirect(
        new URL("/waitlist?error=email_required", request.url),
        { status: 302 }
      );
    }

    // TODO: 저장소 연결 (DB, 스프레드시트, 이메일 서비스 등)
    console.log("Waitlist signup:", { name, email, phone, sellerStage });

    return NextResponse.redirect(
      new URL("/waitlist?success=1", request.url),
      { status: 302 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.redirect(
      new URL("/waitlist?error=server_error", request.url),
      { status: 302 }
    );
  }
}
