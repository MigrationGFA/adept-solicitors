import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Scale,
  Globe2,
  Building2,
  ShieldCheck,
  Briefcase,
  Landmark,
  Ship,
  Plane,
  Cpu,
  Quote,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-skyline.jpg";
import worldMap from "@/assets/world-map.jpg";
import dallasImg from "@/assets/usa-dallas.jpg";
import lagosImg from "@/assets/nigeria-lagos.jpg";
import { CTABanner } from "@/components/site/CTABanner";
import { site } from "@/lib/site";
import { usaServices, nigeriaServices, internationalServices } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adept Consultants — Cross-Border Legal Solutions Between Texas & Nigeria" },
      {
        name: "description",
        content:
          "Strategic legal advisory, dispute resolution, corporate services, and international representation for individuals, businesses, and diaspora clients.",
      },
      { property: "og:title", content: "Adept Consultants — International Law Firm" },
      {
        property: "og:description",
        content: "Cross-Border Legal Solutions Between Texas & Nigeria.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PracticeAreas />
      <InternationalSection />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTABanner />
      <OfficeLocation />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden text-navy-foreground">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-navy/60" />

      <div className="container-prose relative pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          <div className="eyebrow text-gold mb-5 animate-fade-up">
            Texas · Nigeria · International
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.02] animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Cross-Border Legal Solutions Between{" "}
            <span className="text-gradient-gold">Texas & Nigeria</span>
          </h1>
          <p
            className="mt-7 text-lg md:text-xl text-bone/80 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            {site.legal} provides strategic legal advisory, dispute resolution, corporate services,
            and international representation for individuals, businesses, and diaspora clients.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <Link
              to="/book-consultation"
              className="rounded-sm bg-gold text-gold-foreground px-7 py-3.5 text-sm font-semibold hover:brightness-95 transition shadow-gold inline-flex items-center gap-2"
            >
              Book Consultation <ArrowRight className="size-4" />
            </Link>
            <a
              href="/usa"
              className="rounded-sm border border-bone/30 px-7 py-3.5 text-sm font-medium hover:bg-bone/10 transition inline-flex items-center gap-2"
            >
              Explore USA Services
            </a>
            <a
              href="/nigeria"
              className="rounded-sm border border-bone/30 px-7 py-3.5 text-sm font-medium hover:bg-bone/10 transition inline-flex items-center gap-2"
            >
              Explore Nigeria Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}

