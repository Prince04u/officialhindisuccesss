import type { ReactNode } from "react";
import { Layout } from "./Layout";

interface Props {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function PolicyPage({ eyebrow, title, lastUpdated, children }: Props) {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <header className="text-center mb-10 pb-10 border-b border-rule">
          <p className="eyebrow text-gold mb-3">{eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>
          {lastUpdated && (
            <p className="eyebrow text-muted-foreground mt-4">
              अंतिम अद्यतन: {lastUpdated}
            </p>
          )}
        </header>
        <div className="prose-editorial">{children}</div>
      </article>
    </Layout>
  );
}
