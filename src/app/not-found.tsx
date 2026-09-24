import Link from "next/link";

export default function NotFound() {
  return (
    <div className="no-orange-cursor min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center px-6">
      <div className="border-2 border-[#1e1e28] bg-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#1e1e28] max-w-md w-full text-center space-y-6">

        {/* 404 marker */}
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-dashed border-[#f97316] rounded-full"></div>
          <span className="font-serif font-bold text-2xl text-[#f97316]">404</span>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif font-bold text-2xl text-[#1e1e28] tracking-tight">
            TARGET NOT FOUND
          </h2>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#1e1e28]/60">
            The page you're looking for doesn't exist
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center border-2 border-[#1e1e28] bg-[#f97316] px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:text-[#f97316]"
        >
          Return 
        </Link>

      </div>
    </div>
  );
}