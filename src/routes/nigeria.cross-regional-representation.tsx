import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { nigeriaServices } from "@/lib/services";

const service = nigeriaServices.find((s) => s.slug === "cross-regional-representation")!;

export const Route = createFileRoute("/nigeria/cross-regional-representation")({
  head: () => ({
    meta: [
      { title: `${service.title} — Nigeria Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — Nigeria Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/nigeria/cross-regional-representation" },
    ],
    links: [{ rel: "canonical", href: "/nigeria/cross-regional-representation" }],
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
