"use client";

import React from "react";
import Link from "next/link";

export default function FloatingPill() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 -translate-y-1/2 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link
          href="/about"
          className="pointer-events-auto group inline-flex items-center gap-3 bg-[#0a192f]/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl border border-white/20 hover:bg-[#1e1e28] transition-all duration-300 hover:scale-105"
        >
          <span className="text-sm font-bold tracking-wide">Learn more</span>
          <span className="w-7 h-7 rounded-full bg-[#fa7d38] group-hover:bg-white text-white group-hover:text-[#1e1e28] flex items-center justify-center transition-colors">
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