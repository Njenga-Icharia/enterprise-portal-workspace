import FolderShape, { NewsArticle, FeaturedSlide } from "../FolderShape";

const homepageArticles: NewsArticle[] = [
  {
    id: "1",
    title:
      "Techno Brain GBS Appoints Former Microsoft Executive Orebambo “Bambo” Sofola to Board as Non-Executive Director",
    date: "June 17, 2026",
    link: "#",
  },
  {
    id: "2",
    title:
      "Techno Brain Earns Back-to-Back Great Place To Work® Certification for 2025, Clinches Top Spot for Gen-Z Engagement",
    date: "November 14, 2025",
    link: "#",
  },
  {
    id: "3",
    title: "We’re Officially Great Place To Work® CertifiedTM",
    date: "January 19, 2025",
    link: "#",
  },
  {
    id: "4",
    title: "Red(P) Annual Student Conference At Techno Brain Group",
    date: "July 18, 2024",
    link: "#",
  },
  {
    id: "5",
    title:
      "Techno Brain Recognized As One Of The Firms Pioneering Africa’s Integration",
    date: "February 22, 2024",
    link: "#",
  },
  {
    id: "6",
    title:
      "Techno Brain Expands Enterprise Solutions across 35+ Countries with CMMI Level 5 Accreditation",
    date: "October 10, 2023",
    link: "#",
  },
  {
    id: "7",
    title:
      "Global Partnerships Drive New AI and Cloud Infrastructure Milestones in East Africa",
    date: "August 15, 2023",
    link: "#",
  },
];

const featuredSlides: FeaturedSlide[] = [
  {
    image: "/appoint.png",
    title: "Board Appointment",
    category: "Leadership",
    link: "/news/board-appointment",
  },
  {
    image: "/greatplacetowork2.png",
    title: "Great Place To Work",
    category: "Award",
    link: "/news/great-place-to-work",
  },
  {
    image: "/greatplacetowork.png",
    title: "Certified Workplace",
    category: "Culture",
    link: "/news/certified-workplace",
  },
  {
    image: "/redp.png",
    title: "Student Conference",
    category: "Event",
    link: "/news/student-conference",
  }
];

export default function FolderShapeHomepage() {
  return (
    <FolderShape
      sectionTitle="In The News"
      ctaText="View More →"
      ctaHref="/portfolio"
      featuredSlides={featuredSlides}
      articles={homepageArticles}
    />
  );
}