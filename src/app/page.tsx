"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EB] border-b border-gray-200">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
          🏡 CauseHouse
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-sm font-medium text-gray-800 hover:text-black transition-colors py-2">
              SERVICES
            </button>
          </div>

          <Link href="/about" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            ABOUT
          </Link>
          <Link href="/who-we-serve" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            WHO WE SERVE
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            CASE STUDIES
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            RESOURCES
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link 
            href="/contact" 
            className="bg-[#C3E865] border border-black px-5 py-2.5 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            WORK WITH US
          </Link>
        </div>

      </div>

      {/* Wall-to-Wall Dropdown Panel (Appears below the main header when hovering Services) */}
      {activeDropdown === "services" && (
        <div 
          className="absolute top-full left-0 w-full bg-[#C3E865] border-b border-black/10 shadow-2xl py-10 px-6 sm:px-8 lg:px-12 transition-all"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Links */}
            <div className="md:col-span-7">
              <span className="text-xs font-bold tracking-wider uppercase text-black/60 mb-3 block">
                Services
              </span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                View all services
              </h2>
              <p className="text-sm text-gray-800 mb-6 font-medium">Full catalog & how we work</p>
              
              <div className="space-y-4 border-t border-black/10 pt-6">
                <Link href="#" className="block font-serif text-2xl font-bold hover:translate-x-2 transition-transform">
                  Web development
                </Link>
                <Link href="#" className="block font-serif text-2xl font-bold hover:translate-x-2 transition-transform">
                  CRM consulting
                </Link>
                <Link href="#" className="block font-serif text-2xl font-bold hover:translate-x-2 transition-transform">
                  Automations
                </Link>
              </div>
            </div>

            {/* Right side: Featured Cards (Just like CauseHouse) */}
            <div className="md:col-span-5 grid grid-cols-1 gap-4">
              <span className="text-xs font-bold tracking-wider uppercase text-black/60 block">
                Featured
              </span>
              <div className="bg-white p-6 rounded-xl border border-black shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl">Nonprofit web design</h3>
                  <p className="text-sm text-gray-600 mt-1">Sites that convert donors</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}