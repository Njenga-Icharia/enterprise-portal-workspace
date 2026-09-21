'use client';

import React, { useRef, useState, useEffect } from 'react';

export type RevealDirection = 'left' | 'right' | 'top' | 'bottom' | 'fade';

export interface ScrollCurtainItem {
  id: string;
  imageUrl: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  stat?: string;
  statLabel?: string;
  /** Entry direction per element. */
  reveal?: {
    eyebrow?: RevealDirection;
    heading?: RevealDirection;
    body?: RevealDirection;
    stat?: RevealDirection;
  };
}

interface ScrollCurtainProps {
  items: ScrollCurtainItem[];
}

/* Timeline of scroll*/
const TEXT_SCREENS = 0.9; // scroll spent animating each slide's text in
const LIFT_SCREENS = 0.7; // scroll spent lifting the curtain to the next slide

const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
const easeOut = (t: number) => 1 - Math.pow(1 - clamp(t), 3);
/** Maps t within [start, end] to 0..1, eased. */
const windowed = (t: number, start: number, end: number) =>
  easeOut((t - start) / (end - start));

function offsetFor(dir: RevealDirection, r: number, distance = 70): string {
  const rem = 1 - r;
  switch (dir) {
    case 'left':   return `translate3d(${-distance * rem}px,0,0)`;
    case 'right':  return `translate3d(${distance * rem}px,0,0)`;
    case 'top':    return `translate3d(0,${-distance * rem}px,0)`;
    case 'bottom': return `translate3d(0,${distance * rem}px,0)`;
    default:       return 'translate3d(0,0,0)';
  }
}

/** Word transform inside a clipping mask (rises / drops / slides sideways). */
function wordOffset(dir: RevealDirection, r: number): string {
  const rem = 1 - r;
  switch (dir) {
    case 'left':   return `translate3d(${-60 * rem}%,0,0)`;
    case 'right':  return `translate3d(${60 * rem}%,0,0)`;
    case 'top':    return `translate3d(0,${-115 * rem}%,0)`;
    case 'bottom': return `translate3d(0,${115 * rem}%,0) rotate(${4 * rem}deg)`;
    default:       return 'translate3d(0,0,0)';
  }
}

export default function ScrollCurtain({ items }: ScrollCurtainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const n = items.length;

  // Total scroll length of the whole sequence, in screens
  const totalScreens = n * TEXT_SCREENS + Math.max(n - 1, 0) * LIFT_SCREENS;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? clamp(-rect.top / scrollable) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Current position on the timeline, in screens
  const u = progress * totalScreens;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${(totalScreens + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {items.map((item, i) => {
          const isLast = i === n - 1;

          // This slide's phases on the timeline
          const textStart = i * (TEXT_SCREENS + LIFT_SCREENS);
          const textEnd = textStart + TEXT_SCREENS;
          const liftEnd = textEnd + LIFT_SCREENS;

          // 0..1 progress of this slide's text phase (reversible)
          const t = clamp((u - textStart) / TEXT_SCREENS);

          // Curtain lift: begins only once the text has fully landed
          const lift = isLast ? 0 : clamp((u - textEnd) / (liftEnd - textEnd));
          const translateY = -lift * 100;

          // Each element gets its own window inside the text phase (with a hold at the end)
          const eyebrowR = windowed(t, 0.0, 0.25);
          const headingR = windowed(t, 0.12, 0.55);
          const bodyR = windowed(t, 0.45, 0.75);
          const statR = windowed(t, 0.65, 0.92);

          const dirEyebrow = item.reveal?.eyebrow ?? 'left';
          const dirHeading = item.reveal?.heading ?? 'bottom';
          const dirBody = item.reveal?.body ?? 'right';
          const dirStat = item.reveal?.stat ?? 'top';

          const words = item.heading ? item.heading.split(' ') : [];
          const hasText = Boolean(item.eyebrow || item.heading || item.body || item.stat);

          // Slow settle on the photo while the text lands
          const imgScale = 1.1 - 0.1 * easeOut(t);

          return (
            <div
              key={item.id}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{ transform: `translate3d(0,${translateY}%,0)`, zIndex: n - i }}
            >
              <img
                src={item.imageUrl}
                alt=""
                className="w-full h-full object-cover block will-change-transform"
                style={{ transform: `scale(${imgScale})` }}
              />

              {hasText && (
                <>
                  {/* Scrim deepens as text arrives so copy stays legible */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent"
                    style={{ opacity: 0.35 + 0.65 * headingR }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
                      <div className="max-w-2xl">
                        {/* Eyebrow: rule draws out, label slides in */}
                        {item.eyebrow && (
                          <div className="flex items-center gap-3 mb-5">
                            <span
                              className="h-px w-12 bg-[#f97316] origin-left"
                              style={{ transform: `scaleX(${eyebrowR})` }}
                            />
                            <span
                              className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f97316]"
                              style={{
                                opacity: eyebrowR,
                                transform: offsetFor(dirEyebrow, eyebrowR, 50),
                              }}
                            >
                              {item.eyebrow}
                            </span>
                          </div>
                        )}

                        {/* Heading: word-by-word through a mask */}
                        {item.heading && (
                          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white drop-shadow-xl">
                            {words.map((word, k) => {
                              const start = (k / words.length) * 0.55;
                              const wr = easeOut((headingR - start) / 0.45);
                              return (
                                <span
                                  key={k}
                                  className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.25em]"
                                >
                                  <span
                                    className="inline-block will-change-transform"
                                    style={{
                                      opacity: wr,
                                      transform: wordOffset(dirHeading, wr),
                                    }}
                                  >
                                    {word}
                                  </span>
                                </span>
                              );
                            })}
                          </h2>
                        )}

                        {/* Body: slides in with a soft blur-to-focus */}
                        {item.body && (
                          <p
                            className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-white/85 max-w-xl drop-shadow-md will-change-transform"
                            style={{
                              opacity: bodyR,
                              transform: offsetFor(dirBody, bodyR, 80),
                              filter: `blur(${(1 - bodyR) * 8}px)`,
                            }}
                          >
                            {item.body}
                          </p>
                        )}

                        {/* Stat: slides in and scales up, accent bar grows */}
                        {(item.stat || item.statLabel) && (
                          <div
                            className="mt-10 inline-flex items-baseline gap-4 pl-5 relative will-change-transform"
                            style={{
                              opacity: statR,
                              transform: `${offsetFor(dirStat, statR, 60)} scale(${0.9 + 0.1 * statR})`,
                            }}
                          >
                            <span
                              className="absolute left-0 top-0 h-full w-1 bg-[#f97316] origin-top"
                              style={{ transform: `scaleY(${statR})` }}
                            />
                            {item.stat && (
                              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#f97316] drop-shadow-md">
                                {item.stat}
                              </span>
                            )}
                            {item.statLabel && (
                              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">
                                {item.statLabel}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}