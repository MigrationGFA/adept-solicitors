import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { usaServices } from "@/lib/services";

export const Route = createFileRoute("/usa")({
  head: () => ({
    meta: [
      { title: "USA Services — Adept Consultants" },
      { name: "description", content: "Texas-based representation with international depth — corporate, transactional, and dispute-resolution counsel for businesses and diaspora clients." },
      { property: "og:title", content: "USA Services" },
      { property: "og:description", content: "Texas-based representation with international depth — corporate, transactional, and dispute-resolution counsel for businesses and diaspora clients." },
      { property: "og:url", content: "/usa" },
    ],
    links: [{ rel: "canonical", href: "/usa" }],
  }),
  component: HubPage,
});

function HubPage() {
  return (
    <>
      <PageHero
        eyebrow="USA Practice"
        title="USA Services"
        subtitle={"Texas-based representation with international depth — corporate, transactional, and dispute-resolution counsel for businesses and diaspora clients."}
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "USA Services" }]}
      />
      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {usaServices.map((s) => (
            <a key={s.slug} href={`/usa/${s.slug}`} className="group p-7 rounded-md border border-border bg-card hover:border-gold hover:shadow-card-soft transition">
              <div className="font-display text-xl font-semibold text-navy mb-2 group-hover:text-gold transition">{s.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
            </a>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
