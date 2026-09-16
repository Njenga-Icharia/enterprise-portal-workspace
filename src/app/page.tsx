"use client";

import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import ToolsWeUse from "@/components/ToolsWeUse";
import HeroEngineering from "@/components/LocalComponentsEngineering/HeroEngineering";
import EngineeringCardCarousel from "@/components/LocalComponentsEngineering/CardCarouselEnigineering";
import BlurryCarouselEngineering from "@/components/LocalComponentsEngineering/BlurryCarouselEngineering";
import HighlightsEngineering from "@/components/LocalComponentsEngineering/HighlightsEngineering";
import ResponsiveWindowEngineering from "@/components/LocalComponentsEngineering/ResponsiveWindowEngineering"; 
import ScrollCurtainEngineering from "@/components/LocalComponentsEngineering/ScrollCurtainEngineering";

// Client-only import that prevents the spiral's heavy math/DOM from blocking initial render
const EngineeringSpiral = dynamic(() => import("@/components/LocalComponentsEngineering/SpiralEngineering"), {
  ssr: false,
  loading: () => <div className="h-[800px]" />,
});

const MANAGED_SERVICES = [
  "Robotic Process Automation",
  "Knowledge Process Outsourcing",
  "IT Helpdesk",
  "Infrastructure-as-a-Service (IaaS)",
  "End-User Computing",
  "Security Operations Center (SOC)"
];

const HIGHLIGHTS = [
  "Years of experience in Manual and Automated testing",
  "Expertise in Web, Mobile applications in both Desktop and Cloud platforms",
  "Compliant with ISO 27001, ISO 9001 and CMMI Level 5 processes",
  "Core competency in Software Testing Life Cycle from design to execution",
  "Projects deployed worldwide across 35 countries",
  "ISTQB certified resources following internationally recognized standards",
  "Practicing Agile methodology in project delivery management",
  "Equipped and experience in quick ramp up & down of resources for short projects"
];

const SUCCESS_STORIES = [
  {
    title: "Microsoft Software Testing Centre In Africa",
    date: "Kenya - 2 May, 2018",
    description: "Techno Brain has partnered with Microsoft Corporation to launch Africa's first-ever testing and quality assurance center."
  },
  {
    title: "Feedback Triage & LLM Analytics",
    date: "Enterprise Scale",
    description: "Leveraging insights derived from customer feedback to identify application bugs and analyze diagnostic data using machine learning & LLMs."
  },
  {
    title: "Privacy & Compliance Validation",
    date: "American Multinational Tech Corporation",
    description: "Validated software against international and local standards, resulting in 18 successful releases, 244 privacy bugs fixed, and a 98% completion rate."
  }
];

export default function EngineeringPage() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1e1e28] overflow-x-clip font-sans">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">

        {/* --- SPIRAL: right under the navbar --- */}
        <HeroEngineering />
        <EngineeringSpiral />
        
        {/* <AlternatingShowcaseSolutions/>
        <SlidingPicturesSolutions/> */}

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

         {/* <div className="w-full relative">
            <ScrollCurtainEngineering />
         </div> */}

      
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        {/* Highlights Section */}
       
                 

      </main>
      <div className="w-full relative">
            <ResponsiveWindowEngineering/>
            <ScrollCurtainEngineering />

        </div>
        <ContactForm />
      </div>
  );
}