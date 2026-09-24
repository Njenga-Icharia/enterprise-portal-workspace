import React from "react";

export default function ClientImpact() {
  return (
    <section className="w-full bg-[#e8ebe9] text-[#1e1e28] py-24 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block border-2 border-[#1e1e28] rounded-full px-4 py-1 text-xs font-extrabold tracking-widest uppercase mb-6 bg-[#f8f9fa]">
              Client Impact
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight">
              Stories of satisfaction, trust and success.
            </h2>
          </div>
          <div className="max-w-md lg:pb-4">
            <p className="text-[#1e1e28]/80 text-lg font-medium">
              From diverse corners of the world, our Fortune 500 partners and massive public sector clients rely on our custom engineering capabilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
            <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">01</span>
            <h3 className="text-xl font-serif font-bold mb-4">Scalability & Automation</h3>
            <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed italic mb-4">
              "Good to see the investments in automation are enhancing our scalability. This advancement streamlines our processes for our engineering team."
            </p>
            <p className="text-xs font-extrabold uppercase mt-auto">— VP Engineering, Fortune 500</p>
          </div>

          <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
            <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">02</span>
            <h3 className="text-xl font-serif font-bold mb-4">Inclusive Accessibility</h3>
            <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed italic mb-4">
              "Great to see the partnership Techno Brain has with Accessibility organizations in Kenya... making our products more accessible and inclusive."
            </p>
            <p className="text-xs font-extrabold uppercase mt-auto">— VP Engineering, Fortune 500</p>
          </div>

          <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
            <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">03</span>
            <h3 className="text-xl font-serif font-bold mb-4">Unmatched Efficiency</h3>
            <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed italic mb-4">
              "Great to see a vendor partner focused on improving overall efficiency... aware of the need to get accurate results as fast as possible."
            </p>
            <p className="text-xs font-extrabold uppercase mt-auto">— VP Engineering, Fortune 500</p>
          </div>

          <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
            <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">04</span>
            <h3 className="text-xl font-serif font-bold mb-4">Proven Enterprise Impact</h3>
            <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed mb-4">
              Successfully driving core infrastructure from IFMIS platforms in Ethiopia to RPA implementations for Safaricom and Tax systems in Malawi.
            </p>
            <p className="text-xs font-extrabold uppercase mt-auto text-[#f97316]">View Case Studies →</p>
          </div>
        </div>
      </div>
    </section>
  );
}