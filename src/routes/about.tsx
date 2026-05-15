import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import aboutImg from "@/assets/about-signing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adept Consultants — Adept Consultants" },
      { name: "description", content: "An international legal advisory firm built to serve clients whose work crosses borders." },
      { property: "og:title", content: "About Adept Consultants" },
      { property: "og:description", content: "An international legal advisory firm built to serve clients whose work crosses borders." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Our Firm"
        title="About Adept Consultants"
        subtitle="An international legal advisory firm built to serve clients whose work crosses borders."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "About Adept Consultants" }]}
      />
      <section className="container-prose py-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div className="space-y-10">
          <div>
            <div className="eyebrow mb-3">Our story</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Our story</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">Adept Legal Practitioners & Consultants was founded to fill a clear gap: clients with legal interests in both the United States and Nigeria deserved a single firm that understood both jurisdictions deeply, not two disconnected counsel exchanging emails across time zones.</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Who we serve</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Who we serve</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">We represent diaspora individuals and families, Nigerian businesses expanding internationally, U.S. companies operating in Africa, and global investors looking to deploy capital across our practice regions.</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Our standards</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Our standards</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">Senior attorney attention on every matter. Transparent, written fee arrangements. Discreet, reputation-aware handling. Documented, audit-ready records. These are not aspirations — they are operating standards.</p>
          </div>
        </div>
        <div className="sticky top-28 rounded-md overflow-hidden border border-border shadow-card-soft aspect-[4/5]">
          <img src={aboutImg} alt="Senior attorney at work" className="size-full object-cover" loading="lazy" />
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
