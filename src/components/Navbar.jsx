"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EB] border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
          🏡 CauseHouse
        </Link>

        {/* Nav Links with Hover State */}
        <nav className="hidden md:flex items-center space-x-8">
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              SERVICES
            </button>
            
            {/* Services Dropdown Panel */}
            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-[#C3E865] rounded-xl p-6 shadow-xl grid grid-cols-2 gap-6 border border-black/10">
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-black/60 mb-3">View all services</h4>
                  <ul className="space-y-2 font-serif text-lg">
                    <li><Link href="#" className="hover:underline">Web development</Link></li>
                    <li><Link href="#" className="hover:underline">CRM consulting</Link></li>
                    <li><Link href="#" className="hover:underline">Automations</Link></li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-black/10">
                  <span className="text-xs font-bold text-gray-500 uppercase">Featured</span>
                  <p className="font-serif font-bold text-md mt-1">Nonprofit web design</p>
                  <p className="text-xs text-gray-600 mt-1">Sites that convert donors</p>
                </div>
              </div>
            )}
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

        {/* Call to Action Button */}
        <div>
          <Link 
            href="/contact" 
            className="bg-[#C3E865] border border-black px-5 py-2.5 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            WORK WITH US
          </Link>
        </div>

      </div>
    </header>
  );
}