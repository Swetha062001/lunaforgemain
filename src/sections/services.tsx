"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
} from "lucide-react";
import Container from "../components/container";


const services = [
  {
    title: "Full Stack Product Development",
    description:
      "Scalable SaaS platforms, dashboards, booking systems, and modern web applications engineered for performance and growth.",
    icon: Code2,
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Technical SEO, Core Web Vitals optimization, metadata architecture, and lightning-fast user experiences.",
    icon: Globe,
  },
  {
    title: "Backend & API Engineering",
    description:
      "Fastify APIs, Redis caching, PostgreSQL architecture, and scalable backend systems built for production traffic.",
    icon: Database,
  },
];

export default function Services() {
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
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Engineering Modern
            <span className="text-zinc-500">
              {" "}Digital Experiences
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We build scalable, high-performance web applications
            designed to help businesses grow faster, rank better,
            and perform seamlessly.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-sm text-zinc-500 transition group-hover:text-white">
                  Learn More →
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}