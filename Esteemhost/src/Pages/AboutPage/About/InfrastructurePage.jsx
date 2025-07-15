import React, { useEffect, useState } from 'react';
import { Server, Shield, BarChart, Cloud, Globe, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import InfrastructureImage from '../../../assets/2.png';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';

const InfrastructurePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const infraFeatures = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'High-Performance Servers',
      description: 'Powered by cutting-edge processors and NVMe SSDs for blazing fast performance.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered firewalls, DDoS protection, and daily backups to ensure data integrity.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Redundancy',
      description: 'Failover systems and load-balanced clusters ensure 99.99% uptime.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Real-Time Monitoring',
      description: 'Constant monitoring for all infrastructure elements for optimal uptime and stability.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Data Centers',
      description: 'Strategically located Tier-4 data centers across continents for faster delivery.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Scalable Architecture',
      description: 'Easily scale resources on-demand with flexible cloud provisioning.'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-blue-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🌐 Our Infrastructure
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Built for <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Performance & Reliability</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              EsteemHost leverages world-class infrastructure to ensure high availability, security, and speed for your online presence.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all shadow-lg">
              Explore Hosting Plans
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
            <img src={InfrastructureImage} alt="Infrastructure" className="w-full max-h-[480px] object-contain animate-gentle-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="py-12 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Our <span className="text-blue-600">Infrastructure</span> Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infraFeatures.map((item, index) => (
              <div key={index} className="p-6 bg-white/70 rounded-xl border border-blue-200/50 text-center hover:shadow-xl hover:scale-105 transition">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Testimonials */}
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default InfrastructurePage;
