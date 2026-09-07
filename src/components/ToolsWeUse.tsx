"use client";

import React from "react";

interface ToolItem {
  id: string;
  name: string;
  src: string;
  url: string;
  customClass?: string;
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

export default function ToolsWeUse() {
  return (
    <section className="w-full bg-[#f97316] py-20 border-t-4 border-b-4 border-[#1e1e28] overflow-hidden shadow-[0px_10px_0px_0px_#1e1e28]">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-xs font-black uppercase tracking-widest text-[#1e1e28] bg-white px-3 py-1 rounded-full border-2 border-[#1e1e28] inline-block mb-3 shadow-[2px_2px_0px_0px_#1e1e28]">
          Ecosystem
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Powered by modern technologies, frameworks, and engineering tools
        </h2>
      </div>

      {/* Marquee Viewport Container with 'group' to handle hover pausing */}
      <div className="relative w-full overflow-hidden flex group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-20 items-center py-4">
          
          {/* Primary Render Loop */}
          {TOOLS_LOGOS.map((tool) => (
            <a
              key={`primary-${tool.id}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${tool.name}`}
              className="flex items-center justify-center p-8 border-3 border-[#1e1e28] rounded-3xl bg-white shadow-[8px_8px_0px_0px_#1e1e28] shrink-0 h-48 w-80 overflow-hidden group/card transition-transform hover:-translate-y-2"
            >
              <img 
                src={tool.src} 
                alt={tool.name} 
                className={`w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-110 ${tool.customClass || ""}`} 
              />
            </a>
          ))}

          {/* Secondary Loop for Seamless Infinite Scroll Illusion */}
          {TOOLS_LOGOS.map((tool) => (
            <a
              key={`duplicate-${tool.id}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
              tabIndex={-1}
              className="flex items-center justify-center p-8 border-3 border-[#1e1e28] rounded-3xl bg-white shadow-[8px_8px_0px_0px_#1e1e28] shrink-0 h-48 w-80 overflow-hidden group/card transition-transform hover:-translate-y-2"
            >
              <img 
                src={tool.src} 
                alt="" 
                className={`w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-110 ${tool.customClass || ""}`} 
              />
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}