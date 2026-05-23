"use client";

import { useState } from "react";
import Container from "@/components/container";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { siteContent } from "@/data/content";
import Link from "next/link";

export default function ContactPage() {
  const { contactPage } = siteContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "website",
    budget: "10k-25k",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }
    setStatus("submitted");
    setFormData({ name: "", email: "", projectType: "website", budget: "10k-25k", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <PageHero label={contactPage.section} title={contactPage.title} description={contactPage.description} />
        <section className="py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <p className="mb-8 text-lg text-zinc-400">Let's discuss your project and see if we're a good fit.</p>
                {contactPage.contactInfo.map((info) => (
                  <div key={info.label} className="mb-6">
                    <div className="text-xs uppercase tracking-widest text-purple-400 mb-2">{info.label}</div>
                    <Link href={info.link} className="text-lg font-medium text-white hover:text-purple-400 transition">
                      {info.value}
                    </Link>
                  </div>
                ))}
                <div className="mt-12 border-t border-white/10 pt-8 space-y-4">
                  <p className="text-sm uppercase tracking-widest text-zinc-500">Quick Info</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Average response time: 24 hours</li>
                    <li>• Based in: Global (Remote-first)</li>
                    <li>• Working with: Startups & Growth-stage companies</li>
                  </ul>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">{contactPage.form.fields.name}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">{contactPage.form.fields.email}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">{contactPage.form.fields.projectType}</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition">
                      <option value="website">Website</option>
                      <option value="saas">SaaS Platform</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="api">API / Backend</option>
                      <option value="mobile">Mobile App</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">{contactPage.form.fields.budget}</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition">
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">{contactPage.form.fields.message}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition min-h-32" placeholder="Tell us about your project..." required />
                  </div>
                  {status === "submitted" && <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-green-400 text-sm">✓ Message sent! We'll get back to you within 24 hours.</div>}
                  {status === "error" && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">Please fill in all required fields.</div>}
                  <button type="submit" className="w-full bg-white text-black font-semibold py-3 rounded-full hover:scale-105 transition">
                    {contactPage.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </main>
  );
}
