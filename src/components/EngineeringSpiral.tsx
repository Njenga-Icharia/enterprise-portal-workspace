"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Offering {
  title: string;
  orangeText: string;
  action: string;
  description: string;
  badge: string;
  slug: string;
}

interface PopupAnchor {
  /** Node centre, expressed in wheel-container-local pixels. */
  x: number;
  y: number;
  /** Node centre offset from wheel centre — used to orient the mobile popup outward. */
  dx: number;
  dy: number;
  /**
   * True when the node's live on-screen centre sits in the right half of the wheel.
   * Determined at hover time, not from the node's static SVG angle, because the
   * inner ring rotates continuously and the two no longer coincide once hovered.
   */
  onRightHalf: boolean;
}

/**
 * Descriptions are transcribed verbatim from the published "What We Offer" copy.
 * Do not paraphrase — the disclosure surfaces are the only place this text appears
 * on the page, and legal/marketing review expects a 1:1 match with the source.
 */
const ENGINEERING_OFFERINGS: Offering[] = [
  {
    title: "App & Software ",
    orangeText: "Compatibility",
    action: "We resolve",
    description:
      "We employ innovative data-centric methods to detect & resolve application compatibility issues across various platforms & devices.",
    badge: "01",
    slug: "compatibility",
  },
  {
    title: "Security ",
    orangeText: "Testing",
    action: "We safeguard",
    description:
      "We perform vulnerability tests across platforms apps, databases & networks to take proactive measures that safeguard your assets",
    badge: "02",
    slug: "security-testing",
  },
  {
    title: "Privacy ",
    orangeText: "Compliance",
    action: "We validate",
    description:
      "We perform privacy validation and compliance tests to ensure adherence to GDPR, CDPA or other local & global privacy regulations.",
    badge: "03",
    slug: "privacy-compliance",
  },
  {
    title: "Dev",
    orangeText: "Ops",
    action: "We accelerate",
    description:
      "We accelerate delivery of higher quality applications and services through continuous delivery and automation making the process more efficient, faster and reliable.",
    badge: "04",
    slug: "devops",
  },
  {
    title: "Data ",
    orangeText: "Analytics",
    action: "We analyze",
    description:
      "We build machine learning models, analyze structured and unstructured data, utilizing AI & visualization tools to derive actionable insights that inform your business decisions.",
    badge: "05",
    slug: "data-analytics",
  },
  {
    title: "Accessibility ",
    orangeText: "Testing",
    action: "We include",
    description:
      "We validate the accessibility of digital products to ensure inclusivity broadening your reach to a wider audience.",
    badge: "06",
    slug: "accessibility-testing",
  },
  {
    title: "Development ",
    orangeText: "Services",
    action: "We build",
    description:
      "We develop tailored software solutions that drive growth, streamline operations utilizing innovative technology and practices.",
    badge: "07",
    slug: "development-services",
  },
  {
    title: "Support ",
    orangeText: "Services",
    action: "We maintain",
    description:
      "We provide help desk support for smooth operations, offering 24/7 coverage and quick solutions, specializing in various platforms for maximum productivity.",
    badge: "08",
    slug: "support-services",
  },
  {
    title: "Test ",
    orangeText: "Automation",
    action: "We automate",
    description:
      "We automate test processes across platforms to increase efficiency and productivity thus reducing operational cost.",
    badge: "09",
    slug: "test-automation",
  },
];

