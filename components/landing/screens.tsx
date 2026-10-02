import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { reveal, SectionTitle } from "./primitives";

type Screen = Dictionary["screens"]["items"][number];

// All screenshots are 2880×~1568 retina captures of the app.
const SHOT_W = 2880;
const SHOT_H = 1568;

function ScreenCard({ screen, wide }: { screen: Screen; wide?: boolean }) {
  return (
    <article
      className={cn(
        "group h-full overflow-hidden rounded-[28px] border border-sand-line bg-white transition-colors hover:border-[#d9d4c8]",
        wide && "md:grid md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]",
      )}
    >
      <div className={cn("px-6 pt-6 sm:px-8 sm:pt-8", wide && "md:pb-8")}>
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-md border border-line bg-wash px-2.5 py-1 font-mono text-[11px] tracking-[.12em] text-body uppercase">
            {screen.eyebrow}
          </span>
          <span className="font-mono text-[13px] text-muted">{screen.path}</span>
        </div>
        <h3 className="mt-4 text-[22px] leading-[1.2] font-medium tracking-[-.02em] sm:text-2xl">{screen.title}</h3>
        <p className="mt-2 max-w-[48ch] text-[15px] leading-[1.55] text-pretty text-body">{screen.body}</p>
      </div>
      <div className={cn("mt-6 pl-6 sm:mt-7 sm:pl-8", wide && "md:mt-8")}>
        <div className="h-[210px] overflow-hidden rounded-tl-xl border-t border-l border-line bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,.25)] sm:h-[270px]">
          <div className="flex h-7 items-center gap-1.5 border-b border-line bg-paper px-3">
            <span className="size-2 rounded-full bg-[#d4d4d4]" />
            <span className="size-2 rounded-full bg-[#d4d4d4]" />
            <span className="size-2 rounded-full bg-[#d4d4d4]" />
          </div>
          <Image
            src={screen.image}
            alt={screen.alt}
            width={SHOT_W}
            height={SHOT_H}
            sizes={wide ? "(min-width: 768px) 900px, 170vw" : "(min-width: 768px) 820px, 170vw"}
            className={cn(
              "h-auto max-w-none origin-top-left transition-transform duration-500 ease-out group-hover:scale-[1.015]",
              wide ? "w-[170%] md:w-[125%]" : "w-[170%] md:w-[150%]",
            )}
          />
        </div>
      </div>
    </article>
  );
}

export function Screens({ t }: { t: Dictionary["screens"] }) {
  const last = t.items.length - 1;

  return (
    <section id="ozellikler" className="mt-28 scroll-mt-15 border-y border-sand-line bg-sand sm:mt-35">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 sm:py-28">
        <div {...reveal()} className="max-w-[620px]">
          <SectionTitle>{t.title}</SectionTitle>
          <p className="mt-[18px] max-w-[48ch] text-[17px] leading-[1.6] text-pretty text-body">{t.body}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {t.items.map((screen, i) => (
            // An odd last card spans the full row instead of leaving a gap.
            <div
              key={screen.path}
              {...reveal(i % 2)}
              className={i === last && t.items.length % 2 === 1 ? "md:col-span-2" : undefined}
            >
              <ScreenCard screen={screen} wide={i === last && t.items.length % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
