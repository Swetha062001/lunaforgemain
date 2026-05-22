"use client";

import Link from "next/link";
import Container from "./container";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          LunaForge
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="rounded-full border border-white/10 px-5 py-2 text-sm transition hover:border-white/20 hover:bg-white/5">
          Let’s Talk
        </button>
      </Container>
    </header>
  );
}