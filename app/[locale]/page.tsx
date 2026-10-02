import { notFound } from "next/navigation";
import { Capture } from "@/components/landing/capture";
import { Extras } from "@/components/landing/extras";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Organize } from "@/components/landing/organize";
import { Plan } from "@/components/landing/plan";
import { PremiumFeatures } from "@/components/landing/premium-features";
import { Pricing } from "@/components/landing/pricing";
import { Problem } from "@/components/landing/problem";
import { Screens } from "@/components/landing/screens";
import { Suggestions } from "@/components/landing/suggestions";
import { TryFree } from "@/components/landing/try-free";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Navbar t={t.nav} locale={locale} />
      <main>
        <Hero t={t.hero} demo={t.demo} />
        <Problem t={t.problem} />
        <Screens t={t.screens} />
        <TryFree t={t.tryFree} />
        <Capture t={t.capture} />
        <Organize t={t.organize} />
        <Plan t={t.plan} />
        <Extras t={t.extras} />
        <Suggestions t={t.suggestions} />
        <PremiumFeatures t={t.premium} />
        <Pricing t={t.pricing} />
        <Faq t={t.faq} />
      </main>
      <Footer t={t.footer} links={t.nav.links} />
    </>
  );
}
