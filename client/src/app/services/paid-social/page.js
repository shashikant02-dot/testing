import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Paid Social | RoiScale",
  description:
    "Paid social programs that combine sharp targeting, scroll-stopping creative and disciplined testing.",
};

const data = {
  title: "Paid Social",
  tagline: "Turn scrolling audiences into customers.",
  description:
    "From Meta to LinkedIn, TikTok and beyond, we design paid social programs that combine sharp targeting, scroll-stopping creative and disciplined testing to drive efficient growth.",
  features: [
    "Meta, LinkedIn, TikTok and YouTube campaign management",
    "Audience research, lookalikes and retargeting",
    "Creative strategy and rapid ad testing",
    "Full-funnel campaign architecture",
    "Pixel and conversion API setup",
    "Performance dashboards and insights",
  ],
  benefits: [
    {
      title: "Wider Reach",
      text: "Introduce your brand to new audiences before they start searching.",
    },
    {
      title: "Creative-Led Growth",
      text: "Constant testing finds the messages and visuals that actually convert.",
    },
    {
      title: "Efficient Retargeting",
      text: "Bring back visitors who showed interest and close the loop.",
    },
  ],
  process: [
    { title: "Discover", text: "We define your audience, offer and goals." },
    { title: "Create", text: "We plan and produce ad concepts for each funnel stage." },
    { title: "Launch", text: "We roll out structured tests across platforms." },
    { title: "Iterate", text: "We double down on winners and retire the rest." },
  ],
};

export default function PaidSocialPage() {
  return <ServiceTemplate {...data} />;
}