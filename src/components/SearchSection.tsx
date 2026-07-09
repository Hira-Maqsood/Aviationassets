"use client";

import { useState, FormEvent } from "react";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <section
      id="search"
      className="bg-[#f5f5f5] px-4 py-10 md:py-14"
      aria-label="Course search"
    >
      <div className="mx-auto max-w-4xl">
        {/* ── Brand Blue Rounded Card ── */}
        <div className="rounded-2xl bg-[#000D33] px-6 py-8 sm:px-10 sm:py-10 md:px-12">
          {/* Heading — white on blue */}
          <h2 className="mb-6 text-center text-xl font-bold text-white sm:text-2xl md:text-[26px]">
            Find Your Training Using Our Search Tool
          </h2>

          {/* Search Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
            {/* Search Input — takes up most width */}
            <form
              onSubmit={handleSearch}
              className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Courses..."
                className="flex-1 rounded-md sm:rounded-r-none border-0 bg-white/10 py-3 px-5 text-[15px] text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Search for aviation courses"
              />
              <button
                type="submit"
                className="rounded-md sm:rounded-l-none border-2 border-white/80 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#000D33]"
              >
                Search
              </button>
            </form>

            {/* "or View all courses" */}
            <div className="flex flex-col items-center text-center sm:ml-4 shrink-0">
              <span className="text-xs font-semibold text-white/70 underline decoration-white/40">
                or
              </span>
              <a
                href="/courses"
                className="text-sm font-bold text-white underline decoration-white/80 underline-offset-2 transition-colors hover:text-white/80"
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
