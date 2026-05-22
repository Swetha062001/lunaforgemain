"use client";

import { motion } from "framer-motion";
import Container from "../components/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              LunaForge
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Building Fast,
              <span className="text-zinc-500">
                {" "}Scalable & SEO-Optimized
              </span>
              {" "}Web Applications
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              We engineer high-performance digital products with
              scalable backend systems, modern frontend
              architecture, and SEO-first experiences.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105">
                View Work
              </button>

              <button className="rounded-full border border-white/10 px-6 py-3 text-sm transition hover:border-white/20 hover:bg-white/5">
                Book a Call
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4 font-mono text-sm text-zinc-300">
                <p>
                  API Response Time:
                  <span className="text-green-400">
                    {" "}↓ 70%
                  </span>
                </p>

                <p>
                  Lighthouse Score:
                  <span className="text-purple-400">
                    {" "}95+
                  </span>
                </p>

                <p>
                  SEO Architecture:
                  <span className="text-blue-400">
                    {" "}Optimized
                  </span>
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-zinc-500">
                    Performance Metrics
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="h-2 rounded-full bg-zinc-800">
                      <div className="h-2 w-[95%] rounded-full bg-white" />
                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">
                      <div className="h-2 w-[90%] rounded-full bg-purple-500" />
                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">
                      <div className="h-2 w-[92%] rounded-full bg-zinc-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}