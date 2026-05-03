import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically integrate with an email service
    // like Nodemailer, Resend, SendGrid, or a CRM.
    
    console.log("Received new enquiry:", body);
    
    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
