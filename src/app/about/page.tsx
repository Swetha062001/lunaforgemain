"use client";

import Container from "@/components/container";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CTA from "@/sections/cta";
import { siteContent } from "@/data/content";
import { team } from "@/data/team";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <PageHero label={about.section} title={about.title} description={about.intro} />
        
        <section className="py-20">
          <Container>
            <div className="max-w-3xl space-y-8">
              {about.paragraphs.map((paragraph, index) => (
                <motion.p key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: false }} className="text-lg leading-8 text-zinc-400">
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="mb-16">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">The Team</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Meet the Engineers</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: false }} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-400">
                      <span className="text-lg font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-sm text-zinc-500">{member.role}</div>
                      <div className="text-xs text-purple-400 mt-1">{member.experience}</div>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-zinc-600">Specialization</p>
                    <p className="text-sm font-medium text-zinc-300">{member.specialization}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.focus.split(", ").map((tech) => (
                      <span key={tech} className="inline-flex rounded-full bg-purple-900/30 px-3 py-1 text-xs text-purple-300">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="mb-16">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">Our Values</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">What We Stand For</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {about.values.map((value, index) => (
                <motion.div key={value.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: false }} className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
                  <div className="font-semibold text-white mb-2">{value.label}</div>
                  <p className="text-sm text-zinc-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <CTA />
        <Footer />
      </div>
    </main>
  );
}
