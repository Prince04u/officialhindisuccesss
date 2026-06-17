import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArticleCard } from "@/components/site/ArticleCard";
import { authors, articlesByAuthor } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = authors.find((a) => a.slug === params.slug);
    if (!author) throw notFound();
    return { author, articles: articlesByAuthor(author.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const { author } = loaderData;
    return {
      meta: [
        { title: `${author.name} — ${author.role} · हिंदी सक्सेस स्टोरीज़` },
        { name: "description", content: author.bio },
        { property: "og:title", content: author.name },
        { property: "og:description", content: author.bio },
        { property: "og:image", content: author.photo },
        { property: "og:url", content: `/authors/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/authors/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            description: author.longBio,
            image: author.photo,
            knowsAbout: author.expertise,
          }),
        },
      ],
    };
  },
  component: AuthorPage,
});

function AuthorPage() {
  const { author, articles } = Route.useLoaderData();
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-start pb-12 border-b border-rule">
          <img
            src={author.photo}
            alt={author.name}
            width={240}
            height={240}
            className="size-40 sm:size-48 rounded-full object-cover border border-gold/30"
          />
          <div>
            <p className="eyebrow text-gold mb-2 flex items-center gap-2">
              {author.role}
              <CheckCircle2 className="size-4 text-gold" aria-label="सत्यापित लेखक" />
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              {author.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {author.longBio}
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="eyebrow text-muted-foreground mb-2">विशेषज्ञता</p>
                <ul className="space-y-1 font-ui">
                  {author.expertise.map((e: string) => (
                    <li key={e}>· {e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground mb-2">अनुभव</p>
                <p className="font-ui">{author.experience}</p>
                <p className="eyebrow text-muted-foreground mt-4 mb-2">संपर्क</p>
                <div className="flex gap-3 font-ui text-xs">
                  {author.social.twitter && <a href={author.social.twitter} className="hover:text-gold">Twitter</a>}
                  {author.social.linkedin && <a href={author.social.linkedin} className="hover:text-gold">LinkedIn</a>}
                  {author.social.email && <a href={`mailto:${author.social.email}`} className="hover:text-gold">Email</a>}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="pt-12">
          <h2 className="font-serif text-2xl font-bold mb-8">
            प्रकाशित लेख ({articles.length})
          </h2>
          {articles.length === 0 ? (
            <p className="text-muted-foreground">अभी कोई लेख प्रकाशित नहीं हुआ।</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((a: typeof articles[number]) => (
                <ArticleCard key={a.slug} article={a} variant="list" />
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
