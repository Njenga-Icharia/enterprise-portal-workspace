"use client";

import ContactForm from "@/components/ContactForm";
import FlipWindowBpo from "@/components/LocalComponentsBpo/FlipWindowBpo";
import SpotlightGridBpo from "@/components/LocalComponentsBpo/SpotlightGridBpo";
// import SpotlightGridBpo1 from "@/components/LocalComponentsBpo/SpotlightGridBpo1";

export default function CloudPage() {
  return (
      <div className="relative overflow-x-hidden">
        <SpotlightGridBpo />
        {/* <SpotlightGridBpo1 /> */}
        <FlipWindowBpo />
        <ContactForm />
      </div>

  );
}