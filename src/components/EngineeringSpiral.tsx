"use client";

import { useState, useMemo } from "react";

const ENGINEERING_OFFERINGS = [
  { title: "Compatibility", action: "We resolve", description: "Detect & resolve application compatibility issues across various platforms.", badge: "01", slug: "compatibility" },
  { title: "Security Testing", action: "We safeguard", description: "Vulnerability tests across platforms, databases & networks to protect assets.", badge: "02", slug: "security-testing" },
  { title: "Privacy Compliance", action: "We validate", description: "Ensure adherence to GDPR, CDPA or other local & global privacy regulations.", badge: "03", slug: "privacy-compliance" },
  { title: "DevOps", action: "We accelerate", description: "Continuous delivery and automation making the process efficient and reliable.", badge: "04", slug: "devops" },
  { title: "Data & AI", action: "We analyze", description: "Build ML models and analyze data to derive actionable business insights.", badge: "05", slug: "data-analytics" },
  { title: "Accessibility", action: "We include", description: "Validate the accessibility of digital products to broaden your reach.", badge: "06", slug: "accessibility-testing" },
  { title: "Development", action: "We build", description: "Tailored software solutions that drive growth and streamline operations.", badge: "07", slug: "development-services" },
  { title: "Support", action: "We maintain", description: "24/7 help desk support for smooth operations and maximum productivity.", badge: "08", slug: "support-services" },
  { title: "Test Automation", action: "We automate", description: "Automate test processes to increase efficiency and reduce operational cost.", badge: "09", slug: "test-automation" },
];

const CENTER_X = 500;
const CENTER_Y = 400;

export default function EngineeringSpiral() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Background spiral line — 180 points is plenty smooth, way cheaper than 380
  const pathData = useMemo(() => {
    let path = "";
    for (let angle = 0; angle <= 380; angle += 2) {
      const rad = (angle * Math.PI) / 180;
      const r = 160 + (angle / 40) * 16;
      const x = CENTER_X + r * Math.cos(rad);
      const y = CENTER_Y + r * Math.sin(rad);
      path += angle === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }
    return path;
  }, []);

  // 9 node positions along the spiral
  const nodes = useMemo(() => {
    return ENGINEERING_OFFERINGS.map((item, i) => {
      const angle = i * 40;
      const rad = (angle * Math.PI) / 180;
      const r = 160 + i * 16;
      const x = CENTER_X + r * Math.cos(rad);
      const y = CENTER_Y + r * Math.sin(rad);
      return { ...item, x, y, index: i };
    });
  }, []);

  return (
    <div className="relative w-full max-w-[1000px] h-[800px] mx-auto group overflow-visible hidden lg:block">
      <style>{`
        @keyframes spiral-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spiral-counter-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-spiral {
          animation: spiral-spin 60s linear infinite;
        }
        .animate-spiral-counter {
          animation: spiral-counter-spin 60s linear infinite;
        }
        .group:hover .animate-spiral,
        .group:hover .animate-spiral-counter {
          animation-play-state: paused;
        }
      `}</style>

      {/* Static center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
        <h3 className="text-3xl font-serif font-black text-[#1e1e28] leading-snug">
          We build.<br />
          We secure.<br />
          <span className="text-[#f97316]">We innovate.</span>
        </h3>
      </div>

      {/* Rotating canvas */}
      <div className="absolute inset-0 w-full h-full animate-spiral">
        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
          <path
            d={pathData}
            fill="none"
            stroke="#1e1e28"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />
        </svg>

        {nodes.map((node) => {
          const isRightSide = node.x > CENTER_X;

          return (
            <div
              key={node.slug}
              className="absolute animate-spiral-counter cursor-pointer z-20"
              style={{ left: node.x, top: node.y }}
              onMouseEnter={() => setHoveredIndex(node.index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`absolute w-8 h-8 rounded-full transition-all duration-500 ${
                    hoveredIndex === node.index
                      ? "border-2 border-[#f97316] scale-100 opacity-100"
                      : "scale-50 opacity-0"
                  }`}
                />
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                    hoveredIndex === node.index
                      ? "bg-[#f97316] border-[#f97316]"
                      : "bg-[#e8ebe9] border-[#1e1e28]"
                  }`}
                />
              </div>

              <div
                className={`absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-xs uppercase tracking-widest text-[#1e1e28] transition-opacity duration-300 ${
                  hoveredIndex === node.index ? "opacity-0" : "opacity-70"
                }`}
              >
                <span className="text-[#f97316] mr-1">{node.badge}</span> {node.title}
              </div>

              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[280px] bg-[#1e1e28] p-6 rounded-2xl border-2 border-[#1e1e28] shadow-[6px_6px_0px_0px_#f97316] transition-all duration-300
                  ${isRightSide ? "left-8 origin-left" : "right-8 origin-right"}
                  ${
                    hoveredIndex === node.index
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <div className="flex items-center justify-between mb-3 border-b border-white/20 pb-3">
                  <span className="text-xs font-bold text-[#f97316] tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                    {node.badge}
                  </span>
                  <span className="text-[10px] font-black uppercase text-white/50 tracking-wider">
                    {node.title}
                  </span>
                </div>

                <h4 className="text-white text-xl font-serif font-bold mb-3">{node.action}</h4>

                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  {node.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}