import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/transparency")({
  head: () => ({
    meta: [{ title: "पारदर्शिता नीति — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "हमारे स्वामित्व, फंडिंग और संपादकीय प्रक्रिया के बारे में पूर्ण पारदर्शिता।" }],
    links: [{ rel: "canonical", href: "/transparency" }],
  }),
  component: () => (
    <PolicyPage eyebrow="नीति" title="पारदर्शिता नीति" lastUpdated="नवंबर २०२५">
      <p className="lead">पाठकों को यह जानने का अधिकार है कि वे जो पढ़ रहे हैं उसके पीछे कौन है।</p>
      <h2>स्वामित्व</h2>
      <p>हिंदी सक्सेस स्टोरीज़ एक स्वतंत्र डिजिटल प्रकाशन है जो भारत में पंजीकृत है। कोई भी एकल निवेशक १५% से अधिक हिस्सेदारी नहीं रखता।</p>
      <h2>राजस्व के स्रोत</h2>
      <ul>
        <li>विज्ञापन (६५%)</li>
        <li>पाठक सदस्यता (२८%)</li>
        <li>आयोजन और साझेदारी (७%)</li>
      </ul>
      <h2>संपादकीय और व्यावसायिक का अलगाव</h2>
      <p>हमारी संपादकीय टीम और बिक्री टीम पूरी तरह से अलग कार्य करती हैं। विज्ञापनदाताओं के पास संपादकीय निर्णयों पर कोई प्रभाव नहीं है।</p>
    </PolicyPage>
  ),
});
