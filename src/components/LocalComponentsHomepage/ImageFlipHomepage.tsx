import ImageFlip, { ImageFlipItem } from "../ImageFlip";

const testimonials: ImageFlipItem[] = [
  {
    id: "01",
    heading: "Testimonial:",
    quote:
      "Good to see the investments in automation are enhancing our scalability. This advancement not only streamlines our processes but also promises a more efficient and positive experience for our engineering team, who play a crucial role in our release process",
    author: "Vice President of Engineering | Fortune 500 Company",
    color: "#19c2a0",
    defaultImg: "/Profile2.png",
    flippedImg: "/Profile2.2.png",
    badge: "Scalability",
  },
  {
    id: "02",
    heading: "Testimonial:",
    quote:
      "Great to see the partnership Techno Brain has with Accessibility organizations in Kenya. The experience TB is gaining will help make our products more accessible and inclusive",
    author: "Vice President of Engineering | Fortune 500 Company",
    color: "#1a73e8",
    defaultImg: "/Profile1.png",
    flippedImg: "/Profile1.1.png",
    badge: "Accessibility",
  },
  {
    id: "03",
    heading: "Testimonial:",
    quote:
      "Great to see a vendor partner focused on improving overall efficiency. Shows awareness of the critical nature of this work, and the need to get accurate results as fast as possible",
    author: "Vice President of Engineering | Fortune 500 Company",
    color: "#6b21a8",
    defaultImg: "/Profile3.png",
    flippedImg: "/Profile3.3.png",
    badge: "Efficiency",
  },
];

export default function ImageFlipHomepage() {
  return (
    <ImageFlip
      title="Testimonials"
      tagline="From diverse corners of the world, our clients share their stories of satisfaction, trust & success."
      items={testimonials}
    />
  );
}
