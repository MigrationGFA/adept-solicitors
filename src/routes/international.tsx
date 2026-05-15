import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { internationalServices } from "@/lib/services";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: "International Services — Adept Consultants" },
      { name: "description", content: "Cross-border representation across global jurisdictions — transactions, disputes, diaspora services, and compliance." },
      { property: "og:title", content: "International Services" },
      { property: "og:description", content: "Cross-border representation across global jurisdictions — transactions, disputes, diaspora services, and compliance." },
      { property: "og:url", content: "/international" },
    ],
    links: [{ rel: "canonical", href: "/international" }],
  }),
  component: HubPage,
});

function HubPage() {
  return (
    <>
      <PageHero
        eyebrow="International Practice"
        title="International Services"
        subtitle={"Cross-border representation across global jurisdictions — transactions, disputes, diaspora services, and compliance."}
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "International Services" }]}
      />
      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {internationalServices.map((s) => (
            <a key={s.slug} href={`/international/${s.slug}`} className="group p-7 rounded-md border border-border bg-card hover:border-gold hover:shadow-card-soft transition">
              <div className="font-display text-xl font-semibold text-navy mb-2 group-hover:text-gold transition">{s.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-navy group-hover:text-gold transition font-medium">
                Learn more <ArrowRight className="size-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
