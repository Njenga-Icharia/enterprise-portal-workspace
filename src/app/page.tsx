import ContactForm from "@/components/ContactForm";
import HeroVideoHomepage from "@/components/LocalComponentsHomepage/HeroVideoHomepage";
import StatsAbout from "@/components/LocalComponentsHomepage/StatsAbout";
import ClientImpact from "@/components/LocalComponentsHomepage/ClientImpact";
import LogoMarquee from "@/components/LocalComponentsHomepage/LogoMarquee";
import CtaSection from "@/components/LocalComponentsHomepage/CtaSection";
import ScenerySection from "@/components/LocalComponentsHomepage/ScenerySection";
import FolderShapeHomepage from "@/components/LocalComponentsHomepage/FolderShapeHomepage";
import AlternatingDisplayHomepage from "@/components/LocalComponentsHomepage/AlternatingDisplayHomepage";
import OfficeMap from "@/components/OfficeMap";

export default function Page() {
  return (
    <div className="relative overflow-x-clip">
      <HeroVideoHomepage />
      <OfficeMap />
      <StatsAbout />
      <FolderShapeHomepage/>
      <AlternatingDisplayHomepage />
      <LogoMarquee />
      <ClientImpact />
      <CtaSection />
      <ContactForm />
      <ScenerySection />
    </div>
  );
}