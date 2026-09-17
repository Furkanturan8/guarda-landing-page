import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const TONE_CLASS = {
  neutral: "bg-white border-neutral-200 text-neutral-600 shadow-xs",
  accent: "bg-emerald-50 border-emerald-200 text-emerald-700",
  dark: "bg-neutral-900 border-neutral-800 text-neutral-400",
} as const

const DOT_CLASS = {
  neutral: "bg-emerald-500",
  accent: "bg-emerald-500",
  dark: "bg-emerald-400",
} as const

export function Eyebrow({
  children,
  tone = "neutral",
  dot,
  icon,
  className,
}: {
  children: ReactNode
  tone?: keyof typeof TONE_CLASS
  dot?: boolean
  icon?: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider",
        TONE_CLASS[tone],
        className,
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full dot-live", DOT_CLASS[tone])} />}
      {icon}
      {children}
    </span>
  )
}
