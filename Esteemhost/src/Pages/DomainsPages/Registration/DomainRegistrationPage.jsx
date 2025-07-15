import React, { useEffect, useRef, useState } from 'react';
import { Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight, Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero50 from '../../../assets/34.png';
import { motion } from 'framer-motion';

const DomainRegistrationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('.com');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleBuyNow = (domainData) => {
    navigate('/payment', {
      state: {
        selectedPlan: {
          name: domainData.domain,
          price: {
            monthly: domainData.year1.replace('₹', '$'),
            yearly: domainData.year2.replace('₹', '$'),
          },
        },
        billingCycle: 'monthly',
      },
    });
  };

  const domainExtensions = [
    { ext: '.com', price: '₹749', popular: true },
    { ext: '.net', price: '₹899', popular: false },
    { ext: '.org', price: '₹849', popular: false },
    { ext: '.in', price: '₹649', popular: true },
    { ext: '.co', price: '₹1299', popular: false },
    { ext: '.io', price: '₹2499', popular: false }
  ];

  const features = [
    {
      icon: <Settings className="w-8 h-8" />, title: 'Automated Control Panel',
      description: 'Use our intuitive Control Panel to manage your domain name, configure email accounts, renew your domain name and buy more services.'
    },
    {
      icon: <Headphones className="w-8 h-8" />, title: 'Phone & Email Support',
      description: 'Fast, friendly and straight-forward response with the help of our experts. We understand client issues and solve them efficiently.'
    },
    {
      icon: <Globe className="w-8 h-8" />, title: 'Domain DNS Management',
      description: 'Take full control of your domain by managing name servers and modifying record types like A Address, MX, CNAME, and TXT at no extra cost.'
    },
    {
      icon: <Shield className="w-8 h-8" />, title: 'Free Whois Privacy',
      description: "Hide domain owner details from publicly-accessible databases. Enable Privacy Protection if you don't want to share your information."
    },
    {
      icon: <Search className="w-8 h-8" />, title: 'Bulk Tools',
      description: 'Easy-to-use bulk tools to help you Register, Renew, Transfer and make changes to several Domain Names in a single step.'
    },
    {
      icon: <Lock className="w-8 h-8" />, title: 'Domain Theft Protection',
      description: 'Protect your Domain from being transferred out accidentally with our free Domain Theft Protection, so no one can touch it.'
    }
  ];

  const pricingData = [
    { domain: '.com', year1: '₹749', year2: '₹1,399', year10: '₹6,990', renew: '₹799', transfer: '₹799' },
    { domain: '.net', year1: '₹899', year2: '₹1,699', year10: '₹8,490', renew: '₹949', transfer: '₹949' },
    { domain: '.org', year1: '₹849', year2: '₹1,599', year10: '₹7,990', renew: '₹899', transfer: '₹899' },
    { domain: '.in', year1: '₹649', year2: '₹1,199', year10: '₹5,990', renew: '₹699', transfer: '₹699' }
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}${selectedExtension}`);
    }
  };

  return (
    <div className="min-h-screen relative w-full bg-blue-100 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section ref={sectionRef} className="relative py-5 px-6 z-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🎉 10% OFF - Limited Time Offer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              LOOKING FOR A<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PREMIUM DOMAIN?
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0">
              Search and register your perfect domain name with tons of extensions.
              Start your online journey with confidence and professional presence.
            </p>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-full shadow-2xl p-2 flex items-center border border-slate-200 hover:shadow-3xl transition-shadow duration-300">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter your domain name..."
                  className="flex-1 px-4 py-1 text-slate-700 placeholder-slate-400 bg-transparent border-none outline-none text-lg"
                />
                <button onClick={handleSearch} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </div>
          <motion.div
            className="transition-all duration-1000 ease-out delay-300"
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
              src={Hero50}
              alt="Servers"
              className="w-full h-auto max-h-[400px] object-cover animate-gentle-bounce"
            />
          </motion.div>
        </div>
      </section>

      {/* Domain Extensions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white">
          {domainExtensions.map((domain, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold mb-2">{domain.ext}</div>
              <div className="text-blue-200 text-lg">{domain.price}<span className="text-sm">/yr</span></div>
              {domain.popular && <div className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full mt-2 inline-block">Popular</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Transparent <span className="text-blue-600">Pricing</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/70 rounded-xl border border-blue-200/50 shadow-xl">
              <thead>
                <tr className="text-slate-700 text-sm uppercase tracking-wider border-b border-blue-200/50">
                  <th className="px-6 py-4 text-left">Domain</th>
                  <th className="px-6 py-4 text-center">1 Year</th>
                  <th className="px-6 py-4 text-center">2 Years</th>
                  <th className="px-6 py-4 text-center">10 Years</th>
                  <th className="px-6 py-4 text-center">Renew</th>
                  <th className="px-6 py-4 text-center">Transfer</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-blue-50/50 transition duration-300 border-b border-blue-200/30"
                  >
                    <td className="px-6 py-4 font-semibold text-slate-800 text-left">
                      {row.domain}
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600 font-medium">
                      {row.year1}
                    </td>
                    <td className="px-6 py-4 text-center">{row.year2}</td>
                    <td className="px-6 py-4 text-center">{row.year10}</td>
                    <td className="px-6 py-4 text-center">{row.renew}</td>
                    <td className="px-6 py-4 text-center">{row.transfer}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleBuyNow(row)}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition transform hover:scale-105"
                      >
                        Buy Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-12">Why Choose EsteemHost?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[Check, Star, Shield].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`p-4 rounded-full mb-4 ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {['Instant Setup', 'Premium Support', 'Secure & Reliable'][i]}
                </h3>
                <p className="text-slate-600">
                  {[
                    'Your domain is ready to use immediately after registration',
                    '24/7 expert support to help you succeed online',
                    'Enterprise-grade security for your digital assets'
                  ][i]}
                </p>
              </div>
            ))}
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
            Get Started Today <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Our Main <span className="text-blue-600">Domain Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/60 border border-blue-200/50 hover:scale-105 transition-all hover:shadow-xl">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default DomainRegistrationPage;
