"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Explore", href: "/explore" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Updated Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Aviation Assets Home"
        >
          <Image
            src="/images/logo-new.jpg"
            alt="Aviation Assets logo"
            width={180}
            height={55}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-navy font-semibold after:absolute after:bottom-0 after:left-1/2 after:h-[2.5px] after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-brand-blue"
                      : "text-navy/75 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-navy/5 lg:hidden"
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

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-96 border-t border-navy/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-brand-blue/5 text-brand-blue font-semibold"
                      : "text-navy/80 hover:bg-brand-blue/5 hover:text-brand-blue"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
