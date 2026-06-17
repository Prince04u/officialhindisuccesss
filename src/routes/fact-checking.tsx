import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/fact-checking")({
  head: () => ({
    meta: [
      { title: "तथ्य जाँच नीति — हिंदी सक्सेस स्टोरीज़" },
      { name: "description", content: "हम तथ्यों की जाँच कैसे करते हैं और गलतियों को कैसे ठीक करते हैं।" },
    ],
    links: [{ rel: "canonical", href: "/fact-checking" }],
  }),
  component: () => (
    <PolicyPage eyebrow="नीति" title="तथ्य जाँच नीति" lastUpdated="नवंबर २०२५">
      <p className="lead">तथ्य की सटीकता हमारी सबसे बड़ी प्रतिबद्धता है। हर लेख तीन-चरणीय तथ्य जाँच प्रक्रिया से गुज़रता है।</p>
      <h2>तीन-चरणीय प्रक्रिया</h2>
      <ol>
        <li><strong>लेखक स्तर:</strong> हर तथ्य के साथ स्रोत लिंक संलग्न।</li>
        <li><strong>संपादक स्तर:</strong> तथ्यों का स्वतंत्र पुनः-सत्यापन।</li>
        <li><strong>प्रकाशन पूर्व:</strong> महत्वपूर्ण दावों की तीसरी जाँच, यदि संभव हो तो प्राथमिक स्रोतों से।</li>
      </ol>
      <h2>स्रोतों के प्रकार</h2>
      <p>हम प्राथमिक स्रोतों (दस्तावेज़, साक्षात्कार, आधिकारिक डेटा) को द्वितीयक स्रोतों (अन्य प्रकाशन) पर प्राथमिकता देते हैं।</p>
      <h2>त्रुटि की रिपोर्ट करें</h2>
      <p>यदि आप कोई तथ्यात्मक त्रुटि देखते हैं, कृपया corrections@hindisuccessstories.in पर लिखें। हम ४८ घंटे में जवाब देते हैं।</p>
    </PolicyPage>
  ),
});
