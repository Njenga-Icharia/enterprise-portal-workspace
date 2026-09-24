'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export interface FlipWindowItem {
  id: string;
  frontContent: React.ReactNode;
  backTitle?: string;
  backItems: string[];
}

interface FlipWindowProps {
  items: FlipWindowItem[];
  sectionTitle?: string;
  bgColor?: string;
  titleColor?: string;
}

export const FlipWindow: React.FC<FlipWindowProps> = ({
  items,
  sectionTitle,
  bgColor = "bg-slate-900",
  titleColor = "text-white",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const visibleItems = [
    items[activeIndex % items.length],
    items[(activeIndex + 1) % items.length],
    items[(activeIndex + 2) % items.length],
  ];

  return (
    <div className={`relative w-full py-12 ${bgColor} overflow-hidden`}>
      {sectionTitle && (
        <h2 className={`text-center text-3xl md:text-4xl font-bold mb-10 ${titleColor}`}>
          {sectionTitle}
        </h2>
      )}

      {items.length > 3 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white"
            aria-label="Previous items"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white"
            aria-label="Next items"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {visibleItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="group relative w-full h-[240px] [perspective:1000px]"
          >
            <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 bg-white border border-slate-200 flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-[#4b456f] border-l-transparent transition-colors duration-300 group-hover:border-t-[#f97316]" />
                {item.frontContent}
              </div>

              <div className="absolute inset-0 bg-white border border-slate-200 flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 text-center mb-4">
                  {item.backTitle}
                </h3>
                <ul className="space-y-3 text-left w-full max-w-[280px]">
                  {item.backItems.map((backItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm font-medium">
                      <Check className="w-4 h-4 text-[#4b456f] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{backItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};