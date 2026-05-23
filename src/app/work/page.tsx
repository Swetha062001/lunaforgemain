import { Metadata } from "next";
import Container from "@/components/container";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CTA from "@/sections/cta";
import { siteContent } from "@/data/content";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work | LunaForge",
  description: "See the projects we've built—SaaS platforms, performance optimization, technical SEO architecture.",
};

export default function WorkPage() {
  const { workPage } = siteContent;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <PageHero label={workPage.section} title={workPage.title} description={workPage.description} />
        <section className="py-20">
          <Container>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={project.title} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 transition hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                    <div>
                      <span className="inline-block mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">Project {index + 1}</span>
                      <h3 className="text-3xl font-semibold tracking-tight">{project.title}</h3>
                      <p className="mt-5 max-w-2xl leading-8 text-zinc-400">{project.description}</p>
                      <div className="mt-8 space-y-3">
                        <h4 className="text-sm uppercase tracking-[0.3em] text-zinc-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Next.js", "TypeScript", "PostgreSQL", "Fastify", "Redis"].map((tech) => (
                            <span key={tech} className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-xs text-zinc-400">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                        {project.metrics.map((metric) => (
                          <div key={metric} className="h-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300">{metric}</div>
                        ))}
                      </div>
                      <div className="mt-8 hidden lg:block">
                        <button className="text-sm font-medium text-zinc-400 transition group-hover:text-white flex items-center gap-2">View Case Study <span>→</span></button>
                      </div>
                    </div>
                  </div>
                </div>
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
