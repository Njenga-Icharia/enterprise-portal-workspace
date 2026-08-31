import React from "react";
import Link from "next/link";

export default function StatsAbout() {
  return (
    <section className="w-full bg-[#1e1e28] text-[#f8f9fa] py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="border border-white/20 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <h2 className="text-7xl md:text-9xl font-black text-[#f97316] tracking-tighter">
            18M+
          </h2>
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-3 leading-tight">
              Subscribers on our platform
            </h3>
            <p className="text-white/70 text-sm md:text-base font-medium">
              Scaling robust digital infrastructure across a massive global footprint of over 35 countries and 470+ successfully implemented projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
              About Techno Brain
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              Transforming business and achieving strategic goals.
            </h2>
            <p className="text-white/80 mb-6 text-lg">
              We are global leaders currently operating in 15 countries and creating 1,200 high-tech jobs globally. We empower the workforce with 75,000+ trained personnel in our institutions.
            </p>
            <p className="text-white/80 mb-10 text-lg">
              From pioneering Africa's digital integration to building accessible frameworks, our solutions are designed to make your operations swift and agile.
            </p>
            <Link href="/about" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-extrabold text-xs tracking-wider uppercase hover:bg-white hover:text-[#1e1e28] transition-colors">
              Discover How
            </Link>
          </div>

          <div className="space-y-6">
            <div className="border border-white/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#f97316] font-black text-sm pt-1">01</span>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3 text-white">CMMI Maturity Level 5</h4>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">Appraised at the highest maturity level, ensuring our development and delivery processes meet strict, world-class quality standards.</p>
                </div>
              </div>
            </div>

            <div className="border border-white/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#f97316] font-black text-sm pt-1">02</span>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3 text-white">1st Microsoft Testing Center</h4>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">We launched Africa’s first-ever Microsoft software testing and quality assurance center, pioneering technical excellence on the continent.</p>
                </div>
              </div>
            </div>

            <div className="border border-white/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#f97316] font-black text-sm pt-1">03</span>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3 text-white">Great Place To Work®</h4>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">Officially certified for back-to-back years, clinching top spots for Gen-Z engagement and cultivating a thriving global engineering culture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}