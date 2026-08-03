import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] overflow-hidden">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Full-Screen Hero Section with Background Video */}
      <section className="relative w-full h-[calc(100vh-6rem)] flex items-center justify-center">
        
        {/* Video Element Spanning the Full Container */}
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

        {/* Optional Overlay to make text readable over the video */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Hero Content on top of the video */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight">
            Welcome to Techno Brain
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto text-gray-200">
            Resilient architectures and next-gen enterprise systems.
          </p>
        </div>

      </section>
    </div>
  );
}