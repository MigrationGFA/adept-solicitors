import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { usaServices } from "@/lib/services";

const service = usaServices.find((s) => s.slug === "lawyers-in-melissa-texas")!;

export const Route = createFileRoute("/usa/lawyers-in-melissa-texas")({
  head: () => ({
    meta: [
      { title: `${service.title} — USA Services | Adept Consultants` },
      { name: "description", content: service.blurb },
      { property: "og:title", content: `${service.title} — USA Services` },
      { property: "og:description", content: service.blurb },
      { property: "og:url", content: "/usa/lawyers-in-melissa-texas" },
    ],
    links: [{ rel: "canonical", href: "/usa/lawyers-in-melissa-texas" }],
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
