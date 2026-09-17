import Hero from "@/components/Hero";

export default function HeroCloud() {
  return (
    <Hero
      ariaLabel="Cloud hero"
      imageSrc="/savanna.png"
      imageAlt=""
      eyebrow="Cloud Infrastructure"
      headingLine1="Scalable cloud solutions,"
      headingLine2=" engineered from the"
      headingHighlight=" Silicon Savannah "
      description="Transforming Enterprise Infrastructure Into Agile, Multi-Cloud Ecosystems."
      primaryCta={{ href: "/cloud/method", label: "Talk to an expert" }}
      secondaryCta={{ href: "/cloud/capabilities", label: "View case studies" }}
      stats={{
        first: { label: "Uptime", value: "99.9%" },
        second: { label: "Standard", value: "Level 05" },
        third: { label: "Global Reach", value: "35+" },
      }}
    />
  );
}