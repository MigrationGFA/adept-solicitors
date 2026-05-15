import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/resources/legal-guides")({
  head: () => ({
    meta: [
      { title: "Legal Guides — Adept Consultants" },
      { name: "description", content: "Practical guides on the legal topics our clients ask about most." },
      { property: "og:title", content: "Legal Guides" },
      { property: "og:url", content: "/resources/legal-guides" },
    ],
    links: [{ rel: "canonical", href: "/resources/legal-guides" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Plain-English Guides" title="Legal Guides" subtitle="Practical guides on the legal topics our clients ask about most." breadcrumbs={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }, { label: "Legal Guides" }]} />
      <section className="container-prose py-20 max-w-3xl">
        <div className="divide-y divide-border border-y border-border">
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Forming a U.S. company as a Nigerian founder</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">From entity selection to EIN, BOI, and bank account — a step-by-step framework.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Buying property in Nigeria from abroad</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Title verification, payment milestones, and perfection of title — without the fraud.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Cross-border employment basics</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">How to hire, contract, and pay people across the U.S.–Nigeria corridor.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">When to choose arbitration over litigation</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">A practical look at forum selection in cross-border disputes.</p>
          </details>
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
