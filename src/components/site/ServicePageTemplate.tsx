import { Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTABanner } from "./CTABanner";
import { ConsultationForm } from "./ConsultationForm";
import type { ServiceMeta } from "@/lib/site";
import { allServices } from "@/lib/services";

export function ServicePageTemplate({
  service,
  region,
  regionLabel,
  regionTo,
}: {
  service: ServiceMeta;
  region: "usa" | "nigeria" | "international";
  regionLabel: string;
  regionTo: string;
}) {
  const related = allServices
    .filter((s) => s.region.toLowerCase() === region.replace("usa", "usa") && s.slug !== service.slug)
    .slice(0, 3);

  const process = [
    { step: "01", title: "Discovery", desc: "Confidential intake to understand your matter, jurisdictions, and desired outcomes." },
    { step: "02", title: "Strategy", desc: "We propose a tailored legal strategy with clear scope, milestones, and budget." },
    { step: "03", title: "Execution", desc: "Senior attorneys lead the work, with regular updates and document deliverables." },
    { step: "04", title: "Resolution", desc: "We close the matter, hand over records, and remain available for ongoing counsel." },
  ];

  const faqs = [
    {
      q: `Do you handle ${service.title.toLowerCase()} for international clients?`,
      a: "Yes. A significant portion of our practice is cross-border, with clients based in the U.S., Nigeria, U.K., Canada, and across Europe.",
    },
    {
      q: "How do you bill for this work?",
      a: "Depending on the matter, we offer fixed fees, capped fees, retainers, or hourly rates. We always agree on fees in writing before starting.",
    },
    {
      q: "How quickly can we begin?",
      a: "Most engagements begin within one to three business days of our initial consultation and conflict check.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={regionLabel}
        title={service.title}
        subtitle={service.blurb}
        breadcrumbs={[
          { to: "/", label: "Home" },
          { to: regionTo, label: regionLabel },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/book-consultation" className="rounded-sm bg-gold text-gold-foreground px-6 py-3 font-medium hover:brightness-95 transition shadow-gold">
            Book Consultation
          </Link>
          <Link to="/contact" className="rounded-sm border border-bone/30 px-6 py-3 font-medium hover:bg-bone/10 transition">
            Contact Our Team
          </Link>
        </div>
      </PageHero>

      <section className="container-prose py-16 md:py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="eyebrow mb-3">Overview</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-5">A senior-led practice you can rely on.</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{service.blurb}</p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              Our {service.title.toLowerCase()} practice combines technical depth with practical commercial judgment.
              We work alongside our clients — not around them — to deliver outcomes that hold up commercially, legally, and reputationally.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-3">What we handle</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-6">Scope of services</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.handles.map((h) => (
                <li key={h} className="flex items-start gap-3 p-4 rounded-md border border-border bg-card">
                  <CheckCircle2 className="size-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-3">Our process</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-6">How we work</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {process.map((p) => (
                <div key={p.step} className="p-6 rounded-md border border-border bg-card relative">
                  <div className="text-gold font-display text-sm tracking-wider mb-2">{p.step}</div>
                  <div className="font-semibold text-navy mb-1.5">{p.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow mb-3">Benefits</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-6">Why clients engage us</h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-3">FAQs</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-6">Frequently asked</h2>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-medium text-navy pr-4">{f.q}</span>
                    <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <ConsultationForm variant="compact" title="Speak with an attorney" />
          <div className="p-6 rounded-md bg-navy text-navy-foreground">
            <div className="eyebrow text-gold mb-3">Why choose us</div>
            <ul className="space-y-2.5 text-sm text-bone/85">
              <li>· Cross-border legal team</li>
              <li>· Senior attorney attention</li>
              <li>· Transparent fee structures</li>
              <li>· Confidential, discrete handling</li>
            </ul>
          </div>

          {related.length > 0 && (
            <div>
              <div className="eyebrow mb-3">Related services</div>
              <div className="space-y-2">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/${r.region.toLowerCase()}/${r.slug}`}
                    className="block p-4 rounded-md border border-border hover:border-gold hover:bg-accent transition"
                  >
                    <div className="font-medium text-navy text-sm">{r.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{r.blurb}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>

      <CTABanner />
    </>
  );
}
