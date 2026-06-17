import heroFeature from "@/assets/hero-feature.jpg";
import storyAgritech from "@/assets/story-agritech.jpg";
import storyFinance from "@/assets/story-finance.jpg";
import storyStartup from "@/assets/story-startup.jpg";
import storyCareer from "@/assets/story-career.jpg";
import storyMotivation from "@/assets/story-motivation.jpg";
import storyEducation from "@/assets/story-education.jpg";
import storyTech from "@/assets/story-tech.jpg";
import authorRitu from "@/assets/author-ritu.jpg";
import authorSameer from "@/assets/author-sameer.jpg";
import authorPriya from "@/assets/author-priya.jpg";
import authorVikram from "@/assets/author-vikram.jpg";

export type CategorySlug =
  | "success-stories"
  | "business"
  | "startups"
  | "finance"
  | "technology"
  | "career"
  | "motivation"
  | "education";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { slug: "success-stories", name: "सफलता की कहानियाँ", description: "उन लोगों की प्रेरणादायक यात्राएँ जिन्होंने शून्य से शिखर तक का सफर तय किया।" },
  { slug: "business", name: "व्यापार", description: "गहन व्यापारिक विश्लेषण, केस स्टडीज और भारतीय उद्योग की भीतरी कहानियाँ।" },
  { slug: "startups", name: "स्टार्टअप्स", description: "नए विचार, उभरते उद्यमी और भारत के स्टार्टअप परिदृश्य की पड़ताल।" },
  { slug: "finance", name: "वित्त", description: "निवेश, बाजार और व्यक्तिगत वित्त पर भरोसेमंद विश्लेषण।" },
  { slug: "technology", name: "तकनीक", description: "एआई, उभरती तकनीक और डिजिटल भारत पर गहन रिपोर्ट।" },
  { slug: "career", name: "करियर", description: "करियर के निर्णय, कौशल विकास और कार्यस्थल की रणनीतियाँ।" },
  { slug: "motivation", name: "प्रेरणा", description: "मन, अनुशासन और लंबे समय की सोच पर विचारशील लेख।" },
  { slug: "education", name: "शिक्षा", description: "सीखने, शिक्षा नीति और कौशल अधिग्रहण पर रिपोर्ट।" },
];

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  expertise: string[];
  experience: string;
  photo: string;
  social: { twitter?: string; linkedin?: string; email?: string };
}

