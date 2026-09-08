'use client';

import { useEffect, useRef, useState } from 'react';

export default function Deadshot() {
  const [isMounted, setIsMounted] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // This ensures the cursor only renders AFTER the component has mounted on the client browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isMoving = false;
    let idleTimer: NodeJS.Timeout;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      isMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 100);
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const render = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        const scale = isMoving ? 1.35 : 0.85;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(idleTimer);
    };
  }, [isMounted]);

  // If we are still on the server, render nothing. Prevents SSR hydration mismatch completely!
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        body, a, button, input, textarea, select {
          cursor: none !important;
        }

        /* When the cursor is inside any element with class 'no-orange-cursor', switch its color */
        body:has(.no-orange-cursor:hover) .deadshot-dot {
          background-color: #1e1e28 !important;
          box-shadow: 0 0 10px #ffffff !important;
        }
        body:has(.no-orange-cursor:hover) .deadshot-ring {
          border-color: #1e1e28 !important;
        }
        body:has(.no-orange-cursor:hover) .deadshot-line {
          background-color: #1e1e28 !important;
        }
      `}</style>

      {/* Glowing Center Dot */}
      <div
        ref={dotRef}
        className="deadshot-dot pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#ff7700,0_0_4px_#ff9933]"
      />

      {/* Trailing Crosshair Scope with Glowing Lines */}
      <div
        ref={ringRef}
        className="deadshot-ring pointer-events-none fixed top-0 left-0 z-[9998] flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-orange-500 shadow-[0_0_10px_rgba(255,119,0,0.4)] transition-transform duration-150 ease-out"
      >
        <div className="relative h-full w-full">
          <div className="deadshot-line absolute top-1/2 left-1/2 h-[1.5px] w-3 -translate-x-1/2 -translate-y-1/2 bg-orange-500 shadow-[0_0_6px_#ff7700]" />
          <div className="deadshot-line absolute top-1/2 left-1/2 h-3 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-orange-500 shadow-[0_0_6px_#ff7700]" />
        </div>
      </div>
    </>
  );
}