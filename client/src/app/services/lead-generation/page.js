import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Lead Generation | RoiScale",
  description:
    "Lead generation systems with targeted campaigns, landing pages and smart follow-up.",
};

const data = {
  title: "Lead Generation",
  tagline: "A steady pipeline of qualified leads for your sales team.",
  description:
    "We build lead generation systems that combine targeted campaigns, high-converting landing pages and smart follow-up to deliver leads your team can actually close.",
  features: [
    "Multi-channel lead campaigns",
    "Landing pages and lead forms",
    "Lead qualification and scoring",
    "CRM integration and follow-up automation",
    "Cost per lead and quality tracking",
    "Sales and marketing alignment",
  ],
  benefits: [
    {
      title: "Qualified Leads",
      text: "Focus on leads that match your ideal customer.",
    },
    {
      title: "Predictable Pipeline",
      text: "Build a repeatable system for new opportunities.",
    },
    {
      title: "Faster Follow-Up",
      text: "Automation helps your team respond while interest is high.",
    },
  ],
  process: [
    { title: "Define", text: "We clarify your ideal customer and offer." },
    { title: "Build", text: "We create campaigns, pages and tracking." },
    { title: "Generate", text: "We launch and optimize lead flow." },
    { title: "Qualify", text: "We improve lead quality with your sales feedback." },
  ],
};

export default function LeadGenerationPage() {
  return <ServiceTemplate {...data} />;
}