import Reveal from "./Reveal";

/**
 * Consistent section eyebrow: an orange "— LABEL" tag with a thin
 * 60px orange rule beneath, sitting above the section heading.
 */
export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <span className="eyebrow">{children}</span>
      <div className="section-rule" />
    </Reveal>
  );
}
