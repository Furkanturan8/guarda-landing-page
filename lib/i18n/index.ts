import { en } from "./en";
import { tr, type Dictionary } from "./tr";

export type { Cell, Dictionary } from "./tr";

export const LOCALES = ["tr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "tr";
// Same cookie the app uses, so a choice made here carries over when both share a domain.
export const LOCALE_COOKIE = "guarda_locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Each language named in itself, for the switcher.
export const LOCALE_NAMES: Record<Locale, string> = { tr: "Türkçe", en: "English" };

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Turkish lives at the root, every other locale under its own prefix. */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

/** Best supported locale for an Accept-Language header; unknown or missing falls back to Turkish. */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="))?.split("=")[1];
      return { tag: tag.trim().toLowerCase(), q: q === undefined ? 1 : Number(q), index };
    })
    .filter((entry) => entry.tag && !Number.isNaN(entry.q) && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
