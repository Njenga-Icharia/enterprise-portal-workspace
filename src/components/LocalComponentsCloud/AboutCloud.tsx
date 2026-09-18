import React from "react";

interface CloudProofPoint {
  value: string;
  label: string;
}

interface AboutCloudProps {
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  proofPoints?: CloudProofPoint[];
}

export default function AboutCloud({
  eyebrow = "About Us",
  headline = "Enterprise cloud, end to end.",
  paragraphs = [
    "Techno Brain is a systems integration and turnkey cloud services provider. We design, migrate, and operate AWS and Microsoft Azure environments for enterprises and public-sector organizations — backed by certified architects and delivered through CMMI DEV/3 processes.",
    "As an AWS Select Tier Partner, AWS Public Sector Partner, and Microsoft Azure partner, we bring dual-cloud depth to organizations that need infrastructure which is secure, compliant, and cost-efficient at scale.",
  ],
  proofPoints = [
    { value: "AWS · Azure", label: "Dual-cloud certified" },
    { value: "CMMI DEV/3", label: "Appraised maturity" },
    { value: "24/7", label: "Monitoring & support" },
    { value: "6", label: "Cloud service lines" },
  ],
}: AboutCloudProps) {
  return (
    <section
      aria-label="About our cloud practice"
      className="w-full bg-[#e8ebe9] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Top row: eyebrow & left headline*/}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#f97316]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f97316]">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold leading-[1.05] text-[#1e1e28] sm:text-5xl lg:text-6xl">
              {headline}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-[#1e1e28]/75 sm:text-xl ${
                  i > 0 ? "mt-6" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom*/}
        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[#1e1e28]/10 pt-12 lg:mt-24 lg:grid-cols-4 lg:pt-16">
          {proofPoints.map((p) => (
            <div key={p.label}>
              <dd className="font-serif text-2xl font-bold text-[#4b456f] sm:text-3xl lg:text-4xl">
                {p.value}
              </dd>
              <dt className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1e1e28]/50">
                {p.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}