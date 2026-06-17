import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/corrections")({
  head: () => ({
    meta: [{ title: "सुधार नीति — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "हम अपनी गलतियों को कैसे स्वीकारते और सुधारते हैं।" }],
    links: [{ rel: "canonical", href: "/corrections" }],
  }),
  component: () => (
    <PolicyPage eyebrow="नीति" title="सुधार नीति" lastUpdated="नवंबर २०२५">
      <p className="lead">हम मानते हैं कि गलतियाँ होती हैं। महत्वपूर्ण यह है कि हम उन्हें पारदर्शी रूप से स्वीकारें और तेज़ी से सुधारें।</p>
      <h2>हम कैसे सुधार करते हैं</h2>
      <ul>
        <li>तथ्यात्मक त्रुटियों को २४ घंटों के भीतर ठीक किया जाता है।</li>
        <li>सुधार लेख के अंत में स्पष्ट "सुधार नोट" के साथ दिखाई देते हैं।</li>
        <li>महत्वपूर्ण सुधारों के लिए, मूल पाठ और सुधारित पाठ दोनों संरक्षित रहते हैं।</li>
      </ul>
      <h2>रिपोर्ट कैसे करें</h2>
      <p>corrections@hindisuccessstories.in पर ईमेल करें। कृपया लेख का URL और विशिष्ट तथ्य शामिल करें।</p>
    </PolicyPage>
  ),
});
