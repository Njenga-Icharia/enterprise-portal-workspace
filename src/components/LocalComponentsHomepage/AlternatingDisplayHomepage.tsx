import AlternatingDisplay, { DisplayItem } from "../AlternatingDisplay";

const homepageImpactData: DisplayItem[] = [
  {
    id: "impact-1",
    category: "Customer Experience",
    title: "Enhancing Customer Experience for a Large US Health Care Provider",
    type: "Case Study",
    bgColor: "#19c2a0", // Teal
    image: "/health.png", // Replace with actual image
    link: "#",
  },
  {
    id: "impact-2",
    category: "Financial Systems",
    title: "Integrated Financial Management Information System (IFMIS) Ethiopia",
    type: "Case Study",
    bgColor: "#1a73e8", // Blue
    image: "/appoint.png",
    link: "#",
  },
  {
    id: "impact-3",
    category: "Automation",
    title: "Robotics Process Automation for Safaricom",
    type: "Case Study",
    bgColor: "#6b21a8", // Purple
    image: "/appoint.png",
    link: "#",
  },
  {
    id: "impact-4",
    category: "Public Sector",
    title: "Tax solutions for Malawi Revenue Authority",
    type: "Case Study",
    bgColor: "#f97316", // Orange
    image: "/appoint.png",
    link: "#",
  },
  {
    id: "impact-5",
    category: "Telecommunications",
    title: "Online Type Approval System for Communications Regulatory Authorities",
    type: "Case Study",
    bgColor: "#b2122c", // Deep Red
    image: "/appoint.png",
    link: "#",
  },
  {
    id: "impact-6",
    category: "Enterprise Software",
    title: "Enterprise Resource Planning (ERP) System for Beverage Manufacturing & Distributing Companies",
    type: "Case Study",
    bgColor: "#058752", // Green
    image: "/appoint.png",
    link: "#",
  },
];

export default function AlternatingDisplayHomepage() {
  return (
    <AlternatingDisplay
      sectionTitle="OUR IMPACT"
      ctaText="View All →"
      ctaHref="/portfolio"
      items={homepageImpactData}
    />
  );
}