import type { Metadata } from "next"
import { en as dict } from "@/lib/i18n/dictionaries/en"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SetHtmlLang } from "@/components/set-html-lang"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: dict.legal.copyright.metaTitle,
}

export default function CopyrightPageEn() {
  return (
    <>
      <SetHtmlLang locale="en" />
      <SiteHeader dict={dict.nav} locale="en" />
      <main>
        <LegalPage backToHomeLabel={dict.legal.backToHome} content={dict.legal.copyright} locale="en" />
      </main>
      <SiteFooter footerDict={dict.footer} locale="en" navDict={dict.nav} />
    </>
  )
}
