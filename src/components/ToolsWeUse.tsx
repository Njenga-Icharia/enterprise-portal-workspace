"use client";

import React, { useEffect, useRef } from "react";

interface ToolItem {
  id: string;
  name: string;
  src: string;
  url: string;
 
  sizeClass?: string;
}

const TOOLS_LOGOS: ToolItem[] = [
  { id: "owasp-html", name: "OWASP", src: "/logos/engineeringtools/OWASP.png", url: "https://owasp.org" },
  { id: "skipfish", name: "Skipfish", src: "/logos/engineeringtools/skipfish.svg", url: "https://github.com/spinkham/skipfish" },
  { id: "sonarqube-html", name: "SonarQube", src: "/logos/engineeringtools/sonarqube.svg", url: "https://www.sonarsource.com/products/sonarqube" },
  { id: "securityessentials", name: "Security Essentials", src: "/logos/engineeringtools/SecurityEssentials2.jpg", url: "https://www.microsoft.com" },
  { id: "acunetix", name: "Acunetix", src: "/logos/engineeringtools/Acunetix.png", url: "https://www.acunetix.com" },
  { id: "azure", name: "Azure", src: "/logos/engineeringtools/Azure3.png", url: "https://azure.microsoft.com" },
  { id: "burpsuite2", name: "Burp Suite", src: "/logos/engineeringtools/burpsuite2.png", url: "https://portswigger.net/burp" },
  { id: "metasploit-png", name: "Metasploit", src: "/logos/engineeringtools/Metasploit2.png", url: "https://www.metasploit.com" },
  { id: "nessus", name: "Nessus", src: "/logos/engineeringtools/Nessus.png", url: "https://www.tenable.com/products/nessus" },
  { id: "nmap", name: "Nmap", src: "/logos/engineeringtools/nmap3.png", url: "https://nmap.org" },
  { id: "openvas", name: "OpenVAS", src: "/logos/engineeringtools/OpenVAS.png", url: "https://www.openvas.org" },
  { id: "owaspzap", name: "OWASP ZAP", src: "/logos/engineeringtools/OWASPZap2.png", url: "https://www.zaproxy.org" },
  { id: "tiptap", name: "Tiptap", src: "/logos/engineeringtools/Tiptap2.png", url: "https://tiptap.dev" },
  { id: "veracode2", name: "Veracode", src: "/logos/engineeringtools/Veracode2.png", url: "https://www.veracode.com" },
];

const WALL_GRADIENT =
  "linear-gradient(to right,  #4b456f 0%, #a855f7 30%, #f97316 100%)";

const CYCLE_MS = 14000;

/** Default container size for each logo.*/
const DEFAULT_SIZE = "h-32 w-56";

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

    const measure = () => {
      children = Array.from(track.children) as HTMLElement[];
      if (children.length === 0) return;
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

    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        measure();
        raf = requestAnimationFrame(tick);
      });
    });

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
    <section className="relative w-full bg-[#e8ebe9] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="text-lg font-black uppercase tracking-widest text-[#0047AB] block mb-3">
          Powered by modern technologies, frameworks, and engineering tools
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0047AB] tracking-tight">
          The Tools We Use
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
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
                className={`relative block shrink-0 ${
                  tool.sizeClass ?? DEFAULT_SIZE
                } transition-opacity duration-300 hover:opacity-80`}
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