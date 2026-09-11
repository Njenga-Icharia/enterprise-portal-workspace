"use client";

import Image from "next/image";

/**
 * Engineering branch hero.
 *
 * Occupies the full viewport minus the fixed navbar (6rem — matches the offset
 * used by EngineeringSpiral so the two sections stack without a seam).
 *
 * Visual language is deliberately aligned with EngineeringSpiral: dark gradient
 * shell, hairline borders, #f97316 accent, serif display type, and the same
 * brutalist 8px-offset shadow on the inner frame.
 */

/** Navbar height. Kept in one place so the hero and any sibling section agree. */
const NAVBAR_OFFSET = "6rem";

export default function HeroEngineering() {
  return (
    <section
      aria-label="Engineering hero"
      className="relative left-1/2 w-screen -translate-x-1/2"
      style={{ minHeight: `calc(100vh - ${NAVBAR_OFFSET})` }}
    >
      {/* Bias background photo to the right */}
      <div className="absolute inset-0 overflow-hidden bg-[#0d0d13]">
        <Image
          src="/savanna.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-60"
        />

        {/* Legibility scrims: left-to-right for the copy column, top-to-bottom for the navbar. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d13] via-[#0d0d13]/85 to-[#0d0d13]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d13]/70 via-transparent to-[#0d0d13]" />

        {/* Accent wash, tied to the orange used across the engineering surfaces. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(249,115,22,0.18),transparent_55%)]" />
      </div>

      {/* Content rail. */}
      <div className="relative z-10 flex min-h-[inherit] items-center px-8 sm:px-12 lg:px-20 py-24">
        <div className="w-full max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f97316]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f97316]">
              Engineering
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white">
            World-class software engineering,
            <br />
             delivered from the
            <br />
            <span className="text-[#f97316]"> Silicon Savannah </span>
          </h1>

          {/* Deck */}
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
            Turning Complex Business Challenges Into Working Enterprise Solutions.
          </p>
          {/* Primary actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/engineering/method"
              className="inline-flex items-center gap-2 border-2 border-[#f97316] bg-[#f97316] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0d0d13] transition-colors hover:bg-transparent hover:text-[#f97316]"
            >
              Talk to an expert
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/engineering/capabilities"
              className="inline-flex items-center gap-2 border-2 border-white/20 px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:border-[#f97316] hover:text-[#f97316]"
            >
              View case studies
            </a>
          </div>

          {/* Stat strip */}
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {/* Capabilities */}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-bold text-white"> {/*09*/} </dd>
            </div>
            <div>
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {/* CMMI */}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-bold text-white"> {/*Level 05*/} </dd> 
            </div>
            <div>
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {/* Countries */}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-bold text-[#f97316]">{/* 35 */}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Scroll affordance, hidden on short viewports. */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/40">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}