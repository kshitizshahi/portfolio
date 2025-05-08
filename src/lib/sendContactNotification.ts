// lib/email/sendContactNotification.ts
import { Resend } from "resend";
import { Contact } from "@/types";
import { ContactEmailStyle } from "@/components/ContactEmailStyle";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a notification email to the site owner when someone submits the contact form.
 */
export async function sendContactNotification({
  name,
  email,
  subject,
  message,
}: Contact) {
  const html = ContactEmailStyle({ name, email, subject, message });

  return await resend.emails.send({
    from: `Portfolio Contact <${process.env.RESEND_DOMAIN}>`,
    to: `${process.env.CONTACT_EMAIL}`,
    subject: `New Contact Request from ${name}`,
    replyTo: email,
    html,
  });
}
