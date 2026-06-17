import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles, authors, categories } from "@/data/content";

const BASE_URL = "https://hindisuccessstories.in";

export const Route = createFileRoute("/sitemap.xml")({
server: {
handlers: {
GET: async () => {
const staticPaths = [
"/",
"/authors",
"/search",
"/about",
"/contact",
"/mission",
"/editorial-policy",
"/fact-checking",
"/corrections",
"/transparency",
"/advertising",
"/privacy",
"/terms",
"/disclaimer",
];

    const entries = [
      ...staticPaths.map((p) => ({
        path: p,
        changefreq: "weekly",
        priority: "0.8",
      })),

      ...categories.map((c) => ({
        path: `/category/${c.slug}`,
        changefreq: "daily",
        priority: "0.9",
      })),

      ...authors.map((a) => ({
        path: `/authors/${a.slug}`,
        changefreq: "weekly",
        priority: "0.6",
      })),

      ...articles.map((a) => ({
        path: `/articles/${a.slug}`,
        lastmod: (a.updatedAt ?? a.publishedAt)?.split("T")[0],
        changefreq: "monthly",
        priority: "0.9",
      })),
    ];

    const urls = entries.map((e: any) =>
      [
        "<url>",
        `  <loc>${BASE_URL}${e.path}</loc>`,
        e.lastmod ? `  <lastmod>${e.lastmod}</lastmod>` : null,
        e.changefreq ? `  <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `  <priority>${e.priority}</priority>` : null,
        "</url>",
      ]
        .filter(Boolean)
        .join("\n")
    );

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls,
      "</urlset>",
    ].join("\n");

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
},

},
});
