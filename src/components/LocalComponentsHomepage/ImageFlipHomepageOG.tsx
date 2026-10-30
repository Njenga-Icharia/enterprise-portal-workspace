"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonialsData = [
  {
    id: "01",
    title: "TESTIMONIALS",
    quote:
      "Good to see the investments in automation are enhancing our scalability. This advancement not only streamlines our processes but also promises a more efficient and positive experience for our engineering team, who play a crucial role in our release process",
    backQuote:
      "Scaling agile digital infrastructure across 35+ countries with certified CMMI Level 5 engineering standards.",
    author: "VP Engineering Fortune 500 Company",
    color: "#19c2a0", // Teal 
    defaultImg: "/Profile1.png",
    flippedImg: "/Profile1.1.png",
    badge: "Scalability",
  },
  {
    id: "02",
    title: "TESTIMONIALS",
    quote:
      "Great to see the partnership Techno Brain has with Accessibility organizations in Kenya. The experience TB is gaining will help make our products more accessible and inclusive",
    backQuote:
      "Pioneering inclusive enterprise technology solutions and accessibility frameworks across global markets.",
    author: "VP Engineering Fortune 500 Company",
    color: "#1a73e8", // Blue
    defaultImg: "/Profile2.png",
    flippedImg: "/Profile2.2.png",
    badge: "Accessibility",
  },
  {
    id: "03",
    title: "TESTIMONIALS",
    quote:
      "Great to see a vendor partner focused on improving overall efficiency. Shows awareness of the critical nature of this work, and the need to get accurate results as fast as possible",
    backQuote:
      "Accelerating operational delivery precision and high-performance execution for mission-critical enterprise systems.",
    author: "VP Engineering Fortune 500 Company",
    color: "#6b21a8", // Purple
    defaultImg: "/Profile3.png",
    flippedImg: "/Profile3.3.png",
    badge: "Efficiency",
  },
];

export default function ImageFlipHomepage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden w-full border-t-2 border-[#1e1e28]">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-[#1e1e28] tracking-tight">
            Our Journey & Impact
          </h2>
          <p className="text-gray-500 mt-6 text-lg">
            From diverse corners of the world, our clients share their stories of satisfaction, trust, and success.
          </p>
        </div>

        {/* Timeline Mapped List with Alternating Zigzag Layout */}
        <div className="flex flex-col gap-28 relative">
          {testimonialsData.map((item, index) => {
            const isEven = index % 2 !== 0;
            const isFlipped = hoveredIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 cursor-pointer ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
                style={{ perspective: "1000px" }}
              >
                {/* 1. Circle 3D Flip Container with Colored Drop Bar Below */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full transition-transform duration-700 ease-in-out"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      boxShadow: `0 25px 50px -12px ${item.color}80`,
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-full bg-white border-[6px] flex items-center justify-center p-6 overflow-hidden"
                      style={{
                        borderColor: item.color,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <Image
                        src={item.defaultImg}
                        alt="Default Profile"
                        fill
                        className="object-cover rounded-full p-2"
                      />
                    </div>

                    {/* Back Face */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-full bg-white border-[6px] flex items-center justify-center p-6 overflow-hidden"
                      style={{
                        borderColor: item.color,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <Image
                        src={item.flippedImg}
                        alt="Flipped Profile"
                        fill
                        className="object-cover rounded-full p-2"
                      />
                    </div>
                  </div>

                  {/* Badge Pill */}
                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white font-extrabold text-sm tracking-widest uppercase shadow-lg whitespace-nowrap z-20 transition-transform duration-300"
                    style={{
                      backgroundColor: item.color,
                      transform: `translateX(-50%) ${isFlipped ? "translateY(-4px)" : "translateY(0)"}`,
                    }}
                  >
                    {item.badge}
                  </div>

                  {/* Colored Gradient Timeline Bar BELOW the circle for ALL items */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 -z-10 rounded-full h-28 mt-5 hidden lg:block"
                    style={{
                      background: `linear-gradient(to bottom, ${item.color} 0%, transparent 100%)`,
                      opacity: 0.4,
                    }}
                  />
                </div>

                {/* 2. Corresponding Text Block with Synchronized 3D Flip */}
                <div
                  className="w-full max-w-2xl transition-transform duration-700 ease-in-out relative"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front Face of Text Block */}
                  <div
                    className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 sm:p-12"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div
                      className="text-2xl font-black mb-2"
                      style={{ color: item.color }}
                    >
                      {item.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      "{item.quote}"
                    </p>
                    
                    <div className="mt-8 inline-flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600">
                      {item.author}
                    </div>
                  </div>

                  {/* Back Face of Text Block */}
                  <div
                    className="absolute inset-0 w-full h-full bg-[#13131a] text-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col justify-between border-2"
                    style={{
                      borderColor: item.color,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      <div
                        className="text-2xl font-black mb-2"
                        style={{ color: item.color }}
                      >
                        {item.id} — Verified Impact
                      </div>
                      <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase">
                        Strategic Execution
                      </h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        "{item.backQuote}"
                      </p>
                    </div>

                    <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-white w-max">
                      Techno Brain Enterprise Network
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