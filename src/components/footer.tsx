import Link from "next/link";
import Container from "./container";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    name: "Email",
    href: "mailto:hello@lunaforge.dev",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              LunaForge
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Building fast, scalable & SEO-optimized web applications.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}