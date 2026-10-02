import type { Dictionary } from "@/lib/i18n";
import { reveal, SectionTitle } from "./primitives";

const grid = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]";

export function Problem({ t }: { t: Dictionary["problem"] }) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-28 sm:px-8 sm:pt-35">
      <SectionTitle {...reveal()} className="max-w-[18ch] text-balance">
        {t.title}
      </SectionTitle>
      <div {...reveal(1)} className={`${grid} mt-12 gap-x-16`}>
        <div className="pb-3.5 text-[13px] font-medium text-muted">{t.before}</div>
        <div className="hidden pb-3.5 text-[13px] font-medium text-ink md:block">{t.after}</div>
      </div>
      <div className="flex flex-col border-b border-line">
        {t.rows.map(({ before, after }, i) => (
          <div
            key={before}
            {...reveal(i + 1)}
            className={`${grid} gap-x-16 gap-y-2 border-t border-line py-[26px] text-lg leading-[1.45] tracking-[-.01em] sm:text-xl`}
          >
            <div className="text-muted">{before}</div>
            <div>{after}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
