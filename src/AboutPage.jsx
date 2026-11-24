import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Facebook, Instagram, Linkedin, Globe, MessageCircle, Clock, ShieldCheck, Lightbulb, Target, Zap, Users } from 'lucide-react';

const AboutPage = () => {

  const socialLinks = [
    {
      name: "مجتمع الواتساب",
      icon: <MessageCircle size={24} />,
      url: "https://chat.whatsapp.com/IJQ1XlYMUfJB0Wy53nEXQX",
      color: "hover:bg-green-50 text-green-600 border-green-200"
    },
    {
      name: "فيسبوك",
      icon: <Facebook size={24} />,
      url: "https://www.facebook.com/share/17fPb3Unhs/",
      color: "hover:bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      name: "لينكد إن",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/mazen-khaled-00aabb375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      name: "انستجرام",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/mhdte.ch?igsh=MW1uMW1jOWtzZ2lxaQ==",
      color: "hover:bg-pink-50 text-pink-600 border-pink-200"
    },
    {
      name: "الموقع الرسمي",
      icon: <Globe size={24} />,
      url: "https://mhd-tech.netlify.app/?fbclid=Iwb21leAPLNYdjbGNrA8s1g2V4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHkdTG6h_-_wHYBcTZrIEFsYpz_WvBDdnmCc4Mz91MKkoZv6CSz3do0u7YmMm_aem_vdb_b1k9NU5OhKOZvkcpwQ",
      color: "hover:bg-purple-50 text-purple-600 border-purple-200"
    },
  ];

  return (

    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-slate-50 to-white text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden" dir="rtl">

      {/* Navbar Light Mauve */}
      <nav className="px-6 py-4 border-b border-purple-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors group">
            <div className="bg-purple-50 p-2 rounded-full group-hover:bg-purple-100 transition-colors text-purple-600">
                <ArrowRight size={20} />
            </div>
            <span className="font-bold">العودة للرئيسية</span>
        </Link>
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">MHD Tech</span>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 px-6 text-center overflow-hidden">
        {/* تأثيرات خلفية فاتحة بنفسجية */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply" />

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-5xl mx-auto"
        >
            <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-bold mb-6">
                ✨ تأسست في مايو 2025 | انطلاقة استثنائية
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-900">
                رؤية سبقت الواقع.. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  MHD Tech: نصنع المستقبل قبل أن يبدأ.
                </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                نحن الكيان الذي وُلد عملاقاً. رؤية هندسية بدأت قبل الدراسة الأكاديمية لتغير قواعد اللعبة في سوق البرمجيات.
            </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-32">

        {/* Section 1: The Vision Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="flex items-center gap-3 text-purple-600">
                    <Clock size={32} />
                    <h2 className="text-3xl font-bold text-slate-900">مايو 2025: نقطة البداية</h2>
                </div>
                <div className="text-slate-600 text-lg leading-loose space-y-6 text-justify pl-4 font-medium">
                    <p>
                        في الوقت الذي كان فيه الجميع يستعدون للدخول التقليدي للجامعة، كان <strong>المهندس مازن خالد</strong> يضع حجر الأساس لـ <strong>MHD Tech</strong>. الفكرة لم تكن وليدة الصدفة، بل كانت قراءة دقيقة لمستقبل التكنولوجيا.
                    </p>
                    <p>
                        تأسست الشركة لسد فجوة رآها المؤسس مبكراً: "العالم لا يحتاج لمزيد من المبرمجين التقليديين، بل يحتاج لمهندسين يمتلكون عقلية الابتكار (Innovation Mindset)".
                    </p>
                    <div className="bg-purple-50 border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
                        <p className="italic text-slate-700 font-semibold">
                            "أسست هذا الكيان لأني لم أرد الانتظار حتى التخرج لأبدأ في التأثير. نحن هنا لنقود التغيير من اليوم الأول."
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
                {[
                    { title: "الرؤية الاستباقية", desc: "كيان تأسس قبل المرحلة الجامعية ليكون سابقاً بخطوة.", icon: <Lightbulb className="text-yellow-500" />, bg: "bg-yellow-50" },
                    { title: "الدفعة الأولى", desc: "نحن نجهز الآن لإطلاق أقوى دفعة تأسيسية في تاريخ الشركة.", icon: <Rocket className="text-purple-500" />, bg: "bg-purple-50" },
                    { title: "الجودة الهندسية", desc: "نتبنى معايير Silicon Valley في التعليم والتطوير منذ اللحظة الأولى.", icon: <ShieldCheck className="text-green-500" />, bg: "bg-green-50" }
                ].map((card, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ x: -10 }}
                        className="bg-white p-6 rounded-2xl border border-purple-100 flex items-start gap-4 shadow-md hover:shadow-lg transition-all"
                    >
                        <div className={`${card.bg} p-3 rounded-lg`}>{card.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                            <p className="text-slate-600 font-medium">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Section 2: The Founder Profile */}
        <section className="relative my-24">
             <div className="bg-white/80 backdrop-blur-md border border-purple-100 p-8 md:p-12 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center shadow-2xl shadow-purple-100/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50 -z-10" />

                {/* Founder Image */}
                <div className="shrink-0 relative group w-full md:w-auto flex justify-center">
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="w-64 h-80 md:w-72 md:h-96 relative z-10 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                        <img
                            src="/mazen.jpeg"
                            alt="Eng. Mazen Khaled"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 right-4 text-white text-right">
                             <p className="font-bold text-lg">Mazen Khaled</p>
                             <p className="text-purple-200 text-xs tracking-widest">FOUNDER & CEO</p>
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-right flex-1 space-y-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">Eng. Mazen Khaled</h2>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-200">
                            <Zap size={16} className="text-purple-600" />
                            <span className="text-purple-700 font-bold text-sm tracking-wide">SOFTWARE ENGINEER & VISIONARY FOUNDER</span>
                        </div>
                    </div>

                    <p className="text-slate-600 text-lg leading-loose font-medium">
                        مهندس برمجيات ورائد أعمال تقني. مؤسس <strong>MHD Tech</strong>.
                        شاب يمتلك رؤية طموحة لتغيير واقع التعليم التقني في مصر. يؤمن بأن "المهندس" الحقيقي يُصنع من خلال التحديات والمشاريع الحقيقية، وليس النظريات فقط.
                    </p>

                    <blockquote className="text-slate-700 text-xl leading-loose italic relative p-6 bg-white rounded-2xl border border-purple-100 shadow-sm">
                        <span className="text-6xl text-purple-300 absolute -top-4 -right-2 opacity-50">"</span>
                        هدفي من MHD Tech هو بناء مجتمع من النخبة. الدفعة الأولى التي سنطلقها قريباً لن تكون مجرد طلاب، بل سيكونون شركاء النجاح وقادة المستقبل في سوق التكنولوجيا.
                        <span className="text-6xl text-purple-300 absolute -bottom-8 -left-2 opacity-50">"</span>
                    </blockquote>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                        <span className="px-4 py-2 bg-white border border-purple-100 rounded-full text-slate-600 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">🚀 Ambitious Leader</span>
                        <span className="px-4 py-2 bg-white border border-purple-100 rounded-full text-slate-600 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">💻 Tech Innovator</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Section 3: Promises to First Cohort */}
        <section>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-slate-900">وعدنا للدفعة الأولى</h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                <p className="text-slate-600 mt-4 font-medium">نحن نجهز لشيء استثنائي، كونوا مستعدين..</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { title: "منهج حصري", text: "محتوى يُدرس لأول مرة", color: "text-blue-600", bg: "bg-blue-50", icon: <Target /> },
                    { title: "مشاريع واقعية", text: "بناء أنظمة Enterprise", color: "text-purple-600", bg: "bg-purple-50", icon: <Rocket /> },
                    { title: "Mentorship", text: "توجيه مباشر من المؤسس", color: "text-green-600", bg: "bg-green-50", icon: <Users /> },
                    { title: "التوظيف", text: "تأهيل كامل لسوق العمل", color: "text-yellow-600", bg: "bg-yellow-50", icon: <ShieldCheck /> },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl border border-purple-100 text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl flex flex-col items-center group">
                        <div className={`mb-6 p-4 rounded-full ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                        <h3 className={`text-2xl font-black mb-2 text-slate-900`}>{stat.title}</h3>
                        <p className="text-slate-600 font-medium">{stat.text}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 4: Social Hub */}
        <section className="text-center py-12 bg-white rounded-3xl border border-purple-100 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">كن أول من ينضم</h2>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg font-medium">
                تابعنا الآن. الإعلان عن فتح باب التقديم للدفعة الأولى سيكون قريباً جداً وحصرياً لمتابعينا.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((link, idx) => (
                    <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-8 py-5 rounded-2xl border bg-white transition-all duration-300 shadow-md hover:shadow-lg ${link.color} group font-bold`}
                    >
                        <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                        <span className="text-lg">{link.name}</span>
                        <ArrowRight size={20} className="-rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                ))}
            </div>
        </section>

      </div>

      {/* Footer Light Mauve */}
      <footer className="py-8 text-center text-slate-500 border-t border-purple-100 bg-purple-50">
        <p>© 2026 MHD Tech. Built with passion by <span className="text-purple-600 font-bold">Eng. Mazen Khaled</span>.</p>
      </footer>

    </div>
  );
};

export default AboutPage;
