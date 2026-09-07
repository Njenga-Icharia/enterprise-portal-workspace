import CardCarousel, { StaggeredCardItem } from "@/components/CardCarousel";

const engineeringCards: StaggeredCardItem[] = [
  {
    id: 1,
    imageSrc: "/logos/engineeringtools/OWASP.png",
    title: "OWASP Application Security Verification Standard",
    description: "Establishing rigorous security baselines and functional verification requirements to architect resilient, attack-resistant software systems.",
    buttonText: "Explore OWASP Standards",
    buttonLink: "https://owasp.org/",
  },
  {
    id: 2,
    imageSrc: "/logos/engineeringtools/PTES.png",
    title: "Penetration Testing Execution Standard (PTES)",
    description: "Defining baseline technical procedures, industry methodologies, and structured guidance to drive comprehensive penetration testing scenarios.",
    buttonText: "View PTES Guidelines",
    buttonLink: "http://www.pentest-standard.org/index.php/Main_Page",
  },
  {
    id: 3,
    imageSrc: "/logos/engineeringtools/ISSAF.png",
    title: "Information Systems Security Assessment Framework (ISSAF)",
    description: "Utilizing structured assessment layers, target-specific testing guidelines, and tool-linked methodologies supported by the OISSG.",
    buttonText: "Learn ISSAF Framework",
    buttonLink: "https://www.futurelearn.com/info/courses/ethical-hacking-an-introduction/0/steps/71521",
  },
  {
    id: 4,
    imageSrc: "/logos/engineeringtools/Iso9001.png",
    title: "ISO 9001:2015",
    description: "The international standard that specifies requirements for a quality management system.",
    buttonText: "View ISO 9001 Standard",
    buttonLink: "https://www.iso.org/standard/62085.html",
  },
  {
    id: 5,
    imageSrc: "/logos/engineeringtools/GDPR.jpg",
    title: "eneral Data Protection Regulation",
    description: "The globally used strict data privacy and security law created by the European Union.",
    buttonText: "Explore GDPR Compliance.",
    buttonLink: "https://gdpr-info.eu/",
  },
];

export default function EngineeringCardCarousel() {
  return <CardCarousel items={engineeringCards} />;
}