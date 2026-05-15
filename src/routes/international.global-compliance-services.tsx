import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { internationalServices } from "@/lib/services";

const service = internationalServices.find((s) => s.slug === "global-compliance-services")!;

export const Route = createFileRoute("/international/global-compliance-services")({
  head: () => ({
    meta: [
      { title: `${service.title} — International Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — International Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/international/global-compliance-services" },
    ],
    links: [{ rel: "canonical", href: "/international/global-compliance-services" }],
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
