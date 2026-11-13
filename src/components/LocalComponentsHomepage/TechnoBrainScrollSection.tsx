"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    key: "trips",
    title: "TRIPS+ / ITAS",
    dot: "#fa7d38",
    text: "#fa7d38",
    points: ["Tax Administration", "Customs & Revenue", "Compliance Engines"],
  },
  {
    key: "impact",
    title: "ImpactPro IFMIS",
    dot: "#0072bc",
    text: "#3ba0e8",
    points: [
      "Public Finance Management",
      "Sovereign Treasury Systems",
      "Real-time Ledger Matrices",
    ],
  },
  {
    key: "secu",
    title: "SecuRegister",
    dot: "#595278",
    text: "#a08fd0",
    points: [
      "Identity Management",
      "Civil Registry Solutions",
      "Biometric State Ledgers",
    ],
  },
];

// 8 highlights (2 columns x 4 rows, as in drawing 2)
const METRICS = [
  { val: "20+", lbl: "Smart Modules" },
  { val: "18M+", lbl: "Sovereign Registries" },
  { val: "10M+", lbl: "Management Ledgers" },
  { val: "120", lbl: "Project Deployments" },
  { val: "25", lbl: "Sovereign Integrations" },
  { val: "23", lbl: "Countries Supported" },
  { val: "35+", lbl: "Connected Footprints" },
  { val: "160", lbl: "KPI Implementations" },
];

const LINE = "rgba(148,163,184,0.55)";

// Text sizes scale with the screen, so a laptop and a huge monitor both look right.
const TITLE_SIZE = "text-[clamp(12px,1.05vw,19px)]";
const POINT_SIZE = "text-[clamp(11px,0.9vw,16px)]";
const CALLOUT_W = "w-[clamp(150px,15vw,300px)]";

/* ------------------------------------------------------------------ */
/* SHARED PIECES                                                       */
/* ------------------------------------------------------------------ */

