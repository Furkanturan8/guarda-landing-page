import { ArrowUpRight, Languages } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LOCALE_NAMES, LOCALES } from "@/lib/i18n";
import { APP_URL } from "@/lib/site";
import { LogoBadge } from "./primitives";

export function sectionLinks(links: Dictionary["nav"]["links"]) {
  return [
    { href: "#demo", label: links.howItWorks },
    { href: "#ozellikler", label: links.features },
    { href: "#eklenti", label: links.extension },
    { href: "#premium", label: links.premium },
    { href: "#fiyatlar", label: links.pricing },
    { href: "#sss", label: links.faq },
  ];
}

export function Navbar({ t, locale }: { t: Dictionary["nav"]; locale: Locale }) {
  const other = LOCALES.find((l) => l !== locale) ?? locale;

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md">
      <div className="mx-auto grid h-15 max-w-[1200px] grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex items-center gap-[9px]">
          <LogoBadge />
          <span className="text-lg font-semibold tracking-[-.02em]">GuardaFlow</span>
        </a>
        <div className="hidden gap-6 text-sm lg:flex">
          {sectionLinks(t.links).map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap text-body transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2">
          {/* Links to the prefixed path so the proxy records the choice in the locale cookie. */}
          <a
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            aria-label={LOCALE_NAMES[other]}
            title={LOCALE_NAMES[other]}
            className="flex h-[34px] items-center gap-1.5 rounded-lg border border-line px-2.5 font-mono text-[11.5px] tracking-[.06em] text-body uppercase transition-colors hover:border-faint hover:text-ink"
          >
            <Languages className="size-3.5 opacity-70" />
            {other}
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.cta} (${t.newTab})`}
            className="flex h-[34px] items-center gap-1 rounded-lg bg-ink-soft px-3.5 text-[13.5px] font-medium text-paper transition-colors hover:bg-ink-hover"
          >
            {t.cta}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
