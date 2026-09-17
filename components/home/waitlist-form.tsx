"use client"

import { useState } from "react"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"

export function WaitlistForm({ dict }: { dict: Dictionary["premium"]["waitlist"] }) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p className="text-sm font-medium text-pop flex items-center gap-1.5">
        <span>✓</span> {dict.successMessage}
      </p>
    )
  }

  return (
    <form
      className="flex w-full sm:w-auto items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <input
        aria-label={dict.title}
        className="text-xs px-4 py-2.5 rounded-full border border-white/15 bg-white/10 text-white placeholder:text-neutral-400 focus:border-pop focus:ring-1 focus:ring-pop outline-none w-full sm:w-60"
        placeholder={dict.placeholder}
        required
        type="email"
      />
      <button
        className="text-xs font-semibold px-4 py-2.5 rounded-full bg-pop text-neutral-950 hover:bg-pop/90 transition-colors shrink-0"
        type="submit"
      >
        {dict.button}
      </button>
    </form>
  )
}
