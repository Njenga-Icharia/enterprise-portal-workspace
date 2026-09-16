import Link from "next/link";
import { MegaMenuLink } from "./MegaMenuLink";
import { MegaMenuCard } from "./MegaMenuCard";

export function AboutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
          ABOUT US
        </span>
        <Link href="/about" className="group inline-block mb-2 w-max">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            Global Footprint
          </h2>
        </Link>
        <p className="text-sm font-medium text-white/90 mb-8">
          Next-generation digital solutions & consulting
        </p>
        <div className="border-t border-black/20 pt-6 space-y-3">
          <MegaMenuLink href="/about/history" label="Company History" />
          <MegaMenuLink href="/about/governance" label="Corporate Governance" />
          <MegaMenuLink href="/about/people" label="Our People" />
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-8">
          REACH OUT
        </span>
        <div className="grid grid-cols-3 gap-6">
          <MegaMenuCard href="/about/foundation" imageSrc="/foundation.svg" title="Foundation" subtitle="Our global impact" />
          <MegaMenuCard href="/contact" imageSrc="/contact.svg" title="Contacts" subtitle="US & Kenya Offices" />
          <MegaMenuCard href="/countries" imageSrc="/countries.svg" title="Countries" subtitle="Customer footprint" />
        </div>
      </div>
    </div>
  );
}