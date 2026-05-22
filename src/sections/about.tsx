"use client";

import { motion } from "framer-motion";
import Container from "../components/container";

export default function About() {
  return (
    <section className="py-32">
      <Container>
        
        <div className="grid gap-20 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Engineering Products
              <span className="text-zinc-500">
                {" "}With Performance First
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-8 text-zinc-400"
          >
            <p>
              LunaForge is a modern engineering-focused studio
              specializing in high-performance web applications,
              scalable backend systems, and SEO-first digital
              experiences.
            </p>

            <p>
              With production experience building real customer-facing
              platforms, we focus on delivering applications that are
              fast, maintainable, scalable, and built for long-term growth.
            </p>

            <p>
              Our approach combines modern frontend architecture,
              backend optimization, technical SEO, and analytics-driven
              engineering to help businesses scale confidently.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}