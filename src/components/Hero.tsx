import React from "react";

export default function Hero() {
  return (
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

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight">
          Welcome to <span className="text-[#f97316]">Techno Brain</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto text-gray-200">
          Global leaders in next-generation digital solutions and consulting services.
        </p>
      </div>
    </section>
  );
}