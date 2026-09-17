import { cn } from "@/lib/utils"

export function AutoplayProgress({
  isPlaying,
  onToggle,
  progress,
  counterLabel,
  playingLabel,
  pausedLabel,
  className,
}: {
  isPlaying: boolean
  onToggle: () => void
  progress: number
  counterLabel: string
  playingLabel: string
  pausedLabel: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 bg-neutral-50 border border-neutral-200/90 rounded-full px-4 py-1.5 shadow-xs",
        className,
      )}
    >
      <button
        className="flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
        onClick={onToggle}
        type="button"
      >
        <span className="text-emerald-600 text-xs">{isPlaying ? "⏸" : "▶"}</span>
        <span>{isPlaying ? playingLabel : pausedLabel}</span>
      </button>
      <div className="w-px h-3.5 bg-neutral-200" />
      <div className="w-24 sm:w-28 bg-neutral-200 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-neutral-900 h-full transition-all duration-100 ease-linear rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <span className="text-[11px] font-mono text-neutral-500">{counterLabel}</span>
    </div>
  )
}
