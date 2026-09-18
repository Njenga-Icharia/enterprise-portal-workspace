import Hero from "@/components/Hero";

export default function HeroCloud() {
  return (
    <Hero
      ariaLabel="Cloud services hero"
      imageSrc="/cloudy.png"
      imageAlt=""
      eyebrow="Cloud Infrastructure"
      headingLine1="Enterprise cloud,"
      headingLine2="AWS & Azure certified"
      headingHighlight="Delivered at Scale."
      description="We design, migrate, and run AWS and Azure environments — with CMMI DEV/3 delivery and certified architects on every engagement."
      primaryCta={{ href: "/cloud/contact", label: "Talk to an expert" }}
      secondaryCta={{ href: "/cloud/services", label: "Explore services" }}
      stats={{
        first: { label: "Countries served", value: "35+" },
        second: { label: "Projects delivered", value: "150+" },
        third: { label: "Employees worldwide", value: "1200+" },
      }}
      credentials={[
        "AWS Select Tier Partner",
        "Microsoft Azure",
        "CMMI DEV/3",
        "1st Microsoft Testing Center in Africa",
      ]}
      imageTint="light"   // <<--| "none" | "light" | "medium" | "strong" | "heavy"
    />
  );
}