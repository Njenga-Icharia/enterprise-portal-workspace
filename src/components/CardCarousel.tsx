"use client";

import React, { useRef } from "react";

// 1. Define the exact shape of the data you want to pass in.
// This guarantees modularity across different pages.
export interface StaggeredCardItem {
  id: string | number;
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface StaggeredCarouselProps {
  items: StaggeredCardItem[];
}

export default function StaggeredCarousel({ items }: StaggeredCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler for the bottom navigation buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-4 flex flex-col items-center">
      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 pb-4 no-scrollbar items-start"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            // The alternating up/down logic is handled right here based on index - reduced vertical offset
            className={`relative shrink-0 snap-start w-[300px] h-[380px] rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-300 ${
              index % 2 !== 0 ? "mt-8" : "mt-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content Area */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <div className="flex justify-between items-end gap-4">
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {item.title}
                </h3>
                
                {/* Chevron Icon - Rotates on hover */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white/60 transform transition-transform duration-300 group-hover:rotate-180 shrink-0 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expandable Description using CSS Grid for perfectly smooth animation */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-300 pt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={item.buttonLink}
                className="mt-5 inline-block w-max bg-white text-black text-[13px] font-semibold px-4 py-2 rounded shadow-sm hover:bg-gray-100 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Left/Right) - tightened top margin */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Global style to hide the physical scrollbar while keeping functionality */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
}