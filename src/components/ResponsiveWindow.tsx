'use client';

import React, { useState, useEffect } from 'react';

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageSrc: string;
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

  const itemsPerPage = 4;
  const n = items.length;

  // If we have more items than fit on screen, pad a buffer of `itemsPerPage`
  // items on each side (copied from the front/back of the real list) so the
  // track can keep sliding in one direction forever without ever visibly
  // "teleporting" back to the start.
  const canLoop = n > itemsPerPage;
  const offset = canLoop ? itemsPerPage : 0;
  const extendedItems = canLoop
    ? [...items.slice(-itemsPerPage), ...items, ...items.slice(0, itemsPerPage)]
    : items;

  // trackIndex = which extendedItems index is currently left-most in view
  const [trackIndex, setTrackIndex] = useState<number>(offset);
  const [transition, setTransition] = useState<boolean>(true);

  const handlePrevSlide = () => {
    setTransition(true);
    setTrackIndex((prev) => prev - 1);
    setHoveredIndex(null);
  };

  const handleNextSlide = () => {
    setTransition(true);
    setTrackIndex((prev) => prev + 1);
    setHoveredIndex(null);
  };

  // Automatic conveyor belt effect: only runs while nothing is really hovered
  useEffect(() => {
    if (hoveredIndex !== null) return;
    if (!canLoop) return;
    const interval = setInterval(() => {
      setTransition(true);
      setTrackIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredIndex, canLoop]);

  // After the track slides into the buffer zone, snap (with no animation)
  // back to the equivalent real position so it can keep sliding forever.
  const handleTrackTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // transitionend bubbles up from every child animation (hover text, fades,
    // color changes, etc). Only react to the track's own horizontal slide,
    // or the belt gets interrupted mid-slide by unrelated child transitions.
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
    if (!canLoop) return;
    if (trackIndex >= offset + n) {
      setTransition(false);
      setTrackIndex((prev) => prev - n);
    } else if (trackIndex < offset) {
      setTransition(false);
      setTrackIndex((prev) => prev + n);
    }
  };

  // Re-enable the transition on the next frame after a silent snap
  useEffect(() => {
    if (!transition) {
      const id = requestAnimationFrame(() => setTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [transition]);

  // When nothing is really hovered, the left-most tile (position 0) acts as if it is
  const effectiveHoverIndex = hoveredIndex !== null ? hoveredIndex : 0;

  // Real (non-extended) index of the left-most visible item, for the background image
  const actualIndex = n > 0 ? (((trackIndex - offset) % n) + n) % n : 0;
  const bgIndex = n > 0 ? (actualIndex + effectiveHoverIndex) % n : 0;

  return (
    <div 
      className="relative w-full overflow-hidden bg-black font-sans"
      style={{ height: `calc(100vh - ${navbarHeight})` }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      
      {/* BACKGROUND IMAGES & GLOBAL OVERLAY*/}
      <div className="absolute inset-0 z-0">
        {items.map((item, index) => (
          <div
            key={`bg-${item.id}-${index}`}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
              index === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* TITLE */}
      <h2 className="absolute top-12 left-12 z-20 text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight drop-shadow-lg">
        <span className="text-[#f97316]"> {ColoredSectionTitle} </span>{sectionTitle}
      </h2>

      {/* NAVIGATION ARROWS */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Previous Slide"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <button 
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Next Slide"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      {/*Barriers*/}
      <div className="absolute inset-0 w-full z-20 h-full overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: `${(extendedItems.length / itemsPerPage) * 100}%`,
            transform: `translateX(-${(trackIndex * 100) / extendedItems.length}%)`,
            transition: transition ? 'transform 700ms ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {extendedItems.map((item, idx) => {
            const positionInView = idx - trackIndex;
            const isHovered = positionInView === effectiveHoverIndex;

            return (
              <div
                key={`${item.id}-${idx}`}
                style={{ width: `${100 / extendedItems.length}%` }}
                onMouseEnter={() =>
                  positionInView >= 0 && positionInView < itemsPerPage && setHoveredIndex(positionInView)
                }
                className={`relative flex-shrink-0 h-full border-l border-white/20 overflow-hidden cursor-pointer transition-colors duration-300 ${
                  positionInView === 0 ? 'border-l-0' : ''
                }`}
              >
                {/* On hover */}
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

    </div>
  );
}
