import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle, FileText, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Adept Consultants" },
      { name: "description", content: "Plain-English legal guides, FAQs, and case insights from our cross-border practice." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: () => {
    const items = [
      { icon: HelpCircle, title: "FAQs", desc: "Clear answers to the questions clients ask most about our cross-border services, fees, and engagement process.", to: "/resources/faq" },
      { icon: FileText, title: "Legal Guides", desc: "Plain-English guides on company formation, property acquisition, immigration, and dispute resolution across Texas and Nigeria.", to: "/resources/legal-guides" },
      { icon: Lightbulb, title: "Case Insights", desc: "Lessons drawn from representative cross-border matters — what worked, what we learned, and how to avoid common pitfalls.", to: "/resources/case-insights" },
    ];
    return (
      <>
        <PageHero eyebrow="Resources" title="Insights from our practice." subtitle="Practical, plain-English perspectives on cross-border legal matters." breadcrumbs={[{ to: "/", label: "Home" }, { label: "Resources" }]} />
        <section className="container-prose py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <a key={i.to} href={i.to} className="group p-7 rounded-md border border-border bg-card hover:border-gold hover:shadow-card-soft transition">
              <i.icon className="size-7 text-gold mb-4" />
              <div className="font-display text-xl font-semibold text-navy mb-2">{i.title}</div>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </a>
          ))}
        </section>
      </>
    );
  },
});
