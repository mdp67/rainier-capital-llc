"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";

const PLACEHOLDERS = [
  { title: "Industry insights", desc: "Analysis and commentary on aviation, real estate, and AI." },
  { title: "Deal flow highlights", desc: "Curated opportunities and market updates." },
  { title: "Capital markets", desc: "Perspectives on structuring and raising capital." },
];

export function Insights() {
  return (
    <section id="insights" className="border-t border-border/40 bg-background/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Insights & Portfolio
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Thought leadership and deal highlights—coming soon.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {PLACEHOLDERS.map((p) => (
            <Card
              key={p.title}
              className="border-border/60 bg-card/80 opacity-90"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <FileText className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">Content coming soon.</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
