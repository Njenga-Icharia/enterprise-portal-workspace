"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Updated to use relative paths for sibling components
import Logo from "./Logo";
import MegaMenu from "./MegaMenu/MegaMenu";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { DropdownMenu, MobileAccordionType } from "./types";

const NAV_ITEMS = [
  { key: "solutions", label: "Solutions" },
  { key: "engineering", label: "Engineering" },
  { key: "cloud-services", label: "Cloud Services" },
  { key: "bpo", label: "BPO" },
  { key: "about-us", label: "About Us" },
] as const;

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileAccordion, setMobileAccordion] = useState<MobileAccordionType>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: NonNullable<DropdownMenu>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const isOpen = activeDropdown !== null || mobileMenuOpen;

  return (
    <header className={`no-orange-cursor sticky top-0 z-50 border-b-2 border-[#1e1e28] transition-colors duration-300 ${isOpen ? "bg-[#f97316]" : "bg-[#f8f9fa]"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between relative z-20">
        
        <Logo isOpen={isOpen} />

        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {NAV_ITEMS.map(({ key, label }) => (
            <div 
              key={key}
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === key ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
                {label}
                <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === key ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
              </button>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className={`hidden lg:inline-block px-6 py-3 rounded-full border-2 border-[#1e1e28] font-extrabold text-sm tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1e1e28] transition-all ${isOpen ? "bg-white text-[#1e1e28]" : "bg-[#f97316] text-white"}`}
          >
            Contact Us
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] p-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e1e28] transition-all flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <MegaMenu 
        isOpen={isOpen}
        activeDropdown={activeDropdown}
        onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
        onMouseLeave={handleMouseLeave}
      />

      <MobileMenuDrawer 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileAccordion={mobileAccordion}
        setMobileAccordion={setMobileAccordion}
      />
    </header>
  );
}