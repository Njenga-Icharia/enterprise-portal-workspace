"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Building2, ArrowRight, Globe, Mail, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState("solutions");
  const timeoutRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const isOpen = activeDropdown !== null || mobileMenuOpen;

  return (
    <header className={`sticky top-0 z-50 border-b-2 border-[#1e1e28] transition-colors duration-300 ${isOpen ? "bg-[#f97316]" : "bg-[#f8f9fa]"}`}>
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between relative z-20">
        <Link href="/" className={`font-black text-xl tracking-tight flex items-center gap-2 ${isOpen ? "text-white" : "text-[#1e1e28]"}`}>
          <span className="text-2xl">🧠</span> TechnoBrain
        </Link>

        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {/* Solutions */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "solutions" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Solutions
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "solutions" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>
          {/* Engineering */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("engineering")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "engineering" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Engineering
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "engineering" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>
          {/* Cloud Services */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("cloud-services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "cloud-services" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              Cloud Services
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "cloud-services" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>
          {/* BPO */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("bpo")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "bpo" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              BPO
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "bpo" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>
          {/* About Us */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("about-us")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`relative group py-2 text-sm font-extrabold tracking-wider uppercase transition-colors ${activeDropdown === "about-us" ? "text-white" : isOpen ? "text-white/90" : "text-[#1e1e28]"}`}>
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-[3px] transform transition-transform duration-300 origin-left ${activeDropdown === "about-us" ? "scale-x-100 bg-white" : isOpen ? "scale-x-0 bg-white" : "scale-x-0 group-hover:scale-x-100 bg-[#f97316]"}`}></span>
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className={`hidden lg:inline-block px-6 py-3 rounded-full border-2 border-[#1e1e28] font-extrabold text-sm tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1e1e28] transition-all ${isOpen ? "bg-white text-[#1e1e28]" : "bg-[#f97316] text-white"}`}
          >
            Contact Us
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-[#f8f9fa] border-2 border-[#1e1e28] text-[#1e1e28] p-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-[3px_3px_0px_0px_#1e1e28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e1e28] transition-all flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Deep Sliding Dropdown Panel */}
      <div 
        className={`hidden lg:block absolute top-full left-0 w-full bg-[#f97316] border-b-2 border-[#1e1e28] shadow-[0px_25px_0px_0px_#1e1e28] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[900px] opacity-100 py-12" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* ====== SOLUTIONS CONTENT ====== */}
          {activeDropdown === "solutions" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 flex flex-col">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">PUBLIC SECTOR</span>
                <Link href="/solutions/public-sector" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">Government Solutions</h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">Harnessing Africa's Ingenuity</p>
                <div className="border-t border-black/20 pt-6 space-y-3">
                  <Link href="/solutions/identity-management" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Identity Management</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/public-finance-management" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Public Finance Management</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/revenue-management" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Revenue Management System</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/tax-and-customs" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Tax and Customs</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">PRIVATE SECTOR</span>
                <Link href="/solutions/private-sector" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">Enterprise Solutions</h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">Empowering swift and agile operations</p>
                <div className="border-t border-black/20 pt-6 space-y-3">
                  <Link href="/solutions/grant-management" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Grant Management</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/document-management" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Document Management</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/monitoring-and-evaluation" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Monitoring and Evaluation</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/robotic-process-automation" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Robotic Process Automation</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/solutions/power-bi" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Power BI</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ====== ENGINEERING CONTENT ====== */}
          {activeDropdown === "engineering" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">Engineering</span>
                <Link href="/engineering" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">Engineering</h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">Delivered from the Silicon Savannah</p>
                <div className="border-t border-black/20 pt-6 space-y-3">
                  <Link href="/engineering/compatibility" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">App & Software Compatibility</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/engineering/security-testing" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Security & Privacy Validation</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/engineering/devops" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">DevOps & Automation</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-extrabold tracking-wider uppercase text-white">CAPABILITIES</span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {/* Data Analytics */}
                  <Link href="/engineering/data-analytics" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/dataanalytics.svg" alt="Data Analytics" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Data Analytics</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">ML & Actionable Insights</p>
                  </Link>

                  {/* Development */}
                  <Link href="/engineering/development" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/development.svg" alt="Development Services" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Development</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Tailored software solutions</p>
                  </Link>

                  {/* Accessibility Testing */}
                  <Link href="/engineering/accessibility" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/access2.svg" alt="Accessibility Testing" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Accessibility Testing</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Inclusive digital products</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ====== CLOUD SERVICES CONTENT ====== */}
          {activeDropdown === "cloud-services" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">CLOUD EXPERTISE</span>
                <Link href="/cloud-services" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">Cloud Innovation</h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">AWS & Microsoft Azure Partnerships</p>
                <div className="border-t border-black/20 pt-6 space-y-3">
                  <Link href="/cloud-services/managed" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Managed Cloud Services</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/cloud-services/migration" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Cloud Migration</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/cloud-services/finops" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">FinOps & Optimization</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-extrabold tracking-wider uppercase text-white">INNOVATION</span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <Link href="/cloud-services/gen-ai" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/generativeAI.svg" alt="Generative AI" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Generative AI</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Gen-AI Solutions</p>
                  </Link>
                  <Link href="/cloud-services/devops-cloud" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/devops.svg" alt="DevOps on the Cloud" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">DevOps Cloud</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Streamlined Pipelines</p>
                  </Link>
                  <Link href="/cloud-services/microsoft-workload" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/workload.svg" alt="Microsoft Workload" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Microsoft Workload</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Dedicated Solutions</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ====== BPO CONTENT ====== */}
          {activeDropdown === "bpo" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">BPO</span>
                <Link href="/bpo" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">Enterprise BPO</h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">Managed under one roof in Kenya</p>
                <div className="border-t border-black/20 pt-6 space-y-3">
                  <Link href="/bpo/solutions" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">BPO Solutions</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/bpo/compliance" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">BPO Compliance</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/bpo/industry-verticals" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Industry Verticals</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-extrabold tracking-wider uppercase text-white">ADVANTAGE</span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <Link href="/bpo/impact-sourcing" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/impactsourcing.svg" alt="Impact Sourcing" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Impact Sourcing</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Socially Responsible BPO</p>
                  </Link>
                  <Link href="/bpo/process-automation" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/automation.svg" alt="Process Automation" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Process Automation</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Increased Efficiency</p>
                  </Link>
                  <Link href="/bpo/quality" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/quality.svg" alt="World Class Quality" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">World Class Quality</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Standardized processes</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ====== ABOUT US CONTENT ====== */}
          {activeDropdown === "about-us" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">ABOUT US</span>
                <Link href="/about" className="group inline-block mb-2 w-max">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">Global Footprint</h2>
                </Link>
                <p className="text-sm font-medium text-white/90 mb-8">Next-generation digital solutions & consulting</p>
                <div className="border-t border-black/20 pt-6 space-y-3">
                  <Link href="/about/history" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Company History</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/about/governance" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Corporate Governance</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <div className="border-t border-black/20"></div>
                  <Link href="/about/people" className="group relative inline-block">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">Our People</span>
                    <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-extrabold tracking-wider uppercase text-white">REACH OUT</span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <Link href="/about/foundation" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/foundation.svg" alt="Foundation" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Foundation</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Our global impact</p>
                  </Link>
                  <Link href="/contact" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/contact.svg" alt="Contacts" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Contacts</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">US & Kenya Offices</p>
                  </Link>
                  <Link href="/countries" className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="bg-white rounded-xl p-4 w-full aspect-square flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <img src="/countries.svg" alt="Countries" className="h-full max-h-40 w-auto object-contain" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:underline leading-tight">Countries</h4>
                    <p className="text-xs text-white/80 mt-1 font-medium">Customer footprint</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU – unchanged */}
      <div 
        className={`lg:hidden fixed top-24 inset-x-0 bottom-0 bg-[#f97316] border-b-2 border-[#1e1e28] shadow-[0px_25px_0px_0px_#1e1e28] px-6 py-8 z-50 flex flex-col overflow-y-auto overscroll-contain transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="space-y-4 max-w-xl mx-auto w-full pb-32">
          {/* Accordion 1: Solutions */}
          <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
            <button 
              onClick={() => setMobileAccordion(mobileAccordion === "solutions" ? null : "solutions")}
              className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
            >
              <span className="flex items-center gap-3">
                <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "solutions" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>01</span>
                Solutions
              </span>
              <span>{mobileAccordion === "solutions" ? "▲" : "▼"}</span>
            </button>
            {mobileAccordion === "solutions" && (
              <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e1e28]/60 block">Public Sector</span>
                <Link href="/solutions/identity-management" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Identity Management</Link>
                <Link href="/solutions/public-finance-management" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Public Finance Management</Link>
                <Link href="/solutions/revenue-management" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Revenue Management System</Link>
                <Link href="/solutions/tax-and-customs" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Tax and Customs</Link>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e1e28]/60 block mt-6">Private Sector</span>
                <Link href="/solutions/grant-management" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Grant Management</Link>
                <Link href="/solutions/document-management" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Document Management</Link>
                <Link href="/solutions/monitoring-and-evaluation" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Monitoring and Evaluation</Link>
                <Link href="/solutions/robotic-process-automation" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Robotic Process Automation</Link>
                <Link href="/solutions/power-bi" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Power BI</Link>
              </div>
            )}
          </div>

          {/* Accordion 2: Engineering */}
          <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
            <button 
              onClick={() => setMobileAccordion(mobileAccordion === "engineering" ? null : "engineering")}
              className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
            >
              <span className="flex items-center gap-3">
                <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "engineering" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>02</span>
                Engineering
              </span>
              <span>{mobileAccordion === "engineering" ? "▲" : "▼"}</span>
            </button>
            {mobileAccordion === "engineering" && (
              <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
                <Link href="/engineering/compatibility" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">App & Software Compatibility</Link>
                <Link href="/engineering/security-testing" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Security Validation</Link>
                <Link href="/engineering/devops" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">DevOps & Automation</Link>
              </div>
            )}
          </div>

          {/* Accordion 3: Cloud Services */}
          <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
            <button 
              onClick={() => setMobileAccordion(mobileAccordion === "cloud" ? null : "cloud")}
              className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
            >
              <span className="flex items-center gap-3">
                <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "cloud" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>03</span>
                Cloud Services
              </span>
              <span>{mobileAccordion === "cloud" ? "▲" : "▼"}</span>
            </button>
            {mobileAccordion === "cloud" && (
              <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
                <Link href="/cloud-services/managed" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Managed Cloud Services</Link>
                <Link href="/cloud-services/migration" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Cloud Migration</Link>
                <Link href="/cloud-services/finops" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">FinOps & Optimization</Link>
              </div>
            )}
          </div>

          {/* Accordion 4: BPO */}
          <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
            <button 
              onClick={() => setMobileAccordion(mobileAccordion === "bpo" ? null : "bpo")}
              className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
            >
              <span className="flex items-center gap-3">
                <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "bpo" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>04</span>
                BPO
              </span>
              <span>{mobileAccordion === "bpo" ? "▲" : "▼"}</span>
            </button>
            {mobileAccordion === "bpo" && (
              <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
                <Link href="/bpo/solutions" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">BPO Solutions</Link>
                <Link href="/bpo/compliance" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Compliance</Link>
                <Link href="/bpo/industry-verticals" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Industry Verticals</Link>
              </div>
            )}
          </div>

          {/* Accordion 5: About Us */}
          <div className="bg-[#f8f9fa] border-2 border-[#1e1e28] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1e1e28]">
            <button 
              onClick={() => setMobileAccordion(mobileAccordion === "about" ? null : "about")}
              className="w-full flex items-center justify-between font-serif font-bold text-2xl text-[#1e1e28]"
            >
              <span className="flex items-center gap-3">
                <span className={`text-xs font-extrabold text-white px-2.5 py-1 rounded-full ${mobileAccordion === "about" ? "bg-[#f97316] border border-[#1e1e28]" : "bg-[#1e1e28]"}`}>05</span>
                About Us
              </span>
              <span>{mobileAccordion === "about" ? "▲" : "▼"}</span>
            </button>
            {mobileAccordion === "about" && (
              <div className="mt-6 pt-6 border-t-2 border-[#1e1e28]/20 space-y-4">
                <Link href="/about/history" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Company History</Link>
                <Link href="/about/governance" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Corporate Governance</Link>
                <Link href="/about/people" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-lg font-bold text-[#1e1e28] hover:underline">Our People</Link>
              </div>
            )}
          </div>

          {/* Mobile Contact Button */}
          <div className="pt-6">
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#1e1e28] text-white px-6 py-4 rounded-full font-extrabold text-sm tracking-wider uppercase shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#ffffff] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}