import Image from "next/image";

export default function PartnersMarquee() {
  return (
    <section
      className="overflow-hidden border-t border-gray-100 bg-white py-12"
      aria-label="Our Partners"
    >
      <div className="mx-auto mb-8 max-w-7xl px-4">
        <h2 className="text-center text-xl font-bold text-navy sm:text-2xl">
          Our Trusted Partners
        </h2>
        <div
          className="mx-auto mt-2 h-1 w-16 rounded-full bg-brand-blue"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex w-full overflow-hidden bg-white">
        <div
          className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32"
          aria-hidden="true"
        />

        <div className="flex w-[200%] animate-marquee motion-reduce:animate-none">
          <div className="relative h-[60px] w-1/2 shrink-0 sm:h-[80px] md:h-[100px]">
            <Image
              src="/images/partners-strip.png"
              alt="Partner logos"
              fill
              className="object-contain object-left mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            className="relative h-[60px] w-1/2 shrink-0 sm:h-[80px] md:h-[100px]"
            aria-hidden="true"
          >
            <Image
              src="/images/partners-strip.png"
              alt=""
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
