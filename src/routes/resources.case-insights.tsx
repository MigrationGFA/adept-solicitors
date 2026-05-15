import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/resources/case-insights")({
  head: () => ({
    meta: [
      { title: "Case Insights — Adept Consultants" },
      { name: "description", content: "Anonymized lessons from representative client matters." },
      { property: "og:title", content: "Case Insights" },
      { property: "og:url", content: "/resources/case-insights" },
    ],
    links: [{ rel: "canonical", href: "/resources/case-insights" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Lessons from Practice" title="Case Insights" subtitle="Anonymized lessons from representative client matters." breadcrumbs={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }, { label: "Case Insights" }]} />
      <section className="container-prose py-20 max-w-3xl">
        <div className="divide-y divide-border border-y border-border">
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">The diaspora property purchase that almost wasn't</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">How independent due diligence saved a Houston client from a fraudulent vendor.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">A $40m cross-border joint venture</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Coordinating Texas and Nigerian counsel into one closing process.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Restructuring a family company for next-generation succession</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Wills, shareholder agreements, and trust formation, working in concert.</p>
          </details>
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
