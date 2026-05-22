import Footer from "../components/footer";
import Navbar from "../components/navbar";
import About from "../sections/about";
import CTA from "../sections/cta";
import Hero from "../sections/hero";
import Metrics from "../sections/metrics";
import Services from "../sections/services";
import Work from "../sections/work";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/5 blur-3xl" />

      <div className="relative z-10">
  <Navbar />
  <Hero />
  <Metrics />
  <Services />
  <Work />
  <About />
  <CTA />
  <Footer />
</div>
    </main>
  );
}