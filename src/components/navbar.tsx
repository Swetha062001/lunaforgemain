"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./container";
import { navLinks } from "../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full border border-white/10 px-5 py-2 text-sm transition hover:border-white/20 hover:bg-white/5"
          >
            Let’s Talk
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 rounded p-2 hover:bg-white/5"
          >
            <div className="h-0.5 w-5 bg-white transition" />
            <div className="h-0.5 w-5 bg-white transition" />
            <div className="h-0.5 w-5 bg-white transition" />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}