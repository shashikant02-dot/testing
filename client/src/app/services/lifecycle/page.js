import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Lifecycle Marketing | RoiScale",
  description:
    "Email, SMS and automation flows that increase customer lifetime value.",
};

const data = {
  title: "Lifecycle Marketing",
  tagline: "Turn first-time buyers into loyal customers.",
  description:
    "We design email, SMS and automation flows that nurture leads, recover lost revenue and increase customer lifetime value at every stage of the journey.",
  features: [
    "Email and SMS strategy",
    "Welcome, abandoned cart and post-purchase flows",
    "Segmentation and personalization",
    "Win-back and loyalty campaigns",
    "Platform setup (Klaviyo, Mailchimp and more)",
    "A/B testing and deliverability",
  ],
  benefits: [
    {
      title: "Higher Lifetime Value",
      text: "Keep customers engaged and buying again.",
    },
    {
      title: "Always-On Revenue",
      text: "Automations work around the clock without extra ad spend.",
    },
    {
      title: "Personal Messaging",
      text: "Send the right message to the right person at the right time.",
    },
  ],
  process: [
    { title: "Map", text: "We map your customer journey and key moments." },
    { title: "Build", text: "We create flows, templates and segments." },
    { title: "Launch", text: "We activate automations and campaigns." },
    { title: "Refine", text: "We test and improve based on results." },
  ],
};

export default function LifecyclePage() {
  return <ServiceTemplate {...data} />;
}