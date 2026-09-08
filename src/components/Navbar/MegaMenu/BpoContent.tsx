import Link from "next/link";
import { MegaMenuLink } from "./MegaMenuLink";
import { MegaMenuCard } from "./MegaMenuCard";

export function BpoContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
          BPO
        </span>
        <Link href="/bpo" className="group inline-block mb-2 w-max">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            Enterprise BPO
          </h2>
        </Link>
        <p className="text-sm font-medium text-white/90 mb-8">
          Managed under one roof in Kenya
        </p>
        <div className="border-t border-black/20 pt-6 space-y-3">
          <MegaMenuLink href="/bpo/solutions" label="BPO Solutions" />
          <MegaMenuLink href="/bpo/compliance" label="BPO Compliance" />
          <MegaMenuLink href="/bpo/industry-verticals" label="Industry Verticals" />
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-8">
          ADVANTAGE
        </span>
        <div className="grid grid-cols-3 gap-6">
          <MegaMenuCard href="/bpo/impact-sourcing" imageSrc="/impactsourcing.svg" title="Impact Sourcing" subtitle="Socially Responsible BPO" />
          <MegaMenuCard href="/bpo/process-automation" imageSrc="/automation.svg" title="Process Automation" subtitle="Increased Efficiency" />
          <MegaMenuCard href="/bpo/quality" imageSrc="/quality.svg" title="World Class Quality" subtitle="Standardized processes" />
        </div>
      </div>
    </div>
  );
}