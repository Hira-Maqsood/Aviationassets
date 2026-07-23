"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

import type { LucideIcon } from "lucide-react";

interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
}

const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: MapPin,
    label: "Our Office",
    lines: ["B-5-8 Plaza Mont Kiara, Mont Kiara,", "50480, Kuala Lumpur, Malaysia"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["haania@aviation-assets.com"],
    href: "mailto:haania@aviation-assets.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["Mobile: +6014 298 0179", "Tel: +603 2726 2736", "Fax: +603 2726 2737"],
    href: "tel:+60142980179",
  },
  {
    icon: Clock,
    label: "Director",
    lines: ["Haania Nadeem", "Director, Aviation Assets"],
  },
];

export default function ContactContent() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Simulate a network request; replace with actual API call in production
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1200);
      });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-[#000D33] px-4 py-16 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Have a question about our aviation training courses, consulting
            services, or partnership opportunities? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section
        className="bg-[#f0f2f5] px-4 py-12 md:py-16"
        aria-label="Contact information"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? { href: item.href, className: "group" }
                : {};

              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                >
                  <div className="flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                      <Icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-[15px] font-bold text-navy">
                      {item.label}
                    </h3>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[13px] leading-relaxed text-gray-500"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Map Section ── */}
      <section
        className="bg-white px-4 py-12 md:py-20"
        aria-label="Contact form and map"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Contact Form ── */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-navy md:text-3xl">
              Send Us a Message
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50 px-6 py-16 text-center"
                role="status"
              >
                <CheckCircle
                  className="mb-4 h-12 w-12 text-green-500"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-xl font-bold text-navy">
                  Message Sent!
                </h3>
                <p className="mb-6 max-w-sm text-sm text-gray-500">
                  Thank you for reaching out. Our team will review your message
                  and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-navy"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-navy"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-sm font-medium text-navy"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-sm font-medium text-navy"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-3 text-sm text-navy focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="training">Training Inquiry</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-navy"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-blue/20 transition-all hover:bg-brand-blue-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          className="opacity-75"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Map / Location ── */}
          <div className="flex flex-col">
            <h2 className="mb-2 text-2xl font-bold text-navy md:text-3xl">
              Our Location
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              Visit us at our Kuala Lumpur headquarters at Plaza Mont Kiara or reach out to our team.
            </p>

            <div className="relative flex-1 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="Aviation Assets office location"
                src="https://maps.google.com/maps?q=Plaza%20Mont%20Kiara%2C%20Kuala%20Lumpur%2C%20Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[300px] w-full lg:h-full lg:min-h-[460px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
