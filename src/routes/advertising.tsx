import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/advertising")({
  head: () => ({
    meta: [{ title: "विज्ञापन नीति — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "हमारी विज्ञापन और प्रायोजित सामग्री नीति।" }],
    links: [{ rel: "canonical", href: "/advertising" }],
  }),
  component: () => (
    <PolicyPage eyebrow="नीति" title="विज्ञापन नीति" lastUpdated="नवंबर २०२५">
      <p className="lead">हम विज्ञापन स्वीकार करते हैं, लेकिन कड़े नियमों के साथ।</p>
      <h2>क्या स्वीकार किया जाता है</h2>
      <p>केवल वैध, कानूनी उत्पाद और सेवाएँ। हम जुआ, धूम्रपान, या भ्रामक वित्तीय उत्पादों के विज्ञापन नहीं चलाते।</p>
      <h2>प्रायोजित सामग्री</h2>
      <p>सभी प्रायोजित लेख स्पष्ट रूप से "प्रायोजित सामग्री" के रूप में लेबल किए जाते हैं और संपादकीय लेखों से दृश्यात्मक रूप से अलग दिखते हैं।</p>
      <h2>विज्ञापन हेतु संपर्क</h2>
      <p>ads@hindisuccessstories.in</p>
    </PolicyPage>
  ),
});
