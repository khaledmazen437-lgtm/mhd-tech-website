import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Globe, Code, Zap, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { diplomas } from './data';
import DiplomaDetails from './DiplomaDetails';
import AboutPage from './AboutPage';

// --- TiltCard Component ---
const TiltCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full perspective-1000"
    >
      <div className="h-full bg-white/80 backdrop-blur-xl border border-purple-100 p-8 rounded-3xl shadow-xl group hover:border-purple-400/50 transition-all duration-500 flex flex-col relative overflow-hidden transform-gpu hover:shadow-purple-200/50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="mb-6 p-4 bg-purple-50 rounded-2xl w-fit group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300 shadow-sm ring-1 ring-purple-100" style={{ transform: "translateZ(20px)" }}>
          {item.icon}
        </div>
        <h3 className="text-3xl font-bold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors" style={{ transform: "translateZ(30px)" }}>
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-grow" style={{ transform: "translateZ(20px)" }}>
          {item.shortDesc}
        </p>
        <Link to={`/diploma/${item.slug}`} className="block mt-auto" style={{ transform: "translateZ(40px)" }}>
          <button className="w-full py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-transparent rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3 font-bold shadow-md hover:shadow-purple-500/25">
            عرض المسار الكامل <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

// --- TechMarquee Component ---
const TechMarquee = () => {
  const techs = ["PYTHON", "REACT.JS", "AI & ML", "CYBER SECURITY", "FLUTTER", "NODE.JS", "DEVOPS", "AUTOMATION", "DOCKER", "NEXT.JS"];
  return (
    <div className="w-full bg-white/90 border-b border-purple-100 py-3 overflow-hidden fixed top-0 left-0 z-50 shadow-sm backdrop-blur-md">
      <motion.div 
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-slate-500 font-bold text-sm md:text-base tracking-[0.2em] flex items-center gap-2 hover:text-purple-600 transition-colors cursor-default">
            <Zap size={14} className="text-purple-500" /> {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// --- Footer Component ---
const Footer = () => {
  const socialLinks = [
    { icon: <MessageCircle size={20} />, url: "https://chat.whatsapp.com/IJQ1XlYMUfJB0Wy53nEXQX", color: "hover:text-green-600 hover:bg-green-50 hover:border-green-200" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/share/17fPb3Unhs/", color: "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/mazen-khaled-00aabb375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/mhdte.ch?igsh=MW1uMW1jOWtzZ2lxaQ==", color: "hover:text-pink-600 hover:bg-pink-50 hover:border-pink-200" },
    { icon: <Globe size={20} />, url: "https://mhd-tech.netlify.app/?fbclid=Iwb21leAPLNYdjbGNrA8s1g2V4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHkdTG6h_-_wHYBcTZrIEFsYpz_WvBDdnmCc4Mz91MKkoZv6CSz3do0u7YmMm_aem_vdb_b1k9NU5OhKOZvkcpwQ", color: "hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200" },
  ];

  return (
    <footer className="relative z-10 py-12 text-center text-slate-500 border-t border-purple-100 bg-purple-50/50">
        <div className="container mx-auto px-6">
            <div className="flex justify-center items-center gap-3 mb-6">
                <div className="p-2 bg-white rounded-lg border border-purple-200 shadow-sm">
                    <Code size={24} className="text-purple-600" />
                </div>
                <span className="text-slate-900 font-bold text-2xl tracking-tight">MHD Tech Hub</span>
            </div>
            <div className="flex justify-center gap-6 mb-8">
                {socialLinks.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 bg-white rounded-full border border-purple-100 text-slate-400 transition-all duration-300 hover:scale-110 hover:shadow-md ${link.color}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="text-sm text-slate-500">
                © 2026 MHD Tech. All Rights Reserved. <br className="md:hidden"/> Built with passion by <span className="text-purple-600 font-bold">Eng. Mazen Khaled</span>.
            </p>
        </div>
      </footer>
  );
};

// --- HomePage Component ---
const HomePage = () => {
  const texts = ["مهندسين محترفين.", "قادة للمستقبل.", "مبتكرين."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToDiplomas = () => {
    const element = document.getElementById('diplomas-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-slate-50 to-white text-slate-900 font-sans overflow-x-hidden selection:bg-purple-200 selection:text-purple-900" dir="rtl">
      
      <TechMarquee />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,10,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,10,180,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-100"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/40 blur-[120px] rounded-full opacity-60 mix-blend-multiply animate-pulse" />
      </div>

      {/* Hero Section */}
      <header className="relative z-10 pt-40 pb-20 text-center overflow-hidden">
        <div className="container mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 text-purple-600 text-sm font-bold mb-8 shadow-sm hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            الدفعة الجديدة مفتوحة الآن لعام 2026
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900"
          >
            MHD <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600">Tech</span>
          </motion.h1>

  
          <div className="h-auto min-h-[4rem] mb-10 md:mb-6">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-700 leading-tight">
               نحن لا نعلم البرمجة، نحن نصنع <br className="md:hidden" />
               <motion.span 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="text-purple-600 inline-block mt-2 md:mt-0"
               >
                 {texts[index]}
               </motion.span>
             </h2>
          </div>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            منصة MHD Tech تقدم لك تجربة "هندسية" متكاملة. انسى الكورسات التقليدية، واستعد لدخول عالم الـ Enterprise بمشاريع حقيقية.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
                onClick={scrollToDiplomas}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Terminal size={20} /> ابدأ الرحلة
            </button>
            <Link to="/about">
                <button className="px-10 py-4 bg-white border border-purple-200 text-slate-700 hover:bg-purple-50 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-2 shadow-sm">
                <Globe size={20} /> عن الشركة
                </button>
            </Link>
          </div>

        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 border-y border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20 text-center">
            {[
                
                { num: "100%", label: "تطبيق عملي" },
                { num: "+5", label: "مسارات تخصصية" }
            ].map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                    <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{stat.num}</div>
                    <div className="text-slate-500 font-bold group-hover:text-slate-900 transition-colors">{stat.label}</div>
                </div>
            ))}
        </div>
      </section>

      {/* Diplomas Section */}
      <section id="diplomas-section" className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">المسارات الاحترافية</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-sm"></div>
            <p className="text-slate-600 mt-4 font-medium">اختر مسارك وانضم لنخبة المهندسين</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {diplomas.map((item, index) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diploma/:slug" element={<DiplomaDetails />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;