import Hero from "@/components/Hero";

export default function HeroEngineering() {
  return (
    <Hero
      ariaLabel="Engineering hero"
      imageSrc="/savanna.png"
      imageAlt=""
      eyebrow="Engineering"
      headingLine1="World-class software engineering,"
      headingLine2="delivered from the"
      headingHighlight="Silicon Savannah"
      description="Enterprise software engineering and quality assurance — development, DevOps, and security, privacy, and accessibility testing at scale."
      primaryCta={{ href: "/engineering/method", label: "Talk to an expert" }}
      secondaryCta={{ href: "/engineering/capabilities", label: "View case studies" }}
      stats={{
        first:  { label: "Countries served",       value: "35+" },
        second: { label: "CMMI maturity",          value: "Level 05" },
        third:  { label: "Microsoft Testing Center", value: "1st in Africa" },
      }}
      credentials={[
        "ISO 27001",
        "ISO 9001",
        "CMMI Level 5",
        "ISTQB Certified Resources",
      ]}
    />
  );
}