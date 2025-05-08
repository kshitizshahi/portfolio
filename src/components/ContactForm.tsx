"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../app/contact/schema";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitHandler = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result?.success) {
        toast.success(result?.message);

        reset(); // Clear the form
      } else {
        toast.error(
          `${
            result.message
              ? result.message
              : "Failed to send message. Please try again."
          }`
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="max-w-lg mx-auto">
      <h2 className="mb-6 text-xl font-bold">Send a Message</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Your name"
          className={`w-full p-2 placeholder-gray-600 border rounded-md dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Your email"
          className={`w-full p-2 placeholder-gray-600 border rounded-md dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          placeholder="Message subject"
          className={`w-full p-2 placeholder-gray-600 border rounded-md dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.subject
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Your message"
          rows={5}
          className={`w-full p-2 placeholder-gray-600 border rounded-md dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full gap-2 btn btn-primary text-text-btn disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
