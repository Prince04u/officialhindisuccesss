import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { authors, articlesByAuthor } from "@/data/content";

export const Route = createFileRoute("/authors/")({
  head: () => ({
    meta: [
      { title: "हमारे लेखक — हिंदी सक्सेस स्टोरीज़" },
      {
        name: "description",
        content:
          "हिंदी सक्सेस स्टोरीज़ के विशेषज्ञ संपादकीय दल से मिलें — पत्रकार, विश्लेषक और कोच जो हर लेख की प्रामाणिकता सुनिश्चित करते हैं।",
      },
      { property: "og:title", content: "हमारे लेखक" },
      { property: "og:url", content: "/authors" },
    ],
    links: [{ rel: "canonical", href: "/authors" }],
  }),
  component: AuthorsPage,
});

function AuthorsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow text-gold mb-3">संपादकीय दल</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            हमारे लेखक
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            हर लेख के पीछे एक पत्रकार है जो अपना नाम उसकी सटीकता पर लगाता है।
            हमारी टीम के बारे में जानें।
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-rule pt-12">
          {authors.map((a) => {
            const count = articlesByAuthor(a.slug).length;
            return (
              <Link
                key={a.slug}
                to="/authors/$slug"
                params={{ slug: a.slug }}
                className="group grid grid-cols-[auto_1fr] gap-6 p-6 border border-rule hover:border-gold transition-colors"
              >
                <img
                  src={a.photo}
                  alt={a.name}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="size-28 rounded-full object-cover border border-gold/20"
                />
                <div className="min-w-0">
                  <p className="eyebrow text-gold mb-1">{a.role}</p>
                  <h2 className="font-serif text-2xl font-bold group-hover:text-gold transition-colors">
                    {a.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                    {a.bio}
                  </p>
                  <p className="eyebrow text-muted-foreground mt-4">
                    {count} प्रकाशित लेख · {a.experience}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
