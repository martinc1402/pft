import type { SVGProps } from "react";
import type { ServiceKey } from "@/lib/content";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ChronicIcon(props: SVGProps<SVGSVGElement>) {
  // heart + pulse line
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...stroke} {...props}>
      <path d="M16 27S4 19.5 4 11.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 12 3.5C28 19.5 16 27 16 27Z" />
      <path d="M9 16h3l2-4 3 7 2-3h4" />
    </svg>
  );
}

function RehabIcon(props: SVGProps<SVGSVGElement>) {
  // joint / bone with care cross
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...stroke} {...props}>
      <path d="M11 21l10-10" />
      <path d="M9 19a3 3 0 1 1-4-4 2.5 2.5 0 0 0 .8-3.2A3 3 0 0 1 11 9a2.5 2.5 0 0 0 3.2.8" />
      <path d="M23 13a3 3 0 1 1 4 4 2.5 2.5 0 0 0-.8 3.2A3 3 0 0 1 21 23a2.5 2.5 0 0 0-3.2-.8" />
    </svg>
  );
}

function AthleticIcon(props: SVGProps<SVGSVGElement>) {
  // dumbbell
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 12v8M9 9v14M23 9v14M27 12v8M9 16h14" />
    </svg>
  );
}

function PersonalIcon(props: SVGProps<SVGSVGElement>) {
  // person + activity
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...stroke} {...props}>
      <circle cx="16" cy="8" r="3.5" />
      <path d="M9 26c0-4.5 3.1-8 7-8s7 3.5 7 8" />
      <path d="M22 14l3 1.5M10 14l-3 1.5" />
    </svg>
  );
}

function ConsultIcon(props: SVGProps<SVGSVGElement>) {
  // clipboard / assessment
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...stroke} {...props}>
      <rect x="8" y="6" width="16" height="22" rx="2" />
      <path d="M12 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M12 14h8M12 18h8M12 22h5" />
    </svg>
  );
}

const map: Record<
  ServiceKey,
  (props: SVGProps<SVGSVGElement>) => React.JSX.Element
> = {
  chronic: ChronicIcon,
  rehab: RehabIcon,
  athletic: AthleticIcon,
  personal: PersonalIcon,
  consult: ConsultIcon,
};

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceKey } & SVGProps<SVGSVGElement>) {
  const Comp = map[name];
  return <Comp {...props} />;
}
