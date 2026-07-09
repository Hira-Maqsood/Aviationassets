"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  {
    src: "/images/hero-bg.png",
    alt: "Commercial airplane approaching runway at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    alt: "Airplane taking off",
  },
  {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    alt: "Airplane wing above clouds",
  },
  {
    src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    alt: "Airport runway with airplanes",
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = HERO_IMAGES.length;

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);
  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero banner"
    >
      {/* ── Background Image ── */}
      <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]">
        {HERO_IMAGES.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            quality={90}
            sizes="100vw"
          />
        ))}

        {/* ── Dark gradient overlay ── */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#001A57]/60 via-[#001A57]/40 to-[#001A57]/80 z-10"
          aria-hidden="true"
        />

        {/* ── "1000" sparkling text overlay on the image ── */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <span
            className="text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-black tracking-wider text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(0,170,255,0.5)",
              textShadow:
                "0 0 40px rgba(0,85,255,0.3), 0 0 80px rgba(0,85,255,0.15)",
            }}
            aria-hidden="true"
          >
            1000
          </span>
        </div>

        {/* ── Bottom text band ── */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#001A57]/95 to-transparent pt-10 pb-4 px-4 text-center z-20">
          <p className="text-sm sm:text-base md:text-lg text-white font-medium">
            <span className="text-white">Aviation Assets</span>{" "}
            <span className="text-brand-blue-light italic">Now Offers Over</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold">
            <span className="text-brand-blue-light">1,000</span>{" "}
            <span className="text-white">
              Aviation Courses, Tailored to Meet Your Needs
            </span>
          </p>
        </div>

        {/* ── Carousel Arrows ── */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white/70 transition-all hover:text-white hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            className="h-7 w-7 sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white/70 transition-all hover:text-white hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            className="h-7 w-7 sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
