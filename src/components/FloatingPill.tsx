"use client";

import React from "react";
import Link from "next/link";

export default function FloatingPill() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 -translate-y-full mb-6 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-4">
        <Link
          href="/solutions"
          className="pointer-events-auto group inline-flex items-center gap-4 bg-[#0a192f] text-white px-8 py-4 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:bg-[#595278] transition-all duration-300 border border-white/10"
        >
          <span className="text-base font-semibold tracking-wide">Learn More</span>
          <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#fa7d38] flex items-center justify-center transition-colors">
            <svg
              className="w-4 h-4 fill-current transform group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}