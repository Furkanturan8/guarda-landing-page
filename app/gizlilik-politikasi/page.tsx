import type { Metadata } from "next"
import { tr as dict } from "@/lib/i18n/dictionaries/tr"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SetHtmlLang } from "@/components/set-html-lang"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: dict.legal.privacy.metaTitle,
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SetHtmlLang locale="tr" />
      <SiteHeader dict={dict.nav} locale="tr" />
      <main>
        <LegalPage backToHomeLabel={dict.legal.backToHome} content={dict.legal.privacy} locale="tr" />
      </main>
      <SiteFooter footerDict={dict.footer} locale="tr" navDict={dict.nav} />
    </>
  )
}
