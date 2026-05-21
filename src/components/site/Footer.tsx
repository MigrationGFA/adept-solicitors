import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { usaServices, nigeriaServices, internationalServices } from "@/lib/services";
import logo from "@/assets/adept-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-24">
      <div className="container-prose py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Adept Consultants" className="h-11 w-auto rounded-sm" />
            <div>
              {/* <div className="font-display text-lg font-semibold">Adept Consultants</div> */}
              <div className="text-[10px] uppercase tracking-[0.18em] text-bone/60">
                Adept Legal Practitioners <br /> & Consultants
              </div>
            </div>
          </div>
          <p className="text-sm text-bone/70 max-w-sm leading-relaxed">
            International legal advisory and representation across Texas, Nigeria, and global
            jurisdictions — built for businesses, individuals, and the diaspora community.
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-bone/80">
            <li className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 text-gold" /> {site.address.line1},{" "}
              {site.address.line2}
            </li>
            <li className="flex items-center gap-3">
              {/* <Phone className="size-4 text-gold" /> {site.phones[1]} */}
              <Phone className="size-4 text-gold" /> {site.phones.join(" · ")}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-gold" /> {site.email}
            </li>
          </ul>

          {/* Nigerian Office Contact */}
          <div className="mt-6 pt-4 border-t border-bone/20">
            <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
              Lagos Office
            </p>
            <ul className="space-y-2.5 text-sm text-bone/80">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-gold" /> 8, Providence Street, Lekki Phase 1,
                Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" /> (+234) 814-397-6462
              </li>
              <li className="flex items-center gap-3">
                {/* <Phone className="size-4 text-gold" /> (+234) 814-397-6462 (WhatsApp) */}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold" /> lagos@adeptlp.com
              </li>
            </ul>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="https://www.linkedin.com/in/adept-solicitors-434401125?fromQR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-9 rounded-full border border-bone/20 hover:bg-gold hover:text-navy hover:border-gold flex items-center justify-center transition"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="https://twitter.com/AdeptLP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="size-9 rounded-full border border-bone/20 hover:bg-gold hover:text-navy hover:border-gold flex items-center justify-center transition"
            >
              <Twitter className="size-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589558086419"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-9 rounded-full border border-bone/20 hover:bg-gold hover:text-navy hover:border-gold flex items-center justify-center transition"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://instagram.com/adeptchambers26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-9 rounded-full border border-bone/20 hover:bg-gold hover:text-navy hover:border-gold flex items-center justify-center transition"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://wa.me/2348143976462"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="size-9 rounded-full border border-bone/20 hover:bg-gold hover:text-navy hover:border-gold flex items-center justify-center transition"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
        </div>

        <FooterCol
          title="USA Services"
          links={usaServices.slice(0, 6).map((s) => ({ to: `/usa/${s.slug}`, label: s.title }))}
          more={{ to: "/usa", label: "All USA Services →" }}
        />
        <FooterCol
          title="Nigeria Services"
          links={nigeriaServices
            .slice(0, 6)
            .map((s) => ({ to: `/nigeria/${s.slug}`, label: s.title }))}
          more={{ to: "/nigeria", label: "All Nigeria Services →" }}
        />
        <FooterCol
          title="Firm"
          links={[
            { to: "/about", label: "About" },
            { to: "/team", label: "Our Team" },
            { to: "/why-choose-us", label: "Why Choose Us" },
            { to: "/international", label: "International" },
            { to: "/industries", label: "Industries" },

            { to: "/contact", label: "Contact" },
            { to: "/book-consultation", label: "Book Consultation" },
          ]}
        />
      </div>

      <div className="border-t border-bone/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-bone/60">
          <p>
            © {new Date().getFullYear()} Adept Legal Practitioners & Consultants. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <span>{site.hours}</span>
            <Link to="/privacy-policy" className="hover:text-gold transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  more,
}: {
  title: string;
  links: { to: string; label: string }[];
  more?: { to: string; label: string };
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gold tracking-wide uppercase mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <a href={l.to} className="text-sm text-bone/75 hover:text-gold transition">
              {l.label}
            </a>
          </li>
        ))}
        {more && (
          <li className="pt-1">
            <a href={more.to} className="text-xs text-gold hover:text-bone transition">
              {more.label}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
