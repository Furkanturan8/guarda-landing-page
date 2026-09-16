import { Reveal } from "@/components/reveal"

export function LockedFeatureCard({
  icon,
  title,
  description,
  footer,
  comingSoonLabel,
}: {
  icon: string
  title: string
  description: string
  footer: string
  comingSoonLabel: string
}) {
  return (
    <Reveal>
      <div className="relative p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 backdrop-blur-xs flex flex-col justify-between overflow-hidden group hover:border-neutral-300 hover:-translate-y-1 transition-all duration-500">
        <div className="absolute top-3 right-3">
          <span className="badge-soon inline-flex items-center gap-1 text-[11px] font-mono text-neutral-700 px-2 py-0.5 rounded">
            <span>🔒</span> {comingSoonLabel}
          </span>
        </div>
        <div>
          <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700 mb-4 font-mono text-base">
            {icon}
          </div>
          <h3 className="text-base font-semibold text-neutral-950 mb-2">{title}</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">{description}</p>
        </div>
        <div className="mt-6 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-400">{footer}</div>
      </div>
    </Reveal>
  )
}
