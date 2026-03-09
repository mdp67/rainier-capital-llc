"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-[100dvh] flex-col items-center justify-center bg-background/20 px-4 py-24 text-center sm:px-6"
    >
      <motion.div
        className="mx-auto max-w-4xl space-y-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Connecting High-Impact Opportunities in{" "}
          <span className="text-white">Aviation</span>
          <span className="text-white/80"> • </span>
          <span className="text-white">Real Estate</span>
          <span className="text-white/80"> • </span>
          <span className="text-white">AI</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Capital introductions and strategic advisory powered by real-world
          expertise from an active Fighter Pilot, Airline Pilot, Mechanical Engineer, MBA, and
          Real Estate professional.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="gold" size="lg" asChild className="gap-2">
            <Link href="/#services">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <Link href="/#contact">
              <Phone className="h-4 w-4" />
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
