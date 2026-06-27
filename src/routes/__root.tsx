/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-3">404</div>
        <h1 className="font-display text-5xl font-semibold text-navy">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-7">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground hover:bg-navy/90 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again, or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground hover:bg-navy/90 transition"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adept Consultants" },
      {
        name: "description",
        content:
          "Adept Legal Practitioners & Consultants — international legal advisory and representation across Texas, Nigeria, and global jurisdictions.",
      },
      { name: "author", content: "Adept Consultants" },
      { property: "og:site_name", content: "Adept Consultants" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Adept Consultants" },
      { name: "twitter:title", content: "Adept Consultants" },
      {
        name: "description",
        content: "Adept Consultants — International Law Firm | Texas & Nigeria",
      },
      {
        property: "og:description",
        content: "Adept Consultants — International Law Firm | Texas & Nigeria",
      },
      {
        name: "twitter:description",
        content: "Adept Consultants — International Law Firm | Texas & Nigeria",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9bc2df54-4af8-4cfa-b70f-906928e18e94/id-preview-5a92cb47--40f25521-333b-4a30-ab29-53a68e74a62c.lovable.app-1778849309960.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9bc2df54-4af8-4cfa-b70f-906928e18e94/id-preview-5a92cb47--40f25521-333b-4a30-ab29-53a68e74a62c.lovable.app-1778849309960.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Adept Legal Practitioners & Consultants",
          alternateName: "Adept Consultants",
          url: "https://adeptllc.com",
          telephone: "+1-469-217-9855",
          email: "adeptchambers@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5465 Legacy Drive, Ste 650",
            addressLocality: "Plano",
            addressRegion: "TX",
            postalCode: "75024",
            addressCountry: "US",
          },
          areaServed: ["United States", "Nigeria", "International"],
        }),
      },
      // Google Tag Manager
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXLJWH52');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) - must be immediately after opening body tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXLJWH52"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </QueryClientProvider>
  );
}
