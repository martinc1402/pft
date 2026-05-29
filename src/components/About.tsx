import Image from "next/image";
import Link from "next/link";
import { aboutParagraphs, services, qualifications } from "@/lib/content";
import { ServiceIcon } from "./icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[var(--pft-base)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Left — headshot */}
          <Reveal className="lg:sticky lg:top-16 lg:self-start">
            <div className="headshot-frame mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
              <Image
                src="/assets/jake-headshot.webp"
                alt="Jake Sbroja, founder of Performance Fitness Training"
                width={640}
                height={853}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
            <p className="mt-6 text-center font-display text-xs uppercase tracking-[0.3em] text-[var(--pft-faint)]">
              Jake Sbroja
              <span className="mx-2 text-[var(--pft-accent)]">/</span>
              Founder &amp; Head Coach
            </p>
          </Reveal>

          {/* Right — copy */}
          <div>
            <Reveal>
              <h2 className="section-heading text-3xl font-light text-white sm:text-4xl lg:text-[2.75rem]">
                Raising the standard of
                <span className="block text-[var(--pft-accent-bright)]">
                  health &amp; performance
                </span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-[var(--pft-muted)] sm:text-base">
              {aboutParagraphs.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <Reveal>
            <span className="eyebrow">Services</span>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[var(--pft-line)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.key} delay={i * 50} className="contents">
                <div className="service-tile">
                  <ServiceIcon
                    name={s.key}
                    className="h-9 w-9 text-[var(--pft-accent)]"
                  />
                  <h3 className="mt-6 font-display text-sm font-medium uppercase leading-snug tracking-[0.18em] text-white">
                    {s.label}
                  </h3>
                </div>
              </Reveal>
            ))}
            {/* 6th tile completes the 2x3 grid as a CTA */}
            <Reveal delay={services.length * 50} className="contents">
              <Link
                href="#contact"
                className="service-tile group flex flex-col justify-between"
              >
                <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-[var(--pft-muted)] transition-colors group-hover:text-white">
                  Looking for something tailored?
                </span>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pft-accent-bright)]">
                  Enquire now
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mt-24">
          <Reveal>
            <span className="eyebrow">Qualifications</span>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {qualifications.map((q, i) => (
              <Reveal key={q} delay={i * 40} className="contents">
                <span className="pill">{q}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