function seededRandom(seed: number) {
  let t = seed;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const toXY = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  const start = toXY(startDeg);
  const end = toXY(endDeg);
  const largeArc = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

const SIZE = 800;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 360;
const INNER_RADIUS = 300;
const COUNT = ENGINEERING_OFFERINGS.length;
const INNER_ROTATION_SECONDS = 70;
const OUTER_ROTATION_SECONDS = 110;

/**
 * Viewport width at which the disclosure surface switches presentation:
 *  - below the breakpoint: floating card anchored to the hovered node, rendered
 *    outside the SVG so it can paint over the label field without z-index conflicts
 *  - at/above the breakpoint: square panel docked to the nearest side wall
 */
const SIDE_PANEL_MEDIA_QUERY = "(min-width: 1280px)";

/** Radial offset applied to the floating card so it clears the node glyph. */
const MOBILE_POPUP_OUTWARD = 56;

/** Horizontal half-width of the floating card (`w-64` = 16rem → 8rem half + 1rem gutter). */
const FLOATING_CARD_CLAMP_X = "9rem";

/** Conservative vertical half-height used to keep the floating card inside the wheel box. */
const FLOATING_CARD_CLAMP_Y = "7.5rem";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export default function EngineeringSpiral() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /**
   * Snapshot of the hovered node's live geometry, captured on mouseenter.
   * The ring animation is paused for the duration of the hover, so this snapshot
   * remains valid until the pointer leaves the node.
   */
  const [popupAnchor, setPopupAnchor] = useState<PopupAnchor | null>(null);

  const wheelRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery(SIDE_PANEL_MEDIA_QUERY);

  const nodes = useMemo(() => {
    return ENGINEERING_OFFERINGS.map((item, i) => {
      const angle = (360 / COUNT) * i - 90;
      const rad = (angle * Math.PI) / 180;
      const x = CENTER + INNER_RADIUS * Math.cos(rad);
      const y = CENTER + INNER_RADIUS * Math.sin(rad);
      const pointerLen = 46;
      const px = x + pointerLen * Math.cos(rad);
      const py = y + pointerLen * Math.sin(rad);
      return { ...item, x, y, angle, px, py, index: i };
    });
  }, []);

  const outerTicks = useMemo(() => {
    return Array.from({ length: 32 }).map((_, i) => {
      const angle = (360 / 32) * i;
      const rad = (angle * Math.PI) / 180;
      const x1 = CENTER + (OUTER_RADIUS - 8) * Math.cos(rad);
      const y1 = CENTER + (OUTER_RADIUS - 8) * Math.sin(rad);
      const x2 = CENTER + (OUTER_RADIUS + 8) * Math.cos(rad);
      const y2 = CENTER + (OUTER_RADIUS + 8) * Math.sin(rad);
      return { key: i, x1, y1, x2, y2 };
    });
  }, []);

  const stars = useMemo(() => {
    const rand = seededRandom(7);
    return Array.from({ length: 70 }).map((_, i) => {
      const dist = rand() * 150;
      const angle = rand() * 360;
      const rad = (angle * Math.PI) / 180;
      const x = CENTER + dist * Math.cos(rad);
      const y = CENTER + dist * Math.sin(rad);
      const r = 0.8 + rand() * 1.8;
      const opacity = 0.25 + rand() * 0.55;
      const delay = rand() * 4;
      return { key: i, x, y, r, opacity, delay };
    });
  }, []);

  const hovered = hoveredIndex !== null ? nodes[hoveredIndex] : null;

  /**
   * Side-panel placement is driven by the node's live screen position (captured at
   * hover time), not its static slot in the SVG. Because the inner ring rotates,
   * a node's static angle and its rendered position diverge — using the static
   * angle would dock the panel to the wrong wall once the wheel has spun.
   */
  const hoveredOnRightHalf = popupAnchor?.onRightHalf ?? true;

  const showSidePanel = isDesktop && hovered !== null;
  const showFloatingPopup = !isDesktop && hovered !== null && popupAnchor !== null;

  /** Unit vector from wheel centre to the hovered node, used to push the floating card outward. */
  const outward = useMemo(() => {
    if (!popupAnchor) return { x: 0, y: 0 };
    const mag = Math.hypot(popupAnchor.dx, popupAnchor.dy) || 1;
    return {
      x: (popupAnchor.dx / mag) * MOBILE_POPUP_OUTWARD,
      y: (popupAnchor.dy / mag) * MOBILE_POPUP_OUTWARD,
    };
  }, [popupAnchor]);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 min-h-[calc(100vh-6rem)] rounded-none border-2 border-[#1e1e28] bg-gradient-to-b from-[#0d0d13] to-[#1e1e28] shadow-[8px_8px_0px_0px_#1e1e28] mb-20 overflow-hidden">
      <style>{`
        @keyframes spiral-spin-in { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spiral-spin-out { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes spiral-counter-in { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }

        /* Inner ring rotates clockwise; each node counter-rotates at the same rate
           so dot glyphs and labels remain upright regardless of ring position. */
        .ring-inner { animation: spiral-spin-in ${INNER_ROTATION_SECONDS}s linear infinite; transform-origin: 50% 50%; }
        .ring-outer { animation: spiral-spin-out ${OUTER_ROTATION_SECONDS}s linear infinite; transform-origin: 50% 50%; }
        .node-counter { animation: spiral-counter-in ${INNER_ROTATION_SECONDS}s linear infinite; }

        /* Freezing the ring on hover keeps the captured anchor valid for the whole hover. */
        .rings-paused .ring-inner,
        .rings-paused .ring-outer,
        .rings-paused .node-counter { animation-play-state: paused; }

        .star-twinkle { animation: twinkle 3.5s ease-in-out infinite; }

        @keyframes side-panel-in-right {
          from { opacity: 0; transform: translateY(-50%) translateX(28px); }
          to   { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
        @keyframes side-panel-in-left {
          from { opacity: 0; transform: translateY(-50%) translateX(-28px); }
          to   { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
        .side-panel-right { animation: side-panel-in-right 260ms cubic-bezier(0.22, 1, 0.36, 1); }
        .side-panel-left  { animation: side-panel-in-left  260ms cubic-bezier(0.22, 1, 0.36, 1); }

        @keyframes float-popup-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.94); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .float-popup { animation: float-popup-in 180ms cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-8 sm:px-12 pt-8 pb-6 border-b border-white/10">
        <h3 className="text-2xl sm:text-3xl font-serif text-white">
          Engineering Capabilities Built Around <span className="text-[#f97316]">Your Needs.</span>
        </h3>
        <div className="text-right shrink-0 ml-6">
          <div className="text-2xl font-serif font-bold text-white">{String(COUNT).padStart(2, "0")}</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Capabilities</div>
        </div>
      </div>

      {/*
        Diagram stage. The wheel's box size is fixed/aspect-ratio locked so that
        hovering a node — which changes DOM content but never layout — can't cause
        the stage to reflow or shift.
      */}
      <div className="relative w-full flex justify-center py-20">
        <div
          ref={wheelRef}
          className={`relative w-full max-w-[820px] ${hovered ? "rings-paused" : ""}`}
          style={{ aspectRatio: "1 / 1" }}
        >
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 w-full h-full overflow-visible">
            {/* Outer decorative ring + ticks — independent, counter-rotating shell. */}
            <g className="ring-outer">
              <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS} fill="none" stroke="#f97316" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 6" />
              {outerTicks.map((t) => (
                <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#f97316" strokeOpacity="0.25" strokeWidth="1" />
              ))}
            </g>

            {/* Static star field — deliberately outside the rotating group so it reads as depth. */}
            <g>
              {stars.map((s) => (
                <circle
                  key={s.key}
                  cx={s.x}
                  cy={s.y}
                  r={s.r}
                  fill="#ffffff"
                  opacity={s.opacity}
                  className="star-twinkle"
                  style={{ animationDelay: `${s.delay}s` }}
                />
              ))}
              <circle cx={CENTER} cy={CENTER} r="2.5" fill="#f97316" />
            </g>

            {/* Rotating capability ring: nodes, per-node highlight arcs, and constellation cues. */}
            <g className="ring-inner">
              <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="1.5" />

              {nodes.map((node) => {
                const isHovered = hoveredIndex === node.index;
                const next = nodes[(node.index + 1) % COUNT];
                const prev = nodes[(node.index - 1 + COUNT) % COUNT];
                const arcHalf = 360 / COUNT / 2 - 2;
                const arcPath = describeArc(CENTER, CENTER, INNER_RADIUS, node.angle - arcHalf, node.angle + arcHalf);

                const rad = (node.angle * Math.PI) / 180;
                const cos = Math.cos(rad);
                const sin = Math.sin(rad);

                return (
                  <g key={node.slug}>
                    {/* Highlighted arc segment behind the hovered node. */}
                    <path
                      d={arcPath}
                      fill="none"
                      stroke="#f97316"
                      strokeWidth={isHovered ? 3 : 0}
                      strokeOpacity={isHovered ? 0.8 : 0}
                      style={{ transition: "stroke-width 300ms, stroke-opacity 300ms" }}
                    />
                    {/* Constellation lines to neighbours and the core, revealed on hover. */}
                    <line x1={node.x} y1={node.y} x2={next.x} y2={next.y} stroke="#f97316" strokeWidth="1" strokeOpacity={isHovered ? 0.35 : 0} style={{ transition: "stroke-opacity 300ms" }} />
                    <line x1={node.x} y1={node.y} x2={prev.x} y2={prev.y} stroke="#f97316" strokeWidth="1" strokeOpacity={isHovered ? 0.35 : 0} style={{ transition: "stroke-opacity 300ms" }} />
                    <line x1={node.x} y1={node.y} x2={CENTER} y2={CENTER} stroke="#f97316" strokeWidth="1" strokeOpacity={isHovered ? 0.25 : 0} style={{ transition: "stroke-opacity 300ms" }} />
                    {/* Radial pointer extending past the ring on hover. */}
                    <line x1={node.x} y1={node.y} x2={node.px} y2={node.py} stroke="#f97316" strokeWidth={isHovered ? 1.5 : 0} strokeOpacity={isHovered ? 0.9 : 0} style={{ transition: "stroke-opacity 300ms" }} />
                    <circle cx={node.px} cy={node.py} r={isHovered ? 4 : 0} fill="#f97316" style={{ transition: "r 300ms" }} />

                    {/*
                      Node hit-target and label. The wrapper counter-rotates in lockstep
                      with the ring so its contents render upright; the wrapper's
                      top-left corner coincides with the dot centre, which is exactly
                      what the hover handler below measures against.
                    */}
                    <foreignObject x={node.x - 24} y={node.y - 24} width="48" height="48" style={{ overflow: "visible" }}>
                      <div
                        className="node-counter absolute cursor-pointer"
                        style={{ left: "50%", top: "50%" }}
                        onMouseEnter={(e) => {
                          setHoveredIndex(node.index);

                          // Snapshot live geometry. The ring pauses on the same commit,
                          // so this snapshot stays accurate for the entire hover and can
                          // be trusted by both the floating card and the docked panel.
                          const wheel = wheelRef.current;
                          if (!wheel) return;
                          const wr = wheel.getBoundingClientRect();
                          const nr = (e.currentTarget as HTMLElement).getBoundingClientRect();

                          const x = nr.left - wr.left;
                          const y = nr.top - wr.top;
                          const dx = x - wr.width / 2;
                          const dy = y - wr.height / 2;

                          setPopupAnchor({
                            x,
                            y,
                            dx,
                            dy,
                            onRightHalf: dx >= 0,
                          });
                        }}
                        onMouseLeave={() => {
                          setHoveredIndex(null);
                          setPopupAnchor(null);
                        }}
                      >
                        <div className="relative flex items-center justify-center w-10 h-10 -translate-x-1/2 -translate-y-1/2">
                          <div
                            className={`absolute rounded-full transition-all duration-300 ${
                              isHovered ? "w-10 h-10 bg-[#f97316]/20 blur-[2px]" : "w-0 h-0"
                            }`}
                          />
                          <div
                            className={`rounded-full border transition-all duration-300 ${
                              isHovered ? "w-3.5 h-3.5 bg-[#f97316] border-[#f97316] shadow-[0_0_12px_2px_rgba(249,115,22,0.8)]" : "w-2.5 h-2.5 bg-[#1e1e28] border-white/60"
                            }`}
                          />

                          {/* Label fans outward from the wheel centre, badge leading on the left side. */}
                          <div
                            className={`absolute whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                              isHovered ? "text-[#f97316] opacity-100 scale-105" : "text-white/60 opacity-80"
                            }`}
                            style={{
                              [cos >= 0 ? "left" : "right"]: "50%",
                              [sin >= 0 ? "top" : "bottom"]: "50%",
                              marginLeft: cos >= 0 ? `${cos * 20 + 20}px` : "0px",
                              marginRight: cos < 0 ? `${Math.abs(cos) * 20 + 20}px` : "0px",
                              marginTop: sin >= 0 ? `${sin * 20}px` : "0px",
                              marginBottom: sin < 0 ? `${Math.abs(sin) * 20}px` : "0px",
                              transformOrigin: cos >= 0 ? "left center" : "right center",
                            }}
                          >
                            {cos < 0 && <span className="text-[9px] font-black opacity-50 tracking-wider">{node.badge}</span>}
                            <span className="font-serif text-base md:text-lg tracking-wide">
                              {node.title}
                              <span className="text-[#f97316]">{node.orangeText}</span>
                            </span>
                            {cos >= 0 && <span className="text-[9px] font-black opacity-50 tracking-wider">{node.badge}</span>}
                          </div>
                        </div>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Core message — kept outside the rotating group and above the SVG plane. */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none px-8">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white leading-relaxed drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              We build.
              <br />
              We secure.
              <br />
              <span className="text-[#f97316]">We innovate.</span>
            </h4>
          </div>

          {/*
            Narrow-viewport disclosure card.

            Rendered as a DOM sibling of the SVG rather than inside a <foreignObject>.
            SVG paint order is document-order based and ignores z-index, so an in-SVG
            card would be drawn beneath later labels. Hoisting it out of the SVG and
            stacking at z-[60] guarantees it clears both the SVG plane and the core
            message (z-10).

            Position is clamped to the wheel box so nodes near an edge cannot push the
            card into the parent's overflow-hidden boundary.
          */}
          {showFloatingPopup && hovered && popupAnchor && (
            <div
              key={hovered.slug}
              aria-live="polite"
              className="float-popup pointer-events-none absolute z-[60] w-64 rounded-xl border border-[#f97316]/40 bg-[#0d0d13]/95 p-5 text-left shadow-[0_10px_40px_-10px_rgba(249,115,22,0.55)] backdrop-blur-md"
              style={{
                left: `clamp(${FLOATING_CARD_CLAMP_X}, ${popupAnchor.x + outward.x}px, calc(100% - ${FLOATING_CARD_CLAMP_X}))`,
                top: `clamp(${FLOATING_CARD_CLAMP_Y}, ${popupAnchor.y + outward.y}px, calc(100% - ${FLOATING_CARD_CLAMP_Y}))`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-[#f97316] mb-2">
                {hovered.action}
              </div>
              <h4 className="text-white text-lg font-serif font-bold mb-2 leading-tight">
                {hovered.title}
                <span className="text-[#f97316]">{hovered.orangeText}</span>
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">{hovered.description}</p>
            </div>
          )}
        </div>

        {/*
          Wide-viewport disclosure panel.

          Docks to whichever side wall the hovered node currently occupies, decided
          from its live screen position (popupAnchor.onRightHalf) rather than its
          static SVG angle. As the ring rotates, a given node can cross the vertical
          midline, and the panel follows it accordingly on the next hover.
        */}
        {showSidePanel && hovered && (
          <div
            key={hovered.slug}
            aria-live="polite"
            className={`pointer-events-none absolute top-1/2 z-50 hidden xl:block w-[360px] rounded-none border-2 border-[#f97316]/50 bg-[#0d0d13]/95 backdrop-blur-md p-7 shadow-[0_20px_80px_-20px_rgba(249,115,22,0.5)] ${
              hoveredOnRightHalf
                ? "right-8 2xl:right-20 side-panel-right"
                : "left-8 2xl:left-20 side-panel-left"
            }`}
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316]">
                {hovered.action}
              </span>
              <span className="text-[10px] font-black tracking-widest text-white/40 border border-white/20 px-2 py-0.5">
                {hovered.badge}
              </span>
            </div>

            <h4 className="text-2xl font-serif font-bold text-white leading-tight mb-4">
              {hovered.title}
              <span className="text-[#f97316]">{hovered.orangeText}</span>
            </h4>

            <div className="h-px w-full bg-white/10 mb-4" />

            <p className="text-white/70 text-sm leading-relaxed">{hovered.description}</p>

            
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center items-center justify-between px-8 sm:px-12 pb-8 pt-6 border-t border-white/10">
        
        <h3 className="text-xl font-serif text-white">
          Rigorous quality assurance, automated workflows & enterprise-grade engineering standards <span className="text-[#f97316]">.</span>
        </h3>
        
      </div>
    </div>
  );
}