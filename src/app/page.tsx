"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";
// import HeroCloud from "@/components/LocalComponentsCloud/HeroCloud";
// import BlurryCarouselCloud from "@/components/LocalComponentsCloud/BlurryCarouselCloud";
// import ResponsiveWindowCloud from "@/components/LocalComponentsCloud/ResponsiveWindowCloud";
// import CTACloud from "@/components/LocalComponentsCloud/CTACloud";
// import AboutCloud from "@/components/LocalComponentsCloud/AboutCloud";
import FlipWindowBpo from "@/components/LocalComponentsCloud/FlipWindowBpo";

export default function CloudPage() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1e1e28] overflow-x-clip font-sans">
      <div className="w-full relative">
        {/* <HeroCloud />
        <ResponsiveWindowCloud /> */}
      </div>

      <div className="relative overflow-x-hidden">
        <FlipWindowBpo />
        {/* <AboutCloud />
        <BlurryCarouselCloud />
        <CTACloud /> */}
        <ContactForm />
      </div>
      
    </div>
  );
}