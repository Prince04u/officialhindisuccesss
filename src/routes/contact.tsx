import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "संपर्क करें — हिंदी सक्सेस स्टोरीज़" },
      { name: "description", content: "हमसे संपर्क करें — संपादकीय सुझाव, सुधार, विज्ञापन या साझेदारी के लिए।" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PolicyPage eyebrow="हमसे बात करें" title="संपर्क करें">
      <p className="lead">हमें आपकी प्रतिक्रिया, सुझाव और कहानी के विचारों का स्वागत है। नीचे लिखें या हमें सीधे ईमेल करें।</p>
      <div className="grid sm:grid-cols-3 gap-4 not-prose my-8">
        {[
          { l: "संपादकीय", v: "editor@hindisuccessstories.in" },
          { l: "विज्ञापन", v: "ads@hindisuccessstories.in" },
          { l: "टिप्स", v: "tips@hindisuccessstories.in" },
        ].map((c) => (
          <div key={c.l} className="bg-surface p-5 border border-rule">
            <p className="eyebrow text-gold mb-2">{c.l}</p>
            <p className="font-ui text-sm break-all">{c.v}</p>
          </div>
        ))}
      </div>
      <h2>संदेश भेजें</h2>
      {sent ? (
        <p className="text-gold">धन्यवाद! हम ४८ घंटों के भीतर आपसे संपर्क करेंगे।</p>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="not-prose grid gap-4 max-w-xl"
        >
          <input required placeholder="आपका नाम" className="px-4 py-3 bg-surface border border-rule focus:outline-none focus:border-gold text-base" />
          <input required type="email" placeholder="ईमेल" className="px-4 py-3 bg-surface border border-rule focus:outline-none focus:border-gold text-base" />
          <input placeholder="विषय" className="px-4 py-3 bg-surface border border-rule focus:outline-none focus:border-gold text-base" />
          <textarea required rows={6} placeholder="आपका संदेश" className="px-4 py-3 bg-surface border border-rule focus:outline-none focus:border-gold text-base font-sans" />
          <button className="px-6 py-3 bg-foreground text-background font-ui font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-ink transition-colors justify-self-start">
            संदेश भेजें
          </button>
        </form>
      )}
    </PolicyPage>
  );
}
