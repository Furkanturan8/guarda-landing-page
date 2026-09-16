import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function LockedFeatureCard({
  icon,
  title,
  description,
  footer,
  comingSoonLabel,
  accent,
}: {
  icon: string
  title: string
  description: string
  footer: string
  comingSoonLabel: string
  accent?: "blue" | "amber"
}) {
  const isAmber = accent === "amber"

  return (
    <Reveal>
      <div
        className={cn(
          "relative p-6 rounded-2xl border bg-white flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-1.5",
          isAmber
            ? "border-neutral-200 hover:border-pop/70 hover:shadow-[0_0_0_4px_rgba(247,205,110,0.18),0_18px_40px_-20px_rgba(20,19,16,0.35)]"
            : "border-neutral-200 hover:border-emerald-300 hover:shadow-[0_0_0_4px_rgba(68,99,194,0.14),0_18px_40px_-20px_rgba(20,19,16,0.35)]",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            isAmber ? "bg-pop/30" : "bg-emerald-300/30",
          )}
        />

        <div className="absolute top-3 right-3">
          <span className="badge-soon inline-flex items-center gap-1 text-[11px] font-mono text-neutral-700 px-2 py-0.5 rounded-full border border-neutral-200/70">
            <span>🔒</span> {comingSoonLabel}
          </span>
        </div>

        <div className="relative">
          <div
            className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg shadow-sm ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3",
              isAmber
                ? "bg-gradient-to-br from-pop-dim to-pop/40 ring-pop/40 text-neutral-800"
                : "bg-gradient-to-br from-emerald-50 to-emerald-100 ring-emerald-200 text-emerald-800",
            )}
          >
            {icon}
          </div>
          <h3 className="text-base font-semibold text-neutral-950 mb-2">{title}</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">{description}</p>
        </div>
        <div className="relative mt-6 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
          <span className={cn("w-1.5 h-1.5 rounded-full", isAmber ? "bg-pop" : "bg-emerald-400")} />
          {footer}
        </div>
      </div>
    </Reveal>
  )
}
