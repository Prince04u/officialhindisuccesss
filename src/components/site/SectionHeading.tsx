import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  eyebrow?: string;
  href?: string;
  hrefLabel?: string;
}

export function SectionHeading({ title, eyebrow, href, hrefLabel = "सभी देखें" }: Props) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
      <div>
        {eyebrow && (
          <p className="eyebrow text-gold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold inline-block" />
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">{title}</h2>
      </div>
      {href && (
        <Link
          to={href}
          className="eyebrow text-foreground hover:text-gold transition-colors shrink-0"
        >
          {hrefLabel} →
        </Link>
      )}
    </div>
  );
}
