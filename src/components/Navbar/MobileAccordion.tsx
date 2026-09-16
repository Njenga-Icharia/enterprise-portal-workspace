"use client";

import { ReactNode } from "react";

interface MobileAccordionProps {
  badgeNumber: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function MobileAccordion({
  badgeNumber,
  title,
  isOpen,
  onToggle,
  children,
}: MobileAccordionProps) {
  return (
    <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
      >
        <span className="flex items-center gap-3">
          <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${isOpen ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>
            {badgeNumber}
          </span>
          {title}
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}