import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Adept Consultants" },
      {
        name: "description",
        content: "Schedule a confidential consultation with our cross-border legal team.",
      },
      { property: "og:title", content: "Book a Consultation" },
      { property: "og:url", content: "/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: BookPage,
});

function BookPage() {
  const benefits = [
    "Confidential intake with a senior partner",
    "Clear next steps within one business day",
    "Transparent, written fee arrangements",
    "Cross-border perspective on every matter",
  ];
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Speak with our team."
        subtitle="Tell us about your matter. We'll respond within one business day."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Book Consultation" }]}
      />
      <section className="container-prose py-20 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <div className="eyebrow mb-3">What to expect</div>
          <h2 className="font-display text-3xl font-semibold text-navy mb-6">
            A senior partner, on the call.
          </h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <ConsultationForm />
      </section>
    </>
  );
}
