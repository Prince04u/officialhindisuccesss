import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "नियम एवं शर्तें — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "इस वेबसाइट के उपयोग की शर्तें।" }],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <PolicyPage eyebrow="कानूनी" title="नियम एवं शर्तें" lastUpdated="नवंबर २०२५">
      <p className="lead">इस वेबसाइट का उपयोग करके आप इन शर्तों से सहमत होते हैं।</p>
      <h2>सामग्री का स्वामित्व</h2>
      <p>इस वेबसाइट की सभी सामग्री हिंदी सक्सेस स्टोरीज़ का बौद्धिक संपदा है। बिना अनुमति पुनः प्रकाशन निषिद्ध है।</p>
      <h2>उपयोगकर्ता आचरण</h2>
      <p>आप इस वेबसाइट का उपयोग केवल वैध उद्देश्यों के लिए कर सकते हैं।</p>
      <h2>क्षेत्राधिकार</h2>
      <p>इन शर्तों पर भारतीय कानून लागू होते हैं।</p>
    </PolicyPage>
  ),
});
