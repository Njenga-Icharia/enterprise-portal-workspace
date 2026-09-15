import React from 'react';

export interface HighlightItem {
  id: string;
  value: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HighlightsProps {
  title: string;
  paragraphs: string[];
  items: HighlightItem[];
  watermarkText?: string; 
  bgColor?: string; // New optional prop for background color
}

export default function Highlights({ 
  title, 
  paragraphs, 
  items, 
  watermarkText = "HIGHLIGHTS",
  bgColor = "bg-[#f97316]" // Defaults to orange if not passed
}: HighlightsProps) {
  return (
    <div className={`relative w-full ${bgColor} py-20 overflow-hidden`}>
      
      {/* --- DESKTOP WATERMARK (Vertical, Left Side, Behind everything) --- */}
      <div className="hidden xl:flex flex-col items-center justify-center absolute left-10 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
        {watermarkText.split("").map((char, index) => (
          <span 
            key={index} 
            className="text-7xl xl:text-8xl font-black text-white/40 uppercase leading-[0.8] tracking-tighter drop-shadow-md"
          >
            {char}
          </span>
        ))}
      </div>

      {/* --- THE EXACT CURVE --- */}
      <div className="absolute -bottom-[400px] -right-[200px] w-[800px] h-[800px] bg-white/40 rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* --- MOBILE/TABLET WATERMARK (Horizontal, Top, Over everything) --- */}
        <div className="flex xl:hidden w-full justify-center mb-10 relative z-20">
          <span className="text-6xl sm:text-7xl font-black text-white/40 uppercase tracking-[0.2em] drop-shadow-md text-center">
            {watermarkText}
          </span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: The Cards */}
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full">
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full border-[3px] border-[#f97316] bg-white flex items-center justify-center shrink-0">
                    {item.icon ? (
                      item.icon
                    ) : (
                      <span className="text-lg font-bold text-[#f97316] text-center leading-tight px-1">
                        {item.value}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
                
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: The Text */}
          <div className="xl:col-span-5 flex flex-col justify-center xl:pt-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e1e28] leading-[1.15] mb-8">
              {title}
            </h2>
            
            <div className="space-y-6">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-[#1e1e28]/90 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}