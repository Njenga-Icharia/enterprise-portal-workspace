import React from "react";
import Link from "next/link";
import "./stats-about.css";

/* Splits text into characters, each with its own index for staggered motion */
function Chars({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="sx-char"
            style={{ "--i": i } as React.CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
    </>
  );
}

/* Splits text into words, each with its own index for staggered motion */
function Words({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(/\s+/).map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="sx-word"
            style={{ "--i": i } as React.CSSProperties}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
}

export default function StatsAbout() {
  return (
    <section className="relative z-10 w-full bg-[#1e1e28] text-[#f8f9fa] pt-12 pb-24 px-6 sm:px-8 lg:px-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto">
        {/* 18M+ BANNER (animated) */}
        <div className="sx-banner relative overflow-hidden rounded-3xl bg-[#13131a] border border-white/10 p-8 md:p-12 mb-16">
          <div className="sx-accent absolute left-0 top-0 bottom-0 w-1.5 bg-[#fa7d38]" />
          <div className="sx-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <h2 className="no-orange-cursor sx-metric text-7xl md:text-9xl font-black text-tbl-orange tracking-tighter select-none">
              <Chars text="18M+" />
            </h2>

            <div className="max-w-xl">
              <h3 className="sx-heading text-2xl md:text-3xl font-bold font-serif mb-3 leading-tight">
                <Words text="Subscribers on our platform" />
              </h3>

              <p className="sx-desc text-white/70 text-sm md:text-base font-medium">
                <Words text="Scaling robust digital infrastructure across a massive global footprint of over 35 countries and 470+ successfully implemented projects." />
              </p>
            </div>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
              About Techno Brain
            </span>

            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              Transforming business and achieving strategic goals.
            </h2>

            <p className="text-white/80 mb-6 text-lg">
              We are global leaders currently operating in 15 countries and creating 1,200 high-tech jobs globally. We empower the workforce with 75,000+ trained personnel in our institutions.
            </p>

            <p className="text-white/80 mb-10 text-lg">
              From pioneering Africa&apos;s digital integration to building accessible frameworks, our solutions are designed to make your operations swift and agile.
            </p>

            <Link
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-extrabold text-xs tracking-wider uppercase hover:bg-white hover:text-[#1e1e28] transition-colors"
            >
              Discover How
            </Link>
          </div>

          {/* Cards 01-03 (static) */}
          <div className="space-y-6">
            <div className="sx-card relative overflow-hidden rounded-2xl bg-[#13131a] border border-white/10 p-8">
              <div className="sx-line pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-[#fa7d38]" />
              <div className="relative z-10 flex items-start gap-5">
                <span className="sx-num text-tbl-orange font-black text-sm pt-1">01</span>
                <div>
                  <h4 className="sx-title text-2xl font-serif font-bold mb-3 text-white">
                    CMMI Maturity Level 5
                  </h4>
                  <p className="sx-text text-white/70 text-sm font-medium leading-relaxed">
                    Appraised at the highest maturity level, ensuring our development and delivery processes meet strict, world-class quality standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="sx-card relative overflow-hidden rounded-2xl bg-[#13131a] border border-white/10 p-8">
              <div className="sx-line pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-[#fa7d38]" />
              <div className="relative z-10 flex items-start gap-5">
                <span className="sx-num text-tbl-orange font-black text-sm pt-1">02</span>
                <div>
                  <h4 className="sx-title text-2xl font-serif font-bold mb-3 text-white">
                    1st Microsoft Testing Center
                  </h4>
                  <p className="sx-text text-white/70 text-sm font-medium leading-relaxed">
                    We launched Africa’s first-ever Microsoft software testing and quality assurance center, pioneering technical excellence on the continent.
                  </p>
                </div>
              </div>
            </div>

            <div className="sx-card relative overflow-hidden rounded-2xl bg-[#13131a] border border-white/10 p-8">
              <div className="sx-line pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-[#fa7d38]" />
              <div className="relative z-10 flex items-start gap-5">
                <span className="sx-num text-tbl-orange font-black text-sm pt-1">03</span>
                <div>
                  <h4 className="sx-title text-2xl font-serif font-bold mb-3 text-white">
                    Great Place To Work®
                  </h4>
                  <p className="sx-text text-white/70 text-sm font-medium leading-relaxed">
                    Officially certified for back-to-back years, clinching top spots for Gen-Z engagement and cultivating a thriving global engineering culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
