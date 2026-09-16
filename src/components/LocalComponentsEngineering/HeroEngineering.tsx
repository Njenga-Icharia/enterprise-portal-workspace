import Hero from "@/components/Hero";

export default function HeroEngineering() {
  return (
    <Hero
      ariaLabel="Engineering hero"
      imageSrc="/savanna.png"
      imageAlt=""
      eyebrow="Engineering"
      headingLine1="World-class software engineering,"
      headingLine2=" delivered from the"
      headingHighlight=" Silicon Savannah "
      description="Turning Complex Business Challenges Into Working Enterprise Solutions."
      primaryCta={{ href: "/engineering/method", label: "Talk to an expert" }}
      secondaryCta={{ href: "/engineering/capabilities", label: "View case studies" }}
      stats={{
        first: { label: "", value: "" }, // 09
        second: { label: "", value: "" }, // Level 05
        third: { label: "", value: "" }, // 35
      }}
    />
  );
}
