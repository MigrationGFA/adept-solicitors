import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { nigeriaServices } from "@/lib/services";

export const Route = createFileRoute("/nigeria")({
  head: () => ({
    meta: [
      { title: "Nigeria Services — Adept Consultants" },
      { name: "description", content: "A full-service Nigerian legal practice covering corporate, property, energy, family, immigration, and dispute resolution." },
      { property: "og:title", content: "Nigeria Services" },
      { property: "og:description", content: "A full-service Nigerian legal practice covering corporate, property, energy, family, immigration, and dispute resolution." },
      { property: "og:url", content: "/nigeria" },
    ],
    links: [{ rel: "canonical", href: "/nigeria" }],
  }),
  component: HubPage,
});

function HubPage() {
  return (
    <>
      <PageHero
        eyebrow="Nigeria Practice"
        title="Nigeria Services"
        subtitle={"A full-service Nigerian legal practice covering corporate, property, energy, family, immigration, and dispute resolution."}
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Nigeria Services" }]}
      />
      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {nigeriaServices.map((s) => (
            <a key={s.slug} href={`/nigeria/${s.slug}`} className="group p-7 rounded-md border border-border bg-card hover:border-gold hover:shadow-card-soft transition">
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
