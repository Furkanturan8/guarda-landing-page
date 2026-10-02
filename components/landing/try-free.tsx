import { ArrowUpRight, HardDrive, Infinity as InfinityIcon, UserX, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { APP_URL } from "@/lib/site";
import { reveal } from "./primitives";

type PointKey = keyof Dictionary["tryFree"]["points"];

const icons: Record<PointKey, LucideIcon> = {
  noSignup: UserX,
  local: HardDrive,
  noLimit: InfinityIcon,
};

export function TryFree({ t }: { t: Dictionary["tryFree"] }) {
  const keys = Object.keys(icons) as PointKey[];

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-28 sm:px-8 sm:pt-35">
      <div
        {...reveal()}
        className="grid gap-x-16 gap-y-10 rounded-[28px] bg-ink-soft px-6 py-10 text-paper sm:px-12 sm:py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
      >
        <div className="flex flex-col">
          <h2 className="m-0 max-w-[16ch] text-[clamp(30px,3.6vw,44px)] leading-[1.05] font-normal tracking-[-.03em] text-balance">
            {t.title}
          </h2>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-[1.6] text-pretty text-faint">{t.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-auto lg:pt-10">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.cta} (${t.newTab})`}
              className="group inline-flex h-11 items-center gap-2 rounded-[10px] bg-paper px-5 text-[15px] font-medium text-ink transition-colors hover:bg-line"
            >
              {t.cta}
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-[13px] text-muted">{t.exportNote}</span>
          </div>
        </div>
        <ul className="flex flex-col">
          {keys.map((key, i) => {
            const Icon = icons[key];
            const { title, body } = t.points[key];
            return (
              <li
                key={key}
                {...reveal(i + 1)}
                className="flex gap-4 border-t border-ink-hover py-6 first:border-t-0 first:pt-0 last:pb-0 lg:first:pt-1"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-ink-hover">
                  <Icon className="size-[17px] text-paper/80" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-[17px] font-medium tracking-[-.01em]">{title}</div>
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-pretty text-faint">{body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
