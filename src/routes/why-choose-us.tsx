import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import aboutImg from "@/assets/about-signing.jpg";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Adept Consultants" },
      { name: "description", content: "Six reasons clients choose Adept — and stay." },
      { property: "og:title", content: "Why Choose Us" },
      { property: "og:description", content: "Six reasons clients choose Adept — and stay." },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Differentiators"
        title="Why Choose Us"
        subtitle="Six reasons clients choose Adept — and stay."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Why Choose Us" }]}
      />
      <section className="container-prose py-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div className="space-y-10">
          <div>
            <div className="eyebrow mb-3">True cross-border depth</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              True cross-border depth
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our attorneys are trained in Nigeria and admitted in the United States. One firm, both
              sides of the ocean.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Senior attorney attention</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              Senior attorney attention
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Your matter is led by a partner. Always. No exceptions.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Transparent fees</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Transparent fees</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Fixed, capped, or hourly — agreed in writing before we begin.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Commercial judgment</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              Commercial judgment
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Legal advice that takes the business, not just the law, seriously.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Discreet handling</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              Discreet handling
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Reputation-aware representation on every engagement, large or small.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Institutional rigor</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              Institutional rigor
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Documented processes, clean records, audit-ready always.
            </p>
          </div>
        </div>
        <div className="sticky top-28 rounded-md overflow-hidden border border-border shadow-card-soft aspect-[4/5]">
          <img
            src={aboutImg}
            alt="Senior attorney at work"
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
