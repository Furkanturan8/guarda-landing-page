import type { Locale } from "../types"
import { en } from "./en"
import { tr } from "./tr"

export const dictionaries = { tr, en }

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
