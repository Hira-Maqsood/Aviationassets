import Link from "next/link";

interface ServiceItem {
  label: string;
  href: string;
}

interface ServiceCardData {
  title: string;
  items: ServiceItem[];
}

const servicesData: ServiceCardData[] = [
  {
    title: "SAS Services",
    items: [
      { label: "Audit Services", href: "#" },
      { label: "IOSA Preparation & Support", href: "#" },
      { label: "EASA Regulatory Support", href: "#" },
      { label: "Support for EASA 145 and Foreign Approval Holders", href: "#" },
      { label: "Aviation SMS Support for your Business", href: "#" },
      { label: "Human Factor & Maintenance Error", href: "#" },
      { label: "Strategic Consultancy & Support", href: "#" },
      { label: "Technical Representation", href: "#" },
    ],
  },
  {
    title: "Partner Services",
    items: [
      { label: "Aviation Software - Aircraft Maintenance Software", href: "#" },
      { label: "Continuous Airworthiness Management", href: "#" },
      { label: "Engine Health Monitoring and Borescope Inspections", href: "#" },
      { label: "Aviation Quality & Safety Software Management", href: "#" },
      { label: "Executive Aviation Recruitment & Consultancy", href: "#" },
    ],
  },
  {
    title: "SAS Information",
    items: [
      { label: "Sofema Library", href: "#" },
      { label: "Administration & Marketing Documents", href: "#" },
      { label: "Corporate Freedom Pass & Freedom Pass", href: "#" },
      { label: "Visit Sofia", href: "#" },
      { label: "Aviation Consultant", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Instructor Access", href: "#" },
    ],
  },
];

export default function ServicesListCards() {
  return (
    <section className="bg-[#f5f7fa] px-4 py-16 md:py-20" aria-label="Services and Information">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((card, idx) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl border border-gray-100"
            >
              {/* ── Modern Premium Header ── */}
              <div 
                className="py-8 px-6 relative overflow-hidden"
                style={{
                  background: idx === 0 
                    ? "linear-gradient(135deg, #0055FF 0%, #00AAFF 100%)" // Brand blue to cyan
                    : idx === 1
                    ? "linear-gradient(135deg, #001A57 0%, #003DB3 100%)" // Navy dark to lighter navy
                    : "linear-gradient(135deg, #002B80 0%, #0055FF 100%)" // Navy to brand blue
                }}
              >
                {/* Abstract geometric shapes for modern flair */}
                <svg className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon fill="white" points="100,0 100,100 0,100" />
                </svg>
                
                <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white tracking-wide">
                  {card.title}
                </h3>
              </div>

              {/* ── List Items ── */}
              <div className="flex-1 p-6 sm:p-8 sm:pb-12 bg-white">
                <ul className="flex flex-col gap-6">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group flex items-start">
                      <span className="mr-3 mt-1 text-brand-blue transition-transform group-hover:translate-x-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                      <Link
                        href={item.href}
                        className="text-[15.5px] font-medium leading-relaxed text-navy/80 transition-colors group-hover:text-brand-blue"
                      >
                        {item.label}
                      </Link>
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
