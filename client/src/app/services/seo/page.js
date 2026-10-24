import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "SEO | RoiScale",
  description:
    "Technical SEO, content strategy and authority building to rank for the searches that matter.",
};

const data = {
  title: "SEO",
  tagline: "Build lasting visibility that compounds over time.",
  description:
    "Our SEO programs combine technical excellence, content strategy and authority building to help you rank for the searches that matter and keep growing without paying for every click.",
  features: [
    "Technical SEO audit and fixes",
    "Keyword and competitor research",
    "On-page optimization and content planning",
    "Link building and digital PR",
    "Local and eCommerce SEO",
    "Monthly ranking and traffic reporting",
  ],
  benefits: [
    {
      title: "Compounding Returns",
      text: "Rankings and content keep delivering traffic long after publishing.",
    },
    {
      title: "Trusted Visibility",
      text: "Organic results build credibility with searchers.",
    },
    {
      title: "Lower Cost Per Lead",
      text: "Reduce reliance on paid channels as organic traffic grows.",
    },
  ],
  process: [
    { title: "Audit", text: "We find technical issues and content gaps." },
    { title: "Strategy", text: "We prioritize keywords and pages by impact." },
    { title: "Execute", text: "We fix, write, optimize and earn links." },
    { title: "Report", text: "We track rankings, traffic and revenue impact." },
  ],
};

export default function SeoPage() {
  return <ServiceTemplate {...data} />;
}