import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { industries } from "@/lib/industries";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Adept Consultants" },
      {
        name: "description",
        content:
          "Sector-specialist legal counsel across energy, real estate, finance, technology, maritime, and immigration.",
      },
      { property: "og:title", content: "Industries Served" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector-specialist counsel where it matters most."
        subtitle="We bring deep regulatory and commercial fluency to the industries that define our clients' work."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Industries" }]}
      />
      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <a
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group p-7 rounded-md border border-border bg-card hover:border-gold hover:shadow-card-soft transition"
            >
              <div className="font-display text-xl font-semibold text-navy mb-2 group-hover:text-gold transition">
                {i.name}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{i.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {i.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
