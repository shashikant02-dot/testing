import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Amazon | RoiScale",
  description:
    "Amazon advertising and listing optimization so your products get discovered and convert.",
};

const data = {
  title: "Amazon",
  tagline: "Win the marketplace where shoppers start their search.",
  description:
    "We manage Amazon advertising and listing optimization so your products get discovered, convert better and grow profitably on the marketplace.",
  features: [
    "Sponsored Products, Brands and Display management",
    "Listing, title and A+ content optimization",
    "Keyword and category research",
    "Budget, bid and profitability management",
    "Competitor and market analysis",
    "Account health and reporting",
  ],
  benefits: [
    {
      title: "Marketplace Visibility",
      text: "Show up where millions of ready-to-buy shoppers are searching.",
    },
    {
      title: "Better Conversion",
      text: "Optimized listings turn more views into orders.",
    },
    {
      title: "Profit Focus",
      text: "We manage ad spend against margin, not just sales volume.",
    },
  ],
  process: [
    { title: "Review", text: "We assess listings, ads and catalog health." },
    { title: "Optimize", text: "We improve content and campaign structure." },
    { title: "Advertise", text: "We run and refine ad campaigns daily." },
    { title: "Grow", text: "We expand into new products and placements." },
  ],
};

export default function AmazonPage() {
  return <ServiceTemplate {...data} />;
}