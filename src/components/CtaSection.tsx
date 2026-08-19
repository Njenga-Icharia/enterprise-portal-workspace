import React from "react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full bg-[#f97316] py-20 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <span className="inline-block bg-[#1e1e28] text-white text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-[2px_2px_0px_0px_#ffffff]">
            Start Building
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#1e1e28] tracking-tight max-w-3xl leading-tight">
            Ready to build a resilient architecture for your enterprise?
          </h2>
        </div>
        <Link 
          href="/contact"
          className="bg-[#1e1e28] text-white px-8 py-4 rounded-full font-extrabold text-sm tracking-wider uppercase border-2 border-[#1e1e28] shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all whitespace-nowrap"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}