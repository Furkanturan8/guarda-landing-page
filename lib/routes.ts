import type { Locale } from "@/lib/i18n/types"

export function homePath(locale: Locale) {
  return locale === "tr" ? "/" : "/en"
}

export function privacyPath(locale: Locale) {
  return locale === "tr" ? "/gizlilik-politikasi" : "/en/privacy-policy"
}

export function copyrightPath(locale: Locale) {
  return locale === "tr" ? "/telif-haklari" : "/en/copyright"
}
