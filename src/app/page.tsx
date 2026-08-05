import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] overflow-x-hidden">
      
      {/* Navbar Component */}
      <Navbar />
      
      {/* =========================================
          SQUARE 1: Full-Screen Hero Background Video 
          ========================================= */}
      <section className="relative w-full h-[calc(100vh-6rem)] flex items-center justify-center shrink-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/league1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight">
            Welcome to Techno Brain
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto text-gray-200">
            Resilient architectures and next-gen enterprise systems.
          </p>
        </div>
      </section>

      {/* =========================================
          SQUARE 2: Dark Theme Stats & About 
          ========================================= */}
      <section className="w-full bg-[#1e1e28] text-[#f8f9fa] py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Stat Banner */}
          <div className="border border-white/20 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <h2 className="text-7xl md:text-9xl font-black text-[#f97316] tracking-tighter">
              10M+
            </h2>
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-3 leading-tight">
                in enterprise infrastructure systems supported
              </h3>
              <p className="text-white/70 text-sm md:text-base font-medium">
                Across public sector frameworks, cloud architecture, and mission-driven organizations through systems leadership and advisory work.
              </p>
            </div>
          </div>

          {/* Two Column Layout: Text on Left, Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column Text */}
            <div>
              <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
                About Techno Brain
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                Websites, cloud systems, and growth infrastructure for enterprise.
              </h2>
              <p className="text-white/80 mb-6 text-lg">
                We help teams build the digital systems behind sustainable growth — from secure cloud environments to interconnected reporting and citizen journeys.
              </p>
              <p className="text-white/80 mb-10 text-lg">
                Everything is designed to work together, so trust, data, and long-term engagement can scale securely.
              </p>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-extrabold text-xs tracking-wider uppercase hover:bg-white hover:text-[#1e1e28] transition-colors">
                Learn More About Us
              </button>
            </div>
            
            {/* Right Column Stacked Cards */}
            <div className="space-y-6">
              
              <div className="border border-white/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-[#f97316] font-black text-sm pt-1">01</span>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-3 text-white">Systems, not one-off projects</h4>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">We map the full architecture — from first login to data processing and reporting — so every touchpoint works as one connected ecosystem.</p>
                  </div>
                </div>
              </div>

              <div className="border border-white/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-[#f97316] font-black text-sm pt-1">02</span>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-3 text-white">Creative with accountability</h4>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">UX, system design, and reporting all live inside one measurable framework built for long-term scalability.</p>
                  </div>
                </div>
              </div>

              <div className="border border-white/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-[#f97316] font-black text-sm pt-1">03</span>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-3 text-white">Connected infrastructure</h4>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">Your databases, citizen journeys, and cloud environments should work as one unified tool — not a patchwork of disconnected systems.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SQUARE 3: Built for Teams (4 Columns)
          ========================================= */}
      <section className="w-full bg-[#e8ebe9] text-[#1e1e28] py-24 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block border-2 border-[#1e1e28] rounded-full px-4 py-1 text-xs font-extrabold tracking-widest uppercase mb-6 bg-[#f8f9fa]">
                Who We Serve
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight">
                Built for teams that need every system working together.
              </h2>
            </div>
            <div className="max-w-md lg:pb-4">
              <p className="text-[#1e1e28]/80 text-lg font-medium">
                From fast-moving enterprise groups to established public sectors, we build the digital infrastructure behind security, scaling, and long-term engagement.
              </p>
            </div>
          </div>

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">01</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Public Sector readiness</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed">
                For organizations that need secure portals, citizen journeys, and reporting systems built to support national scalability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">02</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Enterprise & Corporate</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed">
                Fast-moving companies that need high-converting architecture, scalable databases, and systems that move quickly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">03</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Identity & Security</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed">
                Authentication flows, connected user journeys, and infrastructure built to strictly increase digital trust.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">04</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Organizations rebuilding</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed">
                For teams modernizing outdated legacy frameworks, disconnected tools, and fragmented backend experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}