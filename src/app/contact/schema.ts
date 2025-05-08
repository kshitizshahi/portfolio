import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be under 100 characters" }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),

  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters" })
    .max(255, { message: "Subject must be under 255 characters" }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be under 2000 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
