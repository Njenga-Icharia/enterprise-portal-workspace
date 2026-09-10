import AlternatingShowcase, {
  SolutionItem,
} from "@/components/AlternatingShowcase";

const solutions: SolutionItem[] = [
  {
    id: "01",
    badge: "PUBLIC SECTOR",
    title: "Identity Management",
    subtitle: "Secure Digital Identity",
    description:
      "Secure, scalable identity management solutions designed to support the identification and authentication of citizens and users across large-scale public sector environments.",
    scopeTags: [
      "Digital Identity",
      "Biometric Identification",
      "Secure Authentication",
    ],
    imageUrl: "https://images.unsplash.com/photo-1616077168078-5be5a5e2d750?w=1200&auto=format&fit=crop",
    link: "/solutions/identity-management",
    buttonText: "Explore Solution",
  },

  {
    id: "02",
    badge: "PUBLIC SECTOR",
    title: "Public Finance Management",
    subtitle: "Efficient Financial Management",
    description:
      "Digital solutions that help governments manage financial processes, improve transparency, strengthen controls and increase efficiency across public finance operations.",
    scopeTags: [
      "Financial Management",
      "Process Automation",
      "Transparency",
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
    link: "/solutions/public-finance-management",
    buttonText: "Explore Solution",
  },

  {
    id: "03",
    badge: "PUBLIC SECTOR",
    title: "Revenue Management System",
    subtitle: "Revenue Collection & Management",
    description:
      "Digital revenue management solutions that help public institutions manage revenue sources, automate collection processes, improve accountability and gain greater visibility into financial operations.",
    scopeTags: [
      "Revenue Collection",
      "Billing Automation",
      "Revenue Intelligence",
    ],
    imageUrl: "https://images.unsplash.com/photo-1553729459-2b1d0b5e7d8e?w=1200&auto=format&fit=crop",
    link: "/solutions/revenue-management",
    buttonText: "Explore Solution",
  },

  {
    id: "04",
    badge: "PUBLIC SECTOR",
    title: "Tax and Customs",
    subtitle: "Modern Tax & Customs Management",
    description:
      "Technology solutions designed to modernize tax and customs operations, improve compliance, increase efficiency and support revenue authorities in managing taxation and trade processes.",
    scopeTags: [
      "Tax Management",
      "Customs Automation",
      "Compliance",
    ],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
    link: "/solutions/tax-and-customs",
    buttonText: "Explore Solution",
  },

  {
    id: "05",
    badge: "PRIVATE SECTOR",
    title: "Grant Management",
    subtitle: "Managing Grants & Funding",
    description:
      "Solutions that help organizations manage grants, funding processes, reporting requirements and financial information while improving visibility and operational efficiency.",
    scopeTags: [
      "Grant Administration",
      "Financial Tracking",
      "Reporting",
    ],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
    link: "/solutions/grant-management",
    buttonText: "Explore Solution",
  },

  {
    id: "06",
    badge: "PRIVATE SECTOR",
    title: "Document Management",
    subtitle: "Digital Document Management",
    description:
      "Digital document management solutions that help organizations securely store, organize, access and manage information while reducing dependence on paper-based processes.",
    scopeTags: [
      "Document Storage",
      "Information Management",
      "Digital Workflows",
    ],
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a2c?w=1200&auto=format&fit=crop",
    link: "/solutions/document-management",
    buttonText: "Explore Solution",
  },

  {
    id: "07",
    badge: "PRIVATE SECTOR",
    title: "Monitoring and Evaluation",
    subtitle: "Data-Driven Monitoring & Evaluation",
    description:
      "Technology-enabled monitoring and evaluation solutions that help organizations track programmes, measure performance and turn operational data into actionable insights.",
    scopeTags: [
      "Performance Monitoring",
      "Data Analytics",
      "Programme Evaluation",
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    link: "/solutions/monitoring-and-evaluation",
    buttonText: "Explore Solution",
  },

  {
    id: "08",
    badge: "PRIVATE SECTOR",
    title: "Robotic Process Automation",
    subtitle: "Automating Repetitive Processes",
    description:
      "Automation solutions that use software robots to handle repetitive, rule-based processes, helping organizations reduce manual effort, improve accuracy and increase operational efficiency.",
    scopeTags: [
      "Process Automation",
      "Workflow Optimization",
      "Operational Efficiency",
    ],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop",
    link: "/solutions/robotic-process-automation",
    buttonText: "Explore Solution",
  },

  {
    id: "09",
    badge: "PRIVATE SECTOR",
    title: "Power BI",
    subtitle: "Business Intelligence & Analytics",
    description:
      "Business intelligence solutions that transform organizational data into interactive dashboards and actionable insights, helping decision-makers understand performance and make informed decisions.",
    scopeTags: [
      "Business Intelligence",
      "Data Visualization",
      "Decision Support",
    ],
    imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&auto=format&fit=crop",
    link: "/solutions/power-bi",
    buttonText: "Explore Solution",
  },
];


interface AlternatingShowcaseSolutionsProps {
  activeSector: "public" | "private";
}

export default function AlternatingShowcaseSolutions({ activeSector }: AlternatingShowcaseSolutionsProps) {
  // Filter the array so it only maps items belonging to the active tab
  const filteredSolutions = solutions.filter((item) =>
    activeSector === "public"
      ? item.badge === "PUBLIC SECTOR"
      : item.badge === "PRIVATE SECTOR"
  );

  return <AlternatingShowcase items={filteredSolutions} />;
}