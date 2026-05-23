import Container from "../../components/container";
import PageHero from "../../components/page-hero";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { siteContent } from "../../data/content";
import { services } from "../../data/services";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description: siteContent.servicesPage.description,
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <>
      <PageHero
        label={siteContent.servicesPage.section}
        title={siteContent.servicesPage.title}
        description={siteContent.servicesPage.description}
      />

      <section className="py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  {service.icon && (
                    <service.icon className="h-8 w-8 text-white" />
                  )}
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tech.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why Choose <span className="text-zinc-500">LunaForge</span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-white">Production-Grade Code</h3>
                <p className="mt-2 text-zinc-400">
                  Every line is tested, optimized, and built to scale. No shortcuts, no technical debt.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">SEO-First by Default</h3>
                <p className="mt-2 text-zinc-400">
                  Technical SEO is baked in from day one. Metadata, schemas, performance—all covered.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">Transparent Process</h3>
                <p className="mt-2 text-zinc-400">
                  Weekly demos, honest timelines, and clear communication. You're never in the dark.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to Build Something <span className="text-zinc-500">Great?</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Let's talk about your project and see if we're a good fit.
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
