import React, { useRef, useState, useEffect } from 'react';

export interface ScrollStackItem {
  id: string;
  imageUrl: string;
}

interface ScrollStackProps {
  items: ScrollStackItem[];
  bgColor?: string; // Optional background color for the container
}

export default function ScrollStack({ items, bgColor = "bg-[#4b456f]" }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // The total distance we can scroll within this container
      const totalScrollable = rect.height - windowHeight;
      
      // How far we have scrolled into the container
      const currentScroll = -rect.top;
      
      // Calculate progress (0 to 1)
      let progress = currentScroll / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Total height of the container is 100vh per image
  const containerHeight = `${items.length * 100}vh`;

  // We translate the stack upwards. For 3 items, we need to move it up 200vh.
  const maxTranslate = (items.length - 1) * 100;
  const translateY = `-${scrollProgress * maxTranslate}vh`;

  return (
    <div 
      ref={containerRef} 
      className="relative w-full" 
      style={{ height: containerHeight }}
    >
      {/* The sticky viewport. This stays pinned to the top of the screen. */}
      <div className={`sticky top-0 h-screen w-full overflow-hidden ${bgColor} z-0`}>
        
        {/* The sliding stack of images */}
        <div 
          className="absolute inset-0 w-full flex flex-col will-change-transform"
          style={{ transform: `translateY(${translateY})` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full h-screen shrink-0 relative flex items-center justify-center">
              
              {/* The Image */}
              <img 
                src={item.imageUrl} 
                alt="" 
                className="w-full h-full object-cover absolute inset-0" 
              />
              
              {/* Overlay for text (to be added later) */}
              <div className="relative z-10 text-white p-8 max-w-4xl text-center">
                {/* Words go here later */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}