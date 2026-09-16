import React from 'react';
import Highlights, { HighlightItem } from '@/components/Highlights';

const ENGINEERING_HIGHLIGHTS: HighlightItem[] = [
  {
    id: "exp",
    value: "20",
    title: "Years of Experience",
    description: "Two decades of expertise in both manual and automated testing environments.",
  },
  {
    id: "expertise",
    value: "💻⚙️", 
    title: "Platform Expertise",
    description: "Comprehensive development skills across desktop, mobile, and cloud-based applications.",
  },
  {
    id: "compliance",
    value: "ISO",
    title: "Compliance",
    description: "Fully compliant with top-tier international standards, including ISO 27001, ISO 9001, and CMMI Level 5.",
  },
  {
    id: "core",
    value: "STLC",
    title: "Core Competency",
    description: "Extensive proficiency in managing the Software Testing Life Cycle from initial design through to final execution.",
  },
  {
    id: "projects",
    value: "470+",
    title: "Global Reach",
    description: "Successfully delivered projects for clients spanning 35 countries around the globe.",
  },
  {
    id: "istqb",
    value: "🎓",
    title: "Certifications",
    description: "Our team includes ISTQB-certified professionals who adhere to globally recognized testing standards.",
  },
  {
    id: "agile",
    value: "Agile",
    title: "Methodology",
    description: "We utilize Agile methodologies to streamline and manage our project delivery workflows.",
  },
  {
    id: "ramp",
    value: "⚡",
    title: "Scalability",
    description: "Proven ability to rapidly scale resources up or down to meet the demands of short-term projects.",
  },
];

const RIGHT_SIDE_PARAGRAPHS = [
  "Your business deserves technology that keeps pace with your ambitions. From initial concept discussions to ongoing system maintenance, you get dedicated support through every phase of your software journey.",
  "Need a custom application built from the ground up? Looking to modernize those legacy systems that slow your team down? Ready to scale your current setup for bigger opportunities? You get hands-on technical guidance and reliable code that moves your business ahead."
];

export default function HighlightsEngineering() {
  return (
    <Highlights 
      title="Software Services That Power Your Business Forward" 
      paragraphs={RIGHT_SIDE_PARAGRAPHS}
      items={ENGINEERING_HIGHLIGHTS} 
      watermarkText="HIGHLIGHTS" 
      bgColor="bg-[#f97316]" 
    />
  );
}