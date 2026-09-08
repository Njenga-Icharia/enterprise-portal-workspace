"use client";

import Link from "next/link";
import MobileAccordion from "./MobileAccordion";
import { MobileAccordionType } from "./types";

interface MobileMenuDrawerProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  mobileAccordion: MobileAccordionType;
  setMobileAccordion: (accordion: MobileAccordionType) => void;
}

export default function MobileMenuDrawer({
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileAccordion,
  setMobileAccordion,
}: MobileMenuDrawerProps) {
  const toggleAccordion = (key: NonNullable<MobileAccordionType>) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div 
      className={`lg:hidden fixed top-24 inset-x-0 bottom-0 bg-[#f97316] border-b-2 border-[#1e1e28] shadow-[0px_25px_0px_0px_#1e1e28] px-6 py-8 z-50 flex flex-col overflow-y-auto overscroll-contain transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="space-y-4 max-w-xl mx-auto w-full pb-32">
        
        {/* Accordion 1: Solutions */}
        <MobileAccordion 
          badgeNumber="01" 
          title="Solutions" 
          isOpen={mobileAccordion === "solutions"} 
          onToggle={() => toggleAccordion("solutions")}
        >
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e1e28]/60 block">Public Sector</span>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Identity Management</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Public Finance Management</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Revenue Management System</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Tax and Customs</Link>

          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Grant Management</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Document Management</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Monitoring and Evaluation</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Robotic Process Automation</Link>
          <Link href="/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Power BI</Link>
        </MobileAccordion>

        {/* Accordion 2: Engineering */}
        <MobileAccordion 
          badgeNumber="02" 
          title="Engineering" 
          isOpen={mobileAccordion === "engineering"} 
          onToggle={() => toggleAccordion("engineering")}
        >
          <Link href="/engineering/compatibility" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">App & Software Compatibility</Link>
          <Link href="/engineering/security-testing" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Security Validation</Link>
          <Link href="/engineering/devops" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">DevOps & Automation</Link>
        </MobileAccordion>

        {/* Accordion 3: Cloud Services */}
        <MobileAccordion 
          badgeNumber="03" 
          title="Cloud Services" 
          isOpen={mobileAccordion === "cloud"} 
          onToggle={() => toggleAccordion("cloud")}
        >
          <Link href="/cloud-services/managed" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Managed Cloud Services</Link>
          <Link href="/cloud-services/migration" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Cloud Migration</Link>
          <Link href="/cloud-services/finops" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">FinOps & Optimization</Link>
        </MobileAccordion>

        {/* Accordion 4: BPO */}
        <MobileAccordion 
          badgeNumber="04" 
          title="BPO" 
          isOpen={mobileAccordion === "bpo"} 
          onToggle={() => toggleAccordion("bpo")}
        >
          <Link href="/bpo/solutions" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">BPO Solutions</Link>
          <Link href="/bpo/compliance" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Compliance</Link>
          <Link href="/bpo/industry-verticals" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Industry Verticals</Link>
        </MobileAccordion>

        {/* Accordion 5: About Us */}
        <MobileAccordion 
          badgeNumber="05" 
          title="About Us" 
          isOpen={mobileAccordion === "about"} 
          onToggle={() => toggleAccordion("about")}
        >
          <Link href="/about/history" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Company History</Link>
          <Link href="/about/governance" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Corporate Governance</Link>
          <Link href="/about/people" onClick={closeMenu} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Our People</Link>
        </MobileAccordion>

        {/* Mobile CTA */}
        <div className="pt-6">
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className="block w-full text-center bg-[#1e1e28] text-white px-6 py-4 rounded-full font-extrabold text-sm tracking-wider uppercase shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#ffffff] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}