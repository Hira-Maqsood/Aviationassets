import Image from "next/image";

export default function PartnersMarquee() {
  return (
    <section className="bg-white py-12 overflow-hidden border-t border-gray-100" aria-label="Our Partners">
      <div className="mx-auto max-w-7xl px-4 mb-8">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-navy">
          Our Trusted Partners
        </h2>
        <div className="mt-2 h-1 w-16 bg-brand-blue mx-auto rounded-full"></div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex bg-white">
        {/* Gradient fades for edges (optional, but looks nice) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* The moving track */}
        <div className="flex w-[200%] animate-marquee">
          {/* First strip */}
          <div className="relative w-1/2 h-[60px] sm:h-[80px] md:h-[100px] shrink-0">
            <Image
              src="/images/partners-strip.png"
              alt="Partner logos"
              fill
              className="object-contain object-left mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Second strip (duplicate for seamless loop) */}
          <div className="relative w-1/2 h-[60px] sm:h-[80px] md:h-[100px] shrink-0">
            <Image
              src="/images/partners-strip.png"
              alt="Partner logos duplicate"
              fill
              className="object-contain object-left mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
