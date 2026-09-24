"use client";

import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import ToolsWeUse from "@/components/ToolsWeUse";
import HeroEngineering from "@/components/LocalComponentsEngineering/HeroEngineering";
import EngineeringCardCarousel from "@/components/LocalComponentsEngineering/CardCarouselEnigineering";
import BlurryCarouselEngineering from "@/components/LocalComponentsEngineering/BlurryCarouselEngineering";
import HighlightsEngineering from "@/components/LocalComponentsEngineering/HighlightsEngineering";
import ScrollCurtainEngineering from "@/components/LocalComponentsEngineering/ScrollCurtainEngineering";

// Client-only import that prevents the spiral's heavy math/DOM from blocking initial render
const EngineeringSpiral = dynamic(() => import("@/components/LocalComponentsEngineering/SpiralEngineering"), {
  ssr: false,
  loading: () => <div className="h-[800px]" />,
});

export default function EngineeringPage() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1e1e28] overflow-x-clip font-sans">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">

        <HeroEngineering />
        <EngineeringSpiral />


        {/* CARD CAROUSEL */}
        <div className="mb-4">
          <div className="text-center mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-1">Our Method</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Standards We Follow</h2>
          </div>
          

          <EngineeringCardCarousel />
        </div>
        </main>

        <div className="relative overflow-x-hidden">
          <ToolsWeUse/>
          <BlurryCarouselEngineering/>
          <HighlightsEngineering/>
        </div>
     
      <div className="w-full relative">
            {/* <ResponsiveWindowEngineering/> */}
            <ScrollCurtainEngineering />

        </div>
        <ContactForm />
      </div>
  );
}