export default function Loading() {
  return (
    <div className="no-orange-cursor min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center px-6">
      <div className="border-2 border-[#1e1e28] bg-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#1e1e28] max-w-md w-full text-center space-y-6">
        
        {/* Animated Scope / Target Finder */}
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 border-2 border-dashed border-[#f97316] rounded-full animate-spin"></div>
          
          {/* Inner pulsing core */}
          <div className="w-6 h-6 bg-[#f97316] rounded-full shadow-[0_0_10px_#f97316] animate-pulse"></div>
        </div>

        {/* Status Text */}
        <div className="space-y-2">
          <h2 className="font-serif font-bold text-2xl text-[#1e1e28] tracking-tight">
            ACQUIRING TARGET...
          </h2>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#1e1e28]/60">
            Establishing Secure Link
          </p>
        </div>

        {/* Progress Bar / Barcode Aesthetic */}
        <div className="w-full bg-[#f8f9fa] border border-[#1e1e28] h-3 rounded-full overflow-hidden p-0.5">
          <div className="bg-[#f97316] h-full rounded-full w-2/3 animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}