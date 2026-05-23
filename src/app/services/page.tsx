import { Metadata } from "next";
import Container from "@/components/container";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CTA from "@/sections/cta";
import { siteContent } from "@/data/content";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | LunaForge",
  description: "Full-stack MERN development, backend APIs, frontend optimization, and technical SEO services.",
};

export default function ServicesPage() {
  const { servicesPage } = siteContent;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <PageHero label={servicesPage.section} title={servicesPage.title} description={servicesPage.description} />
        <section className="py-20">
          <Container>
            <div className="grid gap-8 md:gap-12 lg:gap-16">
              {servicesPage.servicesList.map((service, index) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="flex items-start gap-6">
                    <div className="min-w-fit">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <span className="text-2xl font-bold text-purple-400">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h3>
                      <p className="mt-4 text-lg leading-8 text-zinc-400">{service.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tech.split(", ").map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300">{tech}</span>
                        ))}
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
