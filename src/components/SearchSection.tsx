"use client";

import { useState, FormEvent } from "react";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery((currentQuery) => currentQuery.trim());
  };

  return (
    <section
      id="search"
      className="bg-[#f5f5f5] px-4 py-10 md:py-14"
      aria-label="Course search"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-[#000D33] px-6 py-8 sm:px-10 sm:py-10 md:px-14 shadow-xl">
          <h2 className="mb-6 text-center text-xl font-bold text-white sm:text-2xl md:text-[28px]">
            Find Your Training Using Our Search Tool
          </h2>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <form
              onSubmit={handleSearch}
              className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Courses, Certifications, Modules..."
                className="flex-1 rounded-md border-0 bg-white/10 px-6 py-3.5 text-base text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 sm:rounded-r-none"
                aria-label="Search for aviation courses"
              />
              <button
                type="submit"
                className="rounded-md border-2 border-white/80 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#000D33] sm:rounded-l-none shrink-0"
              >
                Search
              </button>
            </form>

            <div className="flex shrink-0 flex-col items-center text-center sm:ml-4">
              <span className="text-xs font-semibold text-white/70 underline decoration-white/40">
                or
              </span>
              <a
                href="/courses"
                className="text-sm font-bold text-white underline decoration-white/80 underline-offset-2 transition-colors hover:text-white/80 whitespace-nowrap"
              >
                View all courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
