"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Building2,
  Plane,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const SERVICES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    title: "AI-Powered Capital Introductions",
    description:
      "Data-driven matching between capital and opportunities using AI to identify fit, risk profile, and strategic alignment across aviation, real estate, and technology.",
  },
  {
    icon: Building2,
    title: "Real Estate Investment Analysis & Deal Flow",
    description:
      "Structured analysis, due diligence support, and curated deal flow in commercial and residential real estate, backed by professional training and hands-on experience.",
  },
  {
    icon: Plane,
    title: "Aviation Tech & Operations Advisory",
    description:
      "Advisory for aviation technology, operations, and capital deployment—informed by active flying experience and engineering rigor.",
  },
  {
    icon: TrendingUp,
    title: "Private Capital Raises & Feeder Strategies",
    description:
      "Feeder and deal-origination support for private capital raises, with clear structuring and alignment between GPs, LPs, and operators.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="border-t border-border/40 bg-background/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Boutique capital introductions and strategic advisory across high-impact sectors.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="h-full border-border/60 bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
