'use client';

import React, { useState } from 'react';

export interface SlideData {
  id: string | number;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

interface SlidingPicturesProps {
  slides: SlideData[];
}

export default function SlidingPictures({ slides }: SlidingPicturesProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxVisible = 4;
  
  // Navigation boundaries
  const canSlideLeft = startIndex > 0;
  const canSlideRight = startIndex + maxVisible < slides.length;

  const handleNext = () => {
    if (canSlideRight) {
      setStartIndex((prev) => prev + 1);
      setHoveredIndex(null); // Reset hover state on transition
    }
  };

  const handlePrev = () => {
    if (canSlideLeft) {
      setStartIndex((prev) => prev - 1);
      setHoveredIndex(null);
    }
  };

  // This guarantees strictly 4 panels are rendered, preserving the flex-grow math
  const visibleSlides = slides.slice(startIndex, startIndex + maxVisible);

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* Accordion Window */}
      <div className="flex w-full h-[75vh] min-h-[600px] overflow-hidden bg-gray-900">
        {visibleSlides.map((slide, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={slide.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-r border-gray-800 last:border-r-0 cursor-pointer overflow-hidden animate-in fade-in slide-in-from-right-8
                ${isHovered ? 'flex-[2.5]' : 'flex-1'}`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              />

              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700
                ${isHovered ? 'opacity-100' : 'opacity-80'}`} 
              />

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end text-white h-full z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-4 whitespace-pre-line drop-shadow-md">
                  {slide.title}
                </h2>

                <div
                  className={`grid transition-all duration-700 ease-in-out
                    ${isHovered ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-gray-200 mb-6 max-w-sm font-medium">
                      {slide.description}
                    </p>
                    <button className="border-2 border-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* White Space Navigation Controls (Only renders if there are more than 4 items) */}
      {slides.length > maxVisible && (
        <div className="flex justify-end items-center px-12 py-8 bg-white gap-4">
          <button
            onClick={handlePrev}
            disabled={!canSlideLeft}
            aria-label="Previous slide"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#002a5c] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#001f44] transition-all duration-300 shadow-md"
          >
            {/* SVG Left Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            disabled={!canSlideRight}
            aria-label="Next slide"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#002a5c] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#001f44] transition-all duration-300 shadow-md"
          >
            {/* SVG Right Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}