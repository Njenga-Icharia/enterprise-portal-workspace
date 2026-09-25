import Image from "next/image";
import Link from "next/link";

interface CTACloudProps {
  heading?: string;
  heading2?: string;
  headingHighlight?: string;
  headingHighlight2?: string;
  headingTail?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: "dark" | "darker";
}

export default function CTACloud({
  heading = "Ready to ",
  headingHighlight = "discover ",
  heading2 = "how ",
  headingHighlight2 = "Techno Brain",
  headingTail = "'s Cloud Solutions will help your business transform & achieve its strategic goals?",
  ctaLabel = "Contact Us",
  ctaHref = "/cloud/contact",
  imageSrc = "/street.png",
  imageAlt = "",
  overlay = "dark",
}: CTACloudProps) {
  const scrim = overlay === "darker" ? "bg-[#0d0d13]/75" : "bg-[#0d0d13]/55";

  return (
    <section
      aria-label="Call to action"
      className="relative w-full overflow-hidden bg-[#0d0d13]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className={`absolute inset-0 ${scrim}`} />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-20 sm:py-24 text-center">
        <h2 className="max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white drop-shadow-md">
          {heading}
          <span className="text-[#4b456f] [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]">{headingHighlight}</span>
          {heading2}
          <span className="text-[#f97316]">{headingHighlight2}</span>
          {headingTail}
        </h2>

        <Link
          href={ctaHref}
          className="mt-8 inline-flex items-center justify-center border-2 border-white bg-transparent px-8 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:border-[#f97316] hover:text-[#f97316]"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}