import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_NAME = "हिंदी सक्सेस स्टोरीज़";
const SITE_DESCRIPTION =
  "सफल लोगों की प्रेरणादायक कहानियाँ, गहन व्यापारिक रिपोर्ट और भरोसेमंद ज्ञान — हिंदी का प्रमुख डिजिटल प्रकाशन।";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-gold mb-4">४०४</p>
        <h1 className="font-serif text-4xl font-bold text-foreground">
          यह पृष्ठ नहीं मिला
        </h1>
        <p className="mt-3 text-muted-foreground">
          आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-xs font-ui font-bold uppercase tracking-widest text-background transition-colors hover:bg-gold hover:text-ink"
          >
            होम पर लौटें
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl font-bold text-foreground">
          यह पृष्ठ लोड नहीं हो सका
        </h1>
        <p className="mt-3 text-muted-foreground">
          कुछ गड़बड़ हुई। कृपया पुनः प्रयास करें या होम पर लौटें।
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-foreground px-5 py-3 text-xs font-ui font-bold uppercase tracking-widest text-background hover:bg-gold hover:text-ink transition-colors"
          >
            पुनः प्रयास करें
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-rule px-5 py-3 text-xs font-ui font-bold uppercase tracking-widest hover:border-gold transition-colors"
          >
            होम पर लौटें
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
      { title: `${SITE_NAME} — सफलता, व्यापार और प्रेरणा का हिंदी प्रकाशन` },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Hindi Success Stories Editorial" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "hi_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@HindiSuccess" },
      { name: "theme-color", content: "#111827" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Mukta:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          name: SITE_NAME,
          alternateName: "Hindi Success Stories",
          url: "https://hindisuccessstories.in",
          description: SITE_DESCRIPTION,
          inLanguage: "hi",
          sameAs: [
            "https://twitter.com/HindiSuccess",
            "https://www.linkedin.com/company/hindi-success-stories",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <HeadContent />
      </head>
      <body>
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
      <Outlet />
    </QueryClientProvider>
  );
}
