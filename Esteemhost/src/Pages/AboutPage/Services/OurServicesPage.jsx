// import React, { useEffect, useState } from 'react';
// import {
//   Server, Globe, Cloud, Shield, Database, LifeBuoy, Settings, MonitorCheck
// } from 'lucide-react';

// const OurServicesPage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const services = [
//     {
//       icon: <Server className="w-8 h-8" />,
//       title: 'Shared Hosting',
//       description: 'Affordable and reliable hosting with cPanel, email, and 24/7 support.',
//       features: ['cPanel Control Panel', 'Email Accounts', 'Free SSL Certificate', '99.9% Uptime'],
//       price: '$3.99/month'
//     },
//     {
//       icon: <Cloud className="w-8 h-8" />,
//       title: 'Cloud VPS',
//       description: 'Scalable virtual servers with SSD storage and root access for developers.',
//       features: ['SSD Storage', 'Root Access', 'Scalable Resources', 'Multiple OS'],
//       price: '$19.99/month'
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: 'Domain Registration',
//       description: 'Register, renew, and transfer domain names with full DNS management.',
//       features: ['DNS Management', 'WHOIS Privacy', 'Auto-Renewal', '24/7 Support'],
//       price: '$12.99/year'
//     },
//     {
//       icon: <Database className="w-8 h-8" />,
//       title: 'Reseller Hosting',
//       description: 'Start your own hosting business with our white-label reseller platform.',
//       features: ['White-Label Platform', 'Custom Pricing', 'Billing System', 'Marketing Tools'],
//       price: '$29.99/month'
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: 'SSL Certificates',
//       description: 'Secure your website with industry-standard SSL and encryption tools.',
//       features: ['256-bit Encryption', 'Trust Seal', 'Wildcard Options', 'Easy Installation'],
//       price: '$9.99/year'
//     },
//     {
//       icon: <LifeBuoy className="w-8 h-8" />,
//       title: '24/7 Support',
//       description: 'Friendly experts ready to assist via live chat, phone, and email anytime.',
//       features: ['Live Chat', 'Phone Support', 'Email Tickets', 'Knowledge Base'],
//       price: 'Included'
//     },
//     {
//       icon: <Settings className="w-8 h-8" />,
//       title: 'Dedicated Servers',
//       description: 'Enterprise-grade servers for maximum power, control, and performance.',
//       features: ['Full Root Access', 'Custom Configuration', 'Enterprise Hardware', 'Managed Options'],
//       price: '$199.99/month'
//     },
//     {
//       icon: <MonitorCheck className="w-8 h-8" />,
//       title: 'Website Monitoring',
//       description: 'Uptime and performance monitoring with instant alerts and reporting.',
//       features: ['24/7 Monitoring', 'Instant Alerts', 'Performance Reports', 'Multiple Locations'],
//       price: '$4.99/month'
//     }
//   ];

//   // FAQ Component
//   const EsteemhostFAQ = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const faqs = [
//       {
//         question: "What hosting plan is best for beginners?",
//         answer: "Our Shared Hosting plan is perfect for beginners. It includes everything you need to get started: cPanel, email accounts, free SSL, and 24/7 support, all at an affordable price."
//       },
//       {
//         question: "Do you offer free website migration?",
//         answer: "Yes! We provide free website migration services for all new customers. Our technical team will handle the entire migration process with zero downtime."
//       },
//       {
//         question: "What's included with 24/7 support?",
//         answer: "Our 24/7 support includes live chat, phone support, email tickets, and access to our comprehensive knowledge base. Our expert team is always ready to help."
//       },
//       {
//         question: "Can I upgrade my hosting plan later?",
//         answer: "Absolutely! You can upgrade your hosting plan at any time. We'll help you seamlessly transition to a higher-tier plan as your website grows."
//       },
//       {
//         question: "Do you provide SSL certificates?",
//         answer: "Yes, we offer free SSL certificates with all hosting plans, plus premium SSL options for enhanced security and validation."
//       }
//     ];

//     return (
//       <section className="py-16 px-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mx-6 mb-12">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
//                 <button
//                   className="w-full px-6 py-4 text-left font-semibold text-slate-800 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 >
//                   {faq.question}
//                   <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
//                     +
//                   </span>
//                 </button>
//                 {openIndex === index && (
//                   <div className="px-6 pb-4 text-slate-600">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };

//   // Testimonials Component
//   const Testimonials = () => {
//     const testimonials = [
//       {
//         name: "Alex Thompson",
//         company: "TechStart Solutions",
//         text: "EsteemHost's shared hosting has been perfect for our startup. Great performance and amazing support!",
//         rating: 5,
//         service: "Shared Hosting"
//       },
//       {
//         name: "Maria Garcia",
//         company: "Design Studio Pro",
//         text: "The VPS hosting gives us exactly the control and performance we need for our client projects.",
//         rating: 5,
//         service: "Cloud VPS"
//       },
//       {
//         name: "David Kim",
//         company: "E-commerce Plus",
//         text: "Their dedicated server hosting has been rock-solid for our high-traffic e-commerce site.",
//         rating: 5,
//         service: "Dedicated Servers"
//       }
//     ];

