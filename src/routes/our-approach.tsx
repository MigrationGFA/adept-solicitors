import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import aboutImg from "@/assets/about-signing.jpg";

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Adept Consultants" },
      { name: "description", content: "Principled, partner-led, and quietly relentless." },
      { property: "og:title", content: "Our Approach" },
      { property: "og:description", content: "Principled, partner-led, and quietly relentless." },
      { property: "og:url", content: "/our-approach" },
    ],
    links: [{ rel: "canonical", href: "/our-approach" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Our Approach"
        subtitle="Principled, partner-led, and quietly relentless."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Our Approach" }]}
      />
      <section className="container-prose py-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div className="space-y-10">
          <div>
            <div className="eyebrow mb-3">Discovery first</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Discovery first</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">We start by listening. Before we propose strategy, we make sure we understand the matter, the people, the jurisdictions, and the desired outcome.</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Clear strategy</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Clear strategy</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">We propose a written legal strategy with explicit scope, milestones, deliverables, and budget. No surprises.</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Senior-led execution</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Senior-led execution</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">Partners lead the work. Junior attorneys support. We never hand off your matter to an associate you've never met.</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Documented outcomes</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Documented outcomes</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">Every engagement closes with clean records, a final memo, and a clear handover. You should never have to ask 'what happened with that matter?'</p>
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
