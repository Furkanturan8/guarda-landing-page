import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function CapabilityCard({
  icon,
  title,
  description,
  stats,
  dark,
}: {
  icon: ReactNode
  title: string
  description: string
  stats?: { label: string; value: string }[]
  dark?: boolean
}) {
  return (
    <Reveal>
      <article
        className={cn(
          "rounded-3xl border p-6 md:p-8 transition-all duration-500 hover:-translate-y-1",
          dark
            ? "border-neutral-800 bg-neutral-950 text-white"
            : "border-neutral-200 bg-white hover:border-emerald-300",
        )}
      >
        <span
          className={cn(
            "mb-4 grid w-10 h-10 place-items-center rounded-lg border",
            dark
              ? "bg-neutral-900 border-neutral-800 text-neutral-200"
              : "bg-neutral-100 border-neutral-200 text-neutral-700",
          )}
        >
          {icon}
        </span>
        <h3 className={cn("text-base font-semibold mb-2", dark ? "text-white" : "text-neutral-950")}>{title}</h3>
        <p className={cn("text-sm leading-relaxed", dark ? "text-neutral-400" : "text-neutral-600")}>
          {description}
        </p>
        {stats && (
          <div className="mt-5 grid grid-cols-3 gap-2 font-mono text-[11px]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-2">
                <div className="text-neutral-500">{stat.label}</div>
                <div className={cn("mt-0.5", i === 0 ? "text-emerald-400" : "text-neutral-100")}>{stat.value}</div>
              </div>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  )
}
