"use client";

import { useEffect, useState, useCallback } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  // Keep index in range when perView changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );
  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );

  return (
    <section
      id="testimonials"
      className="bg-[var(--pft-elevated-2)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-heading text-3xl font-light tracking-[0.18em] text-white sm:text-4xl lg:text-5xl">
            What Clients Say
          </h2>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[var(--pft-line-strong)] text-white/80 transition-colors hover:border-[var(--pft-accent)] hover:text-white"
            >
              <span aria-hidden="true" className="text-lg">
                ←
              </span>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[var(--pft-line-strong)] text-white/80 transition-colors hover:border-[var(--pft-accent)] hover:text-white"
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
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="w-full shrink-0 px-0 lg:w-1/2 lg:px-4"
                aria-hidden={i < index || i >= index + perView}
              >
                <div className="flex h-full flex-col border border-[var(--pft-line)] bg-[var(--pft-elevated)] p-8 sm:p-10">
                  <span
                    aria-hidden="true"
                    className="font-display text-6xl leading-none text-[var(--pft-accent)]"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-[var(--pft-muted)]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[var(--pft-accent-bright)]">
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
              aria-label={`Go to testimonial group ${i + 1}`}
              aria-current={i === index}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "2rem" : "0.5rem",
                background:
                  i === index
                    ? "var(--pft-accent)"
                    : "var(--pft-line-strong)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
