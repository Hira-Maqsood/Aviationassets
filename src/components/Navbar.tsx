"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "About us", href: "/about", active: false },
  { label: "Media›", href: "/media", active: false },
  { label: "Contact us", href: "/contact", active: false },
  { label: "FAQ", href: "/faq", active: false },
  { label: "Explore", href: "/explore", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ── Logo Image ── */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Aviation Assets Home">
          <Image
            src="/images/logo-transparent.png"
            alt="Aviation Assets logo"
            width={220}
            height={80}
            className="h-16 sm:h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.label} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className={`relative px-4 py-2 text-[15px] font-medium transition-colors
                  ${
                    link.active
                      ? "text-navy after:absolute after:bottom-0 after:left-1/2 after:h-[2.5px] after:w-8 after:-translate-x-1/2 after:bg-brand-blue after:rounded-full"
                      : "text-navy/75 hover:text-navy"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Contact Email (Desktop) ── */}
        <a
          href="mailto:team@aviationassets.com"
          className="hidden lg:flex items-center gap-2 text-[14px] font-medium text-navy/70 transition-colors hover:text-brand-blue shrink-0"
          aria-label="Send email to team@aviationassets.com"
        >
          {/* Mail icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 text-brand-blue"
            aria-hidden="true"
          >
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
          </svg>
          <span>team@aviationassets.com</span>
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-navy hover:bg-navy/5 transition-colors"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 border-t border-navy/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3" role="menu">
          {NAV_LINKS.map((link) => (
            <li key={link.label} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className={`block rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors ${
                  link.active
                    ? "text-brand-blue bg-brand-blue/5"
                    : "text-navy/80 hover:bg-brand-blue/5 hover:text-brand-blue"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Mobile email */}
          <li className="mt-2 border-t border-navy/10 pt-3" role="none">
            <a
              href="mailto:team@aviationassets.com"
              className="flex items-center gap-2 px-3 py-2 text-[14px] font-medium text-navy/60 hover:text-brand-blue transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
              <span>team@aviationassets.com</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
