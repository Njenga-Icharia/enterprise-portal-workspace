import React, { useRef, useState, useEffect } from 'react';

export interface ScrollCurtainItem {
  id: string;
  imageUrl: string;
}

interface ScrollCurtainProps {
  items: ScrollCurtainItem[];
}

export default function ScrollCurtain({ items }: ScrollCurtainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const n = items.length;
  const segments = Math.max(n - 1, 1); // number of "lift" transitions

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;

      let p = totalScrollable > 0 ? currentScroll / totalScrollable : 0;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerHeight = `${n * 100}vh`;

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: containerHeight }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {items.map((item, i) => {
          const isLast = i === n - 1;

          // Each layer only animates during its own slice of the scroll range.
          // Before its turn: stays at 0 (hidden behind the layer above).
          // After its turn: fully retracted to -100% (off the top).
          let translateY = 0;
          if (!isLast) {
            const segStart = i / segments;
            const segEnd = (i + 1) / segments;
            const local = Math.max(0, Math.min(1, (progress - segStart) / (segEnd - segStart)));
            translateY = -local * 100;
          }

          return (
            <div
              key={item.id}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                transform: `translateY(${translateY}%)`,
                zIndex: n - i, // first image on top, last image on bottom
              }}
            >
              <img src={item.imageUrl} alt="" className="w-full h-full object-cover block" />

              {/* Placeholder for words later */}
              <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                {/* words go here */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}