//     return (
//       <section className="py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
//             What Our Clients Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-yellow-500 text-xl">★</span>
//                   ))}
//                 </div>
//                 <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
//                 <div className="mb-2">
//                   <p className="font-semibold text-slate-800">{testimonial.name}</p>
//                   <p className="text-slate-500 text-sm">{testimonial.company}</p>
//                 </div>
//                 <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                   {testimonial.service}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative py-12 px-6 z-10">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Text */}
//           <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
//               💻 Our Services
//             </div>
//             <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
//               Everything You Need <br />
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">To Host & Grow</span>
//             </h1>
//             <p className="text-lg text-slate-600 mb-8">
//               From domains to dedicated servers, EsteemHost offers all-in-one hosting solutions designed to scale with your business.
//             </p>
//             <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all shadow-lg">
//               Get Started
//             </button>
//           </div>

//           {/* Image */}
//           <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
//                 alt="Our Services" 
//                 className="w-full max-h-[480px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-12 px-6 backdrop-blur-sm z-10 relative">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
//             Explore Our <span className="text-blue-600">Services</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {services.map((service, i) => (
//               <div 
//                 key={i} 
//                 className={`p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2 text-slate-800">{service.title}</h3>
//                 <p className="text-slate-600 mb-4">{service.description}</p>
                
//                 {/* Features List */}
//                 <ul className="text-sm text-slate-500 mb-4 space-y-1">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center justify-center">
//                       <span className="text-green-500 mr-2">✓</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
                
//                 {/* Price */}
//                 <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                
//                 {/* CTA Button */}
//                 <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-200 shadow-md">
//                   Learn More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 px-6 bg-white/80 backdrop-blur-sm mx-6 rounded-2xl shadow-lg mb-12">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-slate-800 mb-12">Why Choose EsteemHost?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6">
//               <div className="text-blue-600 mb-4">
//                 <Shield className="w-12 h-12 mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">99.9% Uptime Guarantee</h3>
//               <p className="text-slate-600">
//                 We guarantee your website will be online and accessible 99.9% of the time, backed by our SLA.
//               </p>
//             </div>
//             <div className="p-6">
//               <div className="text-blue-600 mb-4">
//                 <LifeBuoy className="w-12 h-12 mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">24/7 Expert Support</h3>
//               <p className="text-slate-600">
//                 Our certified technical experts are available around the clock to help you with any issues.
//               </p>
//             </div>
//             <div className="p-6">
//               <div className="text-blue-600 mb-4">
//                 <Settings className="w-12 h-12 mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">Easy Management</h3>
//               <p className="text-slate-600">
//                 Intuitive control panels and one-click installations make managing your hosting simple.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-slate-800 mb-6">Ready to Get Started?</h2>
//           <p className="text-lg text-slate-600 mb-8">
//             Choose the perfect hosting solution for your needs and launch your website today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all shadow-lg">
//               View All Plans
//             </button>
//             <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ & Testimonials */}
//       <EsteemhostFAQ />
//       <Testimonials />
//     </div>
//   );
// };

// export default OurServicesPage;

import React, { useEffect, useState } from 'react';
import {
  Server, Globe, Cloud, Shield, Database, LifeBuoy, Settings, MonitorCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceImage from '../../../assets/3.png'; // 🔁 Replace with your actual image
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';

const OurServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Shared Hosting',
      description: 'Affordable and reliable hosting with cPanel, email, and 24/7 support.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud VPS',
      description: 'Scalable virtual servers with SSD storage and root access for developers.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Domain Registration',
      description: 'Register, renew, and transfer domain names with full DNS management.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Reseller Hosting',
      description: 'Start your own hosting business with our white-label reseller platform.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'SSL Certificates',
      description: 'Secure your website with industry-standard SSL and encryption tools.'
    },
    {
      icon: <LifeBuoy className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Friendly experts ready to assist via live chat, phone, and email anytime.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Dedicated Servers',
      description: 'Enterprise-grade servers for maximum power, control, and performance.'
    },
    {
      icon: <MonitorCheck className="w-8 h-8" />,
      title: 'Website Monitoring',
      description: 'Uptime and performance monitoring with instant alerts and reporting.'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-blue-100 relative overflow-hidden">
      {/* Background Blur Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              💻 Our Services
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Everything You Need <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">To Host & Grow</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              From domains to dedicated servers, EsteemHost offers all-in-one hosting solutions designed to scale with your business.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-all shadow-lg">
              Get Started
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
            <img src={ServiceImage} alt="Our Services" className="w-full max-h-[480px] object-contain animate-gentle-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Explore Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-6 bg-white/70 rounded-xl border border-blue-200/50 text-center hover:shadow-xl hover:scale-105 transition">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
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

export default OurServicesPage;
