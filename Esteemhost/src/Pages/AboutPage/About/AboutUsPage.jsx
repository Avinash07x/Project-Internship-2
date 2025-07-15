import React, { useEffect, useState } from 'react';
import { Users, Globe, Award, Settings, Shield, HeartHandshake, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import AboutImage from '../../../assets/1.png'; // Use a professional image related to teamwork or hosting

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliable & Secure',
      description: 'We ensure high availability and top-tier security across all services.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Customer-First Approach',
      description: 'Your growth is our priority. We succeed when you succeed.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'We constantly evolve and adopt modern tech to serve you better.'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Our expert team is always available to help you every step of the way.'
    },
  ];

  return (
    <div className="min-h-screen relative w-full bg-blue-100 overflow-hidden">
      {/* Background Blur Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🚀 About EsteemHost
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Reliable Hosting</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              At EsteemHost, we're dedicated to providing fast, secure, and scalable hosting solutions that power businesses and developers across the globe.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : {}}
            transition={{
              duration: 2,
              ease: 'easeOut',
              scale: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 3,
                ease: 'easeInOut',
              },
            }}
          >
            <img src={AboutImage} alt="About EsteemHost" className="w-full max-h-[480px] object-contain animate-gentle-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Our <span className="text-blue-600">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-6 bg-white/70 rounded-xl border border-blue-200/50 text-center hover:shadow-xl hover:scale-105 transition">
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials & FAQ */}
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default AboutUsPage;
