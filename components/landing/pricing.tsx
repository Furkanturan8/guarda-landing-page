import { Check, Minus } from "lucide-react";
import type { Cell, Dictionary } from "@/lib/i18n";
import { PlanCards } from "./plan-cards";
import { reveal } from "./primitives";

function CellValue({ value, yes, no }: { value: Cell; yes: string; no: string }) {
  if (value === true) return <Check className="mx-auto size-4 text-emerald-600" aria-label={yes} />;
  if (value === false) return <Minus className="mx-auto size-4 text-faint" aria-label={no} />;
  return <span className="text-[13px]">{value}</span>;
}

export function Pricing({ t }: { t: Dictionary["pricing"] }) {
  const c = t.compare;

  return (
    <section id="fiyatlar" className="mt-28 scroll-mt-15 border-y border-sand-line bg-sand sm:mt-35">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 sm:py-28">
        <div {...reveal()} className="mx-auto max-w-[640px] text-center">
          <h2 className="m-0 text-[clamp(32px,4vw,48px)] leading-[1.05] font-normal tracking-[-.03em] text-balance">
            {t.title}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[52ch] text-[17px] leading-[1.6] text-pretty text-body">{t.body}</p>
        </div>

        <PlanCards t={t.plans} />

        <div {...reveal()} className="mx-auto mt-20 max-w-[860px]">
          <table className="w-full table-fixed border-t border-sand-line text-left text-[14px] sm:text-[15px]">
            <caption className="pb-4 text-left text-[13px] font-medium text-muted">{c.title}</caption>
            <thead>
              <tr className="border-b border-sand-line text-[13px]">
                <th className="w-[52%] py-3 font-normal">
                  <span className="sr-only">{c.feature}</span>
                </th>
                <th className="py-3 text-center font-medium text-muted">{c.free}</th>
                <th className="py-3 text-center font-medium">{c.premium}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map(({ label, free, premium }) => (
                <tr key={label} className="border-b border-sand-line/70">
                  <td className="py-3 pr-3">{label}</td>
                  <td className="py-3 text-center text-muted">
                    <CellValue value={free} yes={c.yes} no={c.no} />
                  </td>
                  <td className="py-3 text-center">
                    <CellValue value={premium} yes={c.yes} no={c.no} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
