"use client";

import { motion } from "framer-motion";
import Container from "../components/container";


export default function CTA() {
  return (
    <section className="pb-32 pt-10">
      <Container>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-20"
        >
          <div className="absolute right-0 top-0 h-72 w-72 bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Let’s Build
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Ready to Build
              <span className="text-zinc-500">
                {" "}Something Scalable?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Whether it’s a modern SaaS platform,
              high-performance website, or scalable backend
              architecture — LunaForge helps turn ideas into
              production-ready digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105">
                Start a Project
              </button>

              <button className="rounded-full border border-white/10 px-7 py-3 text-sm transition hover:border-white/20 hover:bg-white/5">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}