function TrustBar() {
  const stats = [
    { v: "20+", l: "Years cumulative experience" },
    { v: "3", l: "Jurisdictions: TX, Nigeria, International" },
    { v: "100%", l: "Senior attorney attention" },
    { v: "1 Day", l: "Average response time" },
  ];
  return (
    <section className="border-y border-border bg-bone">
      <div className="container-prose grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.l} className="px-4 py-8 md:py-10 text-center first:border-l-0">
            <div className="font-display text-4xl md:text-5xl text-navy font-semibold">{s.v}</div>
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PracticeAreas() {
  const cols = [
    {
      label: "USA Services",
      to: "/usa",
      img: dallasImg,
      icon: Building2,
      description: "Texas-based representation with international depth.",
      items: usaServices.slice(0, 6),
    },
    {
      label: "Nigeria Services",
      to: "/nigeria",
      img: lagosImg,
      icon: Landmark,
      description: "Comprehensive Nigerian legal practice across all sectors.",
      items: nigeriaServices.slice(0, 6),
    },
    {
      label: "International",
      to: "/international",
      img: worldMap,
      icon: Globe2,
      description: "Cross-border representation across global jurisdictions.",
      items: internationalServices,
    },
  ];

  return (
    <section className="container-prose py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="eyebrow mb-3">Practice Areas</div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
          One firm. Three jurisdictions.{" "}
          <span className="text-gradient-gold">Global outcomes.</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Whether you're operating from Plano, Lagos, or anywhere across the diaspora, our
          integrated team delivers consistent, senior-led counsel.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {cols.map((c) => (
          <div
            key={c.label}
            className="group rounded-md border border-border bg-card overflow-hidden shadow-card-soft hover:shadow-elegant transition-all duration-500"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={c.img}
                alt={c.label}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-bone">
                <div className="flex items-center gap-2 mb-1">
                  <c.icon className="size-4 text-gold" />
                  <div className="eyebrow text-gold">{c.label}</div>
                </div>
                <p className="text-sm text-bone/85">{c.description}</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {c.items.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`${c.to}/${s.slug}`}
                      className="flex items-center justify-between text-sm text-foreground/80 hover:text-navy transition py-1.5 border-b border-border/60 last:border-b-0"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="size-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={c.to}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-gold transition"
              >
                View all {c.label.toLowerCase()} <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InternationalSection() {
  const items = [
    {
      icon: Globe2,
      title: "Cross-border representation",
      desc: "Coordinated multi-jurisdiction strategy with one accountable team.",
    },
    {
      icon: Briefcase,
      title: "International transactions",
      desc: "Bankable, enforceable contracts across legal systems.",
    },
    {
      icon: Plane,
      title: "Diaspora legal services",
      desc: "A trusted home for Nigerians abroad managing matters back home.",
    },
    {
      icon: ShieldCheck,
      title: "Foreign investment support",
      desc: "Inbound and outbound capital deployment, properly structured.",
    },
  ];

  return (
    <section className="relative bg-navy text-navy-foreground overflow-hidden">
      <img
        src={worldMap}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="container-prose relative py-24 md:py-32 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
        <div>
          <div className="eyebrow text-gold mb-3">International Practice</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            International Nigerian legal representation with{" "}
            <span className="text-gradient-gold">Texas presence.</span>
          </h2>
          <p className="mt-6 text-bone/75 text-lg leading-relaxed max-w-xl">
            We sit at the crossroads of two legal systems and one global community. Our cross-border
            practice is built for clients whose lives, businesses, and ambitions do not fit neatly
            inside a single jurisdiction.
          </p>
          <Link
            to="/international"
            className="mt-8 inline-flex items-center gap-2 text-gold hover:text-bone transition font-medium"
          >
            Explore international services <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="p-6 rounded-md bg-bone/[0.04] border border-bone/10 backdrop-blur-sm hover:bg-bone/[0.07] transition"
            >
              <it.icon className="size-6 text-gold mb-4" />
              <div className="font-display text-lg font-semibold mb-1.5">{it.title}</div>
              <p className="text-sm text-bone/70 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: Scale,
      title: "Senior attorney attention",
      desc: "Your matter is led by a partner — not handed off. Always.",
    },
    {
      icon: Globe2,
      title: "True cross-border depth",
      desc: "Trained in Nigeria, admitted in the U.S. One firm, both sides.",
    },
    {
      icon: ShieldCheck,
      title: "Discreet & confidential",
      desc: "Reputation-aware handling on every engagement, large or small.",
    },
    {
      icon: Briefcase,
      title: "Commercial judgment",
      desc: "Legal advice that takes the business, not just the law, seriously.",
    },
    {
      icon: Building2,
      title: "Institutional rigor",
      desc: "Documented processes, clean records, audit-ready always.",
    },
    {
      icon: CheckCircle2,
      title: "Transparent fees",
      desc: "Fixed, capped, or hourly — agreed in writing before we start.",
    },
  ];

  return (
    <section className="container-prose py-24 md:py-32">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <div className="eyebrow mb-3">Why Choose Us</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Built for clients who refuse to choose between local presence and international depth.
          </h2>
          <div className="gold-rule mt-7" />
          <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
            Adept exists because clients deserve a single firm that understands both halves of their
            world — and treats their matter with the rigor of an elite global firm and the warmth of
            a trusted family advisor.
          </p>
          <Link
            to="/why-choose-us"
            className="mt-7 inline-flex items-center gap-2 text-navy hover:text-gold transition font-medium"
          >
            More on our approach <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-md bg-card border border-border hover:border-gold/50 hover:shadow-card-soft transition"
            >
              <r.icon className="size-6 text-gold mb-4" />
              <div className="font-display text-lg font-semibold text-navy mb-1.5">{r.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    { icon: Briefcase, name: "Energy", to: "/industries/oil-and-gas" },
    { icon: Landmark, name: "Oil & Gas", to: "/industries/oil-and-gas" },
    { icon: Building2, name: "Banking", to: "/industries/banking-finance" },
    { icon: MapPin, name: "Real Estate", to: "/industries/real-estate" },
    { icon: Plane, name: "Immigration", to: "/industries/immigration" },
    { icon: Cpu, name: "Technology", to: "/industries/technology-startups" },
    { icon: Ship, name: "Maritime", to: "/industries/maritime" },
  ];

  return (
    <section className="bg-bone border-y border-border">
      <div className="container-prose py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-3">Industries Served</div>
            <h2 className="font-display text-4xl font-semibold text-navy max-w-2xl leading-tight">
              Sector-specialist counsel where it matters most.
            </h2>
          </div>
          <Link
            to="/industries"
            className="text-navy hover:text-gold inline-flex items-center gap-2 font-medium"
          >
            All industries <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {items.map((it) => (
            <a
              key={it.name}
              href={it.to}
              className="group p-5 rounded-md bg-card border border-border hover:border-gold hover:bg-accent transition text-center"
            >
              <it.icon className="size-6 mx-auto text-navy group-hover:text-gold transition mb-3" />
              <div className="text-sm font-medium text-navy">{it.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Adept handled our Texas–Lagos joint venture with complete discretion and exactly the kind of cross-border judgment our deal demanded.",
      name: "Managing Director",
      role: "Energy services group",
    },
    {
      quote:
        "From CAC incorporation in Nigeria to a Delaware C-Corp for fundraising, they coordinated everything. We had one team. One plan.",
      name: "Founder & CEO",
      role: "Pan-African fintech",
    },
    {
      quote:
        "We were buying a property in Lagos from Houston. Adept did the due diligence, perfected our title, and saved us from a fraudulent vendor.",
      name: "Diaspora client",
      role: "Houston, Texas",
    },
  ];

  return (
    <section className="container-prose py-24 md:py-32">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <div className="eyebrow mb-3">What Clients Say</div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
          Trusted by businesses, families, and the diaspora.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="p-8 rounded-md bg-card border border-border shadow-card-soft flex flex-col"
          >
            <Quote className="size-8 text-gold/60 mb-5" />
            <blockquote className="font-display text-lg leading-relaxed text-foreground/90 flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-border">
              <div className="font-semibold text-navy">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function OfficeLocation() {
  return (
    <section className="container-prose py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="eyebrow mb-3">Visit Us</div>
          <h2 className="font-display text-4xl font-semibold text-navy leading-tight">
            Our Dallas Office
          </h2>
          <div className="gold-rule mt-5" />
          <div className="mt-7 space-y-4 text-foreground/85">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Address
              </div>
              <div className="font-medium">{site.address.line1}</div>
              <div>
                {site.address.line2}, {site.address.country}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Phone
              </div>
              <div>{site.phones.join(" · ")}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Hours
              </div>
              <div>{site.hours}</div>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Link
              to="/contact"
              className="rounded-sm bg-navy text-navy-foreground px-6 py-3 font-medium hover:bg-navy/90 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/book-consultation"
              className="rounded-sm border border-border px-6 py-3 font-medium hover:bg-accent transition"
            >
              Book Consultation
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-border shadow-card-soft">
          <iframe
            title="Dallas office map"
            src="https://www.google.com/maps?q=5465%20Legacy%20Drive%20Plano%20TX%2075024&output=embed"
            className="absolute inset-0 size-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
