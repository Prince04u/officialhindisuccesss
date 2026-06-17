import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { articles } from "@/data/content";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/site/ArticleCard";

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>) => ({
    q: typeof s.q === "string" ? s.q : "",
  }),
  head: () => ({
    meta: [
      { title: "खोजें — हिंदी सक्सेस स्टोरीज़" },
      { name: "description", content: "हमारे आर्काइव में कहानियाँ, लेखक और विषय खोजें।" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(needle) ||
        a.excerpt.toLowerCase().includes(needle) ||
        a.tags.some((t) => t.toLowerCase().includes(needle))
    );
  }, [query]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="text-center mb-10">
          <p className="eyebrow text-gold mb-3">खोज</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            कहानियाँ, लेखक, विषय
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.history.replaceState(null, "", `?q=${encodeURIComponent(query)}`);
            }}
            className="flex gap-2 max-w-2xl mx-auto"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="क्या खोज रहे हैं?"
              className="flex-1 px-4 py-3 bg-surface border border-rule focus:outline-none focus:border-gold text-base font-sans"
            />
            <button className="px-6 py-3 bg-foreground text-background font-ui font-bold uppercase tracking-widest text-xs">
              खोजें
            </button>
          </form>
        </header>

        <div className="border-t border-rule pt-10">
          {!query.trim() ? (
            <p className="text-center text-muted-foreground">
              खोज शुरू करने के लिए ऊपर कुछ टाइप करें।
            </p>
          ) : results.length === 0 ? (
            <p className="text-center text-muted-foreground">
              "{query}" के लिए कोई परिणाम नहीं मिला।{" "}
              <Link to="/" className="text-gold underline">होम पर लौटें</Link>
            </p>
          ) : (
            <>
              <p className="eyebrow text-muted-foreground mb-6">
                {results.length} परिणाम
              </p>
              <div className="grid gap-8">
                {results.map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="list" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
