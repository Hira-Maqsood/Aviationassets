interface ServiceCardData {
  title: string;
  items: string[];
}

const servicesData: ServiceCardData[] = [
  {
    title: "SAS Services",
    items: [
      "Audit Services",
      "IOSA Preparation & Support",
      "EASA Regulatory Support",
      "Support for EASA 145 and Foreign Approval Holders",
      "Aviation SMS Support for your Business",
      "Human Factor & Maintenance Error",
      "Strategic Consultancy & Support",
      "Technical Representation",
    ],
  },
  {
    title: "Partner Services",
    items: [
      "Aviation Software - Aircraft Maintenance Software",
      "Continuous Airworthiness Management",
      "Engine Health Monitoring and Borescope Inspections",
      "Aviation Quality & Safety Software Management",
      "Executive Aviation Recruitment & Consultancy",
    ],
  },
  {
    title: "SAS Information",
    items: [
      "Sofema Library",
      "Administration & Marketing Documents",
      "Corporate Freedom Pass & Freedom Pass",
      "Visit Sofia",
      "Aviation Consultant",
      "Terms & Conditions",
      "Privacy Policy",
      "Instructor Access",
    ],
  },
];

const headerGradients = [
  "linear-gradient(135deg, #0055FF 0%, #00AAFF 100%)",
  "linear-gradient(135deg, #001A57 0%, #003DB3 100%)",
  "linear-gradient(135deg, #002B80 0%, #0055FF 100%)",
];

export default function ServicesListCards() {
  return (
    <section
      id="services"
      className="bg-[#f5f7fa] px-4 py-16 md:py-20"
      aria-label="Services and Information"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((card, idx) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div
                className="relative overflow-hidden px-6 py-8"
                style={{ background: headerGradients[idx] }}
              >
                <svg
                  className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon fill="white" points="100,0 100,100 0,100" />
                </svg>

                <h3 className="relative z-10 text-xl font-bold tracking-wide text-white md:text-2xl">
                  {card.title}
                </h3>
              </div>

              <div className="flex-1 bg-white p-6 sm:p-8 sm:pb-12">
                <ul className="flex flex-col gap-6">
                  {card.items.map((item) => (
                    <li key={item} className="group flex items-start">
                      <span
                        className="mr-3 mt-1 text-brand-blue transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                      <span className="text-[15.5px] font-medium leading-relaxed text-navy/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
