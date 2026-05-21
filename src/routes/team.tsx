import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import aboutImg from "@/assets/about-signing.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Adept Consultants" },
      {
        name: "description",
        content: "Cross-trained attorneys with deep roots on both sides of the Atlantic.",
      },
      { property: "og:title", content: "Our Team" },
      {
        property: "og:description",
        content: "Cross-trained attorneys with deep roots on both sides of the Atlantic.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Our Team"
        subtitle="Cross-trained attorneys with deep roots on both sides of the Atlantic."
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Our Team" }]}
      />
      <section className="container-prose py-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div className="space-y-10">
          <div>
            <div className="eyebrow mb-3">A senior-led practice</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              A senior-led practice
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our team brings together more than two decades of cumulative experience across U.S.
              and Nigerian practice. At every consultation we make sure you meet the partner who
              will lead your matter and is ideal for your case.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Areas of leadership</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">
              Areas of leadership
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Cross-border transactions, international dispute resolution, corporate and commercial
              law, real estate, immigration, energy, and diaspora legal services.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-3">Founding Partner</div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-4">Founding Partner</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our founding partner is a multidisciplinary legal and business professional with
              advanced expertise in legal representation, business analytics, petroleum law,
              corporate governance, taxation, and strategic management. Holds an LL.M in Petroleum
              Law from University of Dundee and an MS in Business Analytics from East Texas A & M
              University, and executive certifications from Imperial College London, Harvard
              Business School, and Wharton School, University of Pennsylvania. Also qualified as a
              Chartered Company Secretary and Barrister-at-Law, with strong experience spanning
              energy law, sustainable business strategy, corporate governance, and regulatory
              compliance.
              <br />
              <br />
              In addition, she is a strategic business leader with proven expertise in legal
              advisory, cross- functional leadership, business planning and revenue optimization
              through data-driven insights.
            </p>
            <strong>Email:</strong>{" "}
            <a href="mailto:yinka@adeptlp.com" className="underline">
              yinka@adeptlp.com
            </a>
          </div>
        </div>
        <div className="sticky top-28 rounded-md overflow-hidden border border-border shadow-card-soft aspect-[4/5]">
          <img
            src={aboutImg}
            alt="Senior attorney at work"
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
      <CTABanner />
    </>
  ),
});
