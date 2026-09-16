import Link from "next/link";
import { MegaMenuLink } from "./MegaMenuLink";
import { MegaMenuCard } from "./MegaMenuCard";

export function EngineeringContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
          ENGINEERING
        </span>
        <Link href="/engineering" className="group inline-block mb-2 w-max">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            Engineering
          </h2>
        </Link>
        <p className="text-sm font-medium text-white/90 mb-8">
          Delivered from the Silicon Savannah
        </p>
        <div className="border-t border-black/20 pt-6 space-y-3">
          <MegaMenuLink href="/engineering/compatibility" label="App & Software Compatibility" />
          <MegaMenuLink href="/engineering/security-testing" label="Security & Privacy Validation" />
          <MegaMenuLink href="/engineering/devops" label="DevOps & Automation" />
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-8">
          CAPABILITIES
        </span>
        <div className="grid grid-cols-3 gap-6">
          <MegaMenuCard href="/engineering/data-analytics" imageSrc="/dataanalytics.svg" title="Data Analytics" subtitle="ML & Actionable Insights" />
          <MegaMenuCard href="/engineering/development" imageSrc="/development.svg" title="Development" subtitle="Tailored software solutions" />
          <MegaMenuCard href="/engineering/accessibility" imageSrc="/access2.svg" title="Accessibility Testing" subtitle="Inclusive digital products" />
        </div>
      </div>
    </div>
  );
}