import Spiral, { Offering } from "@/components/Spiral";

const ENGINEERING_OFFERINGS: Offering[] = [
  {
    title: "App & Software ",
    orangeText: "Compatibility",
    action: "We resolve",
    description:
      "We employ innovative data-centric methods to detect & resolve application compatibility issues across various platforms & devices.",
    badge: "01",
    slug: "compatibility",
  },
  {
    title: "Security ",
    orangeText: "Testing",
    action: "We safeguard",
    description:
      "We perform vulnerability tests across platforms apps, databases & networks to take proactive measures that safeguard your assets",
    badge: "02",
    slug: "security-testing",
  },
  {
    title: "Privacy ",
    orangeText: "Compliance",
    action: "We validate",
    description:
      "We perform privacy validation and compliance tests to ensure adherence to GDPR, CDPA or other local & global privacy regulations.",
    badge: "03",
    slug: "privacy-compliance",
  },
  {
    title: "Dev",
    orangeText: "Ops",
    action: "We accelerate",
    description:
      "We accelerate delivery of higher quality applications and services through continuous delivery and automation making the process more efficient, faster and reliable.",
    badge: "04",
    slug: "devops",
  },
  {
    title: "Data ",
    orangeText: "Analytics",
    action: "We analyze",
    description:
      "We build machine learning models, analyze structured and unstructured data, utilizing AI & visualization tools to derive actionable insights that inform your business decisions.",
    badge: "05",
    slug: "data-analytics",
  },
  {
    title: "Accessibility ",
    orangeText: "Testing",
    action: "We include",
    description:
      "We validate the accessibility of digital products to ensure inclusivity broadening your reach to a wider audience.",
    badge: "06",
    slug: "accessibility-testing",
  },
  {
    title: "Development ",
    orangeText: "Services",
    action: "We build",
    description:
      "We develop tailored software solutions that drive growth, streamline operations utilizing innovative technology and practices.",
    badge: "07",
    slug: "development-services",
  },
  {
    title: "Support ",
    orangeText: "Services",
    action: "We maintain",
    description:
      "We provide help desk support for smooth operations, offering 24/7 coverage and quick solutions, specializing in various platforms for maximum productivity.",
    badge: "08",
    slug: "support-services",
  },
  {
    title: "Test ",
    orangeText: "Automation",
    action: "We automate",
    description:
      "We automate test processes across platforms to increase efficiency and productivity thus reducing operational cost.",
    badge: "09",
    slug: "test-automation",
  },
];

export default function SpiralEngineering() {
  return (
    <Spiral
      items={ENGINEERING_OFFERINGS}
      headerText="Engineering Capabilities Built Around"
      headerHighlight="Your Needs."
      countLabel="Capabilities"
      coreLine1="We build."
      coreLine2="We secure."
      coreHighlight="We innovate."
      footerText="Rigorous quality assurance, automated workflows & enterprise-grade engineering standards"
    />
  );
}
