"use server";

export type ContactState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContact(formData: FormData): Promise<ContactState> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const company = formData.get("company") as string | null;
  const message = formData.get("message") as string | null;

  if (!name?.trim()) {
    return { error: "Please enter your name." };
  }
  if (!email?.trim()) {
    return { error: "Please enter your email." };
  }
  if (!message?.trim()) {
    return { error: "Please enter a message." };
  }

  // Placeholder: log and return success. Replace with Formspree, Resend, or your backend.
  console.log("Contact submission:", { name, email, company, message });

  return {
    success: true,
    message: "Thank you. We will be in touch shortly.",
  };
}
