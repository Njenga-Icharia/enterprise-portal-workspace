"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

// =========================================
// Type Definitions
// =========================================
interface FormData {
  firstName: string;
  lastName: string;
  designation: string;
  companyName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
  interests: string[];   // ← Explicitly typed as string[]
  agreePrivacy: boolean;
}

export default function Page() {
  // =========================================
  // Form State – properly typed
  // =========================================
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    designation: '',
    companyName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: '',
    interests: [],
    agreePrivacy: false,
  });

  const productOptions = [
    'Artificial Intelligence',
    'Robotic Process Automation',
    'Chatbot',
    'Engineering Business',
    'Digital Agriculture',
    'Internet Of Things',
    'Virtual Reality',
    'Others',
  ];

  // =========================================
  // Handlers – fully typed
  // =========================================
  const handleCheckboxChange = (product: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(product);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== product)
          : [...prev.interests, product],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // TODO: Send to API
  };

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
          Welcome to <span className="text-[#f97316]">Techno Brain</span>
        </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto text-gray-200">
            Global leaders in next-generation digital solutions and consulting services.
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

          {/* Two Column Layout: Text on Left, Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column Text */}
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
            
            {/* Right Column Stacked Cards */}
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

      {/* =========================================
          SQUARE 3: Built for Teams (4 Columns)
          ========================================= */}
      <section className="w-full bg-[#e8ebe9] text-[#1e1e28] py-24 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Area */}
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

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">01</span>
              <h3 className="text-xl font-serif font-bold mb-4">Scalability & Automation</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed italic mb-4">
                "Good to see the investments in automation are enhancing our scalability. This advancement streamlines our processes for our engineering team."
              </p>
              <p className="text-xs font-extrabold uppercase mt-auto">— VP Engineering, Fortune 500</p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">02</span>
              <h3 className="text-xl font-serif font-bold mb-4">Inclusive Accessibility</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed italic mb-4">
                "Great to see the partnership Techno Brain has with Accessibility organizations in Kenya... making our products more accessible and inclusive."
              </p>
              <p className="text-xs font-extrabold uppercase mt-auto">— VP Engineering, Fortune 500</p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-[#f8f9fa] shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col">
              <span className="bg-[#f97316] text-white text-xs font-black px-2.5 py-1 rounded mb-6 w-max">03</span>
              <h3 className="text-xl font-serif font-bold mb-4">Unmatched Efficiency</h3>
              <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed italic mb-4">
                "Great to see a vendor partner focused on improving overall efficiency... aware of the need to get accurate results as fast as possible."
              </p>
              <p className="text-xs font-extrabold uppercase mt-auto">— VP Engineering, Fortune 500</p>
            </div>

            {/* Card 4 */}
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

      {/* =========================================
          SQUARE 4: CauseHouse-Style Orange CTA 
          ========================================= */}
      <section className="w-full bg-[#f97316] py-20 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <span className="inline-block bg-[#1e1e28] text-white text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-[2px_2px_0px_0px_#ffffff]">
              Start Building
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#1e1e28] tracking-tight max-w-3xl leading-tight">
              Ready to build a resilient architecture for your enterprise?
            </h2>
          </div>
          <Link 
            href="/contact"
            className="bg-[#1e1e28] text-white px-8 py-4 rounded-full font-extrabold text-sm tracking-wider uppercase border-2 border-[#1e1e28] shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all whitespace-nowrap"
          >
            Partner With Us
          </Link>
        </div>
      </section>

      {/* =========================================
          SQUARE 4.5: Talk To Us Form Section
          ========================================= */}
      <section id="contact" className="w-full bg-[#e8ebe9] text-[#1c201a] py-24 px-6 sm:px-12 lg:px-24 border-t-2 border-[#1e1e28] font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-block border border-[#1c201a] rounded-full px-5 py-1 text-xs font-bold tracking-wider uppercase bg-transparent">
              GET IN TOUCH
            </div>
            

            {/* Serif Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-none text-[#1c201a]">
              Tell us about your digital goals.
            </h1>

            {/* Subtext */}
            <div className="space-y-1 text-sm sm:text-base text-[#4a4e46] font-medium leading-relaxed">
              <p>Share a bit about your operational challenges and how we can assist.</p>
              <p>Fields marked with <span className="text-[#d9381e]">*</span> are required.</p>
            </div>

            <hr className="border-t border-[#d8d3c5] my-6" />

            {/* Bullet List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316] text-[#1c201a] text-xs font-bold">
                  ✓
                </span>
                Enterprise & Government Solutions — our specialization
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316] text-[#1c201a] text-xs font-bold">
                  ✓
                </span>
                Response within one business day
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316] text-[#1c201a] text-xs font-bold">
                  ✓
                </span>
                Free technical consultation available
              </div>
            </div>

            {/* Call Link */}
            <p className="text-sm font-medium text-[#1c201a] pt-2">
              Prefer to talk live?{' '}
              <a href="#book" className="underline font-semibold decoration-1 underline-offset-2">
                Book a virtual call
              </a>.
            </p>

          </div>

          {/* ================= RIGHT COLUMN (FORM) ================= */}
          <div className="lg:col-span-7 lg:pl-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                    FIRST NAME <span className="text-[#d9381e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                    LAST NAME <span className="text-[#d9381e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                  />
                </div>
              </div>

              {/* Designation & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                    JOB TITLE / ROLE
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                    ORGANIZATION <span className="text-[#d9381e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  BUSINESS EMAIL <span className="text-[#d9381e]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                />
              </div>

              {/* Phone/Mobile */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  PHONE/MOBILE
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-3 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none font-medium text-sm text-[#1c201a]"
                  >
                    <option value="+1">United States +1</option>
                    <option value="+254">Kenya +254</option>
                    <option value="+44">United Kingdom +44</option>
                    <option value="+91">India +91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                  />
                </div>
                <p className="text-xs text-[#6b6e68] mt-1.5 font-medium">
                  Optional — include country / area code when relevant.
                </p>
              </div>

              {/* Digital Solutions / Products Checklist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#1c201a]">
                  DIGITAL SOLUTIONS/PRODUCTS INTERESTED IN
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {productOptions.map((product) => {
                    const isChecked = formData.interests.includes(product);
                    return (
                      <label
                        key={product}
                        onClick={() => handleCheckboxChange(product)}
                        className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer text-xs font-semibold transition select-none ${
                          isChecked
                            ? 'bg-[#1c201a] text-white border-[#1c201a]'
                            : 'bg-[#ebe6da] border-[#a8a396] text-[#1c201a] hover:border-[#1c201a]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded accent-[#F97316] border-[#a8a396]"
                        />
                        {product}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  MESSAGE <span className="text-[#d9381e]">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-2xl focus:outline-none focus:border-[#1c201a] font-medium transition resize-none"
                />
                <p className="text-xs text-[#6b6e68] mt-1.5 font-medium">
                  Max 5000 characters.
                </p>
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  id="privacy-check"
                  required
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="w-4 h-4 rounded border-[#a8a396] accent-[#1c201a] cursor-pointer"
                />
                <label htmlFor="privacy-check" className="text-sm font-semibold text-[#1c201a] cursor-pointer">
                  I agree to the <span className="underline decoration-1 underline-offset-2">Privacy Policy</span>. <span className="text-[#d9381e]">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#f97316] hover:bg-[#f97316] text-[#1c201a] font-bold text-xs uppercase tracking-wider rounded-full border border-[#1c201a] shadow-[2px_2px_0px_0px_#1c201a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  SEND MESSAGE
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>




{/* =========================================
          SQUARE 4.75: Animated Crow & Scenery
          ========================================= */}
      <section className="relative w-full h-[350px] sm:h-[450px] border-t-2 border-[#1e1e28] overflow-hidden bg-[#e8ebe9]">
        
        {/* Your Background Picture 
            (Just drop your image in the public folder and update the src) */}
        <img 
          src="better2.jpg" 
          alt="Scenery" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional overlay if your image is too bright and you want the bird to pop */}
        <div className="absolute inset-0 bg-[#e8ebe9]/20"></div>

        {/* Inline style for the custom flight path so you don't have to edit tailwind.config.js */}
        <style>{`
          @keyframes fly-across {
            0% { transform: translate(-10vw, 20px) rotate(-5deg); }
            25% { transform: translate(30vw, -15px) rotate(5deg); }
            50% { transform: translate(60vw, 15px) rotate(-2deg); }
            75% { transform: translate(90vw, -10px) rotate(5deg); }
            100% { transform: translate(110vw, 5px) rotate(0deg); }
          }
          .animate-crow {
            animation: fly-across 18s linear infinite;
          }
        `}</style>

        {/* The "M" Crow */}
        <div className="absolute top-1/4 left-0 z-10 animate-crow">
          <svg 
            width="64" 
            height="24" 
            viewBox="0 0 64 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            <path 
              d="M4 20 C 12 -4, 22 -4, 32 14 C 42 -4, 52 -4, 60 20" 
              stroke="#1e1e28" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
      </section>











      {/* =========================================
          SQUARE 5: Dark Charcoal Footer (CauseHouse Clone)
          ========================================= */}
      <footer className="w-full bg-[#1e1e28] text-[#f8f9fa] pt-20 pb-12 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Footer Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
            
            {/* Col 1 & 2: Branding & Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="font-black text-2xl tracking-tight flex items-center gap-2 text-white">
                <span className="text-3xl">🧠</span> TechnoBrain
              </Link>
              <p className="text-white/70 text-sm font-medium max-w-sm leading-relaxed">
                Global leaders in next-generation digital solutions, cloud systems, and consulting services operating across 15 countries.
              </p>
              
              <div className="space-y-2 text-sm text-white/80 pt-2">
                <p className="font-bold text-white uppercase tracking-wider text-xs">US Office</p>
                <p className="text-white/70">109 East 17th Street Suite 80, Cheyenne, WY 82001</p>
                <p className="text-white/70">Tel: +1 302 893 0609</p>
              </div>

              <div className="space-y-2 text-sm text-white/80 pt-2">
                <p className="font-bold text-white uppercase tracking-wider text-xs">Kenya Office</p>
                <p className="text-white/70">Heritan House Woodlands Rd, P.O. Box 57666-00200, Nrb</p>
                <p className="text-white/70">Tel: +254 738 770 186 / Email: info@technobraingroup.com</p>
              </div>

              <div className="pt-4 flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/techno-brain-limited/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-[#18201a] transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/TechnoBrainLtd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-[#18201a] transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Col 3: Solutions */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f97316]">Solutions</h4>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link href="/solutions/public-sector" className="hover:text-white transition-colors">Public Sector</Link></li>
                <li><Link href="/solutions/private-sector" className="hover:text-white transition-colors">Private Sector</Link></li>
                <li><Link href="/solutions/identity-management" className="hover:text-white transition-colors">Identity Management</Link></li>
                <li><Link href="/solutions/revenue-management" className="hover:text-white transition-colors">Revenue Management</Link></li>
                <li><Link href="/solutions/tax-and-customs" className="hover:text-white transition-colors">Tax and Customs</Link></li>
              </ul>
            </div>

            {/* Col 4: Engineering & Cloud */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f97316]">Expertise</h4>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link href="/engineering" className="hover:text-white transition-colors">Engineering & QA</Link></li>
                <li><Link href="/cloud-services" className="hover:text-white transition-colors">Cloud Services</Link></li>
                <li><Link href="/bpo" className="hover:text-white transition-colors">BPO Services</Link></li>
                <li><Link href="/engineering/compatibility" className="hover:text-white transition-colors">Microsoft Partnership</Link></li>
                <li><Link href="/cloud-services/gen-ai" className="hover:text-white transition-colors">Generative AI</Link></li>
              </ul>
            </div>

            {/* Col 5: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f97316]">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about/history" className="hover:text-white transition-colors">Company History</Link></li>
                <li><Link href="/about/governance" className="hover:text-white transition-colors">Corporate Governance</Link></li>
                <li><Link href="/about/people" className="hover:text-white transition-colors">Our People</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contacts</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer Sub-Grid (Services like CauseHouse) */}
          <div className="pt-12 pb-8 border-b border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-white/60">Core Capabilities</h5>
              <Link href="/services" className="text-xs font-bold text-[#f97316] hover:underline">All services →</Link> 
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/70 font-medium">
              <ul className="space-y-2">
                <li>Custom Software Dev</li>
                <li>Cloud Migration</li>
                <li>Public Finance Systems</li>
                <li>Identity Management</li>
              </ul>
              <ul className="space-y-2">
                <li>Tax & Revenue Platforms</li>
                <li>Grant Management</li>
                <li>Document Management</li>
                <li>Monitoring & Evaluation</li>
              </ul>
              <ul className="space-y-2">
                <li>Robotic Process Automation</li>
                <li>Power BI & Analytics</li>
                <li>Software Quality Assurance</li>
                <li>Microsoft Workloads</li>
              </ul>
              <ul className="space-y-2">
                <li>BPO & Customer Lifecycle</li>
                <li>Impact Sourcing</li>
                <li>DevOps & FinOps</li>
                <li>Security & Compliance</li>
              </ul>
            </div> 
          </div>

          {/*Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-medium gap-4">
            <p>© 2026 Techno Brain Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}