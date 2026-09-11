"use client";

import React, { useEffect, useRef } from "react";

interface ToolItem {
  id: string;
  name: string;
  src: string;
  url: string;
}

const TOOLS_LOGOS: ToolItem[] = [
  { id: "owasp-html", name: "OWASP", src: "/logos/engineeringtools/OWASP.png", url: "https://owasp.org" },
  { id: "skipfish", name: "Skipfish", src: "/logos/engineeringtools/skipfish.svg", url: "https://github.com/spinkham/skipfish" },
  { id: "sonarqube-html", name: "SonarQube", src: "/logos/engineeringtools/sonarqube.svg", url: "https://www.sonarsource.com/products/sonarqube" },
  { id: "securityessentials", name: "Security Essentials", src: "/logos/engineeringtools/SecurityEssentials.jpg", url: "https://www.microsoft.com" },
  { id: "acunetix", name: "Acunetix", src: "/logos/engineeringtools/Acunetix.png", url: "https://www.acunetix.com" },
  { id: "azure", name: "Azure", src: "/logos/engineeringtools/Azure.png", url: "https://azure.microsoft.com" },
  { id: "burpsuite2", name: "Burp Suite", src: "/logos/engineeringtools/burpsuite2.png", url: "https://portswigger.net/burp" },
  { id: "metasploit-png", name: "Metasploit", src: "/logos/engineeringtools/Metasploit.png", url: "https://www.metasploit.com" },
  { id: "nessus", name: "Nessus", src: "/logos/engineeringtools/Nessus.png", url: "https://www.tenable.com/products/nessus" },
  { id: "nmap", name: "Nmap", src: "/logos/engineeringtools/nmap.png", url: "https://nmap.org" },
  { id: "openvas", name: "OpenVAS", src: "/logos/engineeringtools/OpenVAS.png", url: "https://www.openvas.org" },
  { id: "owaspzap", name: "OWASP ZAP", src: "/logos/engineeringtools/OWASPZap.png", url: "https://www.zaproxy.org" },
  { id: "tiptap", name: "Tiptap", src: "/logos/engineeringtools/Tiptap.png", url: "https://tiptap.dev" },
  { id: "veracode2", name: "Veracode", src: "/logos/engineeringtools/Veracode2.png", url: "https://www.veracode.com" },
];

const WALL_GRADIENT =
  "linear-gradient(to right, #e91e8c 0%, #a855f7 45%, #2563eb 100%)";

const CYCLE_MS = 14000;

