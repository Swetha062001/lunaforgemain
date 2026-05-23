"use client";

import { motion } from "framer-motion";
import Container from "../components/container";
import { projects } from "../data/projects";

export default function Work() {
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
            Featured Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Building Products
            <span className="text-zinc-500">
              {" "}That Scale
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Selected projects focused on performance,
            scalability, SEO, and modern digital experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="h-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}