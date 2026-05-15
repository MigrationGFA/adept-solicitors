import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { usaServices, nigeriaServices, internationalServices } from "@/lib/services";
import { industries } from "@/lib/industries";
import logo from "@/assets/adept-logo.png";

type NavItem = { to: string; label: string };

const aboutLinks: NavItem[] = [
  { to: "/about", label: "About Us" },
  { to: "/our-approach", label: "Our Approach" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/team", label: "Our Team" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block bg-navy text-navy-foreground/90 text-xs">
        <div className="container-prose flex items-center justify-between py-2">
          <p>{site.address.line1} · {site.address.line2}</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phones[0].replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-gold transition">
              <Phone className="size-3.5" /> {site.phones[0]}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-gold transition">{site.email}</a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card-soft" : "bg-background/70 backdrop-blur"
        }`}
      >
        <div className="container-prose flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Adept Consultants"
              className="h-10 md:h-12 w-auto rounded-sm shadow-card-soft"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-base md:text-lg font-semibold tracking-tight text-navy">
                Adept Consultants
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Legal Practitioners & Consultants
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <a href="/" className="px-3 py-2 text-foreground/80 hover:text-navy transition">Home</a>
            <Dropdown label="About" items={aboutLinks} />
            <ServicesMega />
            <Dropdown
              label="Industries"
              items={[
                { to: "/industries", label: "Overview" },
                ...industries.map((i) => ({ to: `/industries/${i.slug}`, label: i.name })),
              ]}
            />
            <a href="/international" className="px-3 py-2 text-foreground/80 hover:text-navy transition">International</a>
            
            <a href="/contact" className="px-3 py-2 text-foreground/80 hover:text-navy transition">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center rounded-sm bg-navy text-navy-foreground px-5 py-2.5 text-sm font-medium hover:bg-navy/90 transition shadow-card-soft"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-navy"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-up">
            <div className="container-prose py-4 flex flex-col gap-1 text-sm">
              <a href="/" onClick={() => setOpen(false)} className="py-2.5 border-b border-border/60 text-foreground/90">Home</a>
              <MobileGroup label="About" items={aboutLinks} onClick={() => setOpen(false)} />
              <a href="/usa" onClick={() => setOpen(false)} className="py-2.5 border-b border-border/60 text-foreground/90">USA Services</a>
              <a href="/nigeria" onClick={() => setOpen(false)} className="py-2.5 border-b border-border/60 text-foreground/90">Nigeria Services</a>
              <a href="/international" onClick={() => setOpen(false)} className="py-2.5 border-b border-border/60 text-foreground/90">International</a>
              <a href="/industries" onClick={() => setOpen(false)} className="py-2.5 border-b border-border/60 text-foreground/90">Industries</a>
              
              <a href="/contact" onClick={() => setOpen(false)} className="py-2.5 border-b border-border/60 text-foreground/90">Contact</a>
              <Link
                to="/book-consultation"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-sm bg-navy text-navy-foreground px-5 py-3 font-medium"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Dropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 text-foreground/80 hover:text-navy transition flex items-center gap-1">
        {label} <ChevronDown className="size-3.5 opacity-60 group-hover:rotate-180 transition" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-56">
        <div className="bg-card border border-border rounded-md shadow-elegant py-2">
          {items.map((it) => (
            <a
              key={it.to}
              href={it.to}
              className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-navy transition"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesMega() {
  return (
    <div className="relative group">
      <button className="px-3 py-2 text-foreground/80 hover:text-navy transition flex items-center gap-1">
        Services <ChevronDown className="size-3.5 opacity-60 group-hover:rotate-180 transition" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[820px]">
        <div className="bg-card border border-border rounded-md shadow-elegant p-6 grid grid-cols-3 gap-6">
          <MegaColumn title="USA Services" to="/usa" items={usaServices.slice(0, 7).map((s) => ({ to: `/usa/${s.slug}`, label: s.title }))} />
          <MegaColumn title="Nigeria Services" to="/nigeria" items={nigeriaServices.slice(0, 8).map((s) => ({ to: `/nigeria/${s.slug}`, label: s.title }))} />
          <MegaColumn title="International" to="/international" items={internationalServices.map((s) => ({ to: `/international/${s.slug}`, label: s.title }))} />
        </div>
      </div>
    </div>
  );
}

function MegaColumn({ title, to, items }: { title: string; to: string; items: NavItem[] }) {
  return (
    <div>
      <a href={to} className="eyebrow mb-3 block hover:text-navy transition">{title}</a>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it.to}>
            <a href={it.to} className="text-sm text-foreground/80 hover:text-navy transition">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileGroup({
  label,
  items,
  onClick,
}: {
  label: string;
  items: NavItem[];
  onClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between py-2.5">
        <span>{label}</span>
        <ChevronDown className={`size-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-2 pl-3 flex flex-col">
          {items.map((it) => (
            <a key={it.to} href={it.to} onClick={onClick} className="py-2 text-sm text-foreground/80">
              {it.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
