import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { diplomas } from './data';
import { ArrowRight, CheckCircle, MessageCircle, TrendingUp, Users, ChevronRight, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DiplomaDetails = () => {
  const { slug } = useParams();
  const diploma = diplomas.find(d => d.slug === slug);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!diploma) return <div className="text-slate-900 text-center py-20">الدبلومة غير موجودة</div>;

  const handleWhatsApp = () => {
    const phone = "201226935593"; 
    const text = `مرحباً مهندس مازن، أريد حجز دبلومة ${diploma.title}، ممكن تفاصيل أكتر؟`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50 text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden" dir="rtl">
      
      {/* Navbar */}
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
      <header className="relative py-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${diploma.color} opacity-10 z-0 blur-[120px] mix-blend-multiply`} />
        
        <div className="relative z-10 max-w-4xl">
            <motion.div 
                initial={{ scale: 0, rotate: -180 }} 
                animate={{ scale: 1, rotate: 0 }} 
                transition={{ type: "spring", stiffness: 100 }}
                
                className={`mx-auto w-24 h-24 flex items-center justify-center bg-white rounded-full border-2 border-purple-100 mb-8 shadow-xl shadow-purple-100/50`}
            >
                {diploma.icon}
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
            >
                {diploma.title}
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium"
            >
                {diploma.fullDesc}
            </motion.p>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12" ref={containerRef}>
        
        <div className="lg:col-span-2 relative">
            
            {/* كروت المعلومات */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
            >
                <div className="bg-white p-6 rounded-2xl border border-purple-100 hover:border-purple-300 transition-colors shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-3 mb-4 text-purple-600">
                        <div className="bg-purple-50 p-2 rounded-lg"><Users size={24} /></div>
                        <h3 className="text-xl font-bold text-slate-900">لمن هذا المسار؟</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                        {diploma.target}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-purple-100 hover:border-green-300 transition-colors shadow-sm hover:shadow-md flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-green-600">
                        <div className="bg-green-50 p-2 rounded-lg"><TrendingUp size={24} /></div>
                        <h3 className="text-xl font-bold text-slate-900">حالة السوق والرواتب</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                        {diploma.market}
                    </p>
                </div>
            </motion.div>

            {/* عنوان الخريطة */}
            <h3 className="text-3xl font-black mb-16 text-center text-slate-900 relative inline-block w-full">
                <span className="relative z-10 bg-white px-6 py-2 border border-purple-100 rounded-full shadow-sm">خريطة الطريق</span>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-purple-100 -z-0"></div>
            </h3>

            {/* Roadmap */}
            <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-purple-100 rounded-full transform md:-translate-x-1/2"></div>
                
                <motion.div 
                    style={{ height: lineHeight }}
                    
                    className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_#a855f7] z-10 origin-top"
                />

                <div className="space-y-12 md:space-y-24">
                    {diploma.roadmap.map((step, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="w-full md:w-[45%] pl-16 md:pl-0"
                            >
                                
                                <div className="bg-white p-8 rounded-3xl border border-purple-100 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl group relative overflow-hidden">
                                    <div className="absolute -left-4 -top-4 text-8xl font-black text-purple-50 z-0 select-none">
                                        {idx + 1}
                                    </div>

                                    <div className="relative z-10">
                                        <span className="text-sm font-bold text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4 inline-block border border-purple-100">
                                            {step.level}
                                        </span>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-purple-600 transition-colors">
                                            {step.title}
                                        </h4>
                                        <ul className="space-y-3">
                                            {step.topics.map((topic, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                                    <Zap className="shrink-0 text-purple-500 mt-1" size={16} />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ margin: "-100px" }}
                                    className="w-10 h-10 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_15px_#a855f7]"
                                >
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                                </motion.div>
                            </div>

                            <div className="hidden md:block w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* --- Sticky Booking Card --- */}
        <div className="lg:col-span-1">
            <div className="sticky top-32">
                <div className="bg-white p-8 rounded-3xl border border-purple-200 shadow-2xl shadow-purple-100/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl group-hover:bg-purple-200/50 transition-all" />
                    
                    <h3 className="text-3xl font-black mb-8 text-center text-slate-900">ابدأ رحلتك الآن</h3>
                    
                    <ul className="space-y-5 mb-10">
                        {[
                            "محتوى هندسي محدث 2026",
                            "Code Review & Mentorship",
                            "بناء Portfolio قوي",
                            "توجيه مهني للتوظيف"
                        ].map((feat, i) => (
                            <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                                <div className="bg-purple-50 p-1 rounded-full text-purple-600"><CheckCircle size={16}/></div>
                                {feat}
                            </li>
                        ))}
                    </ul>

                    <button 
                        onClick={handleWhatsApp}
                        className="w-full py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg shadow-green-200/50 hover:shadow-green-300/50 hover:scale-[1.02] transition-all duration-300 active:scale-95"
                    >
                        <MessageCircle size={28} />
                        احجز مكانك
                    </button>
                    <p className="text-center text-slate-500 text-sm mt-6 bg-purple-50 py-2 rounded-lg">
                        ⚠️ المقاعد محدودة جداً
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DiplomaDetails;