import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Creative | RoiScale",
  description:
    "Ad concepts, visuals and video built for performance and brand consistency.",
};

const data = {
  title: "Creative",
  tagline: "Ideas and assets that make your brand impossible to scroll past.",
  description:
    "Our creative team produces ad concepts, visuals and video that are built for performance, so great design and great results go hand in hand.",
  features: [
    "Ad creative and concept development",
    "Static, carousel and video ads",
    "Landing page and email design",
    "Brand messaging and positioning",
    "UGC and influencer-style content direction",
    "Creative performance analysis",
  ],
  benefits: [
    {
      title: "Stronger Engagement",
      text: "Eye-catching creative earns attention and clicks.",
    },
    {
      title: "Consistent Brand",
      text: "Keep your look and message aligned across channels.",
    },
    {
      title: "Performance Built In",
      text: "Every asset is designed with testing and results in mind.",
    },
  ],
  process: [
    { title: "Brief", text: "We learn your brand, audience and goals." },
    { title: "Concept", text: "We develop ideas and creative directions." },
    { title: "Produce", text: "We design and create the final assets." },
    { title: "Learn", text: "We analyze performance and evolve the work." },
  ],
};

export default function CreativePage() {
  return <ServiceTemplate {...data} />;
}