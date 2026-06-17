import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "गोपनीयता नीति — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "हम आपके डेटा को कैसे संभालते हैं।" }],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <PolicyPage eyebrow="कानूनी" title="गोपनीयता नीति" lastUpdated="नवंबर २०२५">
      <p className="lead">यह नीति बताती है कि हम कौन सी जानकारी एकत्र करते हैं, क्यों, और इसके साथ क्या करते हैं।</p>
      <h2>हम क्या एकत्र करते हैं</h2>
      <p>केवल वह न्यूनतम डेटा जो आपको सेवा प्रदान करने के लिए आवश्यक है — ईमेल (न्यूज़लेटर के लिए), टिप्पणियाँ, और अनाम विश्लेषिकी।</p>
      <h2>कुकीज़</h2>
      <p>हम केवल आवश्यक और विश्लेषिकी कुकीज़ का उपयोग करते हैं। आप अपने ब्राउज़र में इन्हें अक्षम कर सकते हैं।</p>
      <h2>आपके अधिकार</h2>
      <p>आप किसी भी समय अपना डेटा देखने, सही करने या हटाने का अनुरोध कर सकते हैं: privacy@hindisuccessstories.in</p>
    </PolicyPage>
  ),
});
