"use client";

import Link from "next/link";
import { useState } from "react";

const megaMenus = {
  "What We Do": {
    columns: [
      {
        links: [
          { label: "All Services", href: "/services" },
          { label: "Paid Search", href: "/services/paid-search" },
          { label: "Paid Social", href: "/services/paid-social" },
          { label: "SEO", href: "/services/seo" },
        ],
      },
      {
        links: [
          { label: "Amazon", href: "/services/amazon" },
          { label: "Lifecycle Marketing", href: "/services/lifecycle" },
          { label: "CRO", href: "/services/cro" },
          { label: "Creative", href: "/services/creative" },
        ],
      },
      {
        links: [
          { label: "Data Analytics", href: "/services/data-analytics" },
          { label: "Lead Generation", href: "/services/lead-generation" },
        ],
      },
    ],
  },

  "Who We Help": {
    columns: [
      {
        links: [
          { label: "B2B", href: "/who-we-help/b2b" },
          { label: "B2C", href: "/who-we-help/b2c" },
          { label: "eCommerce", href: "/who-we-help/ecommerce" },
        ],
      },
      {
        links: [
          { label: "Local", href: "/who-we-help/local" },
          { label: "Garage Door", href: "/who-we-help/garage-door" },
          { label: "SaaS", href: "/who-we-help/saas" },
        ],
      },
      {
        links: [
          {
            label: "Online Education",
            href: "/who-we-help/online-education",
          },
          {
            label: "Outdoor Sporting Goods",
            href: "/who-we-help/outdoor-sporting-goods",
          },
          {
            label: "High AOV Brands",
            href: "/who-we-help/high-aov-brands",
          },
        ],
      },
    ],
  },

  "Who We Are": {
    columns: [
      {
        links: [
          { label: "About Us", href: "/about" },
          { label: "Why RoiScale", href: "/why-roiscale" },
        ],
      },
      {
        links: [
          { label: "Meet Our Team", href: "/team" },
          { label: "Our Mission", href: "/mission" },
        ],
      },
      {
        links: [
          { label: "Giving Back", href: "/giving-back" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
  },

  Resources: {
    columns: [
      {
        links: [
          { label: "General", href: "/resources/general" },
          { label: "Blog", href: "/resources/blog" },
          { label: "Partners", href: "/resources/partners" },
        ],
      },
      {
        links: [
          {
            label: "Webinars/Trainings",
            href: "/resources/webinars",
          },
          { label: "Reviews", href: "/resources/reviews" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      {
        links: [
          {
            label: "Indispensable Marketer Audit",
            href: "/resources/marketer-audit",
          },
        ],
      },
    ],
  },
};

const navItems = [
  { label: "What We Do", type: "mega" },
  { label: "Who We Help", type: "mega" },
  { label: "Who We Are", type: "mega" },
  { label: "Results", type: "link", href: "/results" },
  { label: "Resources", type: "mega" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpenItem, setMobileOpenItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileOpenItem(null);
  };

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-black tracking-tight text-[#0F1729]">
            ROI<span className="text-[#16cdf7]">SCALE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden items-center gap-8 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {navItems.map((item) =>
            item.type === "mega" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 text-[15px] font-bold uppercase tracking-wide transition-colors ${
                    openMenu === item.label
                      ? "text-[#16cdf7]"
                      : "text-[#0F1729] hover:text-[#16cdf7]"
                  }`}
                >
                  {item.label}

                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    className={`transition-transform ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] font-bold uppercase tracking-wide text-[#0F1729] transition-colors hover:text-[#16cdf7]"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Mega Menu */}
          {openMenu && megaMenus[openMenu] && (
            <div
              className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-lg"
              onMouseEnter={() => setOpenMenu(openMenu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="mx-auto max-w-[1400px] px-8 py-14">
                <div className="grid grid-cols-4 gap-10">
                  <div>
                    <h2 className="text-4xl font-black uppercase text-[#0F1729]">
                      {openMenu}
                    </h2>

                    <div className="mt-4 h-1 w-16 bg-[#16cdf7]" />
                  </div>

                  {megaMenus[openMenu].columns.map((column, index) => (
                    <ul key={index} className="flex flex-col gap-4">
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-[15px] text-[#0F1729] transition-colors hover:text-[#16cdf7]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-[#16cdf7] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#0fb5dc]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((previous) => !previous)}
          className="flex h-9 w-9 items-center justify-center text-[#0F1729] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            {mobileOpen ? (
              <path
                d="M15 5L5 15M5 5l10 10"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) =>
              item.type === "mega" ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileOpenItem(
                        mobileOpenItem === item.label
                          ? null
                          : item.label
                      )
                    }
                    className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-wide text-[#0F1729]"
                    aria-expanded={mobileOpenItem === item.label}
                  >
                    {item.label}

                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 10 10"
                      className={`transition-transform ${
                        mobileOpenItem === item.label
                          ? "rotate-180"
                          : ""
                      }`}
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {mobileOpenItem === item.label && (
                    <div className="mt-3 flex flex-col gap-2 pl-3">
                      {megaMenus[item.label].columns
                        .flatMap((column) => column.links)
                        .map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="text-sm text-slate-600 transition-colors hover:text-[#16cdf7]"
                          >
                            {link.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-sm font-bold uppercase tracking-wide text-[#0F1729] transition-colors hover:text-[#16cdf7]"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-2 bg-[#16cdf7] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#0fb5dc]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
