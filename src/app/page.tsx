import ContactForm from "@/components/ContactForm";
import HeroVideoHomepage from "@/components/LocalComponentsHomepage/HeroVideoHomepage";
import StatsAbout from "@/components/LocalComponentsHomepage/StatsAbout";
import ClientImpact from "@/components/LocalComponentsHomepage/ClientImpact";
import LogoMarquee from "@/components/LocalComponentsHomepage/LogoMarquee";
import CtaSection from "@/components/LocalComponentsHomepage/CtaSection";
import ScenerySection from "@/components/LocalComponentsHomepage/ScenerySection";
import FloatingPill from "@/components/FloatingPill";
import ScrollToTop from "@/components/ScrollToTop";
import ImageFlipHomepage from "@/components/LocalComponentsHomepage/ImageFlipHomepage";

export default function Page() {
  return (
    <div className="relative [clip-path:inset(0)]">
      <ScrollToTop />

      {/* Fixed Hero Video pinned behind everything */}
      <div className="fixed top-24 left-0 w-full h-[calc(100vh-6rem)] z-0">
        <HeroVideoHomepage />
      </div>

      {/* Spacer matching Hero height */}
      <div className="h-[calc(100vh-6rem)]" aria-hidden="true" />

      {/* Curtain section sliding UP over the Hero */}
      <div className="relative z-10 bg-[#1e1e28] shadow-[0_-25px_50px_rgba(0,0,0,0.5)]">
        <FloatingPill />
        <StatsAbout />
        <LogoMarquee />
        <ImageFlipHomepage/>
        <ClientImpact />
        <CtaSection />
        <ContactForm />
        <ScenerySection />
      </div>
    </div>
  );
}