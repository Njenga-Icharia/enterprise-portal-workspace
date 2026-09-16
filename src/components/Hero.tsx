"use client";

import Image from "next/image";

/** Navbar height. Kept in one place so hero and any sibling section agree. */
const NAVBAR_OFFSET = "6rem";

interface HeroCta {
  href: string;
  label: string;
}

interface HeroStat {
  label: string;
  value: string;
}

interface HeroProps {
  ariaLabel: string;
  imageSrc: string;
  imageAlt?: string;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  headingHighlight: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  stats: {
    first: HeroStat;
    second: HeroStat;
    third: HeroStat;
  };
}

export default function Hero({
  ariaLabel,
  imageSrc,
  imageAlt = "",
  eyebrow,
  headingLine1,
  headingLine2,
  headingHighlight,
  description,
  primaryCta,
  secondaryCta,
  stats,
}: HeroProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="relative left-1/2 w-screen -translate-x-1/2"
      style={{ minHeight: `calc(100vh - ${NAVBAR_OFFSET})` }}
    >
      {/* Bias background photo to the right */}
      <div className="absolute inset-0 overflow-hidden bg-[#0d0d13]">
        <Image
          src={imageSrc}
          alt={imageAlt}
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
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white">
            {headingLine1}
            <br />
            {headingLine2}
            <br />
            <span className="text-[#f97316]">{headingHighlight}</span>
          </h1>

          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
            {description}
          </p>
          {/* Primary actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex items-center gap-2 border-2 border-[#f97316] bg-[#f97316] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0d0d13] transition-colors hover:bg-transparent hover:text-[#f97316]"
            >
              {primaryCta.label}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 border-2 border-white/20 px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:border-[#f97316] hover:text-[#f97316]"
            >
              {secondaryCta.label}
            </a>
          </div>

          {/* Stat strip */}
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {stats.first.label}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-bold text-white"> {stats.first.value} </dd>
            </div>
            <div>
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {stats.second.label}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-bold text-white"> {stats.second.value} </dd> 
            </div>
            <div>
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">
                {stats.third.label}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-bold text-[#f97316]">{stats.third.value}</dd>
            </div>
          </dl>
        </div>
      </div>

      
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/40">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
