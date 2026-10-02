"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Dictionary } from "@/lib/i18n";
import { reveal } from "./primitives";

const CHAR_MS = 34;
const HOLD_MS = 3500;

export function Suggestions({ t }: { t: Dictionary["suggestions"] }) {
  const [elapsed, setElapsed] = useState(0);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const text = t.text;

  // Start typing only once the card is on screen, so the reader sees it from the first letter.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setInView(true);
      io.disconnect();
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !inView) return;
    const cycle = text.length * CHAR_MS + HOLD_MS;
    const start = performance.now();
    const id = window.setInterval(() => setElapsed((performance.now() - start) % cycle), CHAR_MS);
    return () => window.clearInterval(id);
  }, [text, reduced, inView]);

  const chars = reduced ? text.length : Math.min(text.length, Math.floor(elapsed / CHAR_MS));
  const caretOn = !reduced && (chars < text.length || Math.floor(elapsed / 480) % 2 === 0);

  return (
    <section className="mt-28 border-y border-line bg-paper sm:mt-35">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 sm:py-28">
        <div {...reveal()} className="max-w-[760px]">
          <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] leading-[1.1] font-normal tracking-[-.03em]">{t.title}</h2>
          <p className="mt-3 text-[15px] text-muted">{t.subtitle}</p>
          <div ref={cardRef} className="mt-8 rounded-2xl border border-line bg-white px-5 py-6 sm:px-[26px]">
            <div className="flex items-center gap-2 text-[12.5px] font-medium text-muted">
              <Sparkles className="size-3.5 opacity-60" />
              {t.label}
            </div>
            <p
              className="mt-3.5 min-h-[3.1em] text-[17px] leading-[1.55] tracking-[-.01em] sm:text-[19px]"
              aria-label={text}
            >
              <span aria-hidden>{text.slice(0, chars)}</span>
              <span
                aria-hidden
                className="ml-px inline-block h-[1.05em] w-0.5 bg-ink align-[-.15em]"
                style={{ opacity: caretOn ? 1 : 0 }}
              />
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="flex h-8 items-center rounded-lg bg-ink-soft px-3 text-[13px] font-medium text-paper">
                {t.accept}
              </span>
              <span className="flex h-8 items-center rounded-lg border border-line px-3 text-[13px] font-medium">
                {t.edit}
              </span>
              <span className="flex h-8 items-center rounded-lg border border-line px-3 text-[13px] font-medium text-body">
                {t.reject}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
