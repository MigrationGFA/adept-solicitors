import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/resources/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Adept Consultants" },
      { name: "description", content: "Practical, plain-English insights on cross-border legal matters." },
      { property: "og:url", content: "/resources/blog" },
    ],
    links: [{ rel: "canonical", href: "/resources/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights & Perspectives" subtitle="Practical guidance from our cross-border legal team." breadcrumbs={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }, { label: "Blog" }]} />
      <section className="container-prose py-20">
        <a href={`/resources/blog/${featured.slug}`} className="group block rounded-md border border-border overflow-hidden hover:shadow-elegant transition mb-14">
          <div className="grid md:grid-cols-2">
            <div className="bg-navy-gradient p-10 md:p-14 text-navy-foreground flex flex-col justify-between min-h-[280px]">
              <div className="eyebrow text-gold">Featured · {featured.category}</div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mt-6 leading-tight">{featured.title}</h2>
                <p className="mt-4 text-bone/70">{featured.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-gold font-medium">
                  Read article <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
            <div className="p-10 bg-bone flex flex-col justify-center">
              <div className="text-xs text-muted-foreground">{featured.date} · {featured.readTime}</div>
              <p className="mt-4 text-foreground/80 leading-relaxed">{featured.body[0]}</p>
            </div>
          </div>
        </a>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <a key={p.slug} href={`/resources/blog/${p.slug}`} className="group p-7 rounded-md border border-border bg-card hover:border-gold hover:shadow-card-soft transition flex flex-col">
              <div className="eyebrow text-gold mb-3">{p.category}</div>
              <h3 className="font-display text-xl font-semibold text-navy group-hover:text-gold transition leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{p.excerpt}</p>
              <div className="mt-5 pt-5 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                <span>{p.date}</span><span>{p.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
