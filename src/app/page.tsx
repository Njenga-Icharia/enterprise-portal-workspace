"use client";

import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
// import ToolsWeUse from "@/components/ToolsWeUse";
import HeroCloud from "@/components/LocalComponentsCloud/HeroCloud";
// import CloudCardCarousel from "@/components/LocalComponentsCloud/CardCarouselCloud";
import BlurryCarouselCloud from "@/components/LocalComponentsCloud/BlurryCarouselCloud";
// import HighlightsCloud from "@/components/LocalComponentsCloud/HighlightsCloud";
import ResponsiveWindowCloud from "@/components/LocalComponentsCloud/ResponsiveWindowCloud"; 
// import ScrollCurtainCloud from "@/components/LocalComponentsCloud/ScrollCurtainCloud";

// Client-only import that prevents the spiral's heavy math/DOM from blocking initial render
// const CloudSpiral = dynamic(() => import("@/components/LocalComponentsCloud/CloudSpiral"), {
//   ssr: false,
//   loading: () => <div className="h-[800px]" />,
// });

const MANAGED_SERVICES = [
  "Robotic Process Automation",
  "Knowledge Process Outsourcing",
  "IT Helpdesk",
  "Infrastructure-as-a-Service (IaaS)",
  "End-User Computing",
  "Security Operations Center (SOC)"
];

const HIGHLIGHTS = [
  "Years of experience in Cloud infrastructure and migration",
  "Expertise in multi-cloud platforms across AWS, Azure, and GCP",
  "Compliant with ISO 27001, ISO 9001 and CMMI Level 5 processes",
  "Core competency in cloud deployment, monitoring, and scaling",
  "Projects deployed worldwide across 35 countries",
  "Certified cloud architecture professionals following international standards",
  "Practicing Agile methodology in project delivery management",
  "Equipped and experienced in quick ramp up & down of resources for short projects"
];

const SUCCESS_STORIES = [
  {
    title: "Cloud Migration & Enterprise Modernization",
    date: "Global - Enterprise Scale",
    description: "Migrating legacy core applications to scalable multi-cloud environments with high availability and automated failovers."
  },
  {
    title: "Automated Infrastructure & DevOps Pipelines",
    date: "Enterprise Scale",
    description: "Leveraging infrastructure-as-code (IaC) and automated CI/CD pipelines to streamline cloud operations and reduce deployment times."
  },
  {
    title: "Cloud Security & Compliance Validation",
    date: "Multinational Enterprise",
    description: "Validating cloud architecture against international security frameworks, resulting in zero-trust compliance and high availability."
  }
];

export default function CloudPage() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1e1e28] overflow-x-clip font-sans">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
    </main>
        
        <div className="w-full relative">
        <ResponsiveWindowCloud />
      </div>       
        
        <main>
        <HeroCloud />


        {/* CARD CAROUSEL */}
        <div className="mb-4">
          <div className="text-center mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-1">Our Method</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Cloud Standards We Follow</h2>
          </div>
          

        </div>
      </main>

      <div className="relative overflow-x-hidden">

        <BlurryCarouselCloud />
        {/* <HighlightsCloud /> */}
      </div>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        {/* Highlights Section */}
      </main>      

      <ContactForm />
    </div>
  );
}