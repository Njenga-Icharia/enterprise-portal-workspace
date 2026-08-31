"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Link from "next/link";

// Client-only import — prevents the spiral's heavy math/DOM from blocking initial render
const EngineeringSpiral = dynamic(() => import("@/components/EngineeringSpiral"), {
  ssr: false,
  loading: () => <div className="h-[800px] hidden lg:block" />,
});

interface EngineeringOffering {
  title: string;
  description: string;
  badge: string;
  slug: string;
}

const ENGINEERING_OFFERINGS: EngineeringOffering[] = [
  {
    title: "App & Software Compatibility",
    description: "We employ innovative data-centric methods to detect & resolve application compatibility issues across various platforms & devices.",
    badge: "01",
    slug: "compatibility"
  },
  {
    title: "Security Testing",
    description: "We perform vulnerability tests across platforms apps, databases & networks to take proactive measures that safeguard your assets.",
    badge: "02",
    slug: "security-testing"
  },
  {
    title: "Privacy Compliance",
    description: "We perform privacy validation and compliance tests to ensure adherence to GDPR, CDPA or other local & global privacy regulations.",
    badge: "03",
    slug: "privacy-compliance"
  },
  {
    title: "DevOps & Automation",
    description: "We accelerate delivery of higher quality applications and services through continuous delivery and automation making the process more efficient, faster and reliable.",
    badge: "04",
    slug: "devops"
  },
  {
    title: "Data Analytics & AI",
    description: "We build machine learning models, analyze structured and unstructured data, utilizing AI & visualization tools to derive actionable insights that inform your business decisions.",
    badge: "05",
    slug: "data-analytics"
  },
  {
    title: "Accessibility Testing",
    description: "We validate the accessibility of digital products to ensure inclusivity broadening your reach to a wider audience.",
    badge: "06",
    slug: "accessibility-testing"
  },
  {
    title: "Development Services",
    description: "We develop tailored software solutions that drive growth, streamline operations utilizing innovative technology and practices.",
    badge: "07",
    slug: "development-services"
  },
  {
    title: "Support Services",
    description: "We provide help desk support for smooth operations, offering 24/7 coverage and quick solutions, specializing in various platforms for maximum productivity.",
    badge: "08",
    slug: "support-services"
  },
  {
    title: "Test Automation",
    description: "We automate test processes across platforms to increase efficiency and productivity thus reducing operational cost.",
    badge: "09",
    slug: "test-automation"
  }
];

const MANAGED_SERVICES = [
  "Robotic Process Automation",
  "Knowledge Process Outsourcing",
  "IT Helpdesk",
  "Infrastructure-as-a-Service (IaaS)",
  "End-User Computing",
  "Security Operations Center (SOC)"
];

const HIGHLIGHTS = [
  "Years of experience in Manual and Automated testing",
  "Expertise in Web, Mobile applications in both Desktop and Cloud platforms",
  "Compliant with ISO 27001, ISO 9001 and CMMI Level 5 processes",
  "Core competency in Software Testing Life Cycle from design to execution",
  "Projects deployed worldwide across 35 countries",
  "ISTQB certified resources following internationally recognized standards",
  "Practicing Agile methodology in project delivery management",
  "Equipped and experience in quick ramp up & down of resources for short projects"
];

const SUCCESS_STORIES = [
  {
    title: "Microsoft Software Testing Centre In Africa",
    date: "Kenya - 2 May, 2018",
    description: "Techno Brain has partnered with Microsoft Corporation to launch Africa's first-ever testing and quality assurance center."
  },
  {
    title: "Feedback Triage & LLM Analytics",
    date: "Enterprise Scale",
    description: "Leveraging insights derived from customer feedback to identify application bugs and analyze diagnostic data using machine learning & LLMs."
  },
  {
    title: "Privacy & Compliance Validation",
    date: "American Multinational Tech Corporation",
    description: "Validated software against international and local standards, resulting in 18 successful releases, 244 privacy bugs fixed, and a 98% completion rate."
  }
];

export default function EngineeringPage() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1e1e28] overflow-x-hidden font-sans">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">

        {/* --- SPIRAL: right under the navbar --- */}
        <EngineeringSpiral />

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block border-2 border-[#1e1e28] rounded-full px-4 py-1 text-xs font-extrabold tracking-widest uppercase mb-4 bg-[#e8ebe9]">
            Software Engineering Division
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight mb-6 leading-tight">
            World Class Software Engineering Delivered From The Silicon Savannah
          </h1>
          <p className="text-lg font-medium text-[#1e1e28]/80 max-w-2xl mx-auto">
            Rigorous quality assurance, automated workflows, and enterprise-grade engineering practices driving digital transformation worldwide.
          </p>
        </div>

        {/* What We Offer Grid (unchanged) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-2">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENGINEERING_OFFERINGS.map((item) => (
              <div
                key={item.slug}
                className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-white shadow-[4px_4px_0px_0px_#1e1e28] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1e1e28] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-[#f97316] text-white text-xs font-black px-3 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#1e1e28]">
                    {item.title}
                  </h3>
                  <p className="text-[#1e1e28]/70 text-sm font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1e1e28]/10">
                  <Link
                    href="/contact"
                    className="text-xs font-black uppercase tracking-wider text-[#f97316] hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section (unchanged) */}
        <div className="border-2 border-[#1e1e28] rounded-3xl p-8 sm:p-12 bg-[#e8ebe9] shadow-[8px_8px_0px_0px_#1e1e28] mb-24">
          <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-2">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">
            Engineering Highlights & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-[#1e1e28] shadow-[2px_2px_0px_0px_#1e1e28]">
                <span className="bg-[#1e1e28] text-white text-xs font-bold px-2 py-0.5 rounded">✓</span>
                <p className="text-sm font-semibold text-[#1e1e28]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Managed Services (unchanged) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-2">Operations</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Managed Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANAGED_SERVICES.map((service, index) => (
              <div key={index} className="border-2 border-[#1e1e28] rounded-2xl p-6 bg-white shadow-[4px_4px_0px_0px_#1e1e28] text-center font-serif font-bold text-lg">
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories (unchanged) */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#f97316] block mb-2">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story, index) => (
              <div key={index} className="border-2 border-[#1e1e28] rounded-2xl p-8 bg-white shadow-[4px_4px_0px_0px_#1e1e28] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#f97316] block mb-2">{story.date}</span>
                  <h3 className="text-xl font-serif font-bold mb-4">{story.title}</h3>
                  <p className="text-sm font-medium text-[#1e1e28]/70 mb-6">{story.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-block text-center bg-[#1e1e28] text-white py-2 px-4 rounded-lg font-extrabold text-xs uppercase tracking-wider hover:bg-[#f97316] hover:text-[#1e1e28] border border-[#1e1e28] transition-colors"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}