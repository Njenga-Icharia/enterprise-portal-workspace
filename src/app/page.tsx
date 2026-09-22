"use client";

import ContactForm from "@/components/ContactForm";
import FlipWindowBpo from "@/components/LocalComponentsBpo/FlipWindowBpo";
import SpotlightGridBpo from "@/components/LocalComponentsBpo/SpotlightGridBpo";


export default function CloudPage() {
  return (
      <div className="relative overflow-x-hidden">
        <SpotlightGridBpo />
        <FlipWindowBpo />
        <ContactForm />
      </div>

  );
}