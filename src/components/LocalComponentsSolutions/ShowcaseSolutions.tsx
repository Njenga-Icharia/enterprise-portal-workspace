import Showcase, { SolutionItem } from "@/components/Showcase";

const PUBLIC_SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    badge: "// 001 — PUBLIC INFRASTRUCTURE",
    title: "Identity Management",
    subtitle: "SecuRegister Multi-Modal Biometric Platform",
    description: "Device and algorithm independent biometric platform for on-premise and cloud identity verification across national government services.",
    scopeTags: ["Biometrics", "10M+ Credentials", "Cloud & On-Premise"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "02",
    badge: "// 002 — PUBLIC FINANCE",
    title: "Public Finance Management",
    subtitle: "IFMIS Core Government Automation",
    description: "Integrated financial systems deployed across 25+ national governments to automate budget allocation, procurement, and audit transparency.",
    scopeTags: ["IFMIS", "Budget Transparency", "25 Governments"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "03",
    badge: "// 003 — MUNICIPAL REVENUE",
    title: "Revenue Management System",
    subtitle: "RevenueACA GIS-Supported Collection",
    description: "Cloud-based revenue assessment and billing platform empowering local authorities with GIS-driven collection tracking and business intelligence.",
    scopeTags: ["GIS Integration", "RevenueACA", "18M+ Subscribers"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "04",
    badge: "// 004 — REVENUE & TRADE",
    title: "Tax and Customs",
    subtitle: "Automated Duty & Compliance Platforms",
    description: "Scalable trade facilitation systems deployed across 25 countries to eliminate revenue leakage, streamline border checks, and automate tax filing.",
    scopeTags: ["50+ Tax Specialists", "Customs Automation", "25 Countries"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  }
];

const PRIVATE_SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    badge: "// 001 — ENTERPRISE AUTOMATION",
    title: "Robotic Process Automation",
    subtitle: "Safaricom & Enterprise Scale Bots",
    description: "Intelligent software bots mimicking complex manual workflows for telecom and financial leaders to streamline account creation and vetting.",
    scopeTags: ["RPA Bots", "Telecom Scale", "Workflow Automation"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "02",
    badge: "// 002 — NGO & ENTERPRISE",
    title: "Grant Management",
    subtitle: "Serenic Software Partnership Suite",
    description: "Cloud-hosted fund accounting and grant tracking tailored for Non-Governmental Organizations operating across fast-shifting global markets.",
    scopeTags: ["Fund Accounting", "Cloud Hosted", "NGO Agility"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "03",
    badge: "// 003 — COMPLIANCE & REPOSITORY",
    title: "Document Management",
    subtitle: "Zero-Trust Records & Retention",
    description: "Enterprise records management solutions optimizing data security, workflow automation, and automated document retention policies.",
    scopeTags: ["Data Security", "Workflow Automation", "Audit Ready"],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "04",
    badge: "// 004 — ANALYTICS & MONITORING",
    title: "Monitoring and Evaluation",
    subtitle: "Impact Analysis Value Chain",
    description: "Real-time programmatic assessment dashboards giving leadership complete control over outcome measurement and field metrics.",
    scopeTags: ["Impact Analysis", "KPI Tracking", "Real-Time Intelligence"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  },
  {
    id: "05",
    badge: "// 005 — BUSINESS INTELLIGENCE",
    title: "Power BI Solutions",
    subtitle: "Self-Service Enterprise Intelligence",
    description: "End-to-end Microsoft Power BI modeling, user training, and custom dashboard delivery for enterprise decision makers.",
    scopeTags: ["Self-Service BI", "Custom Dashboards", "User Training"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1920",
    link: "/contact"
  }
];

interface ShowcaseSolutionsProps {
  activeSector: "public" | "private";
  onSectorChange: (sector: "public" | "private") => void;
}

export default function ShowcaseSolutions({ activeSector, onSectorChange }: ShowcaseSolutionsProps) {
  const activeList = activeSector === "public" ? PUBLIC_SOLUTIONS : PRIVATE_SOLUTIONS;

  return (
    <Showcase items={activeList} activeSector={activeSector} onSectorChange={onSectorChange} />
  );
}
