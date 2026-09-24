'use client';

import React, { useState, useRef, MouseEvent, useId } from 'react';

export interface SpotlightGridProps {
  headingLine1: string;
  headingLine2: string;
  headingLine2Color: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  gridBaseColor: string;
  gridHighlightColor: string;
  bgColor: string;
  buttonColor: string;
  buttonGlow: string;
}

export default function SpotlightGrid({
  headingLine1,
  headingLine2,
  headingLine2Color,
  description,
  ctaText,
  ctaHref,
  gridBaseColor,
  gridHighlightColor,
  bgColor,
  buttonColor,
  buttonGlow,
}: SpotlightGridProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const baseGridId = `base-grid-${id}`;
  const highlightGridId = `highlight-grid-${id}`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative flex items-center justify-center min-h-screen w-full ${bgColor} overflow-hidden`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className={`w-full h-full ${gridBaseColor}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={baseGridId} width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${baseGridId})`} />
        </svg>
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovering ? 1 : 0,
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      >
        <svg className={`w-full h-full ${gridHighlightColor}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={highlightGridId} width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${highlightGridId})`} />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          {headingLine1} <br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${headingLine2Color}`}>
            {headingLine2}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
          {description}
        </p>
        
        <a 
          href={ctaHref}
          className={`pointer-events-auto px-8 py-4 ${buttonColor} transition-colors rounded-full text-white font-semibold ${buttonGlow}`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}