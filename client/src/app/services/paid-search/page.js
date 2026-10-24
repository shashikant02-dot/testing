import Link from "next/link";

export const metadata = {
  title: "Paid Search | RoiScale",
  description:
    "Google and Bing Ads managed for profit, not just clicks. Capture high-intent demand with RoiScale.",
};

const features = [
  "Search, Shopping and Performance Max campaign management",
  "Keyword research and intent-based account structure",
  "Ad copy testing and extension optimization",
  "Smart bidding and budget pacing",
  "Conversion tracking and offline conversion imports",
  "Weekly reporting with clear next steps",
];

const benefits = [
  {
    title: "High-Intent Traffic",
    text: "Reach people at the exact moment they are ready to buy or enquire.",
  },
  {
    title: "Measurable ROI",
    text: "Every campaign is tied to revenue and lead goals, not vanity metrics.",
  },
  {
    title: "Fast Feedback",
    text: "Paid search gives quick data so we can test, learn and scale what works.",
  },
];

const process = [
  { title: "Audit", text: "We review your account, tracking and competitors." },
  { title: "Build", text: "We structure campaigns around intent and profitability." },
  { title: "Optimize", text: "We refine bids, queries and creative every week." },
  { title: "Scale", text: "We grow budget into the channels and keywords that perform." },
];

export default function PaidSearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F1729] text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-24">
          <Link
            href="/services"
            className="text-sm font-bold uppercase tracking-widest text-[#16cdf7] hover:underline"
          >
            &larr; All Services
          </Link>
          <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-tight md:text-6xl">
            Paid Search
          </h1>
          <div className="mt-6 h-1 w-16 bg-[#16cdf7]" />
          <p className="mt-8 max-w-2xl text-xl text-slate-300">
            Capture high-intent demand the moment people search for you.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-[#16cdf7] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#0fb5dc]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* Overview + Features */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-8 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black uppercase text-[#0F1729]">
              Overview
            </h2>
            <div className="mt-4 h-1 w-12 bg-[#16cdf7]" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We build and manage Google and Bing Ads campaigns that put your
              brand in front of buyers who are already looking for what you
              sell, and we optimize every rupee toward profit, not just clicks.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black uppercase text-[#0F1729]">
              What&apos;s Included
            </h2>
            <div className="mt-4 h-1 w-12 bg-[#16cdf7]" />
            <ul className="mt-6 flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-[#16cdf7]" />
                  <span className="text-[16px] text-[#0F1729]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-8 py-20">
          <h2 className="text-3xl font-black uppercase text-[#0F1729]">
            Why It Works
          </h2>
          <div className="mt-4 h-1 w-12 bg-[#16cdf7]" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="border border-slate-200 bg-white p-8"
              >
                <h3 className="text-xl font-black uppercase text-[#0F1729]">
                  {benefit.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-8 py-20">
          <h2 className="text-3xl font-black uppercase text-[#0F1729]">
            Our Process
          </h2>
          <div className="mt-4 h-1 w-12 bg-[#16cdf7]" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title}>
                <span className="text-5xl font-black text-[#16cdf7]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-black uppercase text-[#0F1729]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16cdf7]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-8 py-16 text-center">
          <h2 className="text-3xl font-black uppercase text-white md:text-4xl">
            Ready to grow with Paid Search?
          </h2>
          <p className="max-w-xl text-white/90">
            Share your goals and we will put together a plan built around your
            ROI.
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