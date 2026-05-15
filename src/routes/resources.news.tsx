import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/resources/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Adept Consultants" },
      { name: "description", content: "Announcements, regulatory developments, and firm updates." },
      { property: "og:title", content: "News & Updates" },
      { property: "og:url", content: "/resources/news" },
    ],
    links: [{ rel: "canonical", href: "/resources/news" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Firm News" title="News & Updates" subtitle="Announcements, regulatory developments, and firm updates." breadcrumbs={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }, { label: "News & Updates" }]} />
      <section className="container-prose py-20 max-w-3xl">
        <div className="divide-y divide-border border-y border-border">
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">BOI / Corporate Transparency Act compliance reminders</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">What U.S. entity owners need to know about beneficial ownership reporting.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Nigerian property law update</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Recent developments affecting diaspora property transactions.</p>
          </details>
          <details className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-display text-lg font-medium text-navy pr-4">Adept expands cross-border practice</span>
              <ChevronRight className="size-4 text-gold transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-foreground/75 leading-relaxed">Continuing investment in our Texas and Nigeria capabilities.</p>
          </details>
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
