import { Puzzle } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { reveal } from "./primitives";

export function Extras({ t }: { t: Dictionary["extras"] }) {
  return (
    <section id="eklenti" className="mx-auto max-w-[1200px] scroll-mt-15 px-4 pt-28 sm:px-8 sm:pt-35">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-16 gap-y-8 border-y border-line py-10">
        <div {...reveal()}>
          <div className="flex items-center gap-2.5">
            <Puzzle className="size-[18px] opacity-70" />
            <span className="text-[17px] font-medium">{t.extensionTitle}</span>
          </div>
          <p className="mt-2.5 max-w-[46ch] text-[15px] leading-[1.6] text-pretty text-body">{t.extensionBody}</p>
        </div>
        <div {...reveal(1)}>
          <div className="text-[17px] font-medium">{t.typesTitle}</div>
          <p className="mt-2.5 text-[15px] leading-[1.6] text-body">{t.typesBody}</p>
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {t.types.map((type) => (
              <span key={type} className="rounded bg-wash px-2 py-[3px] text-[12.5px] text-body">
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
