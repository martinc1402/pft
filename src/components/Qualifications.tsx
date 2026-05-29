import { qualifications } from "@/lib/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="bg-[#161616] py-[120px]"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionLabel>Qualifications</SectionLabel>
        <Reveal>
          <h2 className="section-heading mt-4 text-3xl font-light tracking-[0.18em] text-white sm:text-4xl lg:text-5xl">
            Credentials &amp; Expertise
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-[#d0d0d0]">
            Every program is underpinned by tertiary qualifications and ongoing
            professional accreditation — so your training is grounded in
            evidence, not guesswork.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {qualifications.map((q, i) => (
            <Reveal key={q} delay={i * 40} className="contents">
              <span className="pill">{q}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
