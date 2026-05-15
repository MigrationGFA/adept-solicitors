import { Link } from "@tanstack/react-router";

export function CTABanner({
  title = "Ready to discuss your matter?",
  subtitle = "Schedule a confidential consultation with our cross-border legal team.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_left,oklch(0.74_0.12_78)_0%,transparent_70%)]" />
      <div className="container-prose relative py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl">{title}</h2>
          <p className="mt-3 text-bone/75 max-w-xl">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/book-consultation" className="rounded-sm bg-gold text-gold-foreground px-6 py-3 font-medium hover:brightness-95 transition shadow-gold">
            Book Consultation
          </Link>
          <Link to="/contact" className="rounded-sm border border-bone/30 px-6 py-3 font-medium hover:bg-bone/10 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
