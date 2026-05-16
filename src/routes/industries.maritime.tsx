import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { industries } from "@/lib/industries";

const industry = industries.find((i) => i.slug === "maritime")!;

export const Route = createFileRoute("/industries/maritime")({
  head: () => ({
    meta: [
      { title: `${industry.name} — Industries | Adept Consultants` },
      { name: "description", content: industry.blurb },
      { property: "og:title", content: industry.name },
      { property: "og:description", content: industry.blurb },
      { property: "og:url", content: "/industries/maritime" },
    ],
    links: [{ rel: "canonical", href: "/industries/maritime" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.name}
        subtitle={industry.blurb}
        breadcrumbs={[
          { to: "/", label: "Home" },
          { to: "/industries", label: "Industries" },
          { label: industry.name },
        ]}
      />
      <section className="container-prose py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <div className="eyebrow mb-3">Overview</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-5">
              A practice built for the {industry.name.toLowerCase()} sector.
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{industry.description}</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Capabilities</div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {industry.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 p-4 rounded-md border border-border bg-card"
                >
                  <CheckCircle2 className="size-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside>
          <ConsultationForm variant="compact" title="Speak with a sector specialist" />
        </aside>
      </section>
      <CTABanner />
    </>
  ),
});
