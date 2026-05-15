import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { internationalServices } from "@/lib/services";

const service = internationalServices.find((s) => s.slug === "international-dispute-resolution")!;

export const Route = createFileRoute("/international/international-dispute-resolution")({
  head: () => ({
    meta: [
      { title: `${service.title} — International Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — International Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/international/international-dispute-resolution" },
    ],
    links: [{ rel: "canonical", href: "/international/international-dispute-resolution" }],
  }),
  component: () => (
    <ServicePageTemplate
      service={service}
      region="international"
      regionLabel="International Services"
      regionTo="/international"
    />
  ),
});
