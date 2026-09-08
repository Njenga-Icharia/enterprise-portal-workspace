"use client";

import { DropdownMenu } from "../types";
import { SolutionsContent } from "./SolutionsContent";
import { EngineeringContent } from "./EngineeringContent";
import { CloudContent } from "./CloudContent";
import { BpoContent } from "./BpoContent";
import { AboutContent } from "./AboutContent";

interface MegaMenuProps {
  isOpen: boolean;
  activeDropdown: DropdownMenu;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({
  isOpen,
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  return (
    <div 
      className={`hidden lg:block absolute top-full left-0 w-full bg-[#f97316] overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? "max-h-[900px] opacity-100 py-12 border-b-2 border-[#1e1e28] shadow-[0px_25px_0px_0px_#1e1e28] pointer-events-auto" 
          : "max-h-0 opacity-0 py-0 border-b-0 shadow-none pointer-events-none"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {activeDropdown === "solutions" && <SolutionsContent />}
        {activeDropdown === "engineering" && <EngineeringContent />}
        {activeDropdown === "cloud-services" && <CloudContent />}
        {activeDropdown === "bpo" && <BpoContent />}
        {activeDropdown === "about-us" && <AboutContent />}
      </div>
    </div>
  );
}