"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

export function Reveal({ children, delay }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in")
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className="grid"
      data-reveal=""
      ref={ref}
      style={delay ? ({ "--d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
