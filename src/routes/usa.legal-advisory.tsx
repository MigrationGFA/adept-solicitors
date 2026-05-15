import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { usaServices } from "@/lib/services";

const service = usaServices.find((s) => s.slug === "legal-advisory")!;

export const Route = createFileRoute("/usa/legal-advisory")({
  head: () => ({
    meta: [
      { title: `${service.title} — USA Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — USA Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/usa/legal-advisory" },
    ],
    links: [{ rel: "canonical", href: "/usa/legal-advisory" }],
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
