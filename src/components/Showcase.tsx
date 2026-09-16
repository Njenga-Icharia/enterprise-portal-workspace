"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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

// Subtitle & Description sliding
const cleanTextSlide: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const, delay: customDelay }
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

// Scope Slide Up from Bottom
const scopeVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.45 } 
  },
  exit: { y: 15, opacity: 0, transition: { duration: 0.2 } }
};


interface ShowcaseProps {
  items: SolutionItem[];
  activeSector: "public" | "private";
  onSectorChange: (sector: "public" | "private") => void;
}

export default function Showcase({ items, activeSector, onSectorChange }: ShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Automatically reset to the first item when the global tab changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeSector]);

  const currentItem = items[selectedIndex] || items[0];

  const handleSectorSwitch = (newSector: "public" | "private") => {
    onSectorChange(newSector);
  };

  const titleWords = currentItem.title.split(" ");

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[700px] bg-[#0b0f17] text-[#ffffff] flex flex-col md:flex-row overflow-hidden border-b-2 border-[#1e1e28]">
      
      {/*LEFT SIDEBAR*/}
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

            {items.map((item, index) => {
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

      {/*MAIN HERO CANVAS*/}
      <div className="relative flex-1 h-full bg-[#000000] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden">
        
        {/* Slide-over Background Image*/}
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
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Text Content Animation */}
        <div className="relative z-20 max-w-4xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div key={currentItem.id} className="flex flex-col items-start">
              
              {/*TITLE ONLY*/}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#ffffff] leading-tight tracking-tight drop-shadow-md mb-4 flex flex-wrap items-center">
                {titleWords.map((word, index) => {
                  const delay = 0.05 + index * 0.09;
                  const isLastWord = index === titleWords.length - 1;

                  return (
                    <span 
                      key={`${word}-${index}`} 
                      className="relative inline-block overflow-hidden mr-[0.3em] py-1"
                    >
                      {/* Individual Sweep per word */}
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

              {/*SUBTITLE*/}
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

              {/*DESCRIPTION*/}
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

              {/*SCOPE & CTA*/}
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
