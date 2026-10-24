import Link from "next/link";

const services = [
  {
    slug: "paid-search",
    title: "Paid Search",
    text: "Capture high-intent demand with Google and Bing Ads managed for profit, not just clicks.",
  },
  {
    slug: "paid-social",
    title: "Paid Social",
    text: "Turn scrolling audiences into customers with sharp targeting and scroll-stopping creative.",
  },
  {
    slug: "seo",
    title: "SEO",
    text: "Build lasting organic visibility with technical SEO, content and authority building.",
  },
  {
    slug: "amazon",
    title: "Amazon",
    text: "Win the marketplace with optimized listings and profit-focused Amazon advertising.",
  },
  {
    slug: "lifecycle",
    title: "Lifecycle Marketing",
    text: "Email and SMS flows that turn first-time buyers into loyal, repeat customers.",
  },
  {
    slug: "cro",
    title: "CRO",
    text: "Get more revenue from the traffic you already have through research and testing.",
  },
  {
    slug: "creative",
    title: "Creative",
    text: "Ad concepts, visuals and video built for performance and brand consistency.",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    text: "Reliable tracking and clear dashboards so you know exactly what is working.",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    text: "A steady pipeline of qualified leads with targeted campaigns and smart follow-up.",
  },
];

export const metadata = {
  title: "Our Services | RoiScale",
  description:
    "Paid search, paid social, SEO, Amazon, lifecycle marketing, CRO, creative, data analytics and lead generation, all focused on ROI.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F1729] text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#16cdf7]">
            What We Do
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-tight md:text-6xl">
            Services built to scale your ROI
          </h1>
          <div className="mt-6 h-1 w-16 bg-[#16cdf7]" />
          <p className="mt-8 max-w-2xl text-lg text-slate-300">
            Every channel, one strategy. We combine performance marketing,
            creative and data so each rupee you spend works harder.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-[#16cdf7] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#0fb5dc]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-8 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col border border-slate-200 p-8 transition-all hover:-translate-y-1 hover:border-[#16cdf7] hover:shadow-lg"
              >
                <h2 className="text-2xl font-black uppercase text-[#0F1729] transition-colors group-hover:text-[#16cdf7]">
                  {service.title}
                </h2>
                <div className="mt-3 h-1 w-10 bg-[#16cdf7]" />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {service.text}
                </p>
                <span className="mt-6 text-sm font-bold uppercase tracking-wide text-[#0F1729] group-hover:text-[#16cdf7]">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16cdf7]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-8 py-16 text-center">
          <h2 className="text-3xl font-black uppercase text-white md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="max-w-xl text-white/90">
            Tell us your goals and we will recommend the right mix of services.
          </p>
          <Link
            href="/contact"
            className="bg-[#0F1729] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-black"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}