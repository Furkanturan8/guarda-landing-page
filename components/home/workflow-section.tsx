import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { WorkflowSimulator } from "@/components/home/workflow-simulator"

export function WorkflowSection({ dict }: { dict: Dictionary["workflow"] }) {
  return (
    <section className="py-24 border-t border-neutral-200 bg-white relative overflow-hidden" id="nasil-calisir">
      <WorkflowSimulator dict={dict} />
    </section>
  )
}
