"use client";

import { useState } from "react";
import Link from "next/link";
// import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import SolutionsShowcase from "@/components/SolutionsShowcase";

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
      <SolutionsShowcase />

      {/* === EXISTING SOLUTIONS GRID (below the hero) === */}
      <main id="all-solutions" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Header Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block border-2 border-[#1e1e28] rounded-full px-4 py-1 text-xs font-extrabold tracking-widest uppercase mb-4 bg-[#e8ebe9]">
            Enterprise Directory
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight mb-6">
            Our Digital Solutions
          </h1>
          <p className="text-lg font-medium text-[#1e1e28]/80">
            Explore our specialized suites built for government infrastructure and fast-moving private enterprises.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#e8ebe9] p-2 border-2 border-[#1e1e28] rounded-full flex gap-2 shadow-[4px_4px_0px_0px_#1e1e28]">
            <button
              onClick={() => setActiveTab("public")}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "public"
                  ? "bg-[#1e1e28] text-white shadow"
                  : "bg-transparent text-[#1e1e28] hover:bg-black/5"
              }`}
            >
              Public Sector
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "private"
                  ? "bg-[#f97316] text-[#1e1e28] border border-[#1e1e28] shadow"
                  : "bg-transparent text-[#1e1e28] hover:bg-black/5"
              }`}
            >
              Private Sector
            </button>
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="border-2 border-[#1e1e28] rounded-3xl p-8 sm:p-12 bg-[#e8ebe9] shadow-[8px_8px_0px_0px_#1e1e28] mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-2">
            {activeTab === "public" ? "Government Solutions" : "Enterprise Solutions"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {activeTab === "public" ? "Harnessing Africa's Ingenuity" : "Empowering swift and agile operations"}
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#1e1e28]/70 max-w-2xl">
            {activeTab === "public"
              ? "Designed for high-security public infrastructure, state transparency, and large-scale citizen management across nations."
              : "Engineered to eliminate corporate bottlenecks, automate workflows, and drive maximum efficiency for fast-growing businesses."}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentList.map((item, index) => (
            <div
              key={item.slug}
              className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-white shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-[#f97316] text-white text-xs font-black px-3 py-1 rounded">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1e1e28]/60">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4 text-[#1e1e28]">
                  {item.title}
                </h3>

                <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Simulated Link since individual pages don't exist yet */}
              <div className="pt-4 border-t border-[#1e1e28]/10 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#f97316]">
                  Solution Overview
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-black uppercase tracking-wider bg-[#1e1e28] text-white px-4 py-2 rounded-lg hover:bg-[#f97316] hover:text-[#1e1e28] border border-[#1e1e28] transition-colors"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

       <div className="relative overflow-x-hidden">
          <ContactForm />
          </div>

      {/* <Footer /> */}
    </div>
  );
}