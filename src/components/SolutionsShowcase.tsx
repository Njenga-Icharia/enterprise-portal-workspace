"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface SolutionItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  scopeTags: string[];
  imageUrl: string;
  link: string;
}

const PUBLIC_SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    badge: "// 001 — PUBLIC INFRASTRUCTURE",
    title: "Identity Management",
    subtitle: "SecuRegister Multi-Modal Biometric Platform",
    description: "Device and algorithm independent biometric platform for on-premise and cloud identity verification across national government services.",
    scopeTags: ["Biometrics", "10M+ Credentials", "Cloud & On-Premise"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "02",
    badge: "// 002 — PUBLIC FINANCE",
    title: "Public Finance Management",
    subtitle: "IFMIS Core Government Automation",
    description: "Integrated financial systems deployed across 25+ national governments to automate budget allocation, procurement, and audit transparency.",
    scopeTags: ["IFMIS", "Budget Transparency", "25 Governments"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "03",
    badge: "// 003 — MUNICIPAL REVENUE",
    title: "Revenue Management System",
    subtitle: "RevenueACA GIS-Supported Collection",
    description: "Cloud-based revenue assessment and billing platform empowering local authorities with GIS-driven collection tracking and business intelligence.",
    scopeTags: ["GIS Integration", "RevenueACA", "18M+ Subscribers"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "04",
    badge: "// 004 — REVENUE & TRADE",
    title: "Tax and Customs",
    subtitle: "Automated Duty & Compliance Platforms",
    description: "Scalable trade facilitation systems deployed across 25 countries to eliminate revenue leakage, streamline border checks, and automate tax filing.",
    scopeTags: ["50+ Tax Specialists", "Customs Automation", "25 Countries"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  }
];

const PRIVATE_SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    badge: "// 001 — ENTERPRISE AUTOMATION",
    title: "Robotic Process Automation",
    subtitle: "Safaricom & Enterprise Scale Bots",
    description: "Intelligent software bots mimicking complex manual workflows for telecom and financial leaders to streamline account creation and vetting.",
    scopeTags: ["RPA Bots", "Telecom Scale", "Workflow Automation"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "02",
    badge: "// 002 — NGO & ENTERPRISE",
    title: "Grant Management",
    subtitle: "Serenic Software Partnership Suite",
    description: "Cloud-hosted fund accounting and grant tracking tailored for Non-Governmental Organizations operating across fast-shifting global markets.",
    scopeTags: ["Fund Accounting", "Cloud Hosted", "NGO Agility"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "03",
    badge: "// 003 — COMPLIANCE & REPOSITORY",
    title: "Document Management",
    subtitle: "Zero-Trust Records & Retention",
    description: "Enterprise records management solutions optimizing data security, workflow automation, and automated document retention policies.",
    scopeTags: ["Data Security", "Workflow Automation", "Audit Ready"],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "04",
    badge: "// 004 — ANALYTICS & MONITORING",
    title: "Monitoring and Evaluation",
    subtitle: "Impact Analysis Value Chain",
    description: "Real-time programmatic assessment dashboards giving leadership complete control over outcome measurement and field metrics.",
    scopeTags: ["Impact Analysis", "KPI Tracking", "Real-Time Intelligence"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "05",
    badge: "// 005 — BUSINESS INTELLIGENCE",
    title: "Power BI Solutions",
    subtitle: "Self-Service Enterprise Intelligence",
    description: "End-to-end Microsoft Power BI modeling, user training, and custom dashboard delivery for enterprise decision makers.",
    scopeTags: ["Self-Service BI", "Custom Dashboards", "User Training"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  }
];

// Clean fade and slide for Subtitle & Description (No Orange Blocks)
const cleanTextSlide = {
  hidden: { opacity: 0, x: -20 },
  visible: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: customDelay }
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

// Scope Slide Up from Bottom
const scopeVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.45 } 
  },
  exit: { y: 15, opacity: 0, transition: { duration: 0.2 } }
};


interface SolutionsShowcaseProps {
  activeSector: "public" | "private";
  onSectorChange: (sector: "public" | "private") => void;
}

export default function SolutionsShowcase({ activeSector, onSectorChange }: SolutionsShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Automatically reset to the first item when the global tab changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeSector]);

  const activeList = activeSector === "public" ? PUBLIC_SOLUTIONS : PRIVATE_SOLUTIONS;
  const currentItem = activeList[selectedIndex] || activeList[0];

  const handleSectorSwitch = (newSector: "public" | "private") => {
    onSectorChange(newSector);
  };

  const titleWords = currentItem.title.split(" ");

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[700px] bg-[#0b0f17] text-[#ffffff] flex flex-col md:flex-row overflow-hidden border-b-2 border-[#1e1e28]">
      
      {/* --- LEFT SIDEBAR --- */}
      <div className="w-full md:w-[320px] lg:w-[380px] bg-[#1e1e28] border-r border-[#ffffff]/10 flex flex-col justify-between p-6 lg:p-8 z-20 shrink-0">
        <div>
          <div className="mb-8">
            <span className="text-[10px] font-mono tracking-widest text-[#f8f9fa] uppercase block mb-3">
              DIRECTORY
            </span>
            <div className="bg-[#0b0f17] p-1.5 border border-[#ffffff]/15 rounded-full flex gap-1 shadow-inner">
              <button
                onClick={() => handleSectorSwitch("public")}
                className={`flex-1 py-2.5 px-4 text-[11px] font-black uppercase tracking-wider rounded-full transition-all text-center ${
                  activeSector === "public"
                    ? "bg-[#f97316] text-[#ffffff] shadow-md"
                    : "bg-transparent text-[#ffffff]/60 hover:text-[#ffffff]"
                }`}
              >
                Public Sector
              </button>
              <button
                onClick={() => handleSectorSwitch("private")}
                className={`flex-1 py-2.5 px-4 text-[11px] font-black uppercase tracking-wider rounded-full transition-all text-center ${
                  activeSector === "private"
                    ? "bg-[#f97316] text-[#ffffff] shadow-md"
                    : "bg-transparent text-[#ffffff]/60 hover:text-[#ffffff]"
                }`}
              >
                Private Sector
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#ffffff]/40 uppercase block mb-4">
              INDEX — Selection
            </span>

            {activeList.map((item, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#ffffff]/10 text-[#ffffff] font-semibold shadow-inner border-l-4 border-[#f97316]"
                      : "text-[#ffffff]/50 hover:text-[#ffffff] hover:bg-[#ffffff]/5"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className="text-[11px] font-mono opacity-50">{item.id}</span>
                    <span className="text-sm tracking-wide truncate">{item.title}</span>
                  </div>
                  {isSelected && (
                    <span className="text-xs text-[#f97316] opacity-80">→</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- MAIN HERO CANVAS --- */}
      <div className="relative flex-1 h-full bg-[#000000] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden">
        
        {/* Slide-over Background Image (No black fade) */}
        <AnimatePresence>
          <motion.div 
            key={currentItem.imageUrl}
            initial={{ x: "-100%", zIndex: 10 }}
            animate={{ x: "0%", zIndex: 10 }}
            exit={{ zIndex: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentItem.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/60 to-[#000000]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17]/80 via-transparent to-[#000000]/40" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 flex justify-between items-start">
          <span className="text-xs font-mono tracking-widest text-[#f8f9fa] uppercase bg-[#000000]/40 px-3 py-1 rounded backdrop-blur border border-[#ffffff]/10">
            {currentItem.badge}
          </span>
          <div className="flex items-center gap-6 font-mono text-sm bg-[#000000]/40 px-4 py-1.5 rounded-full backdrop-blur border border-[#ffffff]/10">
            <div className="text-[#ffffff]/50">
              <span className="text-[#ffffff] font-bold">{String(selectedIndex + 1).padStart(2, "0")}</span>
              {" / "}
              <span>{String(activeList.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Text Content Animation */}
        <div className="relative z-20 max-w-4xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div key={currentItem.id} className="flex flex-col items-start">
              
              {/* --- TITLE ONLY: WORD-BY-WORD ORANGE SWEEP --- */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#ffffff] leading-tight tracking-tight drop-shadow-md mb-4 flex flex-wrap items-center">
                {titleWords.map((word, index) => {
                  const delay = 0.05 + index * 0.09;
                  const isLastWord = index === titleWords.length - 1;

                  return (
                    <span 
                      key={`${word}-${index}`} 
                      className="relative inline-block overflow-hidden mr-[0.3em] py-1"
                    >
                      {/* Individual Orange Sweep Block per word */}
                      <motion.div 
                        initial={{ x: "-101%" }}
                        animate={{ 
                          x: ["-101%", "0%", "101%"],
                          transition: { 
                            duration: 0.5, 
                            ease: [0.77, 0, 0.175, 1], 
                            times: [0, 0.5, 1],
                            delay 
                          }
                        }}
                        className="absolute inset-0 bg-[#f97316] z-30 pointer-events-none"
                      />

                      {/* Word text revealed by orange block */}
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 0, 1],
                          transition: { 
                            duration: 0.5, 
                            ease: [0.77, 0, 0.175, 1], 
                            times: [0, 0.5, 1],
                            delay 
                          }
                        }}
                        className="relative z-20 inline-block"
                      >
                        {word}
                        {isLastWord && <span className="text-[#f97316]">.</span>}
                      </motion.span>
                    </span>
                  );
                })}
              </h1>

              {/* --- SUBTITLE (NO ORANGE BLOCK) --- */}
              <motion.span 
                variants={cleanTextSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={0.25}
                className="font-semibold text-[#f97316] text-sm uppercase tracking-wider mb-2 block"
              >
                {currentItem.subtitle}
              </motion.span>

              {/* --- DESCRIPTION (NO ORANGE BLOCK) --- */}
              <motion.p 
                variants={cleanTextSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={0.32}
                className="text-base sm:text-lg font-light text-[#ffffff]/90 leading-relaxed mb-8 max-w-2xl"
              >
                {currentItem.description}
              </motion.p>

              {/* --- SCOPE & CTA (SLIDES UP FROM BOTTOM) --- */}
              <motion.div 
                variants={scopeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#ffffff]/20"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#f97316] uppercase mr-2">
                    SCOPE:
                  </span>
                  {currentItem.scopeTags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-[#ffffff]/80 bg-[#ffffff]/10 backdrop-blur px-3 py-1 rounded-full border border-[#ffffff]/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={currentItem.link} className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#ffffff] text-[#000000] font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-[#f97316] hover:text-[#ffffff] transition-all shadow-lg hover:shadow-[#f97316]/20 shrink-0">
                  <span>Explore Solution</span>
                  <span>→</span>
                </Link>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}