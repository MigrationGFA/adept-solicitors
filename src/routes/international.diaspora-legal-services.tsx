import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { internationalServices } from "@/lib/services";

const service = internationalServices.find((s) => s.slug === "diaspora-legal-services")!;

export const Route = createFileRoute("/international/diaspora-legal-services")({
  head: () => ({
    meta: [
      { title: `${service.title} — International Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — International Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/international/diaspora-legal-services" },
    ],
    links: [{ rel: "canonical", href: "/international/diaspora-legal-services" }],
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
