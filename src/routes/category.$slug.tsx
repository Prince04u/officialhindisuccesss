import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articlesByCategory, categories } from "@/data/content";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { category: cat, articles: articlesByCategory(cat.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — हिंदी सक्सेस स्टोरीज़` },
        { name: "description", content: category.description },
        { property: "og:title", content: category.name },
        { property: "og:description", content: category.description },
        { property: "og:url", content: `/category/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, articles } = Route.useLoaderData();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="eyebrow text-gold mb-3">श्रेणी</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            {category.description}
          </p>
        </header>

        {articles.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">
            इस श्रेणी में जल्द ही लेख प्रकाशित होंगे।
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 border-t border-rule pt-12">
            {articles.map((a: typeof articles[number]) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
