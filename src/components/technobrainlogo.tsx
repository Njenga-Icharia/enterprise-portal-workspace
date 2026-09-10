// components/Logo.tsx
interface LogoProps {
  isDark?: boolean;
}

export default function Logo({ isDark = false }: LogoProps) {
  return (
    <div className="flex flex-col w-max select-none p-2">
      {/* TOP ROW */}
      <div className="flex gap-1.5 mb-1.5">
        <div className="w-8 h-8 bg-[#f97316]"></div>
        <div className={`w-8 h-8 transition-colors ${isDark ? "bg-white/80" : "bg-[#56536b]"}`}></div>
      </div>

      {/* BOTTOM ROW (The 'T' locks into the empty space) */}
      <div className="flex gap-1.5 items-start">
        <div className={`w-8 h-8 flex-shrink-0 transition-colors ${isDark ? "bg-white/80" : "bg-[#56536b]"}`}></div>
        
        <div className="flex items-center font-sans font-extrabold text-[34px] leading-[32px] tracking-tight -mt-[2px]">
          <span className={`transition-colors ${isDark ? "text-white" : "text-[#3b3852]"}`}>TECHNO</span>
          <span className="text-[#f97316] ml-2">BRAIN</span>
        </div>
      </div>

      {/* TAGLINE: Uses text size and even letter spacing to stretch naturally */}
      <div className={`text-[14px] italic font-medium tracking-[0.15em] pl-[130px] mt-1 transition-colors ${isDark ? "text-white/80" : "text-[#56536b]"}`}>
        Empowering Lives
      </div>
    </div>
  );
}