export const authors: Author[] = [
  {
    slug: "ritu-verma",
    name: "डॉ. रितु वर्मा",
    role: "प्रधान संपादक",
    bio: "व्यापार पत्रकारिता में १८ वर्ष का अनुभव। पूर्व बिजनेस स्टैंडर्ड, मिंट।",
    longBio:
      "डॉ. रितु वर्मा हिंदी सक्सेस स्टोरीज़ की संस्थापक संपादक हैं। उन्होंने दिल्ली स्कूल ऑफ इकोनॉमिक्स से अर्थशास्त्र में पीएचडी की है और बिज़नेस स्टैंडर्ड व मिंट में वरिष्ठ पदों पर रह चुकी हैं। उनकी विशेषज्ञता भारतीय उद्यमिता, नीति विश्लेषण और लंबी रिपोर्टिंग में है।",
    expertise: ["व्यापार रिपोर्टिंग", "नीति विश्लेषण", "उद्यमिता"],
    experience: "१८+ वर्ष · पूर्व बिज़नेस स्टैंडर्ड, मिंट",
    photo: authorRitu,
    social: { twitter: "#", linkedin: "#", email: "ritu@hindisuccessstories.in" },
  },
  {
    slug: "sameer-khan",
    name: "समीर खान",
    role: "वरिष्ठ व्यापार विश्लेषक",
    bio: "स्टार्टअप इकोसिस्टम और वेंचर कैपिटल पर रिपोर्टिंग।",
    longBio:
      "समीर खान भारतीय स्टार्टअप इकोसिस्टम पर बारह वर्षों से रिपोर्टिंग कर रहे हैं। आईआईएम बैंगलोर के एमबीए, उन्होंने कई यूनिकॉर्न संस्थापकों के साथ गहन साक्षात्कार किए हैं और भारतीय वीसी फंडिंग पर तीन शोधपत्र प्रकाशित किए हैं।",
    expertise: ["स्टार्टअप विश्लेषण", "वेंचर कैपिटल", "उत्पाद रणनीति"],
    experience: "१२+ वर्ष · आईआईएम बैंगलोर एमबीए",
    photo: authorSameer,
    social: { twitter: "#", linkedin: "#", email: "sameer@hindisuccessstories.in" },
  },
  {
    slug: "priya-sharma",
    name: "प्रिया शर्मा",
    role: "करियर एवं कौशल संपादक",
    bio: "मानव संसाधन और करियर मार्गदर्शन पर लेखन।",
    longBio:
      "प्रिया शर्मा एक प्रमाणित करियर कोच और संगठनात्मक मनोवैज्ञानिक हैं। उन्होंने आईसीआईसीआई बैंक और इंफोसिस में मानव संसाधन नेतृत्व किया है, और वर्तमान में नए जमाने के करियर पथ, कौशल अधिग्रहण और कार्यस्थल नीति पर लिखती हैं।",
    expertise: ["करियर कोचिंग", "मानव संसाधन", "कौशल विकास"],
    experience: "१४+ वर्ष · प्रमाणित ICF कोच",
    photo: authorPriya,
    social: { twitter: "#", linkedin: "#", email: "priya@hindisuccessstories.in" },
  },
  {
    slug: "vikram-mehta",
    name: "विक्रम मेहता",
    role: "वित्त एवं तकनीक संवाददाता",
    bio: "बाजार, फिनटेक और उभरती तकनीक पर लंबी रिपोर्टिंग।",
    longBio:
      "विक्रम मेहता ने आर्थर एंडरसन और एडलवाइस में निवेश विश्लेषक के रूप में काम किया है। पिछले दस वर्षों से वे फिनटेक, क्रिप्टो नीति और एआई के व्यापारिक प्रभाव पर रिपोर्टिंग कर रहे हैं। CFA चार्टरधारी।",
    expertise: ["वित्तीय बाजार", "फिनटेक", "एआई नीति"],
    experience: "२०+ वर्ष · CFA चार्टरधारी",
    photo: authorVikram,
    social: { twitter: "#", linkedin: "#", email: "vikram@hindisuccessstories.in" },
  },
];

export const getAuthor = (slug: string) => authors.find((a) => a.slug === slug)!;

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  authorSlug: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
  mostRead?: number;
  /** HTML article body. Headings (h2) become TOC anchors. Links allowed. */
  body: string;
}

