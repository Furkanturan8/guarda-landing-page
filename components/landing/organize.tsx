import { Folder, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";
import { card, reveal, SectionTitle, TagPill } from "./primitives";

type Row = { name: string; count?: number; root?: boolean; active?: boolean };

const tree: Row[] = [
  { name: "Learning", count: 20, root: true },
  { name: "Backend", count: 12, active: true },
  { name: "Frontend", count: 5 },
  { name: "AI", count: 3 },
  { name: "Projects", count: 9, root: true },
  { name: "Ideas" },
  { name: "References" },
  { name: "Career", count: 4, root: true },
];

export function Organize({ t }: { t: Dictionary["organize"] }) {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-20 gap-y-14 px-4 pt-28 sm:px-8 sm:pt-35">
      <div {...reveal()}>
        <SectionTitle>{t.title}</SectionTitle>
        <p className="mt-[18px] max-w-[42ch] text-[17px] leading-[1.6] text-pretty text-body">{t.body}</p>
      </div>
      <div {...reveal(2)} className={`${card} p-6`}>
        <div className="flex flex-col text-sm">
          {tree.map((r, i) =>
            r.root ? (
              <div key={r.name} className={cn("flex h-[34px] items-center gap-[9px] font-medium", i > 0 && "mt-1.5")}>
                <Folder className="size-4 opacity-60" />
                {r.name}
                <span className="ml-auto text-xs text-faint">{r.count}</span>
              </div>
            ) : (
              <div
                key={r.name}
                className={cn(
                  "flex h-[34px] items-center gap-[9px] pl-[26px]",
                  r.active && "-mx-2 rounded-lg bg-wash pr-2 pl-[34px]",
                )}
              >
                <span className={cn("size-2 rounded-full", r.active ? "bg-[#2563EB]" : "bg-[#d4d4d4]")} />
                {r.name}
                {r.count !== undefined && (
                  <span className={cn("ml-auto text-xs", r.active ? "text-muted" : "text-faint")}>{r.count}</span>
                )}
              </div>
            ),
          )}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line-soft pt-[18px]">
          <TagPill>golang</TagPill>
          <TagPill>postgresql</TagPill>
          <TagPill>system-design</TagPill>
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-faint px-2.5 py-1 font-mono text-[11px] text-muted">
            <Sparkles className="size-3 opacity-60" />
            redis
            <span className="font-sans text-[11.5px] font-medium text-ink underline">{t.accept}</span>
            <span className="font-sans text-[11.5px] text-muted">{t.reject}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
