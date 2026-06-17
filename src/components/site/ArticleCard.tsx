import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/content";
import { categories, getAuthor, formatHindiDate } from "@/data/content";

interface Props {
  article: Article;
  variant?: "default" | "compact" | "list";
}

export function ArticleCard({ article, variant = "default" }: Props) {
  const category = categories.find((c) => c.slug === article.category)!;
  const author = getAuthor(article.authorSlug);

  if (variant === "list") {
    return (
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4 sm:gap-5 items-start"
      >
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          width={280}
          height={186}
          className="w-full aspect-[3/2] object-cover bg-surface"
        />
        <div className="min-w-0">
          <p className="eyebrow text-gold mb-2">{category.name}</p>
          <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug group-hover:text-gold transition-colors text-pretty">
            {article.title}
          </h3>
          <p className="font-ui text-[11px] text-muted-foreground mt-2">
            {author.name} · {article.readTime} मिनट
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group block space-y-3"
      >
        <div className="overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            width={600}
            height={400}
            className="w-full aspect-[3/2] object-cover bg-surface transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <p className="eyebrow text-gold">{category.name}</p>
        <h3 className="font-serif text-lg font-bold leading-tight group-hover:text-gold transition-colors text-pretty">
          {article.title}
        </h3>
      </Link>
    );
  }

  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className="group block space-y-4"
    >
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          width={800}
          height={533}
          className="w-full aspect-[3/2] object-cover bg-surface transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div>
        <p className="eyebrow text-gold mb-2">{category.name}</p>
        <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight group-hover:text-gold transition-colors text-pretty">
          {article.title}
        </h3>
        <p className="text-muted-foreground mt-3 leading-relaxed text-[15px] text-pretty">
          {article.excerpt}
        </p>
        <p className="font-ui text-[11px] uppercase tracking-widest text-muted-foreground mt-4">
          {author.name} · {formatHindiDate(article.publishedAt)} · {article.readTime} मिनट
        </p>
      </div>
    </Link>
  );
}
