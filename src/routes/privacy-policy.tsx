import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Adept Consultants" },
      { name: "description", content: "How Adept Consultants collects, uses, and protects your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: 2025" breadcrumbs={[{ to: "/", label: "Home" }, { label: "Privacy Policy" }]} />
      <article className="container-prose py-20 max-w-3xl space-y-6 text-foreground/80 leading-relaxed">
        <p>This Privacy Policy describes how Adept Legal Practitioners & Consultants ("we", "us", "our") collects, uses, and protects information you provide through this website.</p>
        <h2 className="font-display text-2xl text-navy mt-8">Information we collect</h2>
        <p>When you complete a contact or consultation form, we collect the information you submit, including your name, email address, phone number, and details of your inquiry.</p>
        <h2 className="font-display text-2xl text-navy mt-8">How we use your information</h2>
        <p>We use submitted information solely to respond to your inquiry, to schedule and conduct consultations, and to administer the attorney-client relationship if one is established.</p>
        <h2 className="font-display text-2xl text-navy mt-8">Confidentiality</h2>
        <p>All inquiries are treated confidentially. Once we agree to represent you, your communications with us are protected by attorney-client privilege.</p>
        <h2 className="font-display text-2xl text-navy mt-8">Cookies & analytics</h2>
        <p>This site may use minimal cookies for essential functionality and aggregated, non-identifying analytics.</p>
        <h2 className="font-display text-2xl text-navy mt-8">Contact</h2>
        <p>For privacy-related questions, contact us at adeptchambers@gmail.com.</p>
      </article>
    </>
  ),
});
