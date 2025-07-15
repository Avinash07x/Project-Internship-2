import React, { useState, useEffect } from 'react';
import { Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight, Check, Star, Tag, Wrench } from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero80 from '../../../assets/10.png';
import { motion } from 'framer-motion';


const DomainTransferPage = () => {
  const [domain, setDomain] = useState('');
  const [extension, setExtension] = useState('.com');
  const [eppCode, setEppCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const domainExtensions = [
    { ext: '.com', price: '₹799', popular: true },
    { ext: '.net', price: '₹949', popular: false },
    { ext: '.org', price: '₹899', popular: false },
    { ext: '.in', price: '₹699', popular: true },
    { ext: '.co.in', price: '₹599', popular: false },
    { ext: '.info', price: '₹999', popular: false }
  ];

  const allExtensions = [
    '.com', '.in', '.net', '.org', '.biz', '.pw', '.co.in', '.net.in', '.org.in', 
    '.gen.in', '.firm.in', '.ind.in', '.in.net', '.co', '.info', '.name', '.pro', 
    '.sx', '.us', '.co.uk', '.org.uk', '.me.uk', '.de', '.es', '.ca', '.com.au', 
    '.net.au', '.eu', '.cn.com', '.com.co', '.net.co', '.nom.co', '.nl', '.me', 
    '.mobi', '.tel', '.ru', '.com.ru', '.net.ru', '.org.ru', '.tv', '.cc', '.ws', 
    '.com.de', '.xxx', '.bz', '.mn', '.co.nz', '.net.nz', '.org.nz', '.eu.com', 
    '.gb.com', '.ae.org', '.kr.com', '.us.com', '.qc.com', '.gr.com', '.de.com', 
    '.gb.net', '.no.com', '.hu.com', '.jpn.com', '.uy.com', '.za.com', '.br.com', 
    '.sa.com', '.se.com', '.se.net', '.uk.com', '.uk.net', '.ru.com', '.cn', 
    '.com.cn', '.net.cn', '.org.cn'
  ];

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automated Control Panel",
      description: "Use our intuitive Control Panel to manage your domain name, configure email accounts, renew your domain name and buy more services."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Phone & Email Support",
      description: "Fast, friendly and straight-forward response with the help of our experts. Esteemhost understands clients issue and solving it most efficiently."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Domain DNS Management",
      description: "Take full control of your domain by managing name servers and the ability to modify record types like A Address, MX, MXE, CNAME, and TXT at no extra cost."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Free Whois Privacy",
      description: "Hide the domain name owner details from publicly-accessible database like WhoIs. Enable Privacy Protection if you don't want to share your information."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Bulk Tools",
      description: "Easy-to-use bulk tools to help you, Register, Renew, Transfer and make other changes to several Domain Names in a single step. Save time and money by using it."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Domain Forwarding",
      description: "Point your domain name to another website for free! Redirect users when they type your domain name into a browser (with/without domain masking & SEO)."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Domain Theft Protection",
      description: "Protect your Domain from being transferred out accidentally or without your permission with our free Domain Theft Protection, so no one can touch it."
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Free Mail Forwards",
      description: "create and redirect the email addresses to other email accounts of your choice. You can use this feature to forward multiple email IDs to a particular email ID."
    }
  ];

  const pricingData = [
    { domain: '.com', year1: '₹799', year2: '₹1,499', year10: '₹7,490', renew: '₹849', transfer: '₹799', privacy: '₹200', cpanel: '₹200' },
    { domain: '.net', year1: '₹949', year2: '₹1,799', year10: '₹8,990', renew: '₹999', transfer: '₹949', privacy: '₹200', cpanel: '₹200' },
    { domain: '.org', year1: '₹899', year2: '₹1,699', year10: '₹8,490', renew: '₹949', transfer: '₹899', privacy: '₹200', cpanel: '₹200' },
    { domain: '.in', year1: '₹699', year2: '₹1,299', year10: '₹6,490', renew: '₹749', transfer: '₹699', privacy: '₹200', cpanel: '₹200' },
    { domain: '.co.in', year1: '₹599', year2: '₹1,099', year10: '₹5,490', renew: '₹649', transfer: '₹599', privacy: '₹200', cpanel: '₹200' },
    { domain: '.info', year1: '₹999', year2: '₹1,899', year10: '₹9,490', renew: '₹1049', transfer: '₹999', privacy: '₹200', cpanel: '₹200' }
  ];

  const handleSubmit = () => {
    console.log('Domain Transfer:', { domain, extension, eppCode });
    alert(`Starting transfer for domain: ${domain}${extension} with EPP code: ${eppCode}`);
  };

  return (
    <div className="min-h-screen relative w-full bg-blue-100 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-5 px-6 z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 transition-all duration-1000">
          {/* Left Text Content */}
          <div className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🎉 10% OFF - Limited Time Offer
              </div>
              <p className="text-lg mb-2 text-blue-800 font-medium">LOOKING FOR A PREMIUM QUALITY</p>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TRANSFER YOUR DOMAIN
                  </span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-12 max-w-xl">
                    Transfer your domain to EsteemHost with ease. Get better features, premium support, and competitive pricing for your existing domain with tons of extensions.
                  </p>
          </div>

    {/* Right Image */}
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
  {/* Search Form */}
      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-blue-200/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Enter Domain Name"
              className="w-full px-4 py-4 border border-blue-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 text-lg"
            />
          </div>
          <div>
            <select
              value={extension}
              onChange={(e) => setExtension(e.target.value)}
              className="w-full px-4 py-4 border border-blue-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 text-lg"
            >
              {allExtensions.map((ext) => (
                <option key={ext} value={ext}>{ext}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              value={eppCode}
              onChange={(e) => setEppCode(e.target.value)}
              placeholder="Authorization/EPP code"
              className="w-full px-4 py-4 border border-blue-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 text-lg"
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-xl text-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
            >
              START TRANSFER
            </button>
          </div>
        </div>
      </div>
      </section>


      {/* Domain Extensions Section */}
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

      {/* Why Choose Us */}
      <section className="py-5 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-12">Why Transfer to EsteemHost?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Easy Transfer Process</h3>
              <p className="text-slate-600">Simple 3-step transfer process with automatic setup and configuration</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Premium Support</h3>
              <p className="text-slate-600">24/7 expert support throughout the transfer process and beyond</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Better Security</h3>
              <p className="text-slate-600">Enhanced security features and free domain theft protection</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
            Start Transfer Today <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Transfer <span className="text-blue-600">Pricing</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/70 rounded-xl border border-blue-200/50 shadow-xl">
              <thead>
                <tr className="border-b border-blue-200/50">
                  <th className="px-6 py-4 text-left">Domain</th>
                  <th className="px-6 py-4 text-center">1 Year</th>
                  <th className="px-6 py-4 text-center">2 Years</th>
                  <th className="px-6 py-4 text-center">10 Years</th>
                  <th className="px-6 py-4 text-center">Renew</th>
                  <th className="px-6 py-4 text-center">Transfer</th>
                  <th className="px-6 py-4 text-center">Whois Privacy</th>
                  <th className="px-6 py-4 text-center">cPanel Access</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors border-b border-blue-200/30">
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.domain}</td>
                    <td className="px-6 py-4 text-center text-blue-600">{row.year1}</td>
                    <td className="px-6 py-4 text-center">{row.year2}</td>
                    <td className="px-6 py-4 text-center">{row.year10}</td>
                    <td className="px-6 py-4 text-center">{row.renew}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">{row.transfer}</td>
                    <td className="px-6 py-4 text-center">{row.privacy}</td>
                    <td className="px-6 py-4 text-center">{row.cpanel}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105">
                        Transfer Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Our Main <span className="text-blue-600">Domain Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Transfer Process Steps */}
      <section className="py-5 px-6 bg-gradient-to-r from-green-100/40 to-blue-100/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Simple <span className="text-blue-600">Transfer Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Enter Domain Details</h3>
              <p className="text-slate-600 text-lg">Enter your domain name and authorization code (EPP code) from your current registrar.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Confirm Transfer</h3>
              <p className="text-slate-600 text-lg">Review your transfer details and complete the payment process securely.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Transfer Complete</h3>
              <p className="text-slate-600 text-lg">Your domain will be transferred within 5-7 days and you'll get full access to our features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 z-10 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transfer Your Domain?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us with their domains. Get better features, support, and pricing.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Transfer Process
          </button>
        </div>
      </section>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default DomainTransferPage; 

// import React, { useState } from 'react';
// import { Search, Shield, Globe, Headphones, Settings, Lock, Tag, Wrench } from 'lucide-react';
// import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
// import Testimonials from '../../../components/Testimonials';

// const DomainTransferPage = () => {
//   const [domain, setDomain] = useState('');
//   const [extension, setExtension] = useState('.com');
//   const [eppCode, setEppCode] = useState('');

//   const domainExtensions = [
//     '.com', '.in', '.net', '.org', '.biz', '.pw', '.co.in', '.net.in', '.org.in', 
//     '.gen.in', '.firm.in', '.ind.in', '.in.net', '.co', '.info', '.name', '.pro', 
//     '.sx', '.us', '.co.uk', '.org.uk', '.me.uk', '.de', '.es', '.ca', '.com.au', 
//     '.net.au', '.eu', '.cn.com', '.com.co', '.net.co', '.nom.co', '.nl', '.me', 
//     '.mobi', '.tel', '.ru', '.com.ru', '.net.ru', '.org.ru', '.tv', '.cc', '.ws', 
//     '.com.de', '.xxx', '.bz', '.mn', '.co.nz', '.net.nz', '.org.nz', '.eu.com', 
//     '.gb.com', '.ae.org', '.kr.com', '.us.com', '.qc.com', '.gr.com', '.de.com', 
//     '.gb.net', '.no.com', '.hu.com', '.jpn.com', '.uy.com', '.za.com', '.br.com', 
//     '.sa.com', '.se.com', '.se.net', '.uk.com', '.uk.net', '.ru.com', '.cn', 
//     '.com.cn', '.net.cn', '.org.cn'
//   ];

//   const domainPrices = [
//     { ext: '.com', price: '₹799', color: 'text-blue-600' },
//     { ext: '.net', price: '₹899', color: 'text-green-600' },
//     { ext: '.org', price: '₹799', color: 'text-purple-600' },
//     { ext: '.in', price: '₹599', color: 'text-orange-600' },
//     { ext: '.co.in', price: '₹499', color: 'text-red-600' },
//     { ext: '.info', price: '₹999', color: 'text-indigo-600' }
//   ];

//   const features = [
//     {
//       icon: <Settings className="w-8 h-8" />,
//       title: "Automated Control Panel",
//       description: "Use our intuitive Control Panel to manage your domain name, configure email accounts, renew your domain name and buy more services."
//     },
//     {
//       icon: <Headphones className="w-8 h-8" />,
//       title: "Phone & Email Support",
//       description: "Fast, friendly and straight-forward response with the help of our experts. Esteemhost understands clients issue and solving it most efficiently."
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Domain DNS Management",
//       description: "Take full control of your domain by managing name servers and the ability to modify record types like A Address, MX, MXE, CNAME, and TXT at no extra cost."
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Free Whois Privacy",
//       description: "Hide the domain name owner details from publicly-accessible database like WhoIs. Enable Privacy Protection if you don't want to share your information."
//     },
//     {
//       icon: <Search className="w-8 h-8" />,
//       title: "Bulk Tools",
//       description: "Easy-to-use bulk tools to help you, Register, Renew, Transfer and make other changes to several Domain Names in a single step. Save time and money by using it."
//     },
//     {
//       icon: <Wrench className="w-8 h-8" />,
//       title: "Domain Forwarding",
//       description: "Point your domain name to another website for free! Redirect users when they type your domain name into a browser (with/without domain masking & SEO)."
//     },
//     {
//       icon: <Lock className="w-8 h-8" />,
//       title: "Domain Theft Protection",
//       description: "Protect your Domain from being transferred out accidentally or without your permission with our free Domain Theft Protection, so no one can touch it."
//     },
//     {
//       icon: <Tag className="w-8 h-8" />,
//       title: "Free Mail Forwards",
//       description: "create and redirect the email addresses to other email accounts of your choice. You can use this feature to forward multiple email IDs to a particular email ID."
//     }
//   ];

//   const pricingData = [
//     { domain: '.com', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' },
//     { domain: '.net', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' },
//     { domain: '.org', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' },
//     { domain: '.edu', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' },
//     { domain: '.guru', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' },
//     { domain: '.biz', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' },
//     { domain: '.us', year1: '$9.95', year2: '$18.55', year10: '$89.99', renew: '$8.95', transfer: '$8.95', privacy: '$2.00', cpanel: '$2.00' }
//   ];

//   const handleSubmit = () => {
//     console.log('Domain Search:', { domain, extension, eppCode });
//     alert(`Searching for domain: ${domain}${extension} with EPP code: ${eppCode}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="min-h-screen bg-blue-100 relative overflow-hidden py-16 px-4 text-white">
//         {/* Background Animation Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
//         </div>
//         <div className="container mx-auto relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
//               10% OFF
//             </div>
//             <p className="text-lg mb-2 opacity-90 text-blue-800">LOOKING A PREMIUM QUALITY</p>
//             <h1 className="text-5xl font-bold mb-6 text-blue-900">Transfer Your Domain Now</h1>
//             <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-blue-700">
//               With our awesome domain name search form, you can search any domain names with tons of extensions, for example .com .net .org and more.
//             </p>
            
//             {/* Search Form */}
//             <div className="bg-white p-6 rounded-lg shadow-2xl">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div>
//                   <input
//                     type="text"
//                     value={domain}
//                     onChange={(e) => setDomain(e.target.value)}
//                     placeholder="Enter a Domain Name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <select
//                     value={extension}
//                     onChange={(e) => setExtension(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {domainExtensions.map((ext) => (
//                       <option key={ext} value={ext}>{ext}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     value={eppCode}
//                     onChange={(e) => setEppCode(e.target.value)}
//                     placeholder="Authorization/EPP code"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <button
//                     onClick={handleSubmit}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//                   >
//                     SEARCH
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Domain Extensions Slider */}
//       <div className="bg-green-500 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center items-center gap-8 text-white">
//             {domainPrices.map((item, index) => (
//               <div key={index} className="text-center animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
//                 <p className="text-xl font-bold">{item.ext}</p>
//                 <p className={`text-2xl font-bold ${item.color} bg-white px-3 py-1 rounded-full`}>
//                   {item.price}<span className="text-sm">/yr</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               <span className="text-green-500">Our Main</span> Domain Features
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
//                 <div className="text-blue-500 mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Pricing Table */}
//       <div className="bg-gray-100 py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Domain Pricing</h2>
//           </div>
          
//           <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
//             <table className="w-full">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Domain</th>
//                   <th className="px-6 py-4 text-center">1 Year</th>
//                   <th className="px-6 py-4 text-center">2 Years</th>
//                   <th className="px-6 py-4 text-center">10 Years</th>
//                   <th className="px-6 py-4 text-center">Renew</th>
//                   <th className="px-6 py-4 text-center">Transfer</th>
//                   <th className="px-6 py-4 text-center">Whois Privacy</th>
//                   <th className="px-6 py-4 text-center">cPanel Access</th>
//                   <th className="px-6 py-4 text-center">Order</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pricingData.map((row, index) => (
//                   <tr key={index} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
//                     <td className="px-6 py-4 font-bold text-blue-600">{row.domain}</td>
//                     <td className="px-6 py-4 text-center">{row.year1}</td>
//                     <td className="px-6 py-4 text-center">{row.year2}</td>
//                     <td className="px-6 py-4 text-center">{row.year10}</td>
//                     <td className="px-6 py-4 text-center">{row.renew}</td>
//                     <td className="px-6 py-4 text-center">{row.transfer}</td>
//                     <td className="px-6 py-4 text-center">{row.privacy}</td>
//                     <td className="px-6 py-4 text-center">{row.cpanel}</td>
//                     <td className="px-6 py-4 text-center">
//                       <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200">
//                         Buy Now
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Footer CTA */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Transfer Your Domain?</h2>
//           <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers who trust us with their domains</p>
//           <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Get Started Today
//           </button>
//         </div>
//       </div>
//       <EsteemhostFAQ />
//       <Testimonials />
//     </div>
//   );
// };

// export default DomainTransferPage;