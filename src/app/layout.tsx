import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import PageTransition from "../components/page-transition";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LunaForge",
    template: "%s | LunaForge",
  },

  description:
    "4 MERN stack engineers building fast, scalable & SEO-optimized web applications with 4+ years of production experience.",

  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "SEO Optimization",
    "Fastify",
    "React Developer",
    "Technical SEO",
    "Web Performance",
    "MERN Stack",
    "Scalable APIs",
  ],

  authors: [
    {
      name: "LunaForge",
    },
  ],

  creator: "LunaForge",

  metadataBase: new URL("https://lunaforge.dev"),

  openGraph: {
    title: "LunaForge",
    description:
      "Building fast, scalable & SEO-optimized web applications.",
    url: "https://lunaforge.dev",
    siteName: "LunaForge",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LunaForge",
    description:
      "Building fast, scalable & SEO-optimized web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LunaForge",
    url: "https://lunaforge.dev",
    description: "4 MERN stack engineers building fast, scalable & SEO-optimized web applications with 4+ years of production experience.",
    serviceType: ["Full Stack Development", "Backend Engineering", "Technical SEO"],
    sameAs: [
      "https://github.com/lunaforge",
      "https://linkedin.com/company/lunaforge",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}