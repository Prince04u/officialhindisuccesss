import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [{ title: "हमारा मिशन — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "हम क्यों मौजूद हैं, और कहाँ जा रहे हैं।" }],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
  component: () => (
    <PolicyPage eyebrow="हमारा क्यों" title="हमारा मिशन">
      <p className="lead">हिंदी भाषी पाठकों के लिए दुनिया की सबसे विश्वसनीय व्यापार और सफलता पत्रकारिता बनाना।</p>
      <h2>क्यों हिंदी में</h2>
      <p>दुनिया में ६० करोड़ से अधिक लोग हिंदी समझते हैं, फिर भी गहरी, गुणवत्तापूर्ण व्यापारिक पत्रकारिता मुख्यतः अंग्रेज़ी में उपलब्ध है। यह असमानता है। हम इसे ठीक करने आए हैं।</p>
      <h2>हमारे मूल्य</h2>
      <ol>
        <li><strong>तथ्य पहले:</strong> गति से पहले सटीकता।</li>
        <li><strong>पाठक का सम्मान:</strong> आपके समय और बुद्धि का सम्मान।</li>
        <li><strong>संपादकीय स्वतंत्रता:</strong> कोई बाहरी प्रभाव नहीं।</li>
        <li><strong>दीर्घकालिक सोच:</strong> ट्रेंड्स के बजाय स्थायी अंतर्दृष्टि।</li>
      </ol>
      <h2>२०३० का लक्ष्य</h2>
      <p>एक करोड़ नियमित पाठक। पाँच भाषाओं में विस्तार। संपूर्ण भारतीय भाषा प्रेस के लिए तथ्य-जाँच मानक स्थापित करना।</p>
    </PolicyPage>
  ),
});
