import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, HelpCircle, FileText, Newspaper, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Adept Consultants" },
      { name: "description", content: "Insights, guides, FAQs, and updates from our cross-border legal practice." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: () => {
    const items = [
      { icon: BookOpen, title: "Blog", desc: "Practical insights on cross-border legal matters.", to: "/resources/blog" },
      { icon: HelpCircle, title: "FAQs", desc: "Answers to common questions about our services.", to: "/resources/faq" },
      { icon: FileText, title: "Legal Guides", desc: "Plain-English guides on key legal topics.", to: "/resources/legal-guides" },
      { icon: Lightbulb, title: "Case Insights", desc: "Lessons from representative matters.", to: "/resources/case-insights" },
      { icon: Newspaper, title: "News & Updates", desc: "Firm announcements and regulatory developments.", to: "/resources/news" },
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
