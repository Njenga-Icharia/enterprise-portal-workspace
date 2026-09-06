import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsAbout from "@/components/StatsAbout";
import ClientImpact from "@/components/ClientImpact";
import LogoMarquee from "@/components/LogoMarquee";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import ScenerySection from "@/components/ScenerySection";
import Footer from "@/components/Footer";
import SlidingPicturesSolutions from '@/components/SlidingPicturesSolutions';
import SlidingPicturesEngineering from '@/components/SlidingPicturesEngineering'; // Added import

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] overflow-x-hidden">
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between">
        
        <SlidingPicturesSolutions />[cite: 1]
        
        {/* Inject the new Engineering component here */}
        <SlidingPicturesEngineering />
        
      </main>

      <Hero />[cite: 1]
      <StatsAbout />[cite: 1]
      <ClientImpact />[cite: 1]
      <LogoMarquee />[cite: 1]
      <CtaSection />[cite: 1]
      <ContactForm />[cite: 1]
      <ScenerySection />[cite: 1]
      <Footer />[cite: 1]
    </div>
  );
}