"use client";

import { motion } from "framer-motion";

const tableData = [
  {
    operations: "Flight Leadership (F-15C/Delta)",
    technical: "Mechanical Engineering",
    strategy: "Strategic Planning (Pentagon/HAF)",
  },
  {
    operations: "Logistics & Asset Mgmt",
    technical: "Data Science (Python/R)",
    strategy: "Innovation Frameworks",
  },
  {
    operations: "Crisis & COVID Support",
    technical: "Semi-conductor Manufacturing",
    strategy: "Executive Communications",
  },
] as const;

export function About() {
  return (
    <section id="about" className="border-t border-border/40 bg-background/20 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              The Strategic Bridge: Operations, Engineering, and Innovation
            </p>
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              I am a multidisciplinary leader with a career defined by high-performance
              environments and the ability to translate complex data into actionable
              strategy. My background spans from the cockpit of an F-15C to the
              cleanrooms of semiconductor manufacturing, giving me a unique perspective
              on how to lead teams and optimize systems under pressure.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Strategic Leadership:</strong> As a Colonel in the Oregon Air
              National Guard, I have managed budgets exceeding $10 million and led
              diverse teams of up to 1,200 personnel through critical mission
              transitions and global operations.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Operational Precision:</strong> My experience as a Delta Air Lines
              pilot and F-15C Instructor Pilot has instilled a relentless focus on
              safety, preparedness, and mentorship in high-stakes, rapidly changing
              environments.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Technical Innovation:</strong> From managing manufacturing teams
              at Intel’s Portland Technology Division to serving as an Innovation
              Officer, I have pioneered digital dashboards (Power BI/SharePoint) and
              &quot;agile innovation&quot; frameworks to solve modern organizational
              challenges.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Academic Foundation:</strong> My approach is grounded in a
              Mechanical Engineering degree from the US Air Force Academy and an MBA,
              supplemented by ongoing expertise in Data Science and Python. I thrive
              at the intersection of operational rigor and future-leaning strategy,
              helping organizations navigate transition and achieve peak readiness.
            </p>
          </div>

          <motion.div
            className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 font-semibold text-foreground">
                    Operations
                  </th>
                  <th className="border-l border-border px-4 py-3 font-semibold text-foreground">
                    Technical
                  </th>
                  <th className="border-l border-border px-4 py-3 font-semibold text-foreground">
                    Strategy
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.operations}
                    </td>
                    <td className="border-l border-border px-4 py-3 text-muted-foreground">
                      {row.technical}
                    </td>
                    <td className="border-l border-border px-4 py-3 text-muted-foreground">
                      {row.strategy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
