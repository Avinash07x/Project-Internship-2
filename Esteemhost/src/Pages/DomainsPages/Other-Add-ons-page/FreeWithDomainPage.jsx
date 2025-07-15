import React, { useEffect, useState } from 'react';
import {
  Check, Shield, Lock, Globe, Upload,
  RefreshCw, Award
} from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import { motion } from 'framer-motion';
import Hero80 from "../../../assets/17.png";
const FreeWithDomainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Check className="w-8 h-8 text-green-600" />,
      title: "Free Email Forwarding",
      description: "Create unlimited email aliases like info@yourdomain.com and forward them to your Gmail or any inbox."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Free DNS Management",
      description: "Easily manage DNS records including A, MX, CNAME, and TXT using our intuitive dashboard."
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Free Domain Locking",
      description: "Prevent unauthorized transfers of your domain with free domain locking."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Free WHOIS Privacy",
      description: "Keep your personal data safe and hidden from public WHOIS databases, free forever."
    },
    {
      icon: <Upload className="w-8 h-8 text-pink-600" />,
      title: "Free Website Forwarding",
      description: "Forward your domain to another website or landing page in just a few clicks."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-orange-600" />,
      title: "Free Auto-Renewal Option",
      description: "Ensure your domain never expires with our easy-to-enable auto-renew feature."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Free 24/7 Support",
      description: "Access expert support any time, day or night — totally free with every domain."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-blue-100 overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🎁 Included With Every Domain
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              FREE SERVICES <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WITH EVERY DOMAIN
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-xl">
              Every domain you register includes essential tools and features — absolutely free.
            </p>
          </div>

          {/* Right Image with Animation */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{
              duration: 3,
              ease: 'easeOut',
              scale: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 3,
                ease: 'easeInOut',
              },
            }}
          >
            <img
              src={Hero80}
              alt="Free With Domain"
              className="w-full h-auto max-h-[480px] object-contain animate-gentle-bounce"
            />
          </motion.div>
        </div>
      </section>

      {/* Free Features Grid */}
      <section className="py-20 px-6 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-12">What You Get For Free</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="bg-white/70 p-6 rounded-2xl border border-blue-200/50 shadow-md hover:shadow-xl transition-all hover:scale-105 text-left">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 backdrop-blur-sm z-10 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Start Getting These Benefits Today!
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Register your domain now and enjoy all these features at no extra cost.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
            Register a Domain
          </button>
        </div>
      </section>

      {/* Additional Sections */}
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default FreeWithDomainPage;