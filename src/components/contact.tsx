"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/actions/contact";

const initialState: { success?: boolean; error?: string; message?: string } | null = null;

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (
      _prev: typeof initialState,
      formData: FormData
    ): Promise<typeof initialState> => submitContact(formData),
    initialState
  );

  return (
    <form action={formAction} className="mx-auto max-w-lg space-y-6">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={isPending}
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            disabled={isPending}
            className="bg-background"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          name="company"
          placeholder="Company name"
          disabled={isPending}
          className="bg-background"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isPending}
          placeholder="How can we help?"
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
      {state?.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}
      {state?.success && state?.message && (
        <p className="text-sm text-white font-medium">{state.message}</p>
      )}
      <Button type="submit" variant="gold" size="lg" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/40 bg-background/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Discuss capital introductions, deal flow, or advisory—schedule a call or send a message.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
