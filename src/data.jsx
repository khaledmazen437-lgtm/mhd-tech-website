import React from 'react';
import { Code, Smartphone, Brain, Shield, Cog, CheckCircle } from 'lucide-react';

export const diplomas = [
  {
    id: 1,
    slug: "full-stack",
    title: "Full-Stack Software Engineer",
    color: "from-cyan-400 to-blue-600",
    shadow: "shadow-cyan-500/20",
    icon: <Code size={60} className="text-cyan-400" />,
    shortDesc: "من الصفر إلى الاحتراف. امتلك القدرة على بناء أنظمة برمجية متكاملة (Frontend & Backend).",
    fullDesc: "هذا المسار ليس مجرد كورس برمجة، بل هو دبلومة هندسية شاملة. ستتعلم كيف تبني تطبيقات الويب من الأساس، بدءاً من التصميم والواجهات (Frontend) وصولاً إلى العقل المدبر (Backend) وقواعد البيانات، مع التركيز على أحدث التقنيات المطلوبة عالمياً.",
    target: "الطلبة، الخريجين، والراغبين في تغيير مسارهم المهني (Career Shift) لبناء مستقبل قوي في البرمجيات.",
    market: "الطلب رقم 1 عالمياً. يؤهلك للعمل في الشركات الكبرى (Enterprise)، العمل الحر (Freelance)، وبناء الشركات الناشئة.",
    roadmap: [
      {
        level: "Level 1",
        title: "Engineering Foundation (الأساس الهندسي)",
        topics: [
          "Web Foundations: HTML5 (Semantic, Accessibility), CSS3 (Flexbox, Grid).",
          "Linux & Terminal: التعامل مع سطر الأوامر والسيرفرات.",
          "Version Control: احتراف Git & GitHub والعمل ضمن فريق.",
          "Programming Logic: أساسيات الخوارزميات وحل المشكلات."
        ]
      },
      {
        level: "Level 2",
        title: "Frontend Engineering (واجهة المستخدم)",
        topics: [
          "JavaScript Core: ES6+, DOM Manipulation, Async Programming.",
          "Modern Frameworks: React.js (Hooks, Context API) & Next.js (SSR/CSR).",
          "Styling: Tailwind CSS, SASS, Bootstrap 5.",
          "Tooling: Webpack, Vite, NPM/Yarn Management."
        ]
      },
      {
        level: "Level 3",
        title: "Backend Architecture (العقل المدبر)",
        topics: [
          "Server Side: Node.js Architecture & Express.js.",
          "API Design: Building RESTful APIs & GraphQL.",
          "Authentication: JWT, OAuth, Security Best Practices.",
          "Alternative Tracks: نظرة على Python (Django) أو PHP (Laravel) حسب الطلب."
        ]
      },
      {
        level: "Level 4",
        title: "Data & DevOps (البيانات والتشغيل)",
        topics: [
          "Databases: SQL (MySQL/PostgreSQL) & NoSQL (MongoDB).",
          "Deployment: رفع الموقع على VPS, Docker Basics, CI/CD Pipelines.",
          "Testing: Unit Testing (Jest) & Integration Testing.",
          "Final Project: بناء نظام E-Commerce كامل."
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "flutter-app",
    title: "Mobile App Solutions (Flutter)",
    color: "from-purple-400 to-pink-600",
    shadow: "shadow-purple-500/20",
    icon: <Smartphone size={60} className="text-purple-400" />,
    shortDesc: "تطبيق واحد يعمل على آيفون وأندرويد بكفاءة Native.",
    fullDesc: "تعلم هندسة تطبيقات الموبايل بأسلوب الشركات الكبرى. ستبني تطبيقات قوية الأداء، بتصميمات عصرية، وتتعلم كيفية رفعها على المتاجر.",
    target: "لأي شخص يريد دخول سوق التطبيقات بأسرع وقت.",
    market: "رواتب عالية جداً وفرص عمل عن بعد (Remote).",
    roadmap: [
      {
        level: "Level 1",
        title: "The Foundation (الأساس الهندسي)",
        topics: [
          "Dart Language: OOP Mastery, Mixins, Abstract Classes.",
          "Data Structures: التعامل مع Lists, Maps, Sets بذكاء.",
          "Advanced Async: Futures, Streams, Isolates (لمنع تهنيج التطبيق)."
        ]
      },
      {
        level: "Level 2",
        title: "UI & Design (فن الواجهات)",
        topics: [
          "Widget Tree: Understanding RenderObjects & Elements.",
          "Complex Layouts: Custom Painters, Animations (Implicit/Explicit).",
          "State Management basics: SetState & InheritedWidget."
        ]
      },
      {
        level: "Level 3",
        title: "Architecture & Logic (العقل المدبر)",
        topics: [
          "State Management Mastery: BLoC / Cubit (Standard Enterprise).",
          "Networking: Dio Package, Interceptors, Error Handling.",
          "Clean Architecture: فصل الكود لطبقات (Domain, Data, Presentation).",
          "Local Storage: Hive & Shared Preferences."
        ]
      },
      {
        level: "Level 4",
        title: "Production & Ecosystem (الاحتراف)",
        topics: [
          "Native Integration: Method Channels (Kotlin/Swift basics).",
          "Backend as a Service: Firebase Full Integration.",
          "Publishing: CI/CD, Play Store & App Store Deployment.",
          "Quality Assurance: Unit & Widget Testing."
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "ai-data",
    title: "AI & Data Science Engineer",
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/20",
    icon: <Brain size={60} className="text-pink-400" />,
    shortDesc: "المستقبل! تعلم تحليل البيانات وبناء نماذج الذكاء الاصطناعي.",
    fullDesc: "مسار المستقبل لعام 2026. تعلم كيف تحول البيانات الخام إلى قرارات ذكية، وتبني نماذج تعلم الآلة (Machine Learning) والذكاء التوليدي (GenAI).",
    target: "للمهتمين بالرياضيات والبيانات والمستقبل التقني.",
    market: "التريند العالمي والرواتب فيه خيالية.",
    roadmap: [
      {
        level: "Level 1",
        title: "Scientific Core (الأساس العلمي)",
        topics: [
          "Advanced Python: Decorators, Generators, OOP for ML.",
          "Applied Math: Linear Algebra (Matrices), Calculus (Gradients).",
          "Statistics: Distributions, Hypothesis Testing, A/B Testing."
        ]
      },
      {
        level: "Level 2",
        title: "Data Engineering (هندسة البيانات)",
        topics: [
          "Data Wrangling: Pandas 2.0 & NumPy Mastery.",
          "Database: Advanced SQL (Joins, CTEs, Window Functions).",
          "Visualization: Power BI Dashboarding & Matplotlib/Seaborn coding."
        ]
      },
      {
        level: "Level 3",
        title: "Machine Learning (تعلم الآلة)",
        topics: [
          "Supervised Learning: Regression, Random Forests, XGBoost.",
          "Unsupervised: Clustering (K-Means), PCA.",
          "Evaluation: Accuracy, Precision, Recall, F1-Score."
        ]
      },
      {
        level: "Level 4",
        title: "Deep Learning & GenAI (المستقبل)",
        topics: [
          "Deep Learning: Neural Networks (CNNs, RNNs) using PyTorch.",
          "LLMs & NLP: Transformers, Hugging Face, Fine-tuning.",
          "GenAI Apps: Building RAG Systems (Vector Databases)."
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "cyber-security",
    title: "Cyber Security (Red & Blue Team)",
    color: "from-green-500 to-emerald-700",
    shadow: "shadow-green-500/20",
    icon: <Shield size={60} className="text-green-400" />,
    shortDesc: "كن الدرع والسيف. تعلم الهجوم (Red Team) والدفاع (Blue Team).",
    fullDesc: "دبلومة شاملة تؤهلك لتكون 'الجوكر' في أمن المعلومات. ستتعلم كيف يفكر الهاكرز لتهاجم الأنظمة (Red Team) وكيف تحللها وتحميها (Blue Team).",
    target: "لمحبي الاستكشاف والتعامل مع اللينكس والشبكات.",
    market: "ندرة شديدة في الخبراء، والشركات تدفع أي مبلغ لحماية بياناتها.",
    roadmap: [
      {
        level: "Level 1",
        title: "Iron Infrastructure (البنية الصلبة)",
        topics: [
          "Networking: TCP/IP, OSI Model, Subnetting, Wireshark.",
          "Linux Admin: Kali Linux Mastery, Bash Scripting.",
          "Programming: Python for Security Scripts."
        ]
      },
      {
        level: "Level 2",
        title: "Red Team Ops (الهجوم)",
        topics: [
          "Reconnaissance: Nmap, OSINT Framework.",
          "Web Hacking: OWASP Top 10, SQL Injection, XSS, Burp Suite.",
          "Exploitation: Metasploit, Password Cracking (Hashcat)."
        ]
      },
      {
        level: "Level 3",
        title: "Blue Team Ops (الدفاع)",
        topics: [
          "SOC Operations: Analyzing Logs (Splunk Basics).",
          "Digital Forensics: تتبع أثر الهجمات وتحليل الذاكرة.",
          "Incident Response: خطوات الاحتواء والتطهير."
        ]
      },
      {
        level: "Level 4",
        title: "Advanced Career (الاحتراف)",
        topics: [
          "Cloud Security: Securing AWS/Azure Environments.",
          "Reporting: كتابة التقارير الفنية والإدارية.",
          "Certifications: التحضير لـ eJPT و Security+."
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "automation",
    title: "AI & Automation Architect",
    color: "from-yellow-400 to-orange-600",
    shadow: "shadow-yellow-500/20",
    icon: <Cog size={60} className="text-yellow-400" />,
    shortDesc: "وداعاً للمهام المملة. اجعل الكمبيوتر يعمل بدلاً منك.",
    fullDesc: "كن مهندس أتمتة حقيقي. لا نعتمد فقط على الأدوات الجاهزة، بل نعلمك كيف تبني 'جيشاً' من الروبوتات البرمجية باستخدام Python و n8n والذكاء الاصطناعي.",
    target: "لرواد الأعمال والمبرمجين الراغبين في مضاعفة الإنتاجية.",
    market: "مطلوب جداً في الشركات لتقليل التكاليف وزيادة السرعة.",
    roadmap: [
      {
        level: "Level 1",
        title: "Technical Core (التأسيس التقني)",
        topics: [
          "Python for Automation: Scripting, Pandas for Data.",
          "API Mastery: Requests, Webhooks, JSON Handling.",
          "Database: SQL Basics for logging operations."
        ]
      },
      {
        level: "Level 2",
        title: "Workflow Engineering (هندسة العمليات)",
        topics: [
          "Advanced n8n: Loops, Merge, Error Handling.",
          "Custom Code Nodes: دمج كود Python/JS داخل n8n.",
          "Integrations: CRM (HubSpot), WhatsApp API, Slack."
        ]
      },
      {
        level: "Level 3",
        title: "The AI Brain (العقل المدبر)",
        topics: [
          "Generative AI: OpenAI API Integration.",
          "Prompt Engineering: هندسة الأوامر المنطقية.",
          "RAG Systems: بناء ذاكرة للذكاء الاصطناعي من ملفات الشركة."
        ]
      },
      {
        level: "Level 4",
        title: "Architecture & Deployment (التشغيل)",
        topics: [
          "Solution Design: تحويل البيزنس لـ Flowchart تقني.",
          "Deployment: Self-hosting n8n on VPS using Docker.",
          "Scalability: التعامل مع آلاف الطلبات بدون توقف."
        ]
      }
    ]
  }
];