import { Plus } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { reveal } from "./primitives";

export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section
      id="sss"
      className="mx-auto grid scroll-mt-15 max-w-[1200px] gap-x-20 gap-y-8 px-4 py-28 sm:px-8 sm:py-35 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <h2 {...reveal()} className="m-0 text-[clamp(28px,3.4vw,40px)] leading-[1.1] font-normal tracking-[-.03em]">
        {t.title}
      </h2>
      <div className="border-t border-line">
        {t.items.map(({ q, a }, i) => (
          <details key={q} {...reveal(i)} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium tracking-[-.01em] transition-colors hover:text-body [&::-webkit-details-marker]:hidden">
              {q}
              <Plus className="size-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="-mt-1 max-w-[60ch] pb-5 group-open:animate-open text-[15px] leading-[1.6] text-pretty text-body">
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