const sharedBody = (title: string, intro: string) => `
<p class="lead">${intro}</p>

<h2 id="prarambh">शुरुआत: एक विचार से एक आंदोलन तक</h2>
<p>हर बड़ी सफलता की कहानी एक छोटे, अक्सर अदृश्य क्षण से शुरू होती है — एक सवाल, एक असुविधा, एक खाली जगह जिसे कोई और भरना नहीं चाहता। ${title.split(":")[0]} की यात्रा भी इसी से शुरू हुई।</p>
<p>हमने महीनों तक उन लोगों से बात की जो शुरुआती दौर में साथ थे — सह-संस्थापक, पहले निवेशक, शुरुआती कर्मचारी। उनकी कहानियाँ एक स्पष्ट पैटर्न दिखाती हैं: सफलता न तो किस्मत है, न ही अचानक हुई घटना। वह सैकड़ों छोटे, सही फैसलों का परिणाम है।</p>

<blockquote>"हम तब भी नहीं रुके जब बैंक खाते में सिर्फ तीन महीने का पैसा बचा था। क्योंकि हमें पता था कि हम जो बना रहे थे, वह ज़रूरी था।"</blockquote>

<h2 id="modh">बाजार का मोड़</h2>
<p>२०१९ का साल निर्णायक रहा। एक तरफ कोविड महामारी आने वाली थी, दूसरी तरफ <a href="#" rel="noopener">डिजिटल अपनाने</a> की रफ्तार बेमिसाल थी। इस उथल-पुथल के बीच कंपनी ने अपने मूल उत्पाद को पूरी तरह से दोबारा सोचा।</p>
<p>यह फैसला आसान नहीं था। टीम के आधे लोग असहमत थे। लेकिन डेटा साफ था:</p>
<ul>
  <li>ग्रामीण भारत में स्मार्टफोन पैठ ३८% से बढ़कर ६१% हो गई थी</li>
  <li>भुगतान इंफ्रास्ट्रक्चर (UPI) पहली बार वास्तव में स्केल कर रहा था</li>
  <li>प्रतिस्पर्धी अभी भी शहरी ग्राहकों के पीछे भाग रहे थे</li>
</ul>

<h3>एक नई कार्यप्रणाली</h3>
<p>कंपनी ने अपनी पूरी टीम को छोटे, स्वायत्त "स्क्वाड्स" में पुनर्गठित किया। हर स्क्वाड का अपना P&amp;L था, अपने ग्राहक थे, और निर्णय लेने की पूरी ज़िम्मेदारी। यह अमेज़न के "टू-पिज्ज़ा टीम" मॉडल से प्रेरित था लेकिन भारतीय संदर्भ में पूरी तरह से ढाला गया था।</p>

<h2 id="vistar">विस्तार की रणनीति</h2>
<p>स्केल करना भारत में आसान नहीं है। २८ राज्य, २२ आधिकारिक भाषाएँ, और हर शहर का अपना खरीदारी व्यवहार। टीम ने पहले छह "गहरे" शहरों को चुना — न कि बीस "छिछले" शहरों को।</p>

<table>
  <thead>
    <tr><th>शहर</th><th>लॉन्च माह</th><th>१२ माह में राजस्व</th></tr>
  </thead>
  <tbody>
    <tr><td>इंदौर</td><td>जनवरी २०२०</td><td>₹४.२ करोड़</td></tr>
    <tr><td>लखनऊ</td><td>मार्च २०२०</td><td>₹३.८ करोड़</td></tr>
    <tr><td>जयपुर</td><td>जून २०२०</td><td>₹५.१ करोड़</td></tr>
    <tr><td>कोयंबटूर</td><td>सितंबर २०२०</td><td>₹२.९ करोड़</td></tr>
  </tbody>
</table>

<h2 id="seekh">मुख्य सीख</h2>
<ol>
  <li><strong>ग्राहक के साथ रहो, बाजार के साथ नहीं।</strong> ट्रेंड्स बदलते हैं; असली समस्याएँ नहीं।</li>
  <li><strong>धीमी शुरुआत से डरो मत।</strong> पहले बारह महीने अक्सर सबसे मूल्यवान होते हैं।</li>
  <li><strong>निर्णयों को दस्तावेज़ करो।</strong> छह महीने बाद आप भूल जाओगे क्यों चुना था।</li>
</ol>

<h2 id="aage">आगे क्या?</h2>
<p>अगले पाँच वर्षों में, कंपनी का ध्यान अंतर्राष्ट्रीय विस्तार पर होगा — पर इस बार दक्षिण-पूर्व एशिया से शुरुआत होगी, अमेरिका से नहीं। कारण सरल है: समान बाजार गतिकी, समान ग्राहक मनोविज्ञान।</p>
<p>यदि आप एक उद्यमी हैं जो अपनी यात्रा शुरू कर रहे हैं, तो याद रखें — हर बड़ी कहानी एक छोटे, साहसी फैसले से शुरू होती है। आज का दिन वह दिन हो सकता है।</p>
`;

