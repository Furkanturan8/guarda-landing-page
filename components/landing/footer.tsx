import type { Dictionary } from "@/lib/i18n";
import { APP_URL } from "@/lib/site";
import { sectionLinks } from "./navbar";
import { Arrow, LogoBadge, reveal } from "./primitives";

export function Footer({ t, links }: { t: Dictionary["footer"]; links: Dictionary["nav"]["links"] }) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-4 pt-24 pb-12 sm:px-8 sm:pt-30">
        <h2
          {...reveal()}
          className="m-0 max-w-[14ch] text-[clamp(40px,6vw,76px)] leading-none font-normal tracking-[-.04em] text-balance"
        >
          {t.title}
        </h2>
        <div {...reveal(2)} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[46px] items-center gap-2 rounded-[10px] bg-paper px-[22px] text-[15px] font-medium text-ink transition-colors hover:bg-line"
          >
            {t.cta} <Arrow />
          </a>
          <span className="max-w-[48ch] text-sm leading-normal text-faint">{t.note}</span>
        </div>
        <div className="mt-24 flex flex-wrap justify-between gap-6 border-t border-ink-hover pt-7 text-[13.5px] text-faint sm:mt-30">
          <div className="flex items-center gap-[9px] text-paper">
            <LogoBadge className="size-6 bg-ink-hover" check="#262626" />
            <span className="text-base font-semibold tracking-[-.02em]">GuardaFlow</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {sectionLinks(links).map((l) => (
              <a key={l.href} href={l.href} className="text-faint transition-colors hover:text-paper">
                {l.label}
              </a>
            ))}
          </div>
          <span className="font-mono text-[11px] tracking-[.08em]">© 2026 GuardaFlow</span>
        </div>
      </div>
    </footer>
  );
}
