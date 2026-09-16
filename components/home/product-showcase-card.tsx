import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function ProductShowcaseCard({
  eyebrow,
  path,
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string
  path: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}) {
  return (
    <Reveal>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:border-neutral-400 hover:shadow-float-window">
        <div className="p-6 md:p-8 md:pb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-1 rounded border border-neutral-200">
              {eyebrow}
            </span>
            <span className="text-xs font-mono text-neutral-400">{path}</span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950 mb-2">{title}</h3>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-md">{description}</p>
        </div>
        <div className="mt-auto pl-6 md:pl-8">
          <div className="relative w-full aspect-[400/254] md:aspect-[584/320] overflow-hidden">
            <div className="absolute top-0 left-0 w-[165%] md:w-[145%] rounded-tl-xl border border-neutral-200 bg-white shadow-[0_24px_48px_-20px_rgba(0,0,0,0.28)] overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:-translate-x-1">
              <div className="h-7 bg-neutral-50 border-b border-neutral-200 flex items-center gap-1.5 px-3">
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
              </div>
              <Image alt={imageAlt} className="block w-full h-auto" height={320} src={imageSrc} width={584} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
