"use client";

import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000D33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Exactly 3 Columns Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          
          {/* ── Column 1: Brand, Description, Email & Socials ── */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="inline-flex rounded-lg bg-white p-2 shadow-sm">
                <Image
                  src="/images/logo-new.jpg"
                  alt="Aviation Assets Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              Aviation Assets is a Global, Professional Airline, MRO and Ground Operations Support, Consulting, and Training Company. We offer qualified and experienced industry professionals and subject matter experts.
            </p>

            {/* Email link with icon (Requirement 4 & 6) */}
            <div className="flex items-center space-x-3 pt-1">
              <Mail className="h-5 w-5 text-sky-400 shrink-0" aria-hidden="true" />
              <a
                href="mailto:team@aviationassets.com"
                className="text-sm font-medium text-gray-200 transition-colors hover:text-sky-400"
                aria-label="Send email to team@aviationassets.com"
              >
                team@aviationassets.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/"
                className="text-gray-300 transition-colors hover:text-sky-400"
                aria-label="Aviation Assets on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-gray-300 transition-colors hover:text-sky-400"
                aria-label="Aviation Assets on Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-gray-300 transition-colors hover:text-sky-400"
                aria-label="Aviation Assets on YouTube"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Column 2: Our Services ── */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Aviation Compliance Training
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Online Learning Programs
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Corporate Training Solutions
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Regulatory Certification
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Aviation Consultancy
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Compliance & Safety Programs
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Webinars & Classroom Training
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-sky-400">
                  Training Partner Programs
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 3: How to find us (Address + Mini Map, No phone) ── */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">How to find us</h3>
            
            <div className="space-y-3 text-sm text-gray-300">
              <p className="font-semibold uppercase tracking-wider text-white">
                Aviation Assets HQ
              </p>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                <span>
                  B-5-8 Plaza Mont Kiara, Mont Kiara,
                  <br />
                  50480, Kuala Lumpur, Malaysia
                </span>
              </div>
            </div>

            {/* Mini Map (Requirement 6) */}
            <div className="mt-3 overflow-hidden rounded-xl border border-white/10 shadow-md">
              <iframe
                title="Aviation Assets Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7517618255956!2d101.65089337583696!3d3.1601662968153435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49191d8e1467%3A0xd6ef7bfbdf2f913d!2sPlaza%20Mont%20Kiara!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                className="h-36 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-6 text-xs text-gray-400 md:flex-row">
          <p>Copyrights &copy; 2026 Aviation Assets</p>
          <div className="mt-4 space-x-2 md:mt-0">
            <a href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
