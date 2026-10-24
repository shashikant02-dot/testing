"use client";

import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Paid Search", href: "/services/paid-search" },
    { label: "SEO", href: "/services/seo" },
    { label: "Paid Social", href: "/services/paid-social" },
    { label: "Amazon", href: "/services/amazon" },
    { label: "Lifecycle Marketing", href: "/services/lifecycle" },
    { label: "Creative", href: "/services/creative" },
  ],

  "About Us": [
    { label: "Our Values", href: "/about/values" },
    { label: "Our Mission", href: "/mission" },
    { label: "Meet Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Culture", href: "/culture" },
    { label: "Giving Back", href: "/giving-back" },
  ],

  Results: [
    { label: "Case Studies", href: "/results/case-studies" },
    { label: "Reviews", href: "/resources/reviews" },
  ],

  Resources: [
    { label: "Our Blog", href: "/resources/blog" },
    { label: "Webinars & Recordings", href: "/resources/webinars" },
    { label: "Partners", href: "/resources/partners" },
  ],
};

function FacebookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.7 21v-7h2.4l.4-2.8h-2.8v-1.8c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2.3H9v2.8h2.2v7h2.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 8.4H2.3V21h2.9V8.4ZM3.8 3A1.8 1.8 0 1 0 3.8 6.6 1.8 1.8 0 0 0 3.8 3ZM21 13.8c0-3.8-2-5.6-4.8-5.6-2.2 0-3.2 1.2-3.8 2v-1.8H9.5V21h2.9v-6.2c0-1.6.3-3.2 2.3-3.2 1.9 0 1.9 1.8 1.9 3.3V21h2.9l.5-7.2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1B1B1B] text-white">
      {/* Top CTA Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1B1B1B]">
        {/* Cyan diagonal background */}
        <div
          className="absolute inset-x-0 top-0 h-[390px] bg-[#16cdf7]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 23%, 0 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-16">
          <h2 className="max-w-2xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let&apos;s Do This
          </h2>

          <div className="mt-16 max-w-[690px]">
            <p className="text-xl font-bold uppercase leading-snug tracking-wide text-white sm:text-2xl">
              Let&apos;s get in touch to see if we&apos;re a good fit to help
              you reach your business goals
            </p>

            <Link
              href="/resources/marketer-audit"
              className="mt-8 inline-flex items-center gap-8 bg-[#1B1B1B] px-8 py-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#16cdf7] sm:text-base"
            >
              Get Your Free Marketing Audit

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9h11M10 4l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="relative z-10 mx-auto -mt-16 max-w-[1400px] px-6 pb-12 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_0.8fr_1fr_1.25fr] lg:gap-10">
          {/* Services */}
          <FooterColumn title="Services" links={footerLinks.Services} />

          {/* About */}
          <FooterColumn title="About Us" links={footerLinks["About Us"]} />

          {/* Results */}
          <FooterColumn title="Results" links={footerLinks.Results} />

          {/* Resources */}
          <FooterColumn title="Resources" links={footerLinks.Resources} />

          {/* Contact Card */}
          <div className="relative overflow-hidden bg-[#242424] px-8 py-9 lg:min-h-[360px]">
            {/* Background decorative shape */}
            <div className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full border-[22px] border-[#2D2D2D]" />
            <div className="pointer-events-none absolute -right-5 top-28 h-56 w-56 rounded-full border-[22px] border-[#2D2D2D]" />

            <div className="relative z-10">
              {/* Logo */}
              <Link
                href="/"
                className="inline-block text-4xl font-black tracking-[-0.08em] text-white"
              >
                ROI<span className="text-[#16cdf7]">SCALE</span>
              </Link>

              <a
                href="tel:+18779567510"
                className="mt-14 block text-2xl font-medium text-white transition-colors hover:text-[#16cdf7]"
              >
                (877) 956-7510
              </a>

              <Link
                href="/contact"
                className="mt-8 inline-flex bg-[#16cdf7] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#1B1B1B]"
              >
                Contact Us
              </Link>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-7 text-white">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="transition-colors hover:text-[#16cdf7]"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[#16cdf7]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-[#16cdf7]"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 px-6 py-6 text-sm text-white/60 sm:px-10 md:flex-row lg:px-16">
          <p>
            © {new Date( ).getFullYear()} RoiScale. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#16cdf7]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#16cdf7]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-black uppercase tracking-wide text-white">
        {title}
      </h3>

      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base text-white/90 transition-colors hover:text-[#16cdf7]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
