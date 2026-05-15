import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { usaServices } from "@/lib/services";

const service = usaServices.find((s) => s.slug === "transactions-negotiations")!;

export const Route = createFileRoute("/usa/transactions-negotiations")({
  head: () => ({
    meta: [
      { title: `${service.title} — USA Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — USA Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/usa/transactions-negotiations" },
    ],
    links: [{ rel: "canonical", href: "/usa/transactions-negotiations" }],
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
