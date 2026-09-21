"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/** Navbar height. */
const NAVBAR_OFFSET = "6rem";

/** Shared easing*/
const EASE = [0.77, 0, 0.175, 1] as any;

interface HeroCta {
  href: string;
  label: string;
}

interface HeroStat {
  label: string;
  value: string;
}

/* Background photo tint */
export type HeroTint = "none" | "light" | "medium" | "strong" | "heavy";

const TINT_PRESETS: Record<HeroTint, { image: string; ltr: string; ttb: string }> = {
  none: {
    image: "opacity-100",
    ltr: "from-[#0d0d13]/70 via-[#0d0d13]/30 to-transparent",
    ttb: "from-[#0d0d13]/40 via-transparent to-[#0d0d13]/50",
  },
  light: {
    image: "opacity-80",
    ltr: "from-[#0d0d13] via-[#0d0d13]/55 to-transparent",
    ttb: "from-[#0d0d13]/50 via-transparent to-[#0d0d13]/80",
  },
  medium: {
    image: "opacity-60",
    ltr: "from-[#0d0d13] via-[#0d0d13]/85 to-[#0d0d13]/30",
    ttb: "from-[#0d0d13]/70 via-transparent to-[#0d0d13]",
  },
  strong: {
    image: "opacity-45",
    ltr: "from-[#0d0d13] via-[#0d0d13]/95 to-[#0d0d13]/55",
    ttb: "from-[#0d0d13]/85 via-[#0d0d13]/25 to-[#0d0d13]",
  },
  heavy: {
    image: "opacity-25",
    ltr: "from-[#0d0d13] via-[#0d0d13] to-[#0d0d13]/75",
    ttb: "from-[#0d0d13]/95 via-[#0d0d13]/55 to-[#0d0d13]",
  },
};

/* Headline transition.
 * Normal motion: orange block sweeps left→right & text fades in mid-sweep.
 * Reduced motion: no sweep block; word just fades in.
 */
function AnimatedWord({
  word,
  delay,
  sweep,
  text,
  reduced,
}: {
  word: string;
  delay: number;
  sweep: string;
  text: string;
  reduced: boolean;
}) {
  if (reduced) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
        className={`inline-block mr-[0.25em] py-1 align-bottom ${text}`}
      >
        {word}
      </motion.span>
    );
  }

  return (
    <span className="relative inline-block overflow-hidden mr-[0.25em] py-1 align-bottom">
      <motion.div
        initial={{ x: "-101%" }}
        animate={{
          x: ["-101%", "0%", "101%"],
          transition: { duration: 0.5, ease: EASE, times: [0, 0.5, 1], delay },
        }}
        className={`absolute inset-0 z-30 pointer-events-none ${sweep}`}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 1],
          transition: { duration: 0.5, ease: EASE, times: [0, 0.5, 1], delay },
        }}
        className={`relative z-20 inline-block ${text}`}
      >
        {word}
      </motion.span>
    </span>
  );
}

/*Wraps whole line of text (In reduced, only a unit.) */
function AnimatedLine({
  text,
  baseDelay,
  sweep,
  textColor,
  perWord = 0.09,
  reduced,
}: {
  text: string;
  baseDelay: number;
  sweep: string;
  textColor: string;
  perWord?: number;
  reduced: boolean;
}) {
  const words = text.split(" ");

  // Reduced motion.
  if (reduced) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        className={`inline-block ${textColor}`}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <>
      {words.map((word, i) => (
        <AnimatedWord
          key={`${word}-${i}`}
          word={word}
          delay={baseDelay + i * perWord}
          sweep={sweep}
          text={textColor}
          reduced={false}
        />
      ))}
    </>
  );
}

/* Supporting content.*/
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as any, delay },
  }),
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: Math.min(delay, 0.1) },
  }),
};

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
  credentials?: string[];
  imageTint?: HeroTint;
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
  credentials,
  imageTint = "medium",
}: HeroProps) {
  const tint = TINT_PRESETS[imageTint];
  const reduced = useReducedMotion() ?? false;

  // ---- Animation time ----------------------------------------
  const line1Base = 0.1;
  const line2Base = 0.4;
  const line3Base = 0.7;
  const descriptionDelay = 1.15;
  const ctaDelay = 1.3;
  const statsDelay = 1.45;
  const credentialsDelay = 1.6;

  const support = reduced ? fadeOnly : fadeUp;
  // --------------------------------------------------------------------------

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
          className={`object-cover object-right transition-opacity duration-500 ${tint.image}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${tint.ltr}`} />
        <div className={`absolute inset-0 bg-gradient-to-b ${tint.ttb}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(249,115,22,0.18),transparent_55%)]" />
      </div>

      {/* Content rail */}
      <div className="relative z-10 flex min-h-[inherit] items-center px-8 sm:px-12 lg:px-20 py-24">
        <div className="w-full max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: reduced ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduced ? 0.3 : 0.5,
              ease: [0.25, 1, 0.5, 1],
              delay: reduced ? 0.05 : 0.05,
            }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#f97316]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f97316]">
              {eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white">
            <AnimatedLine
              text={headingLine1}
              baseDelay={line1Base}
              sweep="bg-[#f97316]"
              textColor="text-white"
              reduced={reduced}
            />
            <br />
            <AnimatedLine
              text={headingLine2}
              baseDelay={line2Base}
              sweep="bg-[#f97316]"
              textColor="text-white"
              reduced={reduced}
            />
            <br />
            <AnimatedLine
              text={headingHighlight}
              baseDelay={line3Base}
              sweep="bg-white"
              textColor="text-[#f97316]"
              reduced={reduced}
            />
          </h1>

          {/* Description */}
          <motion.p
            variants={support}
            initial="hidden"
            animate="visible"
            custom={descriptionDelay}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/70"
          >
            {description}
          </motion.p>

          {/* Primary actions */}
          <motion.div
            variants={support}
            initial="hidden"
            animate="visible"
            custom={ctaDelay}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={primaryCta.href}
              className="inline-flex items-center gap-2 border-2 border-[#4b456f] bg-[#4b456f] px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:border-[#f97316] hover:text-[#f97316]"
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
          </motion.div>

          {/* Stat strip */}
          <motion.dl
            variants={support}
            initial="hidden"
            animate="visible"
            custom={statsDelay}
            className="mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/10"
          >
            <div className="py-6 pr-6">
              <dd className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {stats.first.value}
              </dd>
              <dt className="mt-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                {stats.first.label}
              </dt>
            </div>
            <div className="py-6 px-6">
              <dd className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {stats.second.value}
              </dd>
              <dt className="mt-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                {stats.second.label}
              </dt>
            </div>
            <div className="py-6 pl-6">
              <dd className="font-serif text-3xl sm:text-4xl font-bold text-[#f97316]">
                {stats.third.value}
              </dd>
              <dt className="mt-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                {stats.third.label}
              </dt>
            </div>
          </motion.dl>

          {/* Credentials row */}
          {credentials && credentials.length > 0 && (
            <motion.ul
              variants={support}
              initial="hidden"
              animate="visible"
              custom={credentialsDelay}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {credentials.map((c) => (
                <li
                  key={c}
                  className="text-[10px] font-black uppercase tracking-widest text-white/50"
                >
                  {c}
                </li>
              ))}
            </motion.ul>
          )}
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