import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Data Analytics | RoiScale",
  description:
    "Reliable tracking and clear reporting so you can see the real impact of your marketing.",
};

const data = {
  title: "Data Analytics",
  tagline: "Know exactly what is working and why.",
  description:
    "We set up reliable tracking and clear reporting so you can see the real impact of your marketing and make confident decisions.",
  features: [
    "GA4 and tag manager setup",
    "Conversion and event tracking",
    "Custom dashboards (Looker Studio and more)",
    "Attribution and funnel analysis",
    "Data cleanup and integrations",
    "Regular insights and recommendations",
  ],
  benefits: [
    {
      title: "Clear Visibility",
      text: "See performance across every channel in one place.",
    },
    {
      title: "Accurate Tracking",
      text: "Trust the numbers behind every decision.",
    },
    {
      title: "Smarter Spend",
      text: "Move budget toward what actually drives growth.",
    },
  ],
  process: [
    { title: "Audit", text: "We review your current tracking and data." },
    { title: "Implement", text: "We fix and set up measurement." },
    { title: "Visualize", text: "We build dashboards your team will use." },
    { title: "Advise", text: "We turn data into clear actions." },
  ],
};

export default function DataAnalyticsPage() {
  return <ServiceTemplate {...data} />;
}