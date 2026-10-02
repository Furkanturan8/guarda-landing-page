import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { card, reveal, SectionTitle, TagPill } from "./primitives";

const label = "font-mono text-[9.5px] tracking-[.16em] text-muted uppercase";

export function Capture({ t }: { t: Dictionary["capture"] }) {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-4 pt-28 sm:px-8 sm:pt-35">
        <div {...reveal()} className="mx-auto max-w-[620px] text-center">
          <SectionTitle>{t.title}</SectionTitle>
          <p className="mx-auto mt-[18px] max-w-[50ch] text-[17px] leading-[1.6] text-pretty text-body">{t.body}</p>
        </div>
        <div {...reveal(2)} className={`${card} mx-auto mt-14 max-w-[640px] p-5 sm:p-8`}>
          <div className={label}>{t.urlLabel}</div>
          <div className="mt-3 truncate border-b border-line pb-3 font-mono text-[clamp(16px,2.4vw,22px)]">
            https://use-the-index-luke.com/
          </div>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            <div>
              <div className={label}>{t.collection}</div>
              <div className="mt-2 flex h-[38px] items-center justify-between rounded-lg border border-line px-3 text-sm">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#2563EB]" />
                  Learning / Backend
                </span>
                <ChevronDown className="size-3.5 opacity-45" />
              </div>
            </div>
            <div>
              <div className={label}>{t.tags}</div>
              <div className="mt-2 flex min-h-[38px] flex-wrap items-center gap-1.5 rounded-lg border border-line p-1.5">
                <TagPill className="px-[9px] py-[3px]">postgresql</TagPill>
                <TagPill className="px-[9px] py-[3px]">backend</TagPill>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className={label}>
              {t.reason} <span className="tracking-[.04em] text-faint normal-case">{t.reasonHint}</span>
            </div>
            <div className="mt-2 min-h-[74px] rounded-lg border border-line bg-paper px-3 py-2.5 text-[14.5px] leading-[1.55]">
              {t.reasonText}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-line-soft pt-[18px]">
            <span className="text-[14.5px] font-medium">{t.makeTask}</span>
            <span className="h-5 w-[34px] shrink-0 rounded-full bg-ink-soft p-0.5">
              <span className="block size-4 translate-x-[14px] rounded-full bg-white" />
            </span>
          </div>
          <div className="mt-[18px] flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-4">
            <span className="font-mono text-[11px] text-faint">{t.shortcut}</span>
            <span className="flex h-9 items-center rounded-lg bg-ink-soft px-3.5 text-[13.5px] font-medium text-paper">
              {t.save}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
