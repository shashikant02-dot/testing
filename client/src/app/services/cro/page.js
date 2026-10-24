import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "CRO | RoiScale",
  description:
    "Conversion rate optimization through research, analytics and testing.",
};

const data = {
  title: "CRO",
  tagline: "Get more from the traffic you already have.",
  description:
    "Conversion rate optimization uses research, analytics and testing to remove friction from your site so more visitors become customers.",
  features: [
    "Conversion audit and user behavior analysis",
    "Heatmaps and session recordings",
    "A/B and multivariate testing",
    "Landing page and checkout optimization",
    "Funnel analytics",
    "Test roadmap and documentation",
  ],
  benefits: [
    {
      title: "More Revenue, Same Traffic",
      text: "Improve results without increasing ad spend.",
    },
    {
      title: "Data-Backed Decisions",
      text: "Replace guesswork with tested insights.",
    },
    {
      title: "Better Experience",
      text: "Make your site easier and more enjoyable to use.",
    },
  ],
  process: [
    { title: "Research", text: "We study data and user behavior." },
    { title: "Hypothesize", text: "We prioritize ideas by expected impact." },
    { title: "Test", text: "We run controlled experiments." },
    { title: "Implement", text: "We roll out winners and keep testing." },
  ],
};

export default function CroPage() {
  return <ServiceTemplate {...data} />;
}