export const articles: Article[] = [
  {
    slug: "agritech-kranti-bharat-ke-kisan",
    title: "एग्रीटेक क्रांति: कैसे एक छोटे विचार ने बदला भारतीय खेती का चेहरा",
    excerpt:
      "अमित शाह की यात्रा शून्य से शिखर तक — एक ऐसी कहानी जो आने वाली पीढ़ी के उद्यमियों को प्रेरित करेगी और ग्रामीण अर्थव्यवस्था को नई दिशा देगी।",
    category: "startups",
    authorSlug: "ritu-verma",
    image: heroFeature,
    imageAlt: "खिड़की के पास खड़े एक उद्यमी का संपादकीय चित्र",
    publishedAt: "2025-11-12",
    updatedAt: "2025-11-15",
    readTime: 12,
    tags: ["स्टार्टअप", "एग्रीटेक", "ग्रामीण भारत"],
    featured: true,
    editorsPick: true,
    body: sharedBody(
      "एग्रीटेक क्रांति",
      "जब अमित शाह ने २०१८ में अपनी पहली नौकरी छोड़ी, उनके पास सिर्फ एक नोटबुक थी और एक सवाल: भारत के छोटे किसान तकनीक से क्यों नहीं जुड़ पा रहे? आज, सात साल बाद, उनका जवाब चार राज्यों के ८० हज़ार किसानों की आय बदल रहा है।"
    ),
  },
  {
    slug: "chote-shahar-bade-business-model",
    title: "डिजिटल इंडिया: छोटे शहरों में उभरते नए बिज़नेस मॉडल्स",
    excerpt: "इंदौर, सूरत और कोयंबटूर जैसे शहरों में पनप रहे डिजिटल-फर्स्ट उद्यम भारत की अगली आर्थिक लहर का संकेत हैं।",
    category: "business",
    authorSlug: "sameer-khan",
    image: storyStartup,
    imageAlt: "गोधूलि बेला में बेंगलुरु का टेक पार्क",
    publishedAt: "2025-11-10",
    readTime: 9,
    tags: ["टियर-२", "डिजिटल इंडिया", "व्यापार"],
    trending: true,
    mostRead: 1,
    body: sharedBody(
      "डिजिटल इंडिया",
      "तीन साल पहले इंदौर का नाम स्टार्टअप मानचित्र पर मुश्किल से था। आज यहाँ ४०० से अधिक पंजीकृत स्टार्टअप्स हैं, और उनमें से बारह ने सीरीज़-ए फंडिंग जुटाई है। यह कहानी सिर्फ इंदौर की नहीं — पूरे भारत के टियर-२ शहरों की है।"
    ),
  },
  {
    slug: "retirement-planning-5-niyam",
    title: "रिटायरमेंट प्लानिंग के ५ सुनहरे नियम जो हर किसी को पता होने चाहिए",
    excerpt: "रिटायरमेंट के लिए बचत शुरू करने का सही समय कौन सा है, और कौन-सी गलतियाँ अधिकांश भारतीय करते हैं — एक विस्तृत मार्गदर्शिका।",
    category: "finance",
    authorSlug: "vikram-mehta",
    image: storyFinance,
    imageAlt: "मॉनिटर पर शेयर बाजार का चार्ट",
    publishedAt: "2025-11-08",
    readTime: 8,
    tags: ["रिटायरमेंट", "निवेश", "व्यक्तिगत वित्त"],
    trending: true,
    mostRead: 2,
    body: sharedBody(
      "रिटायरमेंट प्लानिंग",
      "अधिकांश भारतीय अपनी पहली तनख़्वाह के दस साल बाद रिटायरमेंट के बारे में सोचना शुरू करते हैं। यह वह चूक है जो आपको बीस साल की कमाई से वंचित कर सकती है।"
    ),
  },
  {
    slug: "ai-aur-aapka-career",
    title: "आर्टिफिशियल इंटेलिजेंस और आपका करियर: क्या बदल रहा है?",
    excerpt: "एआई से कौन-सी नौकरियाँ खतरे में हैं, कौन-सी सुरक्षित हैं, और किस तरह के कौशल अगले दशक में सबसे अधिक मूल्यवान होंगे।",
    category: "career",
    authorSlug: "priya-sharma",
    image: storyTech,
    imageAlt: "सर्किट बोर्ड का अमूर्त संपादकीय शॉट",
    publishedAt: "2025-11-06",
    readTime: 10,
    tags: ["एआई", "करियर", "कौशल"],
    trending: true,
    editorsPick: true,
    mostRead: 3,
    body: sharedBody(
      "एआई और करियर",
      "जब चैटजीपीटी ने नवंबर २०२२ में दुनिया को हिलाया, अधिकांश पेशेवरों की पहली प्रतिक्रिया डर थी। तीन साल बाद, सच कहीं अधिक जटिल और कहीं अधिक आशावादी है।"
    ),
  },
  {
    slug: "soft-skills-ki-shakti",
    title: "सॉफ्ट स्किल्स की शक्ति: वर्कप्लेस में सफलता की कुंजी",
    excerpt: "तकनीकी कौशल आपको नौकरी दिलाते हैं; सॉफ्ट स्किल्स आपको ऊपर ले जाते हैं। यहाँ हैं वे पाँच क्षमताएँ जो मायने रखती हैं।",
    category: "career",
    authorSlug: "priya-sharma",
    image: storyCareer,
    imageAlt: "खुली नोटबुक, फाउंटेन पेन और कॉफी",
    publishedAt: "2025-11-04",
    readTime: 7,
    tags: ["कौशल", "कार्यस्थल", "नेतृत्व"],
    editorsPick: true,
    body: sharedBody(
      "सॉफ्ट स्किल्स",
      "लिंक्डइन की हालिया रिपोर्ट के अनुसार, ९२% भर्ती प्रबंधक अब हार्ड स्किल्स की तुलना में सॉफ्ट स्किल्स को अधिक महत्व देते हैं। यह आँकड़ा करियर के बारे में हमारी सोच को बदलने वाला है।"
    ),
  },
  {
    slug: "vifalta-se-safalta",
    title: "विफलता से सफलता तक: प्रसिद्ध हस्तियों के अनकहे किस्से",
    excerpt: "धीरूभाई अंबानी से लेकर रितेश अग्रवाल तक — कैसे भारत के सबसे सफल लोगों ने अपनी असफलताओं को सीढ़ी बनाया।",
    category: "motivation",
    authorSlug: "ritu-verma",
    image: storyMotivation,
    imageAlt: "रोशनी की ओर सीढ़ियाँ चढ़ती हुई एक महिला",
    publishedAt: "2025-11-02",
    readTime: 11,
    tags: ["प्रेरणा", "जीवनी", "नेतृत्व"],
    editorsPick: true,
    mostRead: 4,
    body: sharedBody(
      "विफलता से सफलता",
      "हम सफलता की कहानियों को अंत से देखते हैं — पुरस्कार समारोह, IPO, मीडिया कवरेज। लेकिन हर सफल व्यक्ति के पीछे, असफलताओं की एक लंबी, अदृश्य श्रृंखला है। आज हम वो श्रृंखला खोलते हैं।"
    ),
  },
  {
    slug: "share-bazaar-2025",
    title: "शेयर बाज़ार २०२५: निवेशकों के लिए नए अवसर और चुनौतियाँ",
    excerpt: "वैश्विक अनिश्चितता के बीच भारतीय बाज़ार किधर जा रहा है, और स्मार्ट निवेशक अपना पोर्टफोलियो कैसे तैयार कर रहे हैं।",
    category: "finance",
    authorSlug: "vikram-mehta",
    image: storyFinance,
    imageAlt: "बाज़ार चार्ट का संपादकीय शॉट",
    publishedAt: "2025-10-30",
    readTime: 9,
    tags: ["शेयर बाज़ार", "निवेश", "पोर्टफोलियो"],
    body: sharedBody(
      "शेयर बाज़ार २०२५",
      "निफ्टी ने पिछले बारह महीनों में नौ नए सर्वकालिक उच्च स्तर देखे हैं। पर सतह के नीचे, कहानी कहीं अधिक जटिल है।"
    ),
  },
  {
    slug: "subah-ki-5-aadaten",
    title: "सफल होने के लिए सुबह की ५ महत्वपूर्ण आदतें",
    excerpt: "दुनिया के सबसे उत्पादक लोग अपना दिन कैसे शुरू करते हैं — और आप कैसे इन आदतों को अपने जीवन में शामिल कर सकते हैं।",
    category: "motivation",
    authorSlug: "priya-sharma",
    image: storyCareer,
    imageAlt: "सुबह की रोशनी में नोटबुक",
    publishedAt: "2025-10-28",
    readTime: 6,
    tags: ["आदतें", "उत्पादकता", "प्रेरणा"],
    mostRead: 5,
    body: sharedBody(
      "सुबह की आदतें",
      "एक अध्ययन में पाया गया कि सुबह के पहले ९० मिनट तय करते हैं कि आपका पूरा दिन कैसा बीतेगा। यहाँ हैं वे पाँच आदतें जिन्हें दुनिया के सबसे सफल लोग पूजते हैं।"
    ),
  },
  {
    slug: "ed-tech-bharat-ka-bhavishya",
    title: "एडटेक का भविष्य: क्या ऑनलाइन शिक्षा अपना वादा पूरा कर रही है?",
    excerpt: "बायजूस के पतन के बाद, भारतीय एडटेक एक नए मोड़ पर है। क्या यह छात्र-केंद्रित मॉडल वापस ला सकता है?",
    category: "education",
    authorSlug: "sameer-khan",
    image: storyEducation,
    imageAlt: "लैपटॉप पर पढ़ते भारतीय छात्र",
    publishedAt: "2025-10-25",
    readTime: 8,
    tags: ["एडटेक", "शिक्षा", "नीति"],
    body: sharedBody(
      "एडटेक का भविष्य",
      "२०२३ में भारतीय एडटेक का बुलबुला फटा, लेकिन समस्या जो इसने हल करने की कोशिश की थी — अच्छी शिक्षा तक पहुँच — वह अब भी मौजूद है।"
    ),
  },
  {
    slug: "young-entrepreneurs-bharat",
    title: "भारत के १० सबसे सफल युवा उद्यमी और उनकी कहानी",
    excerpt: "तीस साल से कम उम्र के इन उद्यमियों ने अपने विचारों को अरबों के व्यवसाय में बदला। उनकी सीख आपके काम आ सकती है।",
    category: "success-stories",
    authorSlug: "ritu-verma",
    image: storyStartup,
    imageAlt: "टेक पार्क का दृश्य",
    publishedAt: "2025-10-22",
    readTime: 13,
    tags: ["युवा", "उद्यमी", "सफलता"],
    body: sharedBody(
      "युवा उद्यमी",
      "यह सूची लंबी हो सकती थी। हमने उन दस लोगों को चुना जिनकी यात्रा सबसे अधिक सीख देती है — सिर्फ इसलिए नहीं कि वे सफल हुए, बल्कि इसलिए कि कैसे।"
    ),
  },
  {
    slug: "madhyam-varg-nivesh-tarike",
    title: "मध्यम वर्ग के लिए निवेश के ५ स्मार्ट तरीके",
    excerpt: "महंगाई से तेज़ बढ़ने वाले, कम जोखिम वाले, और भारतीय कर ढाँचे के अनुकूल — पाँच ठोस निवेश रणनीतियाँ।",
    category: "finance",
    authorSlug: "vikram-mehta",
    image: storyFinance,
    imageAlt: "वित्तीय चार्ट",
    publishedAt: "2025-10-19",
    readTime: 7,
    tags: ["निवेश", "व्यक्तिगत वित्त", "एसआईपी"],
    body: sharedBody(
      "स्मार्ट निवेश",
      "मध्यम वर्ग के लिए निवेश एक नाजुक संतुलन है: बहुत सुरक्षित तो बढ़त नहीं, बहुत आक्रामक तो नींद नहीं। यहाँ है वह संतुलन।"
    ),
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesByCategory = (slug: CategorySlug) =>
  articles.filter((a) => a.category === slug);
export const articlesByAuthor = (slug: string) =>
  articles.filter((a) => a.authorSlug === slug);
export const featuredArticle = () => articles.find((a) => a.featured)!;
export const trendingArticles = () => articles.filter((a) => a.trending).slice(0, 3);
export const editorsPicks = () => articles.filter((a) => a.editorsPick).slice(0, 3);
export const mostRead = () =>
  articles
    .filter((a) => a.mostRead)
    .sort((a, b) => (a.mostRead ?? 99) - (b.mostRead ?? 99))
    .slice(0, 5);
export const latestArticles = (limit = 6) =>
  [...articles]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, limit);
export const relatedArticles = (slug: string, category: CategorySlug, limit = 3) =>
  articles
    .filter((a) => a.slug !== slug && a.category === category)
    .slice(0, limit);

export const formatHindiDate = (iso: string) => {
  const d = new Date(iso);
  const months = [
    "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
    "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
  ];
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
};
