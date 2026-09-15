'use client';

import React, { useState } from 'react';

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ResponsiveWindowProps {
  items: IndustryItem[];
  sectionTitle?: string;
  ColoredSectionTitle?: string;
  accentColor?: string;
  navbarHeight?: string; 
}

export default function ResponsiveWindow({ 
  items, 
  sectionTitle = ".",
  ColoredSectionTitle= "INDUSTRIES",
  accentColor = "text-fuchsia-500",
  navbarHeight = "80px"
}: ResponsiveWindowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const bgIndex = hoveredIndex ?? 0;

  return (
    <div 
      className="relative w-full overflow-hidden bg-black font-sans"
      style={{ height: `calc(100vh - ${navbarHeight})` }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      
      {/* --- BACKGROUND IMAGES & GLOBAL OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        {items.map((item, index) => (
          <div
            key={`bg-${item.id}`}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
              index === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* --- TITLE --- */}
      <h2 className="absolute top-12 left-12 z-20 text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight drop-shadow-lg">
        <span className="text-[#f97316]"> {ColoredSectionTitle} </span>{sectionTitle}
      </h2>

      {/* --- NAVIGATION ARROWS --- */}
      <button 
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors duration-300 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <button 
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors duration-300 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      {/* --- 4 EQUAL WIDTH FLOOR-TO-CEILING STICKS --- */}
      <div className="absolute inset-0 w-full z-20 flex h-full">
        {items.slice(0, 4).map((item, index) => {
          const isHovered = index === hoveredIndex;
          
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative flex-1 h-full border-l border-white/20 overflow-hidden cursor-pointer transition-colors duration-300 ${
                index === 0 ? 'border-l-0' : ''
              }`}
            >
              {/* Anchored to bottom, only rises slightly on hover */}
              <div 
                className={`absolute left-8 right-8 bottom-16 transition-all duration-500 ease-in-out ${
                  isHovered ? '-translate-y-24' : 'translate-y-0'
                }`}
              >
                <h3 
                  className={`font-bold text-white drop-shadow-md transition-all duration-500 ease-in-out ${
                    isHovered ? 'text-5xl md:text-6xl mb-6' : 'text-4xl md:text-5xl mb-0'
                  }`}
                >
                  {item.title}
                </h3>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isHovered ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 drop-shadow-sm">
                    {item.description}
                  </p>
                  <div className={`font-bold flex items-center gap-3 text-2xl md:text-3xl ${accentColor} drop-shadow-md`}>
                    Learn more 
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}