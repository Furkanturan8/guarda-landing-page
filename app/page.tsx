import { tr as dict } from "@/lib/i18n/dictionaries/tr"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SetHtmlLang } from "@/components/set-html-lang"
import { HeroSection } from "@/components/home/hero-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { FeaturesGridSection } from "@/components/home/features-grid-section"
import { PremiumSection } from "@/components/home/premium-section"
import { ComparisonSection } from "@/components/home/comparison-section"
import { ShowcaseSection } from "@/components/home/showcase-section"
import { FinalCtaSection } from "@/components/home/final-cta-section"

export default function Home() {
  return (
    <>
      <SetHtmlLang locale="tr" />
      <SiteHeader dict={dict.nav} locale="tr" />
      <main>
        <HeroSection dict={dict.hero} images={dict.images} />
        <WorkflowSection dict={dict.workflow} />
        <FeaturesGridSection dict={dict.features} extensionDict={dict.extension} images={dict.images} />
        <PremiumSection dict={dict.premium} />
        <ComparisonSection dict={dict.comparison} />
        <ShowcaseSection dict={dict.showcase} images={dict.images} />
        <FinalCtaSection dict={dict.finalCta} />
      </main>
      <SiteFooter footerDict={dict.footer} locale="tr" navDict={dict.nav} />
    </>
  )
}
