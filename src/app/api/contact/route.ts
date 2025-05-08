import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { contactFormSchema } from "../../contact/schema";
import { sendContactNotification } from "@/lib/sendContactNotification";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input data using Zod schema
    const validatedData = contactFormSchema.parse(body);

    // Save the contact request to the database
    const contactRequest = await prisma.contactRequest.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    });

    // Send notification email
    await sendContactNotification(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: `Thanks, ${contactRequest.name} Your message has been sent. I'll be in touch shortly.`,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Check if it's a Zod validation error
    if (error.errors) {
      return NextResponse.json(
        {
          success: false,
          message: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Error submitting contact request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit contact request",
      },
      { status: 500 }
    );
  }
}
