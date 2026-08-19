import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsAbout from "@/components/StatsAbout";
import ClientImpact from "@/components/ClientImpact";
import LogoMarquee from "@/components/LogoMarquee";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import ScenerySection from "@/components/ScenerySection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsAbout />
      <ClientImpact />
      <LogoMarquee />
      <CtaSection />
      <ContactForm />
      <ScenerySection />
      <Footer />
    </div>
  );
}