// Placeholder icon: swap this for your real icons later.
function TriangleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[clamp(24px,2.2vw,44px)] h-[clamp(24px,2.2vw,44px)] shrink-0 mt-1"
      fill="none"
      stroke="#fa7d38"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="6,3 20,12 6,21" />
    </svg>
  );
}

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-[clamp(24px,3vw,64px)] gap-y-[clamp(20px,2.4vw,48px)]">
      {METRICS.map((m) => (
        <div key={m.lbl} className="flex items-start gap-3">
          <TriangleIcon />
          <div className="flex flex-col">
            <span className="text-[clamp(28px,3.2vw,64px)] font-black leading-none text-[#fa7d38]">
              {m.val}
            </span>
            <span className="mt-1 text-[clamp(11px,0.9vw,16px)] uppercase tracking-wide text-gray-400 font-medium">
              {m.lbl}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsHeader() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[#fa7d38] font-mono tracking-widest text-[clamp(10px,0.8vw,14px)] uppercase font-black">
        Key Highlights
      </span>
      <h2 className="text-[clamp(24px,2.8vw,56px)] font-black tracking-tight text-slate-100 leading-tight">
        Three Pillars.
        <br />
        One Connected Government.
      </h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* COMPONENT                                                           */
/* ------------------------------------------------------------------ */

export default function TechnoBrainScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooths the scroll so the roll feels fluid. It is still tied directly to scroll:
  // stop scrolling and it stops, scroll back and it rolls back.
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  // TIMELINE
  // 0.00 - 0.18 : Mode 1 text fades out
  // 0.12 - 0.80 : graphic rolls one full turn clockwise (0 -> 360deg)
  // 0.22 - 0.78 : graphic shrinks + glides to the left WHILE rolling
  // 0.58 - 0.80 : Mode 2 names + grid pop in as the roll finishes
  // 0.80 - 1.00 : hold in final position
  const calloutOpacity = useTransform(p, [0.02, 0.18], [1, 0]);
  const graphicRotate = useTransform(p, [0.12, 0.8], [0, 360]);
  const graphicLeft = useTransform(p, [0.22, 0.78], ["50%", "26%"]);
  const graphicScale = useTransform(p, [0.22, 0.78], [1, 0.8]);
  const labelOpacity = useTransform(p, [0.64, 0.8], [0, 1]);
  const gridOpacity = useTransform(p, [0.58, 0.8], [0, 1]);
  const gridX = useTransform(p, [0.58, 0.8], [60, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#1e1e28] md:h-[400vh]"
    >
      {/* ============================================================ */}
      {/* DESKTOP (md and up)                                           */}
      {/* top-16 / 4rem = 64px navbar height. Change both if different. */}
      {/* ============================================================ */}
      <div className="hidden md:block sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">
        <div className="relative h-full w-full">
          {/* Graphic wrapper: slides left. Size tied to the viewport so it never overflows. */}
          <motion.div
            style={{ left: graphicLeft, x: "-50%", y: "-50%" }}
            className="absolute top-1/2 aspect-square w-[min(76vh,40vw)]"
          >
            {/* Only the graphic itself rolls and scales */}
            <motion.div
              style={{ scale: graphicScale, rotate: graphicRotate }}
              className="absolute inset-0"
            >
              <img
                src="/solutions/techno-brain-shape.svg"
                alt="Techno Brain: TRIPS+ ITAS, ImpactPro IFMIS, SecuRegister Identity Management"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
              />
            </motion.div>

            {/* ---------- MODE 1: pointer lines + 3 bullets each ---------- */}
            <motion.div
              style={{ opacity: calloutOpacity }}
              className="absolute inset-0 pointer-events-none select-none"
            >
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full overflow-visible"
                fill="none"
              >
                <polyline
                  points="70,26 114,26"
                  stroke={LINE}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="70" cy="26" r="1.4" fill={PILLARS[0].dot} />

                <polyline
                  points="12,66 0,66 -8,54 -14,54"
                  stroke={LINE}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="12" cy="66" r="1.4" fill={PILLARS[1].dot} />

                <polyline
                  points="88,66 99,66 106,77 114,77"
                  stroke={LINE}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="88" cy="66" r="1.4" fill={PILLARS[2].dot} />
              </svg>

              {/* TRIPS+ text (right) */}
              <div
                style={{ left: "116%", top: "26%" }}
                className={`absolute -translate-y-3 ${CALLOUT_W} flex flex-col gap-1.5`}
              >
                <span
                  className={`font-black tracking-wider uppercase ${TITLE_SIZE}`}
                  style={{ color: PILLARS[0].text }}
                >
                  {PILLARS[0].title}
                </span>
                <ul className={`flex flex-col gap-1 ${POINT_SIZE} text-gray-400 font-medium`}>
                  {PILLARS[0].points.map((pt) => (
                    <li key={pt} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 mt-[0.45em] rounded-full bg-slate-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ImpactPro text (left, right-aligned) */}
              <div
                style={{ right: "116%", top: "54%" }}
                className={`absolute -translate-y-3 ${CALLOUT_W} flex flex-col items-end gap-1.5 text-right`}
              >
                <span
                  className={`font-black tracking-wider uppercase ${TITLE_SIZE}`}
                  style={{ color: PILLARS[1].text }}
                >
                  {PILLARS[1].title}
                </span>
                <ul className={`flex flex-col gap-1 ${POINT_SIZE} text-gray-400 font-medium`}>
                  {PILLARS[1].points.map((pt) => (
                    <li key={pt} className="flex items-start justify-end gap-1.5">
                      <span>{pt}</span>
                      <span className="w-1.5 h-1.5 mt-[0.45em] rounded-full bg-slate-400 shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* SecuRegister text (right) */}
              <div
                style={{ left: "116%", top: "77%" }}
                className={`absolute -translate-y-3 ${CALLOUT_W} flex flex-col gap-1.5`}
              >
                <span
                  className={`font-black tracking-wider uppercase ${TITLE_SIZE}`}
                  style={{ color: PILLARS[2].text }}
                >
                  {PILLARS[2].title}
                </span>
                <ul className={`flex flex-col gap-1 ${POINT_SIZE} text-gray-400 font-medium`}>
                  {PILLARS[2].points.map((pt) => (
                    <li key={pt} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 mt-[0.45em] rounded-full bg-slate-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ---------- MODE 2: names, with a clear gap from the graphic ---------- */}
            <motion.div
              style={{ opacity: labelOpacity }}
              className="absolute inset-0 pointer-events-none select-none font-black uppercase tracking-wide text-[clamp(13px,1.2vw,22px)] leading-tight"
            >
              <span
                className="absolute whitespace-nowrap"
                style={{ left: "64%", top: "12%", color: PILLARS[0].text }}
              >
                TRIPS+
                <br />
                ITAS
              </span>
              <span
                className="absolute whitespace-nowrap text-right -translate-y-1/2"
                style={{ right: "86%", top: "67.6%", color: PILLARS[1].text }}
              >
                IMPACTPRO
                <br />
                IFMIS
              </span>
              <span
                className="absolute whitespace-nowrap -translate-y-1/2"
                style={{ left: "86%", top: "67.6%", color: PILLARS[2].text }}
              >
                SECUREGISTER
                <br />
                IDENTITY
                <br />
                MANAGEMENT
              </span>
            </motion.div>
          </motion.div>

          {/* ---------- MODE 2: highlights, pushed toward the right wall ---------- */}
          <motion.div
            style={{ opacity: gridOpacity, x: gridX, y: "-50%" }}
            className="absolute top-1/2 right-[3vw] w-[44%] max-w-[780px] flex flex-col gap-[clamp(20px,2.4vw,48px)] text-white"
          >
            <StatsHeader />
            <StatsGrid />
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE (below md): simple stacked layout                      */}
      {/* ============================================================ */}
      <div className="md:hidden flex flex-col items-center gap-10 px-6 py-12 text-white">
        <img
          src="/techno-brain-shape.svg"
          alt="Techno Brain: TRIPS+ ITAS, ImpactPro IFMIS, SecuRegister Identity Management"
          className="w-full max-w-[320px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
        />

        <div className="w-full flex flex-col gap-6">
          {PILLARS.map((pl) => (
            <div key={pl.key} className="flex flex-col gap-1.5">
              <span
                className="font-black tracking-wider uppercase text-xs"
                style={{ color: pl.text }}
              >
                {pl.title}
              </span>
              <ul className="flex flex-col gap-1 text-xs text-gray-400 font-medium">
                {pl.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-1.5">
                    <span
                      className="w-1.5 h-1.5 mt-1 rounded-full shrink-0"
                      style={{ background: pl.dot }}
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-6">
          <StatsHeader />
          <StatsGrid />
        </div>
      </div>
    </section>
  );
}
