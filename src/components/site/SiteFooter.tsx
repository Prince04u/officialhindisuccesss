import { Link } from "@tanstack/react-router";

const FOOTER_LINKS = {
  sections: [
    { label: "सफलता की कहानियाँ", to: "/category/$slug", params: { slug: "success-stories" } },
    { label: "व्यापार", to: "/category/$slug", params: { slug: "business" } },
    { label: "स्टार्टअप्स", to: "/category/$slug", params: { slug: "startups" } },
    { label: "वित्त", to: "/category/$slug", params: { slug: "finance" } },
    { label: "तकनीक", to: "/category/$slug", params: { slug: "technology" } },
  ],
  company: [
    { label: "हमारे बारे में", to: "/about" },
    { label: "हमारा मिशन", to: "/mission" },
    { label: "लेखक", to: "/authors" },
    { label: "संपर्क करें", to: "/contact" },
  ],
  policies: [
    { label: "संपादकीय नीति", to: "/editorial-policy" },
    { label: "तथ्य जाँच नीति", to: "/fact-checking" },
    { label: "सुधार नीति", to: "/corrections" },
    { label: "पारदर्शिता नीति", to: "/transparency" },
    { label: "विज्ञापन नीति", to: "/advertising" },
    { label: "गोपनीयता नीति", to: "/privacy" },
    { label: "नियम एवं शर्तें", to: "/terms" },
    { label: "अस्वीकरण", to: "/disclaimer" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-b border-white/10 pb-12 mb-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                हिंदी सक्सेस स्टोरीज़
              </span>
            </div>
            <p className="text-paper/55 leading-relaxed max-w-sm mb-6">
              भारत का अग्रणी हिंदी डिजिटल प्रकाशन जो व्यापार, करियर और व्यक्तिगत
              विकास की प्रेरक कहानियों को समर्पित है। संपादकीय स्वतंत्रता और तथ्य की
              सटीकता हमारी प्राथमिकता है।
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="size-9 grid place-items-center rounded-full border border-white/15 text-[10px] font-ui uppercase tracking-widest text-paper/70 hover:border-gold hover:text-gold transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-ui font-bold uppercase tracking-widest text-[11px] text-gold mb-5">
              श्रेणियाँ
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.sections.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    params={l.params as never}
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-ui font-bold uppercase tracking-widest text-[11px] text-gold mb-5">
              कंपनी
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-paper/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-ui font-bold uppercase tracking-widest text-[11px] text-gold mb-5">
              नीतियाँ एवं पारदर्शिता
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {FOOTER_LINKS.policies.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-paper/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-ui uppercase tracking-[0.2em] text-paper/40">
          <p>© {new Date().getFullYear()} hindisuccessstories.in — सर्वाधिकार सुरक्षित</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-gold">गोपनीयता</Link>
            <Link to="/terms" className="hover:text-gold">शर्तें</Link>
            <a href="/sitemap.xml" className="hover:text-gold">साइटमैप</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
