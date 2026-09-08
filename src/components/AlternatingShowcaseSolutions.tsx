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
    imageUrl: "https://plus.unsplash.com/premium_photo-1674582744373-c0805c281744?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://plus.unsplash.com/premium_photo-1672660509767-0d531b65bd10?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://images.unsplash.com/photo-1634638021403-70f46d19fc02?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D. ",
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
    imageUrl: "https://images.unsplash.com/photo-1593510987760-2d895bc8109d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://plus.unsplash.com/premium_photo-1661486971635-b79537d79d97?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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