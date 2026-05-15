import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { internationalServices } from "@/lib/services";

const service = internationalServices.find((s) => s.slug === "foreign-investment-support")!;

export const Route = createFileRoute("/international/foreign-investment-support")({
  head: () => ({
    meta: [
      { title: `${service.title} — International Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — International Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/international/foreign-investment-support" },
    ],
    links: [{ rel: "canonical", href: "/international/foreign-investment-support" }],
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
