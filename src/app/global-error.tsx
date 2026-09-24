"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center px-6">
          <div className="border-2 border-[#1e1e28] bg-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#1e1e28] max-w-md w-full text-center space-y-6">
            <h2 className="font-serif font-bold text-2xl text-[#1e1e28]">
              Something broke badly
            </h2>
            <button
              onClick={reset}
              className="border-2 border-[#1e1e28] bg-[#f97316] px-6 py-3 text-xs font-black uppercase tracking-wider text-white"
            >
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}