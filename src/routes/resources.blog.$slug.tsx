import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/resources/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} — Adept Consultants` },
      { name: "description", content: loaderData.post.excerpt },
      { property: "og:title", content: loaderData.post.title },
      { property: "og:description", content: loaderData.post.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/resources/blog/${loaderData.post.slug}` },
    ] : [{ title: "Article — Adept Consultants" }],
  }),
  notFoundComponent: () => <div className="container-prose py-32 text-center"><h1 className="font-display text-3xl text-navy">Article not found</h1></div>,
  errorComponent: ({ error }) => <div className="container-prose py-32 text-center"><p>{error.message}</p></div>,
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.date} · ${post.readTime}`}
        breadcrumbs={[{ to: "/", label: "Home" }, { to: "/resources/blog", label: "Blog" }, { label: post.title }]}
      />
      <article className="container-prose py-20 max-w-3xl">
        <div className="prose prose-lg max-w-none">
          {post.body.map((p, i) => (
            <p key={i} className="text-foreground/85 leading-relaxed text-lg mb-6">{p}</p>
          ))}
        </div>
        <div className="mt-16 pt-10 border-t border-border">
          <div className="eyebrow mb-4">Related reading</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <a key={r.slug} href={`/resources/blog/${r.slug}`} className="p-5 rounded-md border border-border hover:border-gold transition">
                <div className="text-xs text-muted-foreground">{r.category}</div>
                <div className="font-display text-lg text-navy mt-1">{r.title}</div>
              </a>
            ))}
          </div>
        </div>
      </article>
      <CTABanner />
    </>
  );
}