export default function ToolsWeUse() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let start = 0;
    let cycleWidth = 0;
    let offsets: number[] = [];
    let children: HTMLElement[] = [];

    // Measure after fonts/images settle. rAF-defer ensures layout has flushed.
    const measure = () => {
      children = Array.from(track.children) as HTMLElement[];
      if (children.length === 0) return;
      // Two copies rendered — one cycle is half the scrollWidth.
      cycleWidth = track.scrollWidth / 2;
      offsets = children.map((c) => c.offsetLeft);
    };

    const tick = (now: number) => {
      if (!start) start = now;
      if (!pausedRef.current) {
        const elapsed = (now - start) % CYCLE_MS;
        const shift = -(cycleWidth * (elapsed / CYCLE_MS));

        track.style.transform = `translate3d(${shift}px, 0, 0)`;

        for (let i = 0; i < children.length; i++) {
          children[i].style.backgroundPositionX = `${-(offsets[i] + shift)}px`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    // Wait two frames so layout is settled before measuring.
    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        measure();
        raf = requestAnimationFrame(tick);
      });
    });

    // Re-measure on resize (viewport width changes the gradient size).
    const onResize = () => {
      cancelAnimationFrame(raf);
      start = 0;
      measure();
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0d0d13] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-3">
          Powered by modern technologies, frameworks, and engineering tools
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          The Tools We Use
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-[#0d0d13] via-[#0d0d13]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-[#0d0d13] via-[#0d0d13]/80 to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-24 items-center py-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {[...TOOLS_LOGOS, ...TOOLS_LOGOS].map((tool, idx) => {
            const isDuplicate = idx >= TOOLS_LOGOS.length;
            return (
              <a
                key={`${tool.id}-${idx}`}
                href={isDuplicate ? undefined : tool.url}
                target={isDuplicate ? undefined : "_blank"}
                rel={isDuplicate ? undefined : "noopener noreferrer"}
                aria-label={isDuplicate ? undefined : `Visit ${tool.name}`}
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : 0}
                className="relative block shrink-0 h-24 w-56 transition-opacity duration-300 hover:opacity-80"
                style={{
                  backgroundImage: WALL_GRADIENT,
                  backgroundSize: "100vw 100%",
                  backgroundRepeat: "no-repeat",
                  WebkitMaskImage: `url(${tool.src})`,
                  maskImage: `url(${tool.src})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}































// "use client";

// import React from "react";

// interface ToolItem {
//   id: string;
//   name: string;
//   src: string;
//   url: string;
//   customClass?: string;
// }

// const TOOLS_LOGOS: ToolItem[] = [
//   { id: "owasp-html", name: "OWASP", src: "/logos/engineeringtools/OWASP.png", url: "https://owasp.org" },
//   { id: "skipfish", name: "Skipfish", src: "/logos/engineeringtools/skipfish.svg", url: "https://github.com/spinkham/skipfish" },
//   { id: "sonarqube-html", name: "SonarQube", src: "/logos/engineeringtools/sonarqube.svg", url: "https://www.sonarsource.com/products/sonarqube" },
//   { id: "securityessentials", name: "Security Essentials", src: "/logos/engineeringtools/SecurityEssentials.jpg", url: "https://www.microsoft.com" },
//   { id: "acunetix", name: "Acunetix", src: "/logos/engineeringtools/Acunetix.png", url: "https://www.acunetix.com" },
//   { id: "azure", name: "Azure", src: "/logos/engineeringtools/Azure.png", url: "https://azure.microsoft.com" },
//   { id: "burpsuite2", name: "Burp Suite", src: "/logos/engineeringtools/burpsuite2.png", url: "https://portswigger.net/burp" },
//   { id: "metasploit-png", name: "Metasploit", src: "/logos/engineeringtools/Metasploit.png", url: "https://www.metasploit.com" },
//   { id: "nessus", name: "Nessus", src: "/logos/engineeringtools/Nessus.png", url: "https://www.tenable.com/products/nessus" },
//   { id: "nmap", name: "Nmap", src: "/logos/engineeringtools/nmap.png", url: "https://nmap.org" },
//   { id: "openvas", name: "OpenVAS", src: "/logos/engineeringtools/OpenVAS.png", url: "https://www.openvas.org" },
//   { id: "owaspzap", name: "OWASP ZAP", src: "/logos/engineeringtools/OWASPZap.png", url: "https://www.zaproxy.org" },
//   { id: "tiptap", name: "Tiptap", src: "/logos/engineeringtools/Tiptap.png", url: "https://tiptap.dev" },
//   { id: "veracode2", name: "Veracode", src: "/logos/engineeringtools/Veracode2.png", url: "https://www.veracode.com" },
// ];

// export default function ToolsWeUse() {
//   return (
//     <section className="w-full bg-[#f97316] py-20 border-t-4 border-b-4 border-[#1e1e28] overflow-hidden shadow-[0px_10px_0px_0px_#1e1e28]">
//       <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
//         <span className="text-xs font-black uppercase tracking-widest text-[#1e1e28] bg-white px-3 py-1 rounded-full border-2 border-[#1e1e28] inline-block mb-3 shadow-[2px_2px_0px_0px_#1e1e28]">
//           Powered by modern technologies, frameworks, and engineering tools
//         </span>
//         <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
//           The Tools We Use
//         </h2>
//       </div>

//       {/* Marquee Viewport Container with 'group' to handle hover pausing */}
//       <div className="relative w-full overflow-hidden flex group">
//         <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-20 items-center py-4">
          
//           {/* Primary Render Loop */}
//           {TOOLS_LOGOS.map((tool) => (
//             <a
//               key={`primary-${tool.id}`}
//               href={tool.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={`Visit ${tool.name}`}
//               className="flex items-center justify-center p-8 border-3 border-[#1e1e28] rounded-3xl bg-white shadow-[8px_8px_0px_0px_#1e1e28] shrink-0 h-48 w-80 overflow-hidden group/card transition-transform hover:-translate-y-2"
//             >
//               <img 
//                 src={tool.src} 
//                 alt={tool.name} 
//                 className={`w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-110 ${tool.customClass || ""}`} 
//               />
//             </a>
//           ))}

//           {/* Secondary Loop for Seamless Infinite Scroll Illusion */}
//           {TOOLS_LOGOS.map((tool) => (
//             <a
//               key={`duplicate-${tool.id}`}
//               href={tool.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-hidden="true"
//               tabIndex={-1}
//               className="flex items-center justify-center p-8 border-3 border-[#1e1e28] rounded-3xl bg-white shadow-[8px_8px_0px_0px_#1e1e28] shrink-0 h-48 w-80 overflow-hidden group/card transition-transform hover:-translate-y-2"
//             >
//               <img 
//                 src={tool.src} 
//                 alt="" 
//                 className={`w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-110 ${tool.customClass || ""}`} 
//               />
//             </a>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }