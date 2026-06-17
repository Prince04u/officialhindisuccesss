import { useState } from "react";

export function NewsletterCTA({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="newsletter"
      className={
        compact
          ? "bg-surface p-6 border border-rule"
          : "my-16 bg-surface p-8 sm:p-12 text-center border border-rule"
      }
    >
      <div className={compact ? "" : "max-w-xl mx-auto"}>
        <h2 className={compact ? "font-serif text-xl font-bold mb-3" : "font-serif text-2xl sm:text-3xl font-bold mb-4"}>
          ज्ञान का नया अध्याय खोलें
        </h2>
        <p className="text-muted-foreground mb-6 text-pretty">
          हर शनिवार सुबह — चुनिंदा सफलता की कहानियाँ, गहरी व्यापारिक रिपोर्ट और संपादक की निजी सिफारिशें, सीधे आपके इनबॉक्स में।
        </p>
        {submitted ? (
          <p className="text-gold font-ui font-semibold text-sm">
            धन्यवाद! कृपया अपने इनबॉक्स में पुष्टिकरण ईमेल देखें।
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setSubmitted(true);
            }}
            className={compact ? "grid gap-2" : "flex flex-col sm:flex-row gap-2"}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="आपका ईमेल पता"
              className="flex-1 px-4 py-3 bg-background border border-rule focus:outline-none focus:border-gold text-sm font-ui"
            />
            <button className="px-6 py-3 bg-foreground text-background font-ui font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-ink transition-colors">
              साइन अप
            </button>
          </form>
        )}
        <p className="text-[10px] font-ui uppercase tracking-widest text-muted-foreground mt-4">
          कोई स्पैम नहीं · किसी भी समय अनसब्सक्राइब करें
        </p>
      </div>
    </section>
  );
}
