import Hero from "@/components/Hero";
import Logo from "@/components/technobrainlogo";
import StatsAbout from "@/components/StatsAbout";
import ClientImpact from "@/components/ClientImpact";
import LogoMarquee from "@/components/LogoMarquee";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import ScenerySection from "@/components/ScenerySection";

export default function Page() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Logo />
      <StatsAbout />
      <LogoMarquee />
      <ClientImpact />
      <CtaSection />
      <ContactForm />
      <ScenerySection />
    </div>
  );
}