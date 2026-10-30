"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ImageFlipItem {
  id: string;
  heading: string;
  quote: string;
  author: string;
  color: string;
  defaultImg: string;
  flippedImg: string;
  badge: string;
}

export interface ImageFlipProps {
  title: string;
  tagline?: string;
  items: ImageFlipItem[];
}

const faceBase: React.CSSProperties = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

export default function ImageFlip({ title, tagline, items }: ImageFlipProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#e8ebe9] overflow-hidden w-full border-t-2 border-[#1e1e28]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-12">
          <h2 className="text-3xl font-serif font-black text-tbl-orange tracking-tight"> 
            {title}
          </h2>
          {tagline && (
            <p className="text-gray-500 text-xs sm:text-right">{tagline}</p>
          )}
        </div>

        <div className="flex flex-col gap-[88px]">
          {items.map((item, index) => {
            const isReversed = index % 2 !== 0;
            const isFlipped = hoveredIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-center cursor-pointer ${
                  isReversed ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="relative w-[20%] min-w-[140px] flex-shrink-0 flex justify-center">
                  <div className="relative">
                    <div
                      className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full"
                      style={{
                        perspective: "800px",
                        boxShadow: `0 0 30px ${item.color}66`,
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                          transition: "transform 700ms cubic-bezier(0.4, 0.2, 0.2, 1)",
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-full bg-white border-[4px] overflow-hidden"
                          style={{ ...faceBase, borderColor: item.color }}
                        >
                          <Image
                            src={item.defaultImg}
                            alt={`${item.badge} testimonial`}
                            fill
                            sizes="150px"
                            className="object-cover"
                          />
                        </div>
                        <div
                          className="absolute inset-0 rounded-full bg-white border-[4px] overflow-hidden"
                          style={{
                            ...faceBase,
                            borderColor: item.color,
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <Image
                            src={item.flippedImg}
                            alt=""
                            fill
                            sizes="150px"
                            className="object-contain scale-75"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute left-1/2 -bottom-4 px-5 py-1.5 rounded-full text-white font-bold text-sm tracking-wide shadow-md whitespace-nowrap z-20 transition-transform duration-300"
                      style={{
                        backgroundColor: item.color,
                        transform: `translateX(-50%) translateY(${isFlipped ? "-3px" : "0"})`,
                      }}
                    >
                      {item.badge}
                    </div>

                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-3.5 h-40 rounded-full pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, ${item.color} 0%, ${item.color}00 100%)`,
                      }}
                    />
                  </div>
                </div>

                <div
                  className="flex-1 min-w-0 transition-transform duration-500 ease-out"
                  style={{ transform: isFlipped ? "translateY(-4px)" : "translateY(0)" }}
                >
                  <div className="bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.18)] p-8 sm:p-10">
                    <div className="text-base font-bold mb-4" style={{ color: item.color }}>
                      {item.id}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{item.heading}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="mt-6 inline-flex items-center bg-white rounded shadow-[0_1px_4px_rgba(0,0,0,0.15)] px-4 py-2 text-sm font-semibold text-gray-700">
                      {item.author}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}