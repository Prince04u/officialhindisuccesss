import { Link, useRouterState } from "@tanstack/react-router";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const PRIMARY_NAV: Array<{ label: string; to: string; params?: Record<string, string> }> = [
  { label: "होम", to: "/" },
  { label: "सफलता की कहानियाँ", to: "/category/$slug", params: { slug: "success-stories" } },
  { label: "व्यापार", to: "/category/$slug", params: { slug: "business" } },
  { label: "स्टार्टअप", to: "/category/$slug", params: { slug: "startups" } },
  { label: "वित्त", to: "/category/$slug", params: { slug: "finance" } },
  { label: "तकनीक", to: "/category/$slug", params: { slug: "technology" } },
  { label: "करियर", to: "/category/$slug", params: { slug: "career" } },
  { label: "प्रेरणा", to: "/category/$slug", params: { slug: "motivation" } },
  { label: "शिक्षा", to: "/category/$slug", params: { slug: "education" } },
];

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored === "dark";
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function SiteHeader() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Masthead */}
        <div className="flex flex-col items-center pt-5 pb-4">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-2 h-2 rounded-full bg-gold transition-transform group-hover:scale-125" />
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              हिंदी सक्सेस स्टोरीज़
            </span>
          </Link>
          <p className="font-serif italic text-sm text-muted-foreground mt-1.5 hidden sm:block">
            सफल लोगों की प्रेरणादायक कहानियाँ और ज्ञान
          </p>
        </div>

        {/* Nav row */}
        <nav className="w-full flex items-center justify-between border-t border-gold/30 pt-3 pb-3 gap-4">
          <ul className="hidden lg:flex gap-5 xl:gap-7 overflow-x-auto no-scrollbar whitespace-nowrap text-[12.5px] font-ui font-semibold uppercase tracking-wider text-foreground/70 min-w-0 flex-1">
            {PRIMARY_NAV.map((item) => (
              <li key={item.label} className="shrink-0">
                <Link
                  to={item.to}
                  params={item.params as never}
                  className="hover:text-gold transition-colors py-1 border-b-2 border-transparent data-[status=active]:text-foreground data-[status=active]:border-gold"
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="खोजें"
              className="size-9 grid place-items-center rounded-full hover:bg-surface transition-colors"
            >
              <Search className="size-4" />
            </button>
            <button
              onClick={toggle}
              aria-label={dark ? "लाइट मोड" : "डार्क मोड"}
              className="size-9 grid place-items-center rounded-full hover:bg-surface transition-colors"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link
              to="/#newsletter"
              className="hidden sm:inline-flex px-4 py-2 bg-foreground text-background text-[11px] font-ui font-bold uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
            >
              सदस्यता लें
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="मेनू"
              className="lg:hidden size-9 grid place-items-center rounded-full hover:bg-surface transition-colors"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Search bar */}
        {searchOpen && (
          <form
            action="/search"
            method="get"
            className="pb-4 flex gap-2 animate-reveal"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="q"
              placeholder="कहानियाँ, लेखक या विषय खोजें…"
              className="flex-1 px-4 py-3 bg-surface border border-rule focus:outline-none focus:border-gold text-sm font-ui"
            />
            <button className="px-6 py-3 bg-foreground text-background font-ui font-bold uppercase tracking-widest text-xs">
              खोजें
            </button>
          </form>
        )}

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-rule py-4 animate-reveal">
            <ul className="grid gap-1">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    params={item.params as never}
                    className="block py-2 font-ui text-sm font-semibold uppercase tracking-wider hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-rule mt-2 pt-2">
                <Link to="/about" className="block py-2 font-ui text-sm">हमारे बारे में</Link>
                <Link to="/contact" className="block py-2 font-ui text-sm">संपर्क</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
