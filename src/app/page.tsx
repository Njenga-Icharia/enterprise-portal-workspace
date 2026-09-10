"use client";

import { useState } from "react";
import Link from "next/link";
import AlternatingShowcaseSolutions from "@/components/AlternatingShowcaseSolutions"
// import AlternatingShowcaseSolutions2 from "@/components/AlternatingShowcaseSolutions2"
import ContactForm from "@/components/ContactForm";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import SlidingPicturesSolutions from "@/components/SlidingPicturesSolutions";
import SlidingPicturesEngineering from "@/components/SlidingPicturesEngineering";
// import SlidingPicturesEngineering2 from "@/components/SlidingPicturesEngineering2";

// ---------- Data for the grid below the showcase ----------
interface SolutionItem {
  title: string;
  tagline: string;
  description: string;
  slug: string;
}

const PUBLIC_SECTOR_SOLUTIONS: SolutionItem[] = [
  {
    title: "Identity Management",
    tagline: "Harnessing Africa's Ingenuity",
    description: "Secure, scalable, and trusted national digital identity infrastructure designed to handle millions of citizen records with military-grade privacy controls.",
    slug: "identity-management"
  },
  {
    title: "Public Finance Management",
    tagline: "Transparent Budgeting & Control",
    description: "End-to-end platforms like IFMIS (integrated across countries like Ethiopia) to streamline government allocation, procurement, and expenditure tracking.",
    slug: "public-finance-management"
  },
  {
    title: "Revenue Management System",
    tagline: "Optimized National Collection",
    description: "Advanced digital portals designed to automate state revenues, minimize leakage, and seamlessly track compliance across multiple tax streams.",
    slug: "revenue-management"
  },
  {
    title: "Tax and Customs",
    tagline: "Streamlining Borders & Duties",
    description: "Modern customs and tax platforms deployed for national authorities to accelerate clearance times, manage trade data, and secure import/export duties.",
    slug: "tax-and-customs"
  },
];

const PRIVATE_SECTOR_SOLUTIONS: SolutionItem[] = [
  {
    title: "Grant Management",
    tagline: "Empowering Swift & Agile Operations",
    description: "End-to-end tracking software for NGOs and enterprise foundations to monitor funding distribution, compliance metrics, and project impact milestones.",
    slug: "grant-management"
  },
  {
    title: "Document Management",
    tagline: "Paperless Enterprise Efficiency",
    description: "Centralized cloud repositories with advanced OCR, version control, and automated auditing tools to keep corporate workflows secure and searchable.",
    slug: "document-management"
  },
  {
    title: "Monitoring and Evaluation",
    tagline: "Data-Driven Performance Tracking",
    description: "Real-time analytics dashboards that measure programmatic outcomes, field KPIs, and operational health for large-scale corporate or donor projects.",
    slug: "monitoring-and-evaluation"
  },
  {
    title: "Robotic Process Automation",
    tagline: "Enterprise Task Automation",
    description: "Automated software bots (leveraged by major regional leaders like Safaricom) to handle repetitive data entry, reporting, and high-volume workflows.",
    slug: "robotic-process-automation"
  },
  {
    title: "Power BI",
    tagline: "Actionable Business Intelligence",
    description: "Custom data visualization pipelines transforming raw enterprise data into executive-level insight matrices and automated interactive reporting decks.",
    slug: "power-bi"
  },
];

// ---------- Page Component ----------
export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<"public" | "private">("public");
  const currentList = activeTab === "public" ? PUBLIC_SECTOR_SOLUTIONS : PRIVATE_SECTOR_SOLUTIONS;

  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1e1e28] overflow-x-hidden font-sans">
      {/* <Navbar /> */}

      {/* === FULL-SCREEN SHOWCASE HERO === */}
      <SolutionsShowcase 
        activeSector={activeTab} 
        onSectorChange={setActiveTab} 
      />
      {/* <AlternatingShowcaseSolutions2 activeSector={activeTab} /> */}
      <AlternatingShowcaseSolutions activeSector={activeTab} />

      <div className="relative overflow-x-hidden">
        {/* <SlidingPicturesEngineering2 /> */}
        <SlidingPicturesEngineering />
          </div>


       <div className="relative overflow-x-hidden">
          <ContactForm />
          </div>

      {/* <Footer /> */}
    </div>
  );
}