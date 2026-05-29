/**
 * Thin full-width orange rule used to separate sections within the
 * continuous dark flow — 1px, PFT orange at 20% opacity.
 */
export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full"
      style={{ background: "rgba(232, 71, 10, 0.2)" }}
    />
  );
}
