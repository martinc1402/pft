import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/content";
import { InstagramIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "80vh", minHeight: "560px" }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/brand-reference.jpg"
        aria-hidden="true"
      >
        <source src="/assets/hero-animation.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />
      {/* Bottom fade into the base background for a seamless section join */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--pft-base) 100%)",
        }}
      />

      {/* Transparent nav over the video */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
          <Link
            href="#home"
            className="font-display text-2xl font-bold tracking-[0.4em] text-[var(--pft-accent)] sm:text-3xl"
            aria-label="PFT — Performance Fitness Training, back to top"
          >
            PFT
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow PFT on Instagram"
            className="text-white/85 transition-colors duration-300 hover:text-[var(--pft-accent-bright)]"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        </nav>
      </header>

      {/* Centred content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="section-heading max-w-5xl text-[2.4rem] font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Performance
          <br className="hidden sm:block" /> Fitness Training
        </h1>
        <p className="mt-7 font-display text-sm font-light uppercase tracking-[0.28em] text-white/80 sm:text-base">
          Move Better. Feel Stronger. Live Healthier.
        </p>
        <Link href="#contact" className="btn-ghost mt-11">
          Train With Me
        </Link>
      </div>

      {/* Scroll-down indicator */}
      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-min flex-col items-center gap-2 text-white/70 transition-colors hover:text-[var(--pft-accent-bright)]"
      >
        <span className="font-display text-[0.6rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <svg
          className="scroll-indicator h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
    </section>
  );
}
