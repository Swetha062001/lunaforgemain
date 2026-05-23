import Container from "../../components/container";
import PageHero from "../../components/page-hero";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { siteContent } from "../../data/content";
import { projects } from "../../data/projects";
import Link from "next/link";

export const metadata = {
  title: "Work",
  description: siteContent.workPage.description,
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <>
      <PageHero
        label={siteContent.workPage.section}
        title={siteContent.workPage.title}
        description={siteContent.workPage.description}
      />

      <section className="py-32">
        <Container>
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Have a project in <span className="text-zinc-500">mind?</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Let's talk about what you're building and see if we can help.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:scale-105"
          >
            Start a Project
          </Link>
        </Container>
      </section>
        </>
        <Footer />
      </div>
    </main>
  );
}
