import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e28] text-[#f8f9fa] pt-20 pb-12 px-6 sm:px-8 lg:px-12 border-t-2 border-[#1e1e28]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
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
              <a href="https://www.linkedin.com/company/techno-brain-limited/" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-[#18201a] transition-colors">
                LinkedIn
              </a>
              <a href="https://x.com/TechnoBrainLtd" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-[#18201a] transition-colors">
                Twitter
              </a>
            </div>
          </div>

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
  );
}