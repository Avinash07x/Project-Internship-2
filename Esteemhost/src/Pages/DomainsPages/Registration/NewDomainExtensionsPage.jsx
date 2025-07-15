import React, { useState, useEffect } from 'react';
import {
  Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight, Check, Star,
  TrendingUp, Zap, Users, Building, Heart, Camera, Code, Music, Gamepad2, Briefcase, GraduationCap
} from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero70 from '../../../assets/35.png';
import { motion } from 'framer-motion';


const NewDomainExtensionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredExtension, setHoveredExtension] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const extensionCategories = [
    { id: 'all', name: 'All Extensions', count: 47 },
    { id: 'business', name: 'Business', count: 12 },
    { id: 'tech', name: 'Technology', count: 8 },
    { id: 'creative', name: 'Creative', count: 9 },
    { id: 'location', name: 'Location', count: 6 },
    { id: 'lifestyle', name: 'Lifestyle', count: 7 },
    { id: 'new', name: 'New & Trending', count: 5 }
  ];

  const domainExtensions = [
    // Business
    { ext: '.business', price: '₹1,899', category: 'business', popular: false, description: 'Perfect for business websites', icon: <Briefcase className="w-6 h-6" />, trending: false },
    { ext: '.company', price: '₹2,299', category: 'business', popular: false, description: 'Establish your company online', icon: <Building className="w-6 h-6" />, trending: false },
    { ext: '.corp', price: '₹3,499', category: 'business', popular: false, description: 'Corporate identity extension', icon: <Building className="w-6 h-6" />, trending: false },
    { ext: '.inc', price: '₹12,999', category: 'business', popular: false, description: 'Premium incorporated business', icon: <Building className="w-6 h-6" />, trending: true },
    { ext: '.llc', price: '₹8,999', category: 'business', popular: false, description: 'Limited liability company', icon: <Building className="w-6 h-6" />, trending: false },
    { ext: '.ltd', price: '₹5,999', category: 'business', popular: false, description: 'Limited company extension', icon: <Building className="w-6 h-6" />, trending: false },
    { ext: '.enterprises', price: '₹8,999', category: 'business', popular: false, description: 'Large enterprise organizations', icon: <Building className="w-6 h-6" />, trending: false },
    { ext: '.consulting', price: '₹8,999', category: 'business', popular: false, description: 'Professional consulting services', icon: <Users className="w-6 h-6" />, trending: false },
    { ext: '.marketing', price: '₹8,999', category: 'business', popular: false, description: 'Marketing and advertising', icon: <TrendingUp className="w-6 h-6" />, trending: false },
    { ext: '.agency', price: '₹5,999', category: 'business', popular: true, description: 'Creative and digital agencies', icon: <Users className="w-6 h-6" />, trending: false },
    { ext: '.services', price: '₹8,999', category: 'business', popular: false, description: 'Service-based businesses', icon: <Settings className="w-6 h-6" />, trending: false },
    { ext: '.solutions', price: '₹5,999', category: 'business', popular: false, description: 'Solution providers', icon: <Settings className="w-6 h-6" />, trending: false },

    // Technology
    { ext: '.tech', price: '₹1,499', category: 'tech', popular: true, description: 'Technology companies and startups', icon: <Code className="w-6 h-6" />, trending: true },
    { ext: '.ai', price: '₹24,999', category: 'tech', popular: false, description: 'Artificial intelligence projects', icon: <Zap className="w-6 h-6" />, trending: true },
    { ext: '.app', price: '₹4,999', category: 'tech', popular: true, description: 'Mobile and web applications', icon: <Code className="w-6 h-6" />, trending: false },
    { ext: '.cloud', price: '₹5,999', category: 'tech', popular: false, description: 'Cloud computing services', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.digital', price: '₹8,999', category: 'tech', popular: false, description: 'Digital transformation', icon: <Code className="w-6 h-6" />, trending: false },
    { ext: '.online', price: '₹999', category: 'tech', popular: true, description: 'Online businesses and services', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.website', price: '₹5,999', category: 'tech', popular: false, description: 'Website and web presence', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.domains', price: '₹8,999', category: 'tech', popular: false, description: 'Domain industry businesses', icon: <Globe className="w-6 h-6" />, trending: false },

    // Creative
    { ext: '.art', price: '₹3,999', category: 'creative', popular: false, description: 'Artists and art galleries', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.design', price: '₹12,999', category: 'creative', popular: false, description: 'Designers and design studios', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.studio', price: '₹5,999', category: 'creative', popular: true, description: 'Creative studios and workshops', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.photography', price: '₹5,999', category: 'creative', popular: false, description: 'Professional photographers', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.gallery', price: '₹5,999', category: 'creative', popular: false, description: 'Art and photo galleries', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.media', price: '₹8,999', category: 'creative', popular: false, description: 'Media and entertainment', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.music', price: '₹3,999', category: 'creative', popular: false, description: 'Musicians and music industry', icon: <Music className="w-6 h-6" />, trending: false },
    { ext: '.video', price: '₹5,999', category: 'creative', popular: false, description: 'Video production and streaming', icon: <Camera className="w-6 h-6" />, trending: false },
    { ext: '.games', price: '₹5,999', category: 'creative', popular: false, description: 'Gaming and entertainment', icon: <Gamepad2 className="w-6 h-6" />, trending: false },

    // Location
    { ext: '.city', price: '₹5,999', category: 'location', popular: false, description: 'Cities and urban areas', icon: <Building className="w-6 h-6" />, trending: false },
    { ext: '.global', price: '₹19,999', category: 'location', popular: false, description: 'Global businesses', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.world', price: '₹8,999', category: 'location', popular: false, description: 'Worldwide presence', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.international', price: '₹5,999', category: 'location', popular: false, description: 'International organizations', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.asia', price: '₹3,999', category: 'location', popular: false, description: 'Asian market focus', icon: <Globe className="w-6 h-6" />, trending: false },
    { ext: '.earth', price: '₹5,999', category: 'location', popular: false, description: 'Environmental and global', icon: <Globe className="w-6 h-6" />, trending: false },

    // Lifestyle
    { ext: '.life', price: '₹8,999', category: 'lifestyle', popular: false, description: 'Lifestyle and wellness', icon: <Heart className="w-6 h-6" />, trending: false },
    { ext: '.love', price: '₹8,999', category: 'lifestyle', popular: false, description: 'Relationships and dating', icon: <Heart className="w-6 h-6" />, trending: false },
    { ext: '.health', price: '₹19,999', category: 'lifestyle', popular: false, description: 'Healthcare and wellness', icon: <Heart className="w-6 h-6" />, trending: false },
    { ext: '.fitness', price: '₹8,999', category: 'lifestyle', popular: false, description: 'Fitness and sports', icon: <Heart className="w-6 h-6" />, trending: false },
    { ext: '.food', price: '₹5,999', category: 'lifestyle', popular: false, description: 'Food and restaurants', icon: <Heart className="w-6 h-6" />, trending: false },
    { ext: '.style', price: '₹5,999', category: 'lifestyle', popular: false, description: 'Fashion and lifestyle', icon: <Heart className="w-6 h-6" />, trending: false },
    { ext: '.blog', price: '₹8,999', category: 'lifestyle', popular: true, description: 'Personal and professional blogs', icon: <Heart className="w-6 h-6" />, trending: false },

    // New & Trending
    { ext: '.store', price: '₹1,599', category: 'new', popular: true, description: 'E-commerce and retail', icon: <TrendingUp className="w-6 h-6" />, trending: true },
    { ext: '.shop', price: '₹999', category: 'new', popular: true, description: 'Online shopping sites', icon: <TrendingUp className="w-6 h-6" />, trending: true },
    { ext: '.academy', price: '₹8,999', category: 'new', popular: false, description: 'Educational institutions', icon: <GraduationCap className="w-6 h-6" />, trending: true },
    { ext: '.university', price: '₹12,999', category: 'new', popular: false, description: 'Universities and colleges', icon: <GraduationCap className="w-6 h-6" />, trending: false },
    { ext: '.education', price: '₹5,999', category: 'new', popular: false, description: 'Educational services', icon: <GraduationCap className="w-6 h-6" />, trending: true }
  ];

  const filteredExtensions = domainExtensions.filter(ext => {
    const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
    const matchesSearch = ext.ext.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ext.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingExtensions = domainExtensions.filter(ext => ext.trending).slice(0, 6);

  const handleSearch = (extension) => {
    console.log(`Searching for domains with extension: ${extension}`);
  };

  return (
    <div className="min-h-screen relative w-full bg-blue-100 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 z-10">
        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Text Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🚀 New Extensions Available
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              DISCOVER NEW <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DOMAIN EXTENSIONS
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Stand out from the crowd with unique domain extensions. From .tech to .store,
              find the perfect extension that matches your brand and industry.
            </p>
          </div>

          {/* Image Right */}
          <motion.div
            className="md:w-1/2 transition-all duration-1000 ease-out delay-300"
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
              src={Hero70}
              alt="Servers"
              className="w-full h-auto max-h-[400px] object-cover animate-gentle-bounce"
            />
          </motion.div>
        </div>
      </section>

      {/* Trending Extensions Showcase */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-white mb-12">🔥 Trending Extensions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white">
            {trendingExtensions.map((domain, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300 cursor-pointer p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                onClick={() => handleSearch(domain.ext)}
              >
                <div className="flex justify-center mb-3 text-yellow-300">
                  {domain.icon}
                </div>
                <div className="text-xl font-bold mb-2">{domain.ext}</div>
                <div className="text-blue-200 text-lg mb-2">{domain.price}<span className="text-sm">/yr</span></div>
                <div className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full inline-block">Trending</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search extensions or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {extensionCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/80 text-slate-700 hover:bg-blue-100'
                      }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Extensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExtensions.map((extension, index) => (
              <div
                key={index}
                className="bg-white/70 rounded-xl border border-blue-200/50 p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredExtension(index)}
                onMouseLeave={() => setHoveredExtension(null)}
                onClick={() => handleSearch(extension.ext)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">
                      {extension.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-800">{extension.ext}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {extension.popular && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Popular</span>
                    )}
                    {extension.trending && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">🔥 Hot</span>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{extension.description}</p>

                <div className="flex justify-between items-center">
                  <div className="text-blue-600 font-bold text-xl">{extension.price}<span className="text-sm text-slate-500">/yr</span></div>
                  <button
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${hoveredExtension === index
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose New Extensions */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Why Choose <span className="text-blue-600">New Extensions</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="bg-blue-500 p-4 rounded-full mb-4 inline-block">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Brand Identity</h3>
              <p className="text-slate-600">Create a memorable brand with extensions that match your industry</p>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="bg-green-500 p-4 rounded-full mb-4 inline-block">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Availability</h3>
              <p className="text-slate-600">Higher chance of getting your desired domain name</p>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="bg-purple-500 p-4 rounded-full mb-4 inline-block">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">SEO Benefits</h3>
              <p className="text-slate-600">Relevant extensions can improve search rankings</p>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="bg-yellow-500 p-4 rounded-full mb-4 inline-block">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Professional</h3>
              <p className="text-slate-600">Stand out with a professional, industry-specific domain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Popular <span className="text-blue-600">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white/60 border border-blue-200/50 hover:scale-105 transition-all hover:shadow-xl cursor-pointer">
              <div className="text-blue-600 mb-4">
                <Briefcase className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-800">Business</h3>
              <p className="text-slate-600 mb-4">Professional extensions for businesses and corporations</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.business</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.company</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.inc</span>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-white/60 border border-blue-200/50 hover:scale-105 transition-all hover:shadow-xl cursor-pointer">
              <div className="text-blue-600 mb-4">
                <Code className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-800">Technology</h3>
              <p className="text-slate-600 mb-4">Perfect for tech startups and digital services</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.tech</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.ai</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.app</span>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-white/60 border border-blue-200/50 hover:scale-105 transition-all hover:shadow-xl cursor-pointer">
              <div className="text-blue-600 mb-4">
                <Camera className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-800">Creative</h3>
              <p className="text-slate-600 mb-4">Showcase your creativity with artistic extensions</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.art</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.design</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">.studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Join thousands of businesses who have chosen unique domain extensions to stand out online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
              Browse All Extensions <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="bg-white/80 text-slate-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-lg border border-blue-200">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default NewDomainExtensionsPage;