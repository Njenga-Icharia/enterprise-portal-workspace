import Link from "next/link";

interface MegaMenuCardProps {
  href: string;
  imageSrc: string;
  title: string;
  subtitle: string;
}

export function MegaMenuCard({ href, imageSrc, title, subtitle }: MegaMenuCardProps) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1"
    >
      <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
        <img src={imageSrc} alt={title} className="h-full max-h-40 w-auto object-contain" />
      </div>
      <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">
        {title}
      </h4>
      <p className="text-xs text-white/80 mt-1 font-medium">{subtitle}</p>
    </Link>
  );
}