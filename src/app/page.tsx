"use client";

import ContactForm from "@/components/ContactForm";
import FlipWindowBpo from "@/components/LocalComponentsBpo/FlipWindowBpo";

export default function CloudPage() {
  return (
      <div className="relative overflow-x-hidden">
        <FlipWindowBpo />
        <ContactForm />
      </div>

  );
}