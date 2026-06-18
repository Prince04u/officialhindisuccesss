import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArticleCard } from "@/components/site/ArticleCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import {
  featuredArticle,
  trendingArticles,
  editorsPicks,
  latestArticles,
  mostRead,
  categories,
  authors,
  getAuthor,
  formatHindiDate,
} from "@/data/content";
import { Play, Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "हिंदी सक्सेस स्टोरीज़ — सफलता, व्यापार और प्रेरणा का हिंदी प्रकाशन" },
      {
        name: "description",
        content:
          "भारत के सबसे प्रेरणादायक उद्यमियों की कहानियाँ, गहन व्यापारिक विश्लेषण, करियर मार्गदर्शन और तकनीक की पड़ताल — हिंदी में।",
      },
      { property: "og:title", content: "हिंदी सक्सेस स्टोरीज़" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const hero = featuredArticle();
  const heroAuthor = getAuthor(hero.authorSlug);
  const heroCategory = categories.find((c) => c.slug === hero.category)!;
  const trending = trendingArticles();
  const picks = editorsPicks();
  const latest = latestArticles(6);
  const popular = mostRead();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* HERO + TRENDING RAIL */}
        <section className="grid grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16 animate-reveal">
          <Link
            to="/articles/$slug"
            params={{ slug: hero.slug }}
            className="col-span-12 lg:col-span-8 group"
          >
            <div className="overflow-hidden mb-5">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                width={1600}
                height={896}
                className="w-full aspect-[16/9] object-cover bg-surface transition-transform duration-1000 group-hover:scale-[1.02]"
              />
            </div>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="eyebrow text-gold border-b border-gold pb-0.5">
                  {heroCategory.name}
                </span>
                <span className="font-ui text-[11px] text-muted-foreground">
                  · {hero.readTime} मिनट की रीडिंग
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4 group-hover:text-gold transition-colors duration-500 text-pretty">
                {hero.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                {hero.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={heroAuthor.photo}
                  alt={heroAuthor.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="size-10 rounded-full object-cover border border-rule"
                />
                <div>
                  <p className="font-ui text-xs font-bold uppercase tracking-tight">
                    {heroAuthor.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    {heroAuthor.role} · {formatHindiDate(hero.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <aside className="col-span-12 lg:col-span-4 lg:border-l border-rule lg:pl-8">
            <h2 className="eyebrow flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-gold inline-block" />
              ट्रेंडिंग कहानियाँ Of <a href="https://raxiwingames.games/">Raxiwin</a>
            </h2>
            <div className="space-y-8 lg:space-y-10">
              {trending.map((a, i) => {
                const cat = categories.find((c) => c.slug === a.category)!;
                return (
                  <Link
                    key={a.slug}
                    to="/articles/$slug"
                    params={{ slug: a.slug }}
                    className="group block"
                  >
                    <span className="block text-4xl font-serif text-foreground/10 mb-1 group-hover:text-gold/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-lg lg:text-xl font-bold leading-snug group-hover:text-gold transition-colors text-pretty">
                      {a.title}
                    </h3>
                    <p className="eyebrow text-muted-foreground mt-2">{cat.name}</p>
                  </Link>
                );
              })}
            </div>
          </aside>
        </section>

        {/* EDITOR'S PICKS */}
        <section className="py-12 lg:py-16 border-t border-rule">
          <SectionHeading
            eyebrow="चयनित"
            title="संपादक की पसंद "
            href="/category/$slug"
            hrefLabel="सभी देखें"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {picks.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="compact" />
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-12 lg:py-16 border-t border-rule">
          <SectionHeading eyebrow="विषय" title="लोकप्रिय श्रेणियाँ" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group bg-background p-6 sm:p-8 hover:bg-surface transition-colors"
              >
                <h3 className="font-serif text-xl font-bold group-hover:text-gold transition-colors">
                  {c.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* LATEST + MOST READ */}
        <section className="py-12 lg:py-16 border-t border-rule grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <SectionHeading eyebrow="अभी प्रकाशित" title="नवीनतम लेख" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {latest.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="compact" />
              ))}
            </div>
          </div>
          <aside className="col-span-12 lg:col-span-4 lg:border-l border-rule lg:pl-8">
            <h2 className="eyebrow flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-gold inline-block" />
              इस सप्ताह सबसे अधिक पढ़े गए
            </h2>
            <ol className="space-y-6">
              {popular.map((a, i) => (
                <li key={a.slug} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                  <span className="font-serif text-2xl text-gold/60 font-bold leading-none w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    to="/articles/$slug"
                    params={{ slug: a.slug }}
                    className="font-serif text-base font-bold leading-snug hover:text-gold transition-colors text-pretty min-w-0"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ol>

            <div className="mt-10 pt-8 border-t border-rule">
              <NewsletterCTA compact />
            </div>
          </aside>
        </section>

        {/* AUTHORS */}
        <section className="py-12 lg:py-16 border-t border-rule">
          <SectionHeading
            eyebrow="हमारी टीम"
            title="हमारे विशेषज्ञ लेखक"
            href="/authors"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {authors.map((author) => (
              <Link
                key={author.slug}
                to="/authors/$slug"
                params={{ slug: author.slug }}
                className="text-center group"
              >
                <img
                  src={author.photo}
                  alt={author.name}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="size-24 sm:size-28 rounded-full mx-auto mb-4 object-cover border border-gold/20 group-hover:border-gold transition-colors"
                />
                <p className="font-serif font-bold text-lg group-hover:text-gold transition-colors">
                  {author.name}
                </p>
                <p className="eyebrow text-muted-foreground mt-1">{author.role}</p>
              </Link>
            ))}
          </div>
        </section>
<>
  <NewsletterCTA />
  <section className="py-8 border-t border-rule text-center">
    <p className="text-sm text-muted-foreground">
      Also take a look at our partners:{" "}
      <a href="https://agniclublogin.com/">Agni Club</a>,{" "}
      <a href="https://agniclubs.org/">Agni Club</a>,{" "}
      <a href="https://agniclub.game/">Agni Club</a>,{" "}
      <a href="https://agniclublogin.app/">Agni Club</a>
    </p>
  </section>
</>
        {/* TESTIMONIALS */}
        <section className="py-12 lg:py-16 border-t border-rule">
          <SectionHeading eyebrow="पाठकों के विचार" title="क्यों लोग हम पर भरोसा करते हैं" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "हिंदी में इतनी गहराई से व्यापारिक रिपोर्टिंग और कहीं नहीं मिलती। यह हर सप्ताह की मेरी ज़रूरी पढ़ाई बन गई है।",
                name: "अनिल जोशी",
                role: "संस्थापक, ग्रोथबॉक्स",
              },
              {
                quote:
                  "तथ्यों की सटीकता और संपादकीय गुणवत्ता दोनों ही असाधारण हैं। एक भरोसेमंद मीडिया ब्रांड।",
                name: "मेघा देसाई",
                role: "वरिष्ठ निवेश सलाहकार",
              },
              {
                quote:
                  "करियर के निर्णयों में इनकी सलाह ने वास्तविक फर्क डाला। लेख व्यवहारिक और गहरे होते हैं।",
                name: "सूरज पाटिल",
                role: "उत्पाद प्रबंधक",
              },
            ].map((t) => (
              <figure key={t.name} className="bg-surface p-6 sm:p-8 border border-rule">
                <Quote className="size-6 text-gold mb-4" />
               <blockquote className="font-serif text-lg leading-snug mb-6 text-pretty">
  सरल डिज़ाइन, तेज़ एक्सेस और बेहतरीन यूज़र एक्सपीरियंस।
  <a
    href="https://yaarrwinlogin.com"
    target="_blank"
    className="text-blue-500 underline ml-1"
  >
    Yaarwin
  </a>
  {" "}ने मेरी उम्मीदों से बढ़कर प्रदर्शन किया।
</blockquote>
                <figcaption>
                  <p className="font-ui font-bold text-sm">{t.name}</p>
                  <p className="eyebrow text-muted-foreground mt-1">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* VIDEOS */}
        <section className="py-12 lg:py-16 border-t border-rule">
          <SectionHeading eyebrow="वीडियो" title="नवीनतम साक्षात्कार" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latest.slice(0, 3).map((a) => (
              <div key={a.slug} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="size-14 rounded-full bg-gold/95 grid place-items-center transition-transform group-hover:scale-110">
                      <Play className="size-5 fill-ink text-ink ml-0.5" />
                    </span>
                </div>
                <h3 className="font-serif text-base font-bold leading-snug mt-3 group-hover:text-gold transition-colors text-pretty">
                  {a.title}
                </h3>
              </div>
            ))}
          </div>
         </div>
        </section>
      </div>
    </Layout>
  );
}
