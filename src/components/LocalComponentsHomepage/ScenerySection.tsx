import React from "react";

export default function ScenerySection() {
  return (
    <section className="relative w-full h-[350px] sm:h-[450px] border-t-2 border-[#1e1e28] overflow-hidden bg-[#e8ebe9]">
      <img 
        src="better2.jpg" 
        alt="Scenery" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#e8ebe9]/20" />

      <style>{`
        @keyframes fly-across {
          0% { transform: translate(-10vw, 20px) rotate(-5deg); }
          25% { transform: translate(30vw, -15px) rotate(5deg); }
          50% { transform: translate(60vw, 15px) rotate(-2deg); }
          75% { transform: translate(90vw, -10px) rotate(5deg); }
          100% { transform: translate(110vw, 5px) rotate(0deg); }
        }
        .animate-crow {
          animation: fly-across 18s linear infinite;
        }
      `}</style>

      <div className="absolute top-1/4 left-0 z-10 animate-crow">
        <svg 
          width="64" 
          height="24" 
          viewBox="0 0 64 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <path 
            d="M4 20 C 12 -4, 22 -4, 32 14 C 42 -4, 52 -4, 60 20" 
            stroke="#1e1e28" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}