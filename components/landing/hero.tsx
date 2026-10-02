import type { Dictionary } from "@/lib/i18n";
import { APP_URL } from "@/lib/site";
import { DemoFilm } from "./demo-film/demo-film";
import { Arrow, PrimaryLink } from "./primitives";

export function Hero({ t, demo }: { t: Dictionary["hero"]; demo: Dictionary["demo"] }) {
  return (
    <section id="top" className="mx-auto max-w-[1200px] px-4 pt-16 sm:px-8 sm:pt-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-end gap-x-18 gap-y-8">
        <div>
          <div className="animate-rise font-mono text-[11px] tracking-[.16em] text-muted uppercase">{t.eyebrow}</div>
          <h1 className="mt-[22px] animate-rise [animation-delay:80ms] text-[clamp(46px,6.6vw,84px)] leading-[.98] font-normal tracking-[-.04em] text-balance">
            {t.title}
          </h1>
        </div>
        <div className="pb-2.5">
          <p className="m-0 max-w-[44ch] animate-rise [animation-delay:160ms] text-lg leading-[1.55] text-pretty text-body">
            {t.body}
          </p>
          <div className="mt-7 flex animate-rise flex-wrap items-center gap-x-5 gap-y-3.5 [animation-delay:240ms]">
            <PrimaryLink href={APP_URL}>
              {t.cta} <Arrow />
            </PrimaryLink>
            <span className="text-[13px] text-muted">{t.note}</span>
          </div>
        </div>
      </div>
      <DemoFilm t={demo} />
    </section>
  );
}
