"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import { APP_URL, upgradeUrl, type BillingInterval } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Arrow, reveal } from "./primitives";

const INTERVALS: BillingInterval[] = ["monthly", "yearly"];

function Features({ items, iconClass }: { items: string[]; iconClass: string }) {
  return (
    <ul className="mt-7 flex flex-1 flex-col gap-3 text-[14.5px]">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Check className={cn("mt-[3px] size-4 shrink-0", iconClass)} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PlanCards({ t }: { t: Dictionary["pricing"]["plans"] }) {
  // Yearly first, matching the app's checkout default.
  const [interval, setBillingInterval] = useState<BillingInterval>("yearly");
  const price = t.premium.prices[interval];

  return (
    <div className="mt-12">
      <div {...reveal(1)} className="flex justify-center">
        <div
          role="radiogroup"
          aria-label={t.intervalLabel}
          className="inline-flex rounded-full border border-line p-1 text-[13px] font-medium"
        >
          {INTERVALS.map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={interval === key}
              onClick={() => setBillingInterval(key)}
              className={cn(
                "flex h-8 cursor-pointer items-center gap-2 rounded-full px-4 transition-colors",
                interval === key ? "bg-ink-soft text-paper" : "text-muted hover:text-ink",
              )}
            >
              {t[key]}
              {key === "yearly" && (
                <span className={cn("text-[11.5px]", interval === key ? "text-paper/70" : "text-faint")}>
                  {t.yearlySaving}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-[860px] gap-4 md:grid-cols-2">
        <div {...reveal(2)} className="flex flex-col rounded-2xl border border-sand-line bg-white p-7">
          <div className="text-[15px] font-medium">{t.free.name}</div>
          <div className="mt-4 text-[44px] leading-none font-normal tracking-[-.03em]">{t.free.price}</div>
          <div className="mt-2 text-[13px] text-muted">{t.free.note}</div>
          <Features items={t.free.items} iconClass="text-muted" />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex h-11 items-center justify-center gap-2 rounded-[10px] border border-line text-[15px] font-medium transition-colors hover:border-faint"
          >
            {t.free.cta} <Arrow />
          </a>
        </div>

        <div {...reveal(3)} className="flex flex-col rounded-2xl bg-ink p-7 text-paper">
          <div className="text-[15px] font-medium">{t.premium.name}</div>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-[44px] leading-none font-normal tracking-[-.03em] tabular-nums">{price.amount}</span>
            <span className="text-[15px] text-faint">{price.unit}</span>
          </div>
          <div className="mt-2 text-[13px] text-faint">{price.note}</div>
          <Features items={t.premium.items} iconClass="text-faint" />
          <a
            href={upgradeUrl(interval)}
            className="group mt-8 flex h-11 items-center justify-center gap-2 rounded-[10px] bg-paper text-[15px] font-medium text-ink transition-colors hover:bg-line"
          >
            {t.premium.cta} <Arrow />
          </a>
          <div className="mt-3 text-center text-[12.5px] text-faint">{t.premium.footnote}</div>
        </div>
      </div>
    </div>
  );
}
