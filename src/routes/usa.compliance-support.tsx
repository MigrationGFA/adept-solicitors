import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { usaServices } from "@/lib/services";

const service = usaServices.find((s) => s.slug === "compliance-support")!;

export const Route = createFileRoute("/usa/compliance-support")({
  head: () => ({
    meta: [
      { title: `${service.title} — USA Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — USA Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/usa/compliance-support" },
    ],
    links: [{ rel: "canonical", href: "/usa/compliance-support" }],
  }),
  component: () => (
    <ServicePageTemplate
      service={service}
      region="usa"
      regionLabel="USA Services"
      regionTo="/usa"
    />
  ),
});
