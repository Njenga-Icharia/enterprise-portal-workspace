"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState("solutions");
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const isOpen = activeDropdown !== null;

  return (
    <header className={`sticky top-0 z-50 border-b-2 border-[#1e1e28] transition-colors duration-300 ${isOpen ? "bg-[#f97316]" : "bg-[#f8f9fa]"}`}>
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between relative z-20">
        
        {/* Logo */}
        <Link href="/" className={`font-black text-xl tracking-tight flex items-center gap-2 ${isOpen ? "text-white" : "text-[#1e1e28]"}`}>
          <span className="text-2xl">🧠</span> TechnoBrain
        </Link>

        {/* Desktop Nav Links (Hidden on small screens) */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          
          {/* Solutions */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "solutions" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Solutions
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "solutions" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>

          {/* Enterprise */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("enterprise")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "enterprise" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Enterprise
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "enterprise" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>

          {/* Industries */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "industries" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Industries
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "industries" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>

          {/* Case Studies */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("case-studies")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "case-studies" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Case Studies
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "case-studies" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>

          {/* Careers */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("careers")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "careers" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Careers
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "careers" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>

        </nav>

        {/* Desktop CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className={`hidden lg:inline-block px-6 py-3 rounded-full border-2 border-[#1e1e28] font-extrabold text-sm tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1e1e28] transition-all ${isOpen ? "bg-white text-[#1e1e28]" : "bg-[#f97316] text-white"}`}
          >
            Contact Us
          </Link>

          {/* Text Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e1e28] transition-all"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>

          {/* Hamburger Mobile Menu Button */}  
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e1e28] transition-all"
          >
            {mobileMenuOpen ? (
            <span className="text-sm font-black">✕</span>
            ) : (
            <span className="text-base font-black">☰</span>
            )}
          </button>

          {/* Horizontal Dots Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e1e28] transition-all"
          >
            {mobileMenuOpen ? (
              <span className="text-sm font-black">✕</span>
            ) : (
              <span className="text-lg tracking-widest leading-none block -mt-1">...</span>
            )}
          </button>

          {/* Vertical Dots Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e1e28] transition-all"
          >
            {mobileMenuOpen ? (
              <span className="text-sm font-black">✕</span>
            ) : (
              <span className="text-lg font-black leading-none block">⋮</span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Deep Sliding Dropdown Panel */}
      <div 
        className={`hidden lg:block absolute top-full left-0 w-full bg-[#f97316] border-b-2 border-[#1e1e28] shadow-[0px_25px_0px_0px_#1e1e28] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100 py-12" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* SOLUTIONS CONTENT */}
          {activeDropdown === "solutions" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
                  SOLUTIONS
                </span>

                <Link href="/solutions/all" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
                    View all solutions
                  </h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">
                  Full catalog & how we scale
                </p>

                {/* Core Nav Links */}
                <div className="space-y-6 border-t border-black/20 pt-6">
                  
                  <Link href="/solutions/public-sector" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                      Public Sector Automation
                    </span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>

                  <Link href="/solutions/digital-identity" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                      Digital Identity & Systems
                    </span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>

                  <Link href="/solutions/it-infrastructure" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                      IT Infrastructure & Cloud
                    </span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold tracking-wider uppercase text-white">
                    FEATURED
                  </span>
                  <Link 
                    href="/contact"
                    className="bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] px-5 py-2 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1e1e28] transition-all"
                  >
                    Start a Project
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Card 1: Public Sector Automation */}
                <Link href="/solutions/public-sector" className="group bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-2px] transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-full h-24 bg-[#f97316]/10 border border-[#1e1e28]/20 rounded-xl mb-3 flex items-center justify-center p-2">
                      <img 
                        src="/Computer login-amico.svg" 
                        alt="Public Sector Automation" 
                        className="h-12 w-auto object-contain" 
                      />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1e1e28] group-hover:underline leading-tight">
                      Public Sector Automation
                    </h4>
                    <p className="text-xs text-[#1e1e28]/70 mt-1">
                      Systems that streamline governance
                    </p>
                  </div>
                </Link>

                {/* Card 2: Digital Identity Suite */}
                <Link href="/solutions/digital-identity" className="group bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-2px] transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-full h-24 bg-[#f97316]/10 border border-[#1e1e28]/20 rounded-xl mb-3 flex items-center justify-center p-2">
                      <img 
                        src="/Computer login-amico.svg" 
                        alt="Digital Identity Suite" 
                        className="h-12 w-auto object-contain" 
                      />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1e1e28] group-hover:underline leading-tight">
                      Digital Identity Suite
                    </h4>
                    <p className="text-xs text-[#1e1e28]/70 mt-1">
                      Secure national & corporate IDs
                    </p>
                  </div>
                </Link>

                {/* Card 3: Cloud & Data Infrastructure */}
                <Link href="/solutions/it-infrastructure" className="group bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-2px] transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-full h-24 bg-[#f97316]/10 border border-[#1e1e28]/20 rounded-xl mb-3 flex items-center justify-center p-2">
                      <img 
                        src="/Computer login-amico.svg" 
                        alt="Cloud & Data Infrastructure" 
                        className="h-12 w-auto object-contain" 
                      />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1e1e28] group-hover:underline leading-tight">
                      Cloud & Data Infrastructure
                    </h4>
                    <p className="text-xs text-[#1e1e28]/70 mt-1">
                      Resilient architectures
                    </p>
                  </div>
                </Link>

              </div>
              </div>

            </div>
          )}

          {/* EMPTY CONTENT FOR OTHER TABS */}
          {activeDropdown && activeDropdown !== "solutions" && (
            <div className="py-16 text-center text-white">
              <span className="text-xs font-extrabold tracking-wider uppercase bg-[#1e1e28] px-3.5 py-1.5 rounded-full border border-[#1e1e28] mb-4 inline-block">
                {activeDropdown.toUpperCase()}
              </span>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Content Coming Soon</h2>
              <p className="text-sm text-white/80">I'm currently setting up the enterprise portfolio for this section, then I'll replace this placeholder lol </p>
            </div>
          )}

        </div>
      </div>

      {/* FIXED MOBILE FULL-SCREEN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-24 bottom-0 bg-[#f97316] border-b-2 border-[#1e1e28] shadow-[0px_25px_0px_0px_#1e1e28] py-8 px-6 z-50 overflow-y-auto">
          <div className="space-y-4 max-w-xl mx-auto pb-12">
            
            {/* Accordion Item 1: Solutions */}
            <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
              <button 
                onClick={() => setMobileAccordion(mobileAccordion === "solutions" ? null : "solutions")}
                className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
              >
                <span className="flex items-center gap-3">
                  <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "solutions" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>01</span>
                  Solutions
                </span>
                <span>{mobileAccordion === "solutions" ? "▲" : "▼"}</span>
              </button>

              {mobileAccordion === "solutions" && (
                <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e1e28]/60 block">Solutions</span>
                  <Link href="/solutions/public-sector" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">
                    Public Sector Automation
                  </Link>
                  <Link href="/solutions/digital-identity" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">
                    Digital Identity & Systems
                  </Link>
                  <Link href="/solutions/it-infrastructure" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">
                    IT Infrastructure & Cloud
                  </Link>
                  <Link href="/solutions/all" onClick={() => setMobileMenuOpen(false)} className="inline-block pt-2 text-xs font-extrabold uppercase tracking-wider text-[#f97316] underline">
                    View all solutions →
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion Item 2: Enterprise */}
            <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
              <button 
                onClick={() => setMobileAccordion(mobileAccordion === "enterprise" ? null : "enterprise")}
                className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
              >
                <span className="flex items-center gap-3">
                  <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "enterprise" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>02</span>
                  Enterprise
                </span>
                <span>{mobileAccordion === "enterprise" ? "▲" : "▼"}</span>
              </button>
            </div>

            {/* Accordion Item 3: Industries */}
            <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
              <button 
                onClick={() => setMobileAccordion(mobileAccordion === "industries" ? null : "industries")}
                className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
              >
                <span className="flex items-center gap-3">
                  <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "industries" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>03</span>
                  Industries
                </span>
                <span>{mobileAccordion === "industries" ? "▲" : "▼"}</span>
              </button>
            </div>

            {/* Accordion Item 4: Case Studies */}
            <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
              <button 
                onClick={() => setMobileAccordion(mobileAccordion === "case-studies" ? null : "case-studies")}
                className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
              >
                <span className="flex items-center gap-3">
                  <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "case-studies" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>04</span>
                  Case Studies
                </span>
                <span>{mobileAccordion === "case-studies" ? "▲" : "▼"}</span>
              </button>
            </div>

            {/* Accordion Item 5: Careers */}
            <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
              <button 
                onClick={() => setMobileAccordion(mobileAccordion === "careers" ? null : "careers")}
                className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
              >
                <span className="flex items-center gap-3">
                  <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "careers" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>05</span>
                  Careers
                </span>
                <span>{mobileAccordion === "careers" ? "▲" : "▼"}</span>
              </button>
            </div>

            {/* Mobile Footer CTA */}
            <div className="pt-4 text-center">
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block bg-[#1e1e28] text-white py-4 rounded-full font-extrabold text-sm tracking-wider uppercase border-2 border-[#1e1e28] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.3)] transition-all"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}