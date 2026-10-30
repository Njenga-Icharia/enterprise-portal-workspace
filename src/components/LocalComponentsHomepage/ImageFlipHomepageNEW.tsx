"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ---------- DATA: add or remove entries and the layout builds itself ---------- */
const testimonialsData = [
  {
    id: "01",
    title: "TESTIMONIALS",
    quote:
      "Good to see the investments in automation are enhancing our scalability. This advancement not only streamlines our processes but also promises a more efficient and positive experience for our engineering team, who play a crucial role in our release process",
    author: "VP Engineering Fortune 500 Company",
    color: "#19c2a0",
    defaultImg: "/Profile1.png",
    flippedImg: "/Profile1.1.png",
    badge: "Scalability",
  },
  {
    id: "02",
    title: "TESTIMONIALS",
    quote:
      "Great to see the partnership Techno Brain has with Accessibility organizations in Kenya. The experience TB is gaining will help make our products more accessible and inclusive",
    author: "VP Engineering Fortune 500 Company",
    color: "#1a73e8",
    defaultImg: "/Profile2.png",
    flippedImg: "/Profile2.2.png",
    badge: "Accessibility",
  },
  {
    id: "03",
    title: "TESTIMONIALS",
    quote:
      "Great to see a vendor partner focused on improving overall efficiency. Shows awareness of the critical nature of this work, and the need to get accurate results as fast as possible",
    author: "VP Engineering Fortune 500 Company",
    color: "#6b21a8",
    defaultImg: "/Profile3.png",
    flippedImg: "/Profile3.3.png",
    badge: "Efficiency",
  },
];

const faceBase: React.CSSProperties = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

export default function ImageFlipHomepage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden w-full border-t-2 border-[#1e1e28]">
      <div className="max-w-7xl mx-auto">
        {/* Header: title left, tagline right (matches reference) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-12">
          <h2 className="text-3xl font-serif font-black text-black tracking-tight">
            Testimonials
          </h2>
          <p className="text-gray-500 text-xs sm:text-right">
            From diverse corners of the world, our clients share their stories of
            satisfaction, trust, and success.
          </p>
        </div>

        {/* Rows: ALWAYS side by side (circle column ~17%, card ~83%), alternating sides */}
        <div className="flex flex-col gap-[88px]">
          {testimonialsData.map((item, index) => {
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
                {/* ---------- Circle column ---------- */}
                <div className="relative w-[17%] min-w-[92px] flex-shrink-0 flex justify-center">
                  <div className="relative">
                    {/* Static wrapper: perspective + glow */}
                    <div
                      className="relative w-[84px] h-[84px] sm:w-[100px] sm:h-[100px] rounded-full"
                      style={{
                        perspective: "800px",
                        boxShadow: `0 0 22px ${item.color}66`,
                      }}
                    >
                      {/* Rotating element */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                          transition: "transform 700ms cubic-bezier(0.4, 0.2, 0.2, 1)",
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-full bg-white border-[3px] overflow-hidden"
                          style={{ ...faceBase, borderColor: item.color }}
                        >
                          <Image
                            src={item.defaultImg}
                            alt={`${item.badge} testimonial`}
                            fill
                            sizes="100px"
                            className="object-cover"
                          />
                        </div>
                        <div
                          className="absolute inset-0 rounded-full bg-white border-[3px] overflow-hidden"
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
                            sizes="100px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pill overlapping the bottom of the circle */}
                    <div
                      className="absolute left-1/2 -bottom-3 px-3 py-1 rounded-full text-white font-bold text-xs tracking-wide shadow-md whitespace-nowrap z-20 transition-transform duration-300"
                      style={{
                        backgroundColor: item.color,
                        transform: `translateX(-50%) translateY(${isFlipped ? "-3px" : "0"})`,
                      }}
                    >
                      {item.badge}
                    </div>

                    {/* Vibrant colored timeline line below the pill, on EVERY row incl. the last */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-2.5 h-24 rounded-full -z-10"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>

                {/* ---------- Card (never flips, lifts slightly) ---------- */}
                <div
                  className="flex-1 min-w-0 transition-transform duration-500 ease-out"
                  style={{ transform: isFlipped ? "translateY(-3px)" : "translateY(0)" }}
                >
                  <div className="bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.18)] p-5 sm:p-6">
                    <div className="text-sm font-bold mb-3" style={{ color: item.color }}>
                      {item.id}
                    </div>
                    <h3 className="text-base font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="mt-4 inline-flex items-center bg-white rounded shadow-[0_1px_4px_rgba(0,0,0,0.15)] px-3 py-1.5 text-xs font-semibold text-gray-700">
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