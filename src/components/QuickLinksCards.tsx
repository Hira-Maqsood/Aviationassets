import Image from "next/image";

interface QuickLinkCard {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: React.ReactNode;
}

/* ── Inline SVG icons ── */
const LibraryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 7h8M8 11h5" strokeLinecap="round" />
  </svg>
);

const PartnersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OffersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M9 5H2v7l9.5 9.5a1 1 0 001.4 0l6.6-6.6a1 1 0 000-1.4L9 5z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="9" r="1" fill="currentColor" stroke="none" />
    <path d="M15 5l5.5 5.5" strokeLinecap="round" />
  </svg>
);

const TestimonialsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 9h8M8 13h4" strokeLinecap="round" />
  </svg>
);

const cards: QuickLinkCard[] = [
  {
    title: "Sofema Library",
    description: "Access 1000+ training resources.",
    image: "/images/card-library.png",
    href: "/library",
    icon: <LibraryIcon />,
  },
  {
    title: "Privileged Training Partners",
    description: "Global network of trusted partners.",
    image: "/images/card-partners.png",
    href: "/partners",
    icon: <PartnersIcon />,
  },
  {
    title: "Special Offers",
    description: "Discover exclusive deals.",
    image: "/images/card-offers.png",
    href: "/offers",
    icon: <OffersIcon />,
  },
  {
    title: "Testimonials & Impact Stories",
    description: "Real stories from aviation professionals.",
    image: "/images/card-testimonials.png",
    href: "/testimonials",
    icon: <TestimonialsIcon />,
  },
];

export default function QuickLinksCards() {
  return (
    <section
      id="quick-links"
      className="bg-[#f0f2f5] px-4 pt-16 pb-12 md:pt-20 md:pb-16"
      aria-label="Quick links"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <article
              key={card.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row"
            >
              {/* ── Image panel ── */}
              <div className="relative w-full shrink-0 sm:w-[45%]">
                <div className="relative h-56 sm:h-full sm:min-h-[380px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 25vw"
                  />
                </div>
              </div>

              {/* ── Content panel ── */}
              <div className="flex flex-1 flex-col justify-between p-6 lg:p-7">
                <div className="flex flex-col">
                  {/* Icon badge */}
                  <div className="flex justify-center mb-5">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-light/10 text-brand-blue border border-brand-blue-light/20"
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-[18px] font-bold leading-snug text-navy">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </div>

                {/* Arrow button */}
                <div className="mt-6 flex justify-end">
                  <a
                    href={card.href}
                    aria-label={`View ${card.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-sm transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-md"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.19l-2.72-2.72a.75.75 0 011.06-1.06l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
