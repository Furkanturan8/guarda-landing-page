import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ActionTag, card, reveal, SectionTitle } from "./primitives";

export function Plan({ t }: { t: Dictionary["plan"] }) {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-20 gap-y-14 px-4 pt-28 sm:px-8 sm:pt-35">
      <div className={`${card} order-2 px-6 py-2 md:order-1`}>
        {t.items.map((it, i) => (
          <div
            key={it.title}
            {...reveal(i)}
            className="grid grid-cols-[72px_1fr] items-baseline gap-4 border-b border-line-soft py-[18px] last:border-0"
          >
            <span className={cn("text-sm tabular-nums", it.late ? "text-[#e7000b]" : "text-muted")}>{it.time}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <ActionTag>{it.action}</ActionTag>
                <span className={cn("text-[15px] font-semibold", it.done && "text-faint line-through")}>
                  {it.title}
                </span>
                {it.late && (
                  <ActionTag className="border-[#e7000b]/25 bg-[#e7000b]/8 text-[#e7000b]">{t.late}</ActionTag>
                )}
              </div>
              <div className="mt-1.5 font-mono text-[11px] text-muted">{it.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div {...reveal()} className="order-1 md:order-2">
        <SectionTitle>{t.title}</SectionTitle>
        <p className="mt-[18px] max-w-[42ch] text-[17px] leading-[1.6] text-pretty text-body">{t.body}</p>
        <p className="mt-3.5 max-w-[42ch] text-[15px] leading-[1.6] text-pretty text-muted">{t.note}</p>
      </div>
    </section>
  );
}
