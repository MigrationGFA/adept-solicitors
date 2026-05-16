import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { to?: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-navy-gradient text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_top_right,oklch(0.74_0.12_78)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-prose relative py-20 md:py-28">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-bone/60 mb-6 flex items-center flex-wrap gap-1.5"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.to ? (
                  <Link to={b.to} className="hover:text-gold transition">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-bone/80">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="size-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <div className="eyebrow text-gold mb-4 animate-fade-up">{eyebrow}</div>}
        <h1
          className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-4xl animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-lg text-bone/75 leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "180ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
