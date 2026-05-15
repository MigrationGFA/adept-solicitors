import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/resources/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Adept Consultants" },
      { name: "description", content: "Common questions about working with Adept Consultants." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:url", content: "/resources/faq" },
    ],
    links: [{ rel: "canonical", href: "/resources/faq" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Common questions about working with Adept Consultants." breadcrumbs={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }, { label: "Frequently Asked Questions" }]} />
      <section className="container-prose py-20 max-w-3xl">
        <div className="divide-y divide-border border-y border-border">
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Do you serve diaspora clients abroad?</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Yes. A significant portion of our practice serves clients in the U.S., U.K., Canada, and across Europe with matters in Nigeria — and vice versa.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">How are fees structured?</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">We offer fixed fees, capped fees, retainers, or hourly rates depending on the matter. All fees are agreed in writing before we begin.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Are consultations confidential?</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Always. All inquiries and consultations are protected by attorney-client privilege from first contact.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">How quickly do you respond?</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Within one business day, in most cases the same day.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Can you coordinate with my existing counsel?</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Yes. We frequently act as co-counsel and coordinate seamlessly with U.S., Nigerian, and international firms.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Do you handle litigation?</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Yes — commercial litigation in Texas state and federal courts, Nigerian courts, and domestic and international arbitration.</p>
          </details>
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
