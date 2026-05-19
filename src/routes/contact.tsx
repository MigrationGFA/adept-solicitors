import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adept Consultants" },
      {
        name: "description",
        content:
          "Get in touch with Adept Legal Practitioners & Consultants. Confidential. We respond within one business day.",
      },
      { property: "og:title", content: "Contact Adept Consultants" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact our team."
        subtitle="All inquiries are confidential. We respond within one business day."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Contact" }]}
      />
      <section className="container-prose py-20 flex justify-center items-center gap-14">
        {/* <section className="container-prose py-20 grid lg:grid-cols-[1fr_1.2fr] gap-14"> */}
        <div className="space-y-7">
          {/* USA Office */}
          <div className="space-y-7">
            <Item
              icon={MapPin}
              label="USA Office"
              value={`${site.address.line1}, ${site.address.line2}`}
            />
            <Item icon={Phone} label="USA Phone" value={site.phones.join(" · ")} />
            <Item icon={Printer} label="USA Fax" value={site.fax} />
            <Item
              icon={Mail}
              label="USA Email"
              value="dallas@adeptlp.com"
              href="mailto:dallas@adeptlp.com"
            />
          </div>

          {/* Nigeria Office */}
          <div className="pt-4 border-t border-border space-y-7">
            <Item
              icon={MapPin}
              label="Nigeria Office"
              value="8, Providence Street, Lekki Phase 1, Lagos, Nigeria"
            />
            <Item
              icon={Phone}
              label="Nigeria Phone"
              value="(+234) 814-397-6462 · (+234) 814-397-6462 (WhatsApp)"
            />
            <Item
              icon={Mail}
              label="Nigeria Email"
              value="lagos@adeptlp.com"
              href="mailto:lagos@adeptlp.com"
            />
          </div>

          {/* General Contact */}
          <div className="pt-4 border-t border-border space-y-7">
            <Item
              icon={Mail}
              label="General Inquiries"
              value="info@adeptlp.com"
              href="mailto:info@adeptlp.com"
            />
            <Item
              icon={Mail}
              label="Founding Partner"
              value="yinka@adeptlp.com"
              href="mailto:yinka@adeptlp.com"
            />
          </div>
        </div>
        <ConsultationForm />
      </section>
      <div className="max-w-3xl mx-auto rounded-md overflow-hidden border border-border aspect-[4/3]">
        <iframe
          title="Office map"
          src="https://www.google.com/maps?q=5465%20Legacy%20Drive%20Plano%20TX%2075024&output=embed"
          className="size-full"
          loading="lazy"
        />
      </div>
    </>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="hover:text-gold transition">
      {value}
    </a>
  ) : (
    value
  );
  return (
    <div className="flex items-start gap-4">
      <div className="size-10 rounded-sm bg-navy text-bone flex items-center justify-center flex-shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-foreground font-medium mt-0.5">{content}</div>
      </div>
    </div>
  );
}
