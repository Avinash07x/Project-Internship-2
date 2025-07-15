import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Star, Globe } from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero80 from '../../../assets/39.png';
import { motion } from 'framer-motion';


const PremiumDomainsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const premiumDomains = [
    { name: 'TechWorld.com', price: 49999, keywords: 'Technology, Brandable' },
    { name: 'HealthZone.in', price: 29999, keywords: 'Health, India, Wellness' },
    { name: 'CryptoNest.io', price: 79999, keywords: 'Crypto, Finance' },
    { name: 'EduNation.org', price: 39999, keywords: 'Education, NGO' },
  ];

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Background Blur Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-5 px-6 z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 transition-all duration-1000">
          {/* Left Text Content */}
          <div className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              PREMIUM <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DOMAIN NAMES
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-xl">
              Invest in powerful, brandable domains to strengthen your online identity and stand out from the crowd.
            </p>
          </div>
          {/* Right Image with Motion */}
          <motion.div
            className="w-full transition-all duration-1000 ease-out delay-300"
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
              alt="Premium Domains"
              className="w-full h-auto max-h-[480px] object-cover animate-gentle-bounce"
            />
          </motion.div>
        </div>
      </section>


      {/* Premium Domain Listings */}
      <section className="py-5 px-6 z-10 relative backdrop-blur-sm">
        <div className="max-w-5xl mx-auto bg-white/70 p-8 rounded-2xl shadow-2xl border border-blue-200/50">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Available Premium Domains</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {premiumDomains.map((domain, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-blue-100 shadow hover:scale-105 transition-all">
                <h3 className="text-xl font-bold text-blue-700">{domain.name}</h3>
                <p className="text-slate-600 my-2">{domain.keywords}</p>
                <div className="text-xl font-semibold text-green-600">₹{domain.price.toLocaleString()}</div>
                <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition">
                  Buy Now <ArrowRight className="inline w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Premium Domains Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-12">Why Buy Premium Domains?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Trust & Credibility</h3>
              <p className="text-slate-600">A premium domain helps your business look more professional and reliable.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Brand Recognition</h3>
              <p className="text-slate-600">Memorable domains make it easier for customers to find and remember you.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 p-4 rounded-full mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">SEO & Visibility</h3>
              <p className="text-slate-600">Boost your search rankings and online visibility with keyword-rich domains.</p>
            </div>
          </div>
        </div>
      </section>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default PremiumDomainsPage;
