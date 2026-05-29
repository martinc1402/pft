import Link from "next/link";
import { INSTAGRAM_URL, phone } from "@/lib/content";
import { InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--pft-line)] bg-[var(--pft-black)]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="#home"
              className="font-display text-2xl font-bold tracking-[0.4em] text-[var(--pft-accent)]"
              aria-label="PFT, back to top"
            >
              PFT
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--pft-faint)]">
              Performance Fitness Training &amp; Rehabilitation. Move better,
              feel stronger, live healthier.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 font-display text-xs uppercase tracking-[0.2em] text-[var(--pft-muted)]"
          >
            <Link href="#about" className="footer-link">
              About
            </Link>
            <Link href="#testimonials" className="footer-link">
              Testimonials
            </Link>
            <Link href="#contact" className="footer-link">
              Contact
            </Link>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="footer-link"
            >
              {phone}
            </a>
          </nav>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow PFT on Instagram"
            className="text-[var(--pft-muted)] transition-colors hover:text-[var(--pft-accent-bright)]"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-12 border-t border-[var(--pft-line)] pt-6">
          <p className="text-xs text-[var(--pft-faint)]">
            © {2026} Performance Fitness Training &amp; Rehabilitation. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
