import Link from "next/link";
import { services } from "@/lib/content";
import { ServiceIcon } from "./icons";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Services() {
  return (
    <section id="services" className="bg-[#0f0f0f] py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionLabel>Services</SectionLabel>
        <Reveal>
          <h2 className="section-heading mt-4 text-3xl font-light tracking-[0.18em] text-white sm:text-4xl lg:text-5xl">
            How I Can Help
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.key} delay={i * 50} className="contents">
              <div className="service-tile">
                <ServiceIcon
                  name={s.key}
                  className="h-9 w-9 text-[var(--pft-accent)]"
                />
                <h3 className="mt-6 font-display text-[14px] font-medium uppercase leading-snug tracking-[0.18em] text-[#cccccc]">
                  {s.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Standalone full-width CTA row */}
        <Reveal className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-sm uppercase tracking-[0.18em] text-[var(--pft-muted)]">
            Looking for something tailored?
          </p>
          <Link href="#contact" className="link-underline">
            Enquire now
            <span aria-hidden="true" className="ml-1.5">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
