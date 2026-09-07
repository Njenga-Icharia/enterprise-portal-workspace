"use client";

import Link from "next/link";
import { NavStateProps } from "./types";

export default function Logo({ isOpen }: NavStateProps) {
  return (
    <Link href="/" className="flex flex-col select-none py-1 group">
      <div className="flex gap-1.5 mb-1.5">
        <div className={`w-5 h-5 transition-colors ${isOpen ? "bg-white/80" : "bg-[#f97316]"}`}></div>
        <div className={`w-5 h-5 transition-colors ${isOpen ? "bg-white/80" : "bg-[#56536b]"}`}></div>
      </div>
      <div className="flex gap-1.5 items-start">
        <div className={`w-5 h-5 transition-colors ${isOpen ? "bg-white/80" : "bg-[#56536b]"}`}></div>
        <div className="flex items-center font-sans font-extrabold text-[32px] leading-[22px] tracking-tight -mt-[2px]">
          <span className={`transition-colors ${isOpen ? "text-white" : "text-[#3b3852]"}`}>TECHNO</span>
          <span className={`transition-colors ${isOpen ? "text-white ml-2" : "text-[#f97316] ml-2"}`}>BRAIN</span>
        </div>
      </div>
      <div className={`text-[10px] italic font-medium tracking-[0.22em] sentencecase pl-[140px] mt-0.5 transition-colors ${isOpen ? "text-white/90" : "text-[#56536b]"}`}>
        Empowering Lives
      </div>
    </Link>
  );
}