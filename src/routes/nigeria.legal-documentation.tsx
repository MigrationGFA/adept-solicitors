import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { nigeriaServices } from "@/lib/services";

const service = nigeriaServices.find((s) => s.slug === "legal-documentation")!;

export const Route = createFileRoute("/nigeria/legal-documentation")({
  head: () => ({
    meta: [
      { title: `${service.title} — Nigeria Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — Nigeria Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/nigeria/legal-documentation" },
    ],
    links: [{ rel: "canonical", href: "/nigeria/legal-documentation" }],
  }),
  component: () => (
    <ServicePageTemplate
      service={service}
      region="nigeria"
      regionLabel="Nigeria Services"
      regionTo="/nigeria"
    />
  ),
});
