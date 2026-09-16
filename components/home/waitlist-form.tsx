"use client"

import { useState } from "react"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"

export function WaitlistForm({ dict }: { dict: Dictionary["premium"]["waitlist"] }) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return <p className="text-sm font-medium text-emerald-700">{dict.successMessage}</p>
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
        className="text-xs px-4 py-2.5 rounded-full border border-neutral-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none w-full sm:w-60 bg-white"
        placeholder={dict.placeholder}
        required
        type="email"
      />
      <button
        className="text-xs font-semibold px-4 py-2.5 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shrink-0"
        type="submit"
      >
        {dict.button}
      </button>
    </form>
  )
}
