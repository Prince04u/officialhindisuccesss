import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [{ title: "अस्वीकरण — हिंदी सक्सेस स्टोरीज़" }, { name: "description", content: "हमारी सामग्री के संबंध में सामान्य अस्वीकरण।" }],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <PolicyPage eyebrow="कानूनी" title="अस्वीकरण" lastUpdated="नवंबर २०२५">
      <p className="lead">यह वेबसाइट सामान्य सूचना के उद्देश्यों के लिए है।</p>
      <h2>वित्तीय सलाह नहीं</h2>
      <p>हमारे लेख निवेश सलाह नहीं हैं। कोई भी वित्तीय निर्णय लेने से पहले प्रमाणित सलाहकार से परामर्श करें।</p>
      <h2>सटीकता का प्रयास</h2>
      <p>हम सटीकता के लिए प्रयास करते हैं, लेकिन त्रुटियों के लिए कोई कानूनी ज़िम्मेदारी स्वीकार नहीं करते। त्रुटि देखने पर कृपया हमें सूचित करें।</p>
    </PolicyPage>
  ),
});
