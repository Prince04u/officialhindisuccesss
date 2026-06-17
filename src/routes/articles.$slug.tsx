import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import {
  getArticle,
  getAuthor,
  categories,
  relatedArticles,
  formatHindiDate,
} from "@/data/content";
import { useEffect, useMemo, useState } from "react";
import { Twitter, Facebook, Linkedin, Link as LinkIcon, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const { article } = loaderData;
    const author = getAuthor(article.authorSlug);
    const cat = categories.find((c) => c.slug === article.category)!;
    return {
      meta: [
        { title: `${article.title} — हिंदी सक्सेस स्टोरीज़` },
        { name: "description", content: article.excerpt },
        { name: "author", content: author.name },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articles/${params.slug}` },
        { property: "og:image", content: article.image },
        { property: "article:published_time", content: article.publishedAt },
        { property: "article:author", content: author.name },
        { property: "article:section", content: cat.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: article.image },
      ],
      links: [{ rel: "canonical", href: `/articles/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.excerpt,
            image: [article.image],
            datePublished: article.publishedAt,
            dateModified: article.updatedAt ?? article.publishedAt,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
            },
            publisher: {
              "@type": "NewsMediaOrganization",
              name: "हिंदी सक्सेस स्टोरीज़",
            },
            articleSection: cat.name,
            inLanguage: "hi",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "होम", item: "/" },
              {
                "@type": "ListItem",
                position: 2,
                name: cat.name,
                item: `/category/${cat.slug}`,
              },
              { "@type": "ListItem", position: 3, name: article.title },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const author = getAuthor(article.authorSlug);
  const cat = categories.find((c) => c.slug === article.category)!;
  const related = relatedArticles(article.slug, article.category);
  const [fontScale, setFontScale] = useState(1);
  const [copied, setCopied] = useState(false);

  // Build TOC from h2 headings in body
  const toc = useMemo(() => {
    const m = [...article.body.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)];
    return m.map((mm) => ({ id: mm[1], text: mm[2] }));
  }, [article.body]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [article.slug]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      <ReadingProgress />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="ब्रेडक्रंब"
          className="flex items-center gap-2 text-[11px] font-ui uppercase tracking-wider text-muted-foreground mb-8 overflow-x-auto no-scrollbar"
        >
          <Link to="/" className="hover:text-gold">होम</Link>
          <ChevronRight className="size-3" />
          <Link
            to="/category/$slug"
            params={{ slug: cat.slug }}
            className="hover:text-gold"
          >
            {cat.name}
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground truncate max-w-[60vw]">{article.title}</span>
        </nav>

        {/* Title block */}
        <header className="max-w-3xl mx-auto text-center mb-10">
          <p className="eyebrow text-gold mb-4">{cat.name}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-pretty mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <Link
              to="/authors/$slug"
              params={{ slug: author.slug }}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <img
                src={author.photo}
                alt={author.name}
                width={36}
                height={36}
                className="size-9 rounded-full object-cover border border-rule"
              />
              <span className="font-ui font-bold">{author.name}</span>
            </Link>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">
              प्रकाशित: {formatHindiDate(article.publishedAt)}
            </span>
            {article.updatedAt && (
              <>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">
                  अद्यतन: {formatHindiDate(article.updatedAt)}
                </span>
              </>
            )}
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{article.readTime} मिनट</span>
          </div>
        </header>

        {/* Hero image */}
        <figure className="max-w-5xl mx-auto mb-10">
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1600}
            height={896}
            className="w-full aspect-[16/9] object-cover bg-surface"
          />
          <figcaption className="font-ui text-xs text-center text-muted-foreground mt-3">
            {article.imageAlt}
          </figcaption>
        </figure>

        {/* Main reading grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* TOC */}
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-32">
              <p className="eyebrow text-muted-foreground mb-4">इस लेख में</p>
              <nav>
                <ol className="space-y-3 border-l border-rule">
                  {toc.map((t, i) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="block pl-4 -ml-px border-l border-transparent hover:border-gold hover:text-gold transition-colors text-sm leading-snug"
                      >
                        <span className="font-ui text-[10px] text-muted-foreground mr-2">
                          0{i + 1}
                        </span>
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-10 pt-6 border-t border-rule">
                <p className="eyebrow text-muted-foreground mb-3">पाठ का आकार</p>
                <div className="flex gap-1">
                  {[
                    { l: "अ", v: 0.95 },
                    { l: "अ", v: 1.0 },
                    { l: "अ", v: 1.1 },
                    { l: "अ", v: 1.2 },
                  ].map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setFontScale(s.v)}
                      className={`size-9 grid place-items-center border border-rule font-serif transition-colors ${
                        fontScale === s.v
                          ? "bg-foreground text-background border-foreground"
                          : "hover:border-gold"
                      }`}
                      style={{ fontSize: `${0.85 + i * 0.12}rem` }}
                      aria-label={`Font size ${i + 1}`}
                    >
                      {s.l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Body */}
          <div className="col-span-12 lg:col-span-9">
            <div
              className="prose-editorial max-w-[68ch] mx-auto"
              style={{ fontSize: `${fontScale * 1.125}rem` }}
              dangerouslySetInnerHTML={{ __html: article.body }}
            />

            {/* Tags + share */}
            <div className="max-w-[68ch] mx-auto mt-12 pt-8 border-t border-rule flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((t: string) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface border border-rule text-xs font-ui"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <p className="eyebrow text-muted-foreground mr-3">साझा करें</p>
                {[
                  { Icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}` },
                  { Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
                  { Icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-9 grid place-items-center hover:bg-surface transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="size-9 grid place-items-center hover:bg-surface transition-colors"
                  aria-label="लिंक कॉपी करें"
                >
                  <LinkIcon className="size-4" />
                </button>
                {copied && (
                  <span className="text-xs font-ui text-gold ml-2">कॉपी हुआ!</span>
                )}
              </div>
            </div>

            {/* Author bio */}
            <div className="max-w-[68ch] mx-auto mt-12 p-6 sm:p-8 bg-surface border border-rule grid grid-cols-[auto_1fr] gap-5 items-start">
              <Link to="/authors/$slug" params={{ slug: author.slug }}>
                <img
                  src={author.photo}
                  alt={author.name}
                  width={80}
                  height={80}
                  className="size-16 sm:size-20 rounded-full object-cover border border-gold/30"
                />
              </Link>
              <div className="min-w-0">
                <p className="eyebrow text-gold mb-1">{author.role}</p>
                <Link
                  to="/authors/$slug"
                  params={{ slug: author.slug }}
                  className="font-serif text-xl font-bold hover:text-gold transition-colors"
                >
                  {author.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {author.longBio}
                </p>
                <p className="eyebrow text-muted-foreground mt-3">{author.experience}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-rule">
            <p className="eyebrow text-gold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold inline-block" /> आगे पढ़ें
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-10">
              संबंधित लेख
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} variant="compact" />
              ))}
            </div>
          </section>
        )}

        <NewsletterCTA />
      </article>
    </Layout>
  );
}
