"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface DisplayItem {
  id: string;
  category: string;
  title: string;
  type: string;
  bgColor: string;
  image: string;
  link?: string;
}

export interface AlternatingDisplayProps {
  items: DisplayItem[];
  sectionTitle: string;
  ctaText: string;
  ctaHref: string;
}

export default function AlternatingDisplay({
  items,
  sectionTitle,
  ctaText,
  ctaHref,
}: AlternatingDisplayProps) {
  return (
    // py-12 controls the top/bottom padding of the entire section
    <section className="w-full flex flex-col py-12 px-4 sm:px-6 lg:px-8 bg-black/5 overflow-hidden">
      
      {/* mb-8 controls the gap between the header and the cards */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#1e1e28]">
          {sectionTitle}
        </h2>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center bg-[#1e1e28] text-white px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-gray-800 transition-colors w-max shadow-sm"
        >
          {ctaText}
        </Link>
      </div>

      {/* gap-4 controls the vertical space between each card */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
        {items.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <Link
              key={item.id}
              href={item.link || "#"}
              className={`group relative w-full h-[360px] sm:h-[420px] flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-xl cursor-pointer ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Colored Content Panel */}
              <div
                className="relative w-full md:w-[50%] group-hover:md:w-[65%] h-full p-8 sm:p-12 flex flex-col justify-between text-white transition-all duration-700 ease-in-out z-10 flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="text-sm font-medium tracking-wide text-white/90">
                  {item.category}
                </div>

                <div className="my-auto py-4">
                  <h3 className="text-2xl sm:text-3xl font-sans font-normal leading-snug tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="relative flex justify-between items-end">
                  <span className="text-sm font-light text-white/90">
                    {item.type}
                  </span>

                  {/* Stacked Translucent READ MORE */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex flex-col items-end pointer-events-none select-none text-right">
                    <span className="text-3xl sm:text-4xl font-black tracking-wider text-white/25 uppercase leading-none">
                      READ
                    </span>
                    <span className="text-3xl sm:text-4xl font-black tracking-wider text-white/25 uppercase leading-none mt-2">
                      MORE
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative w-full md:w-[50%] group-hover:md:w-[35%] h-full overflow-hidden transition-all duration-700 ease-in-out">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}