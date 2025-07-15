import React, { useEffect, useRef, useState } from 'react';
import {
  Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight,
  Check, Star, Upload, Download, Trash2, Plus, X
} from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import { motion } from 'framer-motion';
import Hero60 from '../../../assets/36.png';

const BulkDomainRegistrationPage = () => {
  const [domainList, setDomainList] = useState(['']);
  const [selectedExtension, setSelectedExtension] = useState('.com');
  const [registrationYears, setRegistrationYears] = useState('1');
  const [isVisible, setIsVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const sectionRef = useRef(null);

  // ✅ useEffect inside component to observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const domainExtensions = [
    { ext: '.com', price: 749, popular: true },
    { ext: '.net', price: 899, popular: false },
    { ext: '.org', price: 849, popular: false },
    { ext: '.in', price: 649, popular: true },
    { ext: '.co', price: 1299, popular: false },
    { ext: '.io', price: 2499, popular: false }
  ];

  const yearPricing = {
    1: 1,
    2: 1.8,
    5: 4.2,
    10: 7.5
  };

  const features = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Bulk Upload",
      description: "Upload a CSV file with hundreds of domain names or add them manually using our intuitive interface."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Instant Availability Check",
      description: "Check availability of multiple domains simultaneously and see real-time results for all your domains."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Bulk Management",
      description: "Manage DNS, renewals, and settings for all your domains from a single, powerful control panel."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Volume Discounts",
      description: "Get better pricing when registering multiple domains. The more you register, the more you save."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multiple Extensions",
      description: "Register the same domain name across multiple extensions to protect your brand identity."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Bulk Privacy Protection",
      description: "Apply WHOIS privacy protection to all your domains with a single click for enhanced security."
    }
  ];

  const addDomainField = () => {
    setDomainList([...domainList, '']);
  };

  const removeDomainField = (index) => {
    if (domainList.length > 1) {
      const newList = domainList.filter((_, i) => i !== index);
      setDomainList(newList);
    }
  };

  const updateDomain = (index, value) => {
    const newList = [...domainList];
    newList[index] = value;
    setDomainList(newList);
  };

  const handleBulkSearch = () => {
    const validDomains = domainList.filter(domain => domain.trim() !== '');
    const selectedExt = domainExtensions.find(ext => ext.ext === selectedExtension);

    const results = validDomains.map(domain => {
      const isAvailable = Math.random() > 0.3;
      const totalPrice = selectedExt.price * parseInt(registrationYears) * yearPricing[registrationYears];

      return {
        domain: domain + selectedExtension,
        available: isAvailable,
        price: totalPrice,
        selected: isAvailable
      };
    });

    setSearchResults(results);
    setShowResults(true);
  };

  const toggleDomainSelection = (index) => {
    const newResults = [...searchResults];
    newResults[index].selected = !newResults[index].selected;
    setSearchResults(newResults);
  };

  const calculateTotal = () => {
    return searchResults
      .filter(result => result.selected && result.available)
      .reduce((total, result) => total + result.price, 0);
  };

  const getSelectedCount = () => {
    return searchResults.filter(result => result.selected && result.available).length;
  };

  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csv = e.target.result;
        const domains = csv.split('\n').map(line => line.trim()).filter(line => line);
        setDomainList(domains);
      };
      reader.readAsText(file);
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
      <section
        ref={sectionRef}
        className="relative py-7 px-6 z-10 backdrop-blur-sm from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Text Content */}
          <motion.div
            className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              🚀 Bulk Registration - Save More
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              REGISTER
              MULTIPLE
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DOMAINS AT ONCE
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto lg:mx-0">
              Save time and money by registering multiple domains simultaneously. Perfect for businesses,
              agencies, and domain investors looking to secure their digital presence.
            </p>
          </motion.div>
          {/* Animated Image Left */}
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
              src={Hero60}
              alt="Servers"
              className="w-full h-auto max-h-[400px] object-cover animate-gentle-bounce"
            />
          </motion.div>
        </div>
      </section>


      {/* Bulk Registration Form */}
      <section className="py-8 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bulk Domain Registration</h2>

            {/* Upload CSV Option */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-xl border border-blue-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Upload</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <label className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                  <Upload className="w-5 h-5" />
                  Upload CSV File
                  <input type="file" accept=".csv,.txt" onChange={handleCSVUpload} className="hidden" />
                </label>
                <span className="text-slate-600">or add domains manually below</span>
              </div>
            </div>

            {/* Manual Domain Entry */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Domain Names</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {domainList.map((domain, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => updateDomain(index, e.target.value)}
                      placeholder={`Enter domain name ${index + 1}`}
                      className="flex-1 px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select
                      value={selectedExtension}
                      onChange={(e) => setSelectedExtension(e.target.value)}
                      className="px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {domainExtensions.map((ext) => (
                        <option key={ext.ext} value={ext.ext}>
                          {ext.ext} - ₹{ext.price}
                        </option>
                      ))}
                    </select>
                    {domainList.length > 1 && (
                      <button
                        onClick={() => removeDomainField(index)}
                        className="px-3 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={addDomainField}
                className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Plus className="w-5 h-5" />
                Add Another Domain
              </button>
            </div>

            {/* Registration Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Registration Period</label>
                <select
                  value={registrationYears}
                  onChange={(e) => setRegistrationYears(e.target.value)}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">1 Year</option>
                  <option value="2">2 Years (10% off)</option>
                  <option value="5">5 Years (20% off)</option>
                  <option value="10">10 Years (25% off)</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleBulkSearch}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 font-semibold"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {showResults && (
        <section className="py-8 px-6 backdrop-blur-sm z-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800">Search Results</h2>
                <div className="text-right">
                  <div className="text-sm text-slate-600">Selected: {getSelectedCount()} domains</div>
                  <div className="text-2xl font-bold text-blue-600">Total: ₹{calculateTotal().toLocaleString()}</div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-200/50">
                      <th className="text-left py-3 px-4">Select</th>
                      <th className="text-left py-3 px-4">Domain</th>
                      <th className="text-center py-3 px-4">Status</th>
                      <th className="text-center py-3 px-4">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((result, index) => (
                      <tr key={index} className="border-b border-blue-200/30 hover:bg-blue-50/50 transition-colors">
                        <td className="py-4 px-4">
                          {result.available && (
                            <input
                              type="checkbox"
                              checked={result.selected}
                              onChange={() => toggleDomainSelection(index)}
                              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                          )}
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-800">{result.domain}</td>
                        <td className="py-4 px-4 text-center">
                          {result.available ? (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
                          ) : (
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Taken</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {result.available ? (
                            <span className="text-blue-600 font-semibold">₹{result.price.toLocaleString()}</span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {getSelectedCount() > 0 && (
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
                    Register {getSelectedCount()} Domains - ₹{calculateTotal().toLocaleString()}
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Volume Discounts */}
      <section className="py-8 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Volume <span className="text-blue-600">Discounts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-slate-600 mb-2">Domains</div>
              <div className="text-green-600 font-semibold">5% OFF</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600 mb-2">Domains</div>
              <div className="text-green-600 font-semibold">10% OFF</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600 mb-2">Domains</div>
              <div className="text-green-600 font-semibold">15% OFF</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-slate-600 mb-2">Domains</div>
              <div className="text-green-600 font-semibold">20% OFF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Bulk Registration <span className="text-blue-600">Features</span>
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

      {/* Why Choose Bulk Registration */}
      <section className="py-8 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-12">Why Choose Bulk Registration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Save Time</h3>
              <p className="text-slate-600">Register hundreds of domains in minutes instead of hours</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Save Money</h3>
              <p className="text-slate-600">Volume discounts up to 20% off for large orders</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Simplified Management</h3>
              <p className="text-slate-600">Manage all domains from one powerful dashboard</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
            Start Bulk Registration <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </section>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default BulkDomainRegistrationPage;



// import React, { useState, useEffect } from 'react';
// import { Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight, Check, Star, Upload, Download, Trash2, Plus, X } from 'lucide-react';
// import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
// import Testimonials from '../../../components/Testimonials';

// const BulkDomainRegistrationPage = () => {
//   const [domainList, setDomainList] = useState(['']);
//   const [selectedExtension, setSelectedExtension] = useState('.com');
//   const [registrationYears, setRegistrationYears] = useState('1');
//   const [isVisible, setIsVisible] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const domainExtensions = [
//     { ext: '.com', price: 749, popular: true },
//     { ext: '.net', price: 899, popular: false },
//     { ext: '.org', price: 849, popular: false },
//     { ext: '.in', price: 649, popular: true },
//     { ext: '.co', price: 1299, popular: false },
//     { ext: '.io', price: 2499, popular: false }
//   ];

//   const yearPricing = {
//     1: 1,
//     2: 1.8,
//     5: 4.2,
//     10: 7.5
//   };

//   const features = [
//     {
//       icon: <Upload className="w-8 h-8" />,
//       title: "Bulk Upload",
//       description: "Upload a CSV file with hundreds of domain names or add them manually using our intuitive interface."
//     },
//     {
//       icon: <Search className="w-8 h-8" />,
//       title: "Instant Availability Check",
//       description: "Check availability of multiple domains simultaneously and see real-time results for all your domains."
//     },
//     {
//       icon: <Settings className="w-8 h-8" />,
//       title: "Bulk Management",
//       description: "Manage DNS, renewals, and settings for all your domains from a single, powerful control panel."
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Volume Discounts",
//       description: "Get better pricing when registering multiple domains. The more you register, the more you save."
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Multiple Extensions",
//       description: "Register the same domain name across multiple extensions to protect your brand identity."
//     },
//     {
//       icon: <Lock className="w-8 h-8" />,
//       title: "Bulk Privacy Protection",
//       description: "Apply WHOIS privacy protection to all your domains with a single click for enhanced security."
//     }
//   ];

//   const addDomainField = () => {
//     setDomainList([...domainList, '']);
//   };

//   const removeDomainField = (index) => {
//     if (domainList.length > 1) {
//       const newList = domainList.filter((_, i) => i !== index);
//       setDomainList(newList);
//     }
//   };

//   const updateDomain = (index, value) => {
//     const newList = [...domainList];
//     newList[index] = value;
//     setDomainList(newList);
//   };

//   const handleBulkSearch = () => {
//     const validDomains = domainList.filter(domain => domain.trim() !== '');
//     const selectedExt = domainExtensions.find(ext => ext.ext === selectedExtension);

//     const results = validDomains.map(domain => {
//       const isAvailable = Math.random() > 0.3; // Simulate availability
//       const totalPrice = selectedExt.price * parseInt(registrationYears) * yearPricing[registrationYears];

//       return {
//         domain: domain + selectedExtension,
//         available: isAvailable,
//         price: totalPrice,
//         selected: isAvailable
//       };
//     });

//     setSearchResults(results);
//     setShowResults(true);
//   };

//   const toggleDomainSelection = (index) => {
//     const newResults = [...searchResults];
//     newResults[index].selected = !newResults[index].selected;
//     setSearchResults(newResults);
//   };

//   const calculateTotal = () => {
//     return searchResults
//       .filter(result => result.selected && result.available)
//       .reduce((total, result) => total + result.price, 0);
//   };

//   const getSelectedCount = () => {
//     return searchResults.filter(result => result.selected && result.available).length;
//   };

//   const handleCSVUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const csv = e.target.result;
//         const domains = csv.split('\n').map(line => line.trim()).filter(line => line);
//         setDomainList(domains);
//       };
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div className="min-h-screen relative w-full bg-blue-100 overflow-hidden">
//       {/* Background Animation Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative py-20 px-6 z-10">
//         <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
//             🚀 Bulk Registration - Save More
//           </div>
//           <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
//             REGISTER MULTIPLE<br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               DOMAINS AT ONCE
//             </span>
//           </h1>
//           <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
//             Save time and money by registering multiple domains simultaneously. Perfect for businesses,
//             agencies, and domain investors looking to secure their digital presence.
//           </p>
//         </div>
//       </section>

//       {/* Bulk Registration Form */}
//       <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
//             <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bulk Domain Registration</h2>

//             {/* Upload CSV Option */}
//             <div className="mb-8 p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-xl border border-blue-200/50">
//               <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Upload</h3>
//               <div className="flex flex-col sm:flex-row gap-4 items-center">
//                 <label className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
//                   <Upload className="w-5 h-5" />
//                   Upload CSV File
//                   <input type="file" accept=".csv,.txt" onChange={handleCSVUpload} className="hidden" />
//                 </label>
//                 <span className="text-slate-600">or add domains manually below</span>
//               </div>
//             </div>

//             {/* Manual Domain Entry */}
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold text-slate-800 mb-4">Domain Names</h3>
//               <div className="space-y-3 max-h-80 overflow-y-auto">
//                 {domainList.map((domain, index) => (
//                   <div key={index} className="flex gap-2">
//                     <input
//                       type="text"
//                       value={domain}
//                       onChange={(e) => updateDomain(index, e.target.value)}
//                       placeholder={`Enter domain name ${index + 1}`}
//                       className="flex-1 px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                     <select
//                       value={selectedExtension}
//                       onChange={(e) => setSelectedExtension(e.target.value)}
//                       className="px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       {domainExtensions.map((ext) => (
//                         <option key={ext.ext} value={ext.ext}>
//                           {ext.ext} - ₹{ext.price}
//                         </option>
//                       ))}
//                     </select>
//                     {domainList.length > 1 && (
//                       <button
//                         onClick={() => removeDomainField(index)}
//                         className="px-3 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={addDomainField}
//                 className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
//               >
//                 <Plus className="w-5 h-5" />
//                 Add Another Domain
//               </button>
//             </div>

//             {/* Registration Options */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Registration Period</label>
//                 <select
//                   value={registrationYears}
//                   onChange={(e) => setRegistrationYears(e.target.value)}
//                   className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="1">1 Year</option>
//                   <option value="2">2 Years (10% off)</option>
//                   <option value="5">5 Years (20% off)</option>
//                   <option value="10">10 Years (25% off)</option>
//                 </select>
//               </div>
//               <div className="flex items-end">
//                 <button
//                   onClick={handleBulkSearch}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 font-semibold"
//                 >
//                   Check Availability
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search Results */}
//       {showResults && (
//         <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
//           <div className="max-w-6xl mx-auto">
//             <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold text-slate-800">Search Results</h2>
//                 <div className="text-right">
//                   <div className="text-sm text-slate-600">Selected: {getSelectedCount()} domains</div>
//                   <div className="text-2xl font-bold text-blue-600">Total: ₹{calculateTotal().toLocaleString()}</div>
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-blue-200/50">
//                       <th className="text-left py-3 px-4">Select</th>
//                       <th className="text-left py-3 px-4">Domain</th>
//                       <th className="text-center py-3 px-4">Status</th>
//                       <th className="text-center py-3 px-4">Price</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {searchResults.map((result, index) => (
//                       <tr key={index} className="border-b border-blue-200/30 hover:bg-blue-50/50 transition-colors">
//                         <td className="py-4 px-4">
//                           {result.available && (
//                             <input
//                               type="checkbox"
//                               checked={result.selected}
//                               onChange={() => toggleDomainSelection(index)}
//                               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//                             />
//                           )}
//                         </td>
//                         <td className="py-4 px-4 font-medium text-slate-800">{result.domain}</td>
//                         <td className="py-4 px-4 text-center">
//                           {result.available ? (
//                             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
//                           ) : (
//                             <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Taken</span>
//                           )}
//                         </td>
//                         <td className="py-4 px-4 text-center">
//                           {result.available ? (
//                             <span className="text-blue-600 font-semibold">₹{result.price.toLocaleString()}</span>
//                           ) : (
//                             <span className="text-slate-400">-</span>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {getSelectedCount() > 0 && (
//                 <div className="mt-8 text-center">
//                   <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
//                     Register {getSelectedCount()} Domains - ₹{calculateTotal().toLocaleString()}
//                     <ArrowRight className="w-5 h-5 inline ml-2" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Volume Discounts */}
//       <section className="py-20 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
//             Volume <span className="text-blue-600">Discounts</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
//               <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
//               <div className="text-slate-600 mb-2">Domains</div>
//               <div className="text-green-600 font-semibold">5% OFF</div>
//             </div>
//             <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
//               <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
//               <div className="text-slate-600 mb-2">Domains</div>
//               <div className="text-green-600 font-semibold">10% OFF</div>
//             </div>
//             <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
//               <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
//               <div className="text-slate-600 mb-2">Domains</div>
//               <div className="text-green-600 font-semibold">15% OFF</div>
//             </div>
//             <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50">
//               <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
//               <div className="text-slate-600 mb-2">Domains</div>
//               <div className="text-green-600 font-semibold">20% OFF</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20 px-6 backdrop-blur-sm z-10 relative">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
//             Bulk Registration <span className="text-blue-600">Features</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, i) => (
//               <div key={i} className="p-6 rounded-xl bg-white/60 border border-blue-200/50 hover:scale-105 transition-all hover:shadow-xl">
//                 <div className="text-blue-600 mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
//                 <p className="text-slate-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Bulk Registration */}
//       <section className="py-20 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-bold text-slate-800 mb-12">Why Choose Bulk Registration?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             <div className="flex flex-col items-center">
//               <div className="bg-green-500 p-4 rounded-full mb-4">
//                 <Check className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-slate-800">Save Time</h3>
//               <p className="text-slate-600">Register hundreds of domains in minutes instead of hours</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="bg-blue-500 p-4 rounded-full mb-4">
//                 <Star className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-slate-800">Save Money</h3>
//               <p className="text-slate-600">Volume discounts up to 20% off for large orders</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="bg-purple-500 p-4 rounded-full mb-4">
//                 <Shield className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-slate-800">Simplified Management</h3>
//               <p className="text-slate-600">Manage all domains from one powerful dashboard</p>
//             </div>
//           </div>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
//             Start Bulk Registration <ArrowRight className="w-5 h-5 inline ml-2" />
//           </button>
//         </div>
//       </section>
//       <EsteemhostFAQ />
//       <Testimonials />
//     </div>
//   );
// };

// export default BulkDomainRegistrationPage;