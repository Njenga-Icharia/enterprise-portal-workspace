export default function BrandPattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
        <g stroke="currentColor" strokeWidth="3" fill="none" className="text-white">
          {/* Abstract background doodles / loops matching the reference */}
          <circle cx="200" cy="150" r="80" />
          <circle cx="200" cy="150" r="50" />
          <path d="M 50,400 Q 200,500 350,300 T 650,400" />
          <path d="M 900,100 Q 1100,50 1300,250 T 1400,450" />
          <path d="M 100,200 C 300,50 400,500 600,200 S 900,400 1200,100" />
          <circle cx="1100" cy="450" r="100" />
          <circle cx="500" cy="500" r="40" />
        </g>
      </svg>
    </div>
  );
}