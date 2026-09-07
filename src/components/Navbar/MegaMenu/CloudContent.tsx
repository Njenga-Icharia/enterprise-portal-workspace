import Link from "next/link";
import { MegaMenuLink } from "./MegaMenuLink";
import { MegaMenuCard } from "./MegaMenuCard";

export function CloudContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
          CLOUD EXPERTISE
        </span>
        <Link href="/cloud-services" className="group inline-block mb-2 w-max">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            Cloud Innovation
          </h2>
        </Link>
        <p className="text-sm font-medium text-white/90 mb-8">
          AWS & Microsoft Azure Partnerships
        </p>
        <div className="border-t border-black/20 pt-6 space-y-3">
          <MegaMenuLink href="/cloud-services/managed" label="Managed Cloud Services" />
          <MegaMenuLink href="/cloud-services/migration" label="Cloud Migration" />
          <MegaMenuLink href="/cloud-services/finops" label="FinOps & Optimization" />
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-8">
          INNOVATION
        </span>
        <div className="grid grid-cols-3 gap-6">
          <MegaMenuCard href="/cloud-services/gen-ai" imageSrc="/generativeAI.svg" title="Generative AI" subtitle="Gen-AI Solutions" />
          <MegaMenuCard href="/cloud-services/devops-cloud" imageSrc="/devops.svg" title="DevOps Cloud" subtitle="Streamlined Pipelines" />
          <MegaMenuCard href="/cloud-services/microsoft-workload" imageSrc="/workload.svg" title="Microsoft Workload" subtitle="Dedicated Solutions" />
        </div>
      </div>
    </div>
  );
}