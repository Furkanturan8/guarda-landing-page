import { CalendarSync, Cloud, FileText, Sparkles, Unlink, Upload, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { reveal } from "./primitives";

type FeatureKey = keyof Dictionary["premium"]["features"];

const icons: Record<FeatureKey, LucideIcon> = {
  cloud: Cloud,
  suggestions: Sparkles,
  pageCopy: FileText,
  linkCheck: Unlink,
  calendar: CalendarSync,
  import: Upload,
};

export function PremiumFeatures({ t }: { t: Dictionary["premium"] }) {
  const keys = Object.keys(icons) as FeatureKey[];

  return (
    <section id="premium" className="mx-auto max-w-[1200px] scroll-mt-15 px-4 pt-28 sm:px-8 sm:pt-35">
      <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div {...reveal()} className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="m-0 max-w-[14ch] text-[clamp(32px,4vw,48px)] leading-[1.05] font-normal tracking-[-.03em] text-balance">
            {t.title}
          </h2>
          <p className="mt-[18px] max-w-[40ch] text-[17px] leading-[1.6] text-pretty text-body">{t.body}</p>
        </div>
        <div className="grid border-t border-line sm:grid-cols-2">
          {keys.map((key, i) => {
            const Icon = icons[key];
            const { title, body } = t.features[key];
            return (
              <div
                key={key}
                {...reveal(i)}
                className={cn("border-b border-line py-7 sm:px-6", i % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0")}
              >
                <Icon className="size-[18px] opacity-70" strokeWidth={1.75} />
                <div className="mt-3.5 text-[17px] font-medium tracking-[-.01em]">{title}</div>
                <p className="mt-2 text-[15px] leading-[1.6] text-pretty text-body">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
