'use client';

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface BlurryCarouselProps {
  items: CarouselItem[];
  sectionTitle?: string;
  bgColor?: string;      
  titleColor?: string;   
  
  footerText?: string;
}

export const BlurryCarousel: React.FC<BlurryCarouselProps> = ({ 
  items, 
  sectionTitle,
  bgColor = "bg-white dark:bg-slate-950", // Default 
  titleColor = "text-slate-900 dark:text-white", // default 
  footerText = "→ Read the case study",
}) => {
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>(items);

  const handlePrev = useCallback(() => {
    setCarouselItems((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop();
      if (lastItem) newArray.unshift(lastItem);
      return newArray;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCarouselItems((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) newArray.push(firstItem);
      return newArray;
    });
  }, []);

  const visibleItems = carouselItems.slice(0, 4);

  return (
    <div className={`relative w-full py-12 ${bgColor}`}>

      {/* pointer arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Previous items"
      >
        <ChevronLeft className="w-6 h-6 text-slate-800 dark:text-slate-200" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Next items"
      >
        <ChevronRight className="w-6 h-6 text-slate-800 dark:text-slate-200" />
      </button>

      <div className="max-w-[1500px] mx-auto px-6">
        {sectionTitle && (
          <h2 className={`text-3xl font-bold mb-8 font-sans ${titleColor}`}>
            {sectionTitle}
          </h2>
        )}

        <div className="grid grid-cols-4 gap-6">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-[452px] w-full rounded-none overflow-hidden bg-slate-900 cursor-pointer border-2 border-transparent hover:border-white/80 transition-colors duration-500"
            >
              {/*Background image. */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-500 ease-out group-hover:blur-md group-hover:scale-110"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                />

              {/*Middle scrim. Blur effect:*/}
              <div className="absolute inset-0 bg-black/55 transition-colors duration-300 ease-out group-hover:bg-black/10" />

              {/*Top vignette.*/}
              <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black via-black/60 to-transparent" />

              {/*Bottom vignette. Mirror of the top*/}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/*Content rail.*/}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">

                {/* Top block:Title, description */}
                <div>
                  <div className="flex items-center gap-2 text-white/80 mb-4 text-sm font-medium">
                    <FileText className="w-4 h-4" />
                    <span>Managed Service</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-sans leading-tight">
                    {item.title}
                  </h3>

                  {/*Description.*/}
                  <p className="mt-4 text-xl font-semibold text-white leading-snug opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom block*/}
                {footerText && (
                  <div className="flex items-center gap-2 text-[#4b456f] text-sm font-semibold">
                    {footerText} 
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};