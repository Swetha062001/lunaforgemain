import Container from "../../components/container";
import PageHero from "../../components/page-hero";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { siteContent } from "../../data/content";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: siteContent.contactPage.description,
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <>
      <PageHero
        label={siteContent.contactPage.section}
        title={siteContent.contactPage.title}
        description={siteContent.contactPage.description}
      />

      <section className="py-32">
        <Container>
          <div className="grid gap-20 lg:grid-cols-[1fr_1.5fr]">
            <div className="space-y-6">
              {siteContent.contactPage.contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <p className="text-sm text-zinc-500">{info.label}</p>
                  <Link
                    href={info.link}
                    className="mt-2 block text-lg font-medium text-white transition hover:text-zinc-300"
                  >
                    {info.value}
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
              <form
                action="mailto:hello@lunaforge.dev"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    {siteContent.contactPage.form.fields.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-zinc-500 transition focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    {siteContent.contactPage.form.fields.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-zinc-500 transition focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-white"
                  >
                    {siteContent.contactPage.form.fields.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white transition focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                  >
                    <option value="">Select a project type</option>
                    <option value="SaaS">SaaS Platform</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="API">API & Backend</option>
                    <option value="SEO">SEO & Performance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-white"
                  >
                    {siteContent.contactPage.form.fields.budget}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white transition focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                  >
                    <option value="">Select a budget range</option>
                    <option value="<2k">&lt;$2,000</option>
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value=">15k">&gt;$15,000</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    {siteContent.contactPage.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-zinc-500 transition focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105 hover:bg-zinc-100"
                >
                  {siteContent.contactPage.form.submit}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
        </>
        <Footer />
      </div>
    </main>
  );
}
