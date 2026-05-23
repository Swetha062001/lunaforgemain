import { ReactNode } from "react";
import Container from "./container";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            {label}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
