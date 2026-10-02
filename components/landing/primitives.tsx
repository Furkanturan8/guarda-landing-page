import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function LogoMark({ className, check = "#18181B" }: { className?: string; check?: string | null }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path d="M20 6 L44 6 Q50 6 50 12 L50 56 L32 42 L14 56 L14 12 Q14 6 20 6 Z" fill="currentColor" />
      {check && (
        <path d="M23 26 L29 33 L43 17" stroke={check} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function LogoBadge({ className, check }: { className?: string; check?: string | null }) {
  return (
    <span
      className={cn(
        "flex size-[26px] shrink-0 items-center justify-center rounded-md bg-ink-soft text-paper",
        className,
      )}
    >
      <LogoMark className="size-[60%]" check={check} />
    </span>
  );
}

export function ActionTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-[3px] border border-line bg-wash px-1.5 py-px font-mono text-[10px] tracking-[.04em] text-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted", className)}>
      {children}
    </span>
  );
}

export function SectionTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn("m-0 text-[clamp(32px,4vw,48px)] leading-[1.05] font-normal tracking-[-.03em]", className)}
      {...props}
    />
  );
}

export function PrimaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex h-11 items-center gap-2 rounded-[10px] bg-ink-soft px-5 text-[15px] font-medium text-paper transition-colors hover:bg-ink-hover",
        className,
      )}
    >
      {children}
    </a>
  );
}

export const card =
  "rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(0,0,0,.04),0_20px_50px_-30px_rgba(0,0,0,.18)]";

/** Spread onto an element to fade it in on scroll; `i` staggers siblings. */
export function reveal(i = 0) {
  return { "data-reveal": "", style: { "--i": i } as CSSProperties };
}

export function Arrow() {
  return (
    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
      →
    </span>
  );
}
