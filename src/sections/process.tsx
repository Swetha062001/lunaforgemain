"use client";

import { motion } from "framer-motion";
import Container from "../components/container";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business, goals, and constraints before writing a line of code.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture, data models, and UI wireframes agreed before build begins.",
  },
  {
    number: "03",
    title: "Build",
    description: "Iterative sprints with weekly demos. You see progress, not surprises.",
  },
  {
    number: "04",
    title: "Ship",
    description: "Production deployment, monitoring, and 2-week post-launch support included.",
  },
];

export default function Process() {
  return (
    <section className="py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            How We Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Our <span className="text-zinc-500">Process</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 text-lg font-semibold text-white">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
