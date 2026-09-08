import Link from "next/link";

interface MegaMenuLinkProps {
  href: string;
  label: string;
}

export function MegaMenuLink({ href, label }: MegaMenuLinkProps) {
  return (
    <>
      <Link href={href} className="group relative inline-block">
        <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
          {label}
        </span>
        <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
      <div className="border-t border-black/20" />
    </>
  );
}