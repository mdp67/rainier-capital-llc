import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const name = body?.name?.toString().trim() ?? "";
    const email = body?.email?.toString().trim() ?? "";
    const company = body?.company?.toString().trim() ?? "";
    const message = body?.message?.toString().trim() ?? "";

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Please enter your email." },
        { status: 400 },
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Please enter a message." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please try again later.",
        },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: "notifications@rainiercapitalllc.com",
      to: "mark@rainiercapitalllc.com",
      reply_to: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company && `Company: ${company}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending your message. Please try again.",
      },
      { status: 500 },
    );
  }
}

