import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "हमारे बारे में — हिंदी सक्सेस स्टोरीज़" },
      { name: "description", content: "हिंदी सक्सेस स्टोरीज़ — भारत का प्रमुख हिंदी डिजिटल प्रकाशन। हमारी कहानी, मूल्य और संपादकीय दृष्टि।" },
      { property: "og:title", content: "हमारे बारे में" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <PolicyPage eyebrow="परिचय" title="हमारे बारे में">
      <p className="lead">हिंदी सक्सेस स्टोरीज़ की स्थापना २०२३ में एक सरल विश्वास से हुई: हिंदी पढ़ने वाले पाठक भी उतनी ही गहरी, ईमानदार और गुणवत्तापूर्ण पत्रकारिता के हकदार हैं जितनी अंग्रेज़ी पाठक।</p>
      <h2>हम क्या करते हैं</h2>
      <p>हम भारत के सबसे प्रेरणादायक उद्यमियों, व्यवसायों और विचारकों की कहानियाँ प्रकाशित करते हैं। हमारे लेख तीन सिद्धांतों पर आधारित हैं: तथ्यात्मक सटीकता, संपादकीय स्वतंत्रता, और पाठक के समय का सम्मान।</p>
      <h2>हमारा दृष्टिकोण</h2>
      <p>हम क्लिकबेट नहीं लिखते। हम विज्ञापनदाताओं द्वारा प्रायोजित लेखों को संपादकीय सामग्री से स्पष्ट रूप से अलग रखते हैं। हर लेख एक नामित लेखक के पीछे खड़ा होता है, और हर तथ्य कम से कम दो स्रोतों से सत्यापित होता है।</p>
      <h2>संपर्क</h2>
      <p>संपादकीय: <Link to="/contact" className="text-gold">contact पृष्ठ</Link> · विज्ञापन: ads@hindisuccessstories.in · टिप्स: tips@hindisuccessstories.in</p>
    </PolicyPage>
  ),
});
