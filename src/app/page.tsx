import ContactForm from "@/components/ContactForm";
import HeroVideoHomepage from "@/components/LocalComponentsHomepage/HeroVideoHomepage";
import StatsAbout from "@/components/LocalComponentsHomepage/StatsAbout";
import ClientImpact from "@/components/LocalComponentsHomepage/ClientImpact";
import LogoMarquee from "@/components/LocalComponentsHomepage/LogoMarquee";
import CtaSection from "@/components/LocalComponentsHomepage/CtaSection";
import ScenerySection from "@/components/LocalComponentsHomepage/ScenerySection";

export default function Page() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroVideoHomepage />
      <StatsAbout />
      <LogoMarquee />
      <ClientImpact />
      <CtaSection />
      <ContactForm />
      <ScenerySection />
    </div>
  );
}