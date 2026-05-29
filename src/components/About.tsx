import Image from "next/image";
import { aboutParagraphs } from "@/lib/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--pft-base)] py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionLabel>About</SectionLabel>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Left — headshot */}
          <Reveal className="lg:sticky lg:top-16 lg:self-start">
            <div className="headshot-frame mx-auto aspect-[3/4] w-full max-w-lg overflow-hidden">
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
              <h2 className="section-heading text-[2.8rem] font-light text-white sm:text-5xl lg:text-[3.5rem]">
                Raising the standard of
                <span className="block text-[var(--pft-accent-bright)]">
                  health &amp; performance
                </span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-[#d0d0d0]">
              {aboutParagraphs.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
