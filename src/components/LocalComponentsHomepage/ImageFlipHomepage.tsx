"use client";

import React from "react";
import Image from "next/image";

// 1. The Variables (Data Array)
const testimonialsData = [
  {
    id: "01",
    title: "TESTIMONIALS",
    quote:
      "Good to see the investments in automation are enhancing our scalability. This advancement not only streamlines our processes but also promises a more efficient and positive experience for our engineering team, who play a crucial role in our release process",
    author: "VP Engineering Fortune 500 Company",
    color: "#19c2a0", // Teal 
    defaultImg: "/testimonial-1-default.png", // Replace with your actual path
    flippedImg: "/testimonial-1-flipped.png", // Replace with your actual path
    badge: "Scalability",
  },
  {
    id: "02",
    title: "TESTIMONIALS",
    quote:
      "Great to see the partnership Techno Brain has with Accessibility organizations in Kenya. The experience TB is gaining will help make our products more accessible and inclusive",
    author: "VP Engineering Fortune 500 Company",
    color: "#1a73e8", // Blue
    defaultImg: "/testimonial-2-default.png",
    flippedImg: "/testimonial-2-flipped.png",
    badge: "Accessibility",
  },
  {
    id: "03",
    title: "TESTIMONIALS",
    quote:
      "Great to see a vendor partner focused on improving overall efficiency. Shows awareness of the critical nature of this work, and the need to get accurate results as fast as possible",
    author: "VP Engineering Fortune 500 Company",
    color: "#6b21a8", // Purple
    defaultImg: "/testimonial-3-default.png",
    flippedImg: "/testimonial-3-flipped.png",
    badge: "Efficiency",
  },
];

export default function ImageFlipHomepage() {
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

        {/* 2. The Physical Design (Mapped Array) */}
        <div className="flex flex-col gap-32 relative">
          {testimonialsData.map((item, index) => {
            // Alternate left/right based on index
            const isEven = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Circle & 3D Flip Container */}
                <div className="relative flex-shrink-0 flex justify-center group perspective-[1000px]">
                  
                  {/* Fading Drop Line (Decorative Timeline Line) */}
                  {index !== testimonialsData.length - 1 && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-1/2 w-1.5 -z-10 rounded-full"
                      style={{
                        height: "400px", // Drops behind the next item
                        background: `linear-gradient(to bottom, ${item.color} 0%, transparent 100%)`,
                        opacity: 0.25,
                      }}
                    />
                  )}

                  {/* 3D Rotating Wrapper */}
                  <div
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full cursor-pointer transition-all duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    style={{
                      boxShadow: `0 25px 50px -12px ${item.color}80`, // Colored glowing drop shadow
                    }}
                  >
                    {/* Front Face (Default Image) */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-full bg-white border-[6px] flex items-center justify-center p-8 [backface-visibility:hidden]"
                      style={{ borderColor: item.color }}
                    >
                      <Image
                        src={item.defaultImg}
                        alt="Default Icon"
                        fill
                        className="object-contain p-8 drop-shadow-sm"
                      />
                    </div>

                    {/* Back Face (Flipped Image) */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-full bg-white border-[6px] flex items-center justify-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                      style={{ borderColor: item.color }}
                    >
                      <Image
                        src={item.flippedImg}
                        alt="Flipped Icon"
                        fill
                        className="object-contain p-8 drop-shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Year/Badge Pill overlapping the bottom of the circle */}
                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white font-extrabold text-sm tracking-widest uppercase shadow-lg whitespace-nowrap z-20 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.badge}
                  </div>
                </div>

                {/* Text Card */}
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 sm:p-12 relative z-20 hover:-translate-y-2 transition-transform duration-500">
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
                  
                  {/* Author Pill */}
                  <div className="mt-8 inline-flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600">
                    {item.author}
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