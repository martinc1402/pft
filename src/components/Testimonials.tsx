"use client";

import { useState, useCallback, useRef } from "react";
import { testimonials } from "@/lib/content";
import SectionLabel from "./SectionLabel";

const SWIPE_THRESHOLD = 40; // px

export default function Testimonials() {
  // One card at a time on every screen size for maximum readability.
  const [index, setIndex] = useState(0);

  const maxIndex = testimonials.length - 1;

  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );
  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );

  // Touch swipe (mobile)
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta <= -SWIPE_THRESHOLD) next();
    else if (delta >= SWIPE_THRESHOLD) prev();
    touchStartX.current = null;
  };

  return (
    <section id="testimonials" className="bg-[#161616] py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="section-heading mt-4 text-3xl font-light tracking-[0.18em] text-white sm:text-4xl lg:text-5xl">
              What Clients Say
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[var(--pft-line-strong)] text-[var(--pft-accent)] transition-colors hover:border-[var(--pft-accent)] hover:bg-[var(--pft-accent)] hover:text-white"
            >
              <span aria-hidden="true" className="text-lg">
                ←
              </span>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[var(--pft-line-strong)] text-[var(--pft-accent)] transition-colors hover:border-[var(--pft-accent)] hover:bg-[var(--pft-accent)] hover:text-white"
            >
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          className="mt-14 overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="w-full shrink-0"
                aria-hidden={i !== index}
              >
                <div
                  className="mx-auto flex h-full max-w-3xl flex-col border border-[var(--pft-line)] border-t-[3px] border-t-[var(--pft-accent)] bg-[#1e1e1e] p-9"
                  style={{ boxShadow: "0 10px 30px -18px rgba(0,0,0,0.6)" }}
                >
                  <span
                    aria-hidden="true"
                    className="-mb-6 font-display text-[7rem] font-bold leading-[0.7] text-[var(--pft-accent)] sm:text-[8.5rem]"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 text-base leading-[1.8] text-[#d0d0d0]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[var(--pft-accent)]">
                    {t.name}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "2rem" : "0.5rem",
                background:
                  i === index ? "var(--pft-accent)" : "var(--pft-line-strong)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
