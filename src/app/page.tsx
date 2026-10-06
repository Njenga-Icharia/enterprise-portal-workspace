import ContactForm from "@/components/ContactForm";
import HeroVideoHomepage from "@/components/LocalComponentsHomepage/HeroVideoHomepage";
import StatsAbout from "@/components/LocalComponentsHomepage/StatsAbout";
import ClientImpact from "@/components/LocalComponentsHomepage/ClientImpact";
import LogoMarquee from "@/components/LocalComponentsHomepage/LogoMarquee";
import CtaSection from "@/components/LocalComponentsHomepage/CtaSection";
import ScenerySection from "@/components/LocalComponentsHomepage/ScenerySection";
import FloatingPill from "@/components/FloatingPill";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <div className="relative [clip-path:inset(0)]">
      <ScrollToTop />

      {/* Hero pinned behind everything, clipped to this page area */}
      <div className="fixed top-24 left-0 w-full h-[calc(100vh-6rem)] z-0">
        <HeroVideoHomepage />
      </div>

      {/* Spacer so the content starts below the hero */}
      <div className="h-[calc(100vh-6rem)]" aria-hidden="true" />

      {/* Curtain that slides up over the hero */}
      <div className="relative z-10 bg-[#1e1e28] shadow-[0_-25px_50px_rgba(0,0,0,0.5)]">
        <FloatingPill />
        <StatsAbout />
        <LogoMarquee />
        <ClientImpact />
        <CtaSection />
        <ContactForm />
        <ScenerySection />
      </div>
    </div>
  );
}