import Container from "../../components/container";
import PageHero from "../../components/page-hero";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Process from "../../sections/process";
import { siteContent } from "../../data/content";
import { team } from "../../data/team";

export const metadata = {
  title: "About",
  description: siteContent.about.intro,
};

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Fastify",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "TypeScript",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "GraphQL",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <>
      <PageHero
        label={siteContent.about.section}
        title={siteContent.about.title}
        description={siteContent.about.intro}
      />

      <section className="py-32">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {siteContent.about.intro}
              </h2>
            </div>

            <div className="space-y-6">
              {siteContent.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              The Team
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Meet the <span className="text-zinc-500">engineers</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <span className="text-sm font-semibold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {member.role}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {member.experience}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {member.focus.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-zinc-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Our Values
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              What We <span className="text-zinc-500">Stand For</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {siteContent.about.values.map((value) => (
              <div
                key={value.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {value.label}
                </h3>

                <p className="mt-4 text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Tech Stack
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              What We <span className="text-zinc-500">Build With</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Process />
        </>
        <Footer />
      </div>
    </main>
  );
}
