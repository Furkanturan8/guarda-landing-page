import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { RevealObserver } from "@/components/landing/reveal-observer";
import { getDictionary, isLocale, LOCALES, localePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

type Params = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).meta;

  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: localePath(locale),
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, localePath(l)])),
        "x-default": "/",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      locale: t.ogLocale,
      url: localePath(locale),
      siteName: "Guarda",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Params & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    // The inline script adds `js` before hydration, hence suppressHydrationWarning.
    <html lang={locale} className={`${instrumentSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
