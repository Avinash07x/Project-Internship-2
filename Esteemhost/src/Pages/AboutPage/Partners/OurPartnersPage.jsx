import React, { useEffect, useState, useRef } from 'react';
import { Users, Globe, Handshake, Award, TrendingUp } from 'lucide-react';
import Namecheap from '../../../assets/Namecheap.svg';
import cPanel from '../../../assets/cPanel.svg';
import Let from '../../../assets/Let.svg';

const OurPartnersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    countries: 0,
    partnerships: 0,
    awards: 0
  });
  const sectionRef = useRef(null);

  // Partner banner image
  const PartnerBanner = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=400&fit=crop";

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const targets = { clients: 10000, countries: 80, partnerships: 50, awards: 15 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targets.clients * progress),
          countries: Math.floor(targets.countries * progress),
          partnerships: Math.floor(targets.partnerships * progress),
          awards: Math.floor(targets.awards * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };
    
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const partners = [
    {
      name: "Google Domains",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Seamless domain provisioning with top-tier DNS integration.",
    },
    {
      name: "Namecheap",
      logo: Namecheap,
      description: "Trusted provider for domain transfers & hosting infrastructure.",
    },
    {
      name: "cPanel",
      logo: cPanel,
      description: "Providing web hosting control panels for our shared hosting clients.",
    },
    {
      name: "Cloudflare",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
      description: "Empowering our DNS and website security with global CDN and DDoS protection.",
    },
    {
      name: "Let's Encrypt",
      logo: Let,
      description: "Free SSL integration for all hosted domains through secure certification.",
    },
    {
      name: "DigitalOcean",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
      description: "Cloud infrastructure for scalable droplets and managed databases.",
    },
    {
      name: "Amazon Web Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "Enterprise-grade cloud services powering our high-availability hosting.",
    },
    {
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      description: "Hybrid cloud solutions enhancing our global resilience.",
    }
  ];

  const stats = [
    {
      icon: Users,
      label: 'Clients Served',
      value: counters.clients,
      suffix: 'K+',
      displayValue: '10K+',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      delay: 0
    },
    {
      icon: Globe,
      label: 'Countries Covered',
      value: counters.countries,
      suffix: '+',
      displayValue: '80+',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      delay: 0.2
    },
    {
      icon: Handshake,
      label: 'Partnerships',
      value: counters.partnerships,
      suffix: '+',
      displayValue: '50+',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      delay: 0.4
    },
    {
      icon: Award,
      label: 'Industry Awards',
      value: counters.awards,
      suffix: '',
      displayValue: '15',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      delay: 0.6
    },
  ];

  // FAQ Component
  const EsteemhostFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: "What makes EsteemHost different from other hosting providers?",
        answer: "EsteemHost combines enterprise-grade infrastructure with personalized support, backed by partnerships with industry leaders like AWS, Cloudflare, and Google."
      },
      {
        question: "How do your partnerships benefit customers?",
        answer: "Our strategic partnerships allow us to offer premium services at competitive prices, ensuring better performance, security, and reliability for all our clients."
      },
      {
        question: "Can I migrate my existing website to EsteemHost?",
        answer: "Yes! We provide free migration services with zero downtime, handling everything from DNS changes to file transfers."
      },
      {
        question: "What support do you offer for businesses?",
        answer: "We offer 24/7 technical support, dedicated account managers for enterprise clients, and custom solutions tailored to your business needs."
      }
    ];

    return (
      <section className="py-16 bg-white/100 backdrop-blur-sm rounded-2xl shadow-lg mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-slate-800 hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Component
  const Testimonials = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        company: "Tech Startup Inc.",
        text: "EsteemHost's partnership network ensures our applications run smoothly across global markets. Their AWS integration is seamless!",
        rating: 5
      },
      {
        name: "Michael Chen",
        company: "E-commerce Solutions",
        text: "The Cloudflare integration and Let's Encrypt SSL certificates give us the security and speed we need for our online store.",
        rating: 5
      },
      {
        name: "Lisa Rodriguez",
        company: "Digital Agency",
        text: "Their partnerships with industry leaders like Google and Microsoft Azure give us confidence in our hosting choice.",
        rating: 5
      }
    ];

    return (
      <section className="py-16 mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden px-6 py-10">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12 py-10">
        <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
            🤝 Our Partners
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Trusted By Industry <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leading Partners
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            We collaborate with the world's most reliable technology providers to deliver secure, scalable, and top-tier hosting solutions.
          </p>
        </div>

        <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'}`}>
          <img
            src={PartnerBanner}
            alt="Our Partners"
            className="w-full max-h-[420px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Technology Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/90 backdrop-blur-sm relative z-10 rounded-2xl shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={i} 
                  className={`text-center p-6 rounded-xl ${stat.bgColor} hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${stat.delay * 1000}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">
                    {stat.displayValue}
                  </h3>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Partner With EsteemHost</h2>
          <p className="text-lg text-slate-600 mb-8">
            Interested in collaborating with us? We're always open to working with visionary companies.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 shadow-lg transition-all duration-300 hover:shadow-xl">
            Contact Our Team
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <EsteemhostFAQ />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default OurPartnersPage;

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
// import Testimonials from '../../../components/Testimonials';
// import PartnerBanner from '../../../assets/4.png';
// import Namecheap from '../../../assets/Namecheap.svg';
// import cPanel from '../../../assets/cPanel.svg';
// import Let from '../../../assets/Let.svg';
// import Cloudflare from '../../../assets/Cloudflare.svg';
// import DigitalOcean from '../../../assets/DigitalOcean.png';
// import AWS from '../../../assets/Let.svg';
// import MicrosoftAzure from '../../../assets/MicrosoftAzure.png';

// const OurPartnersPage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const partners = [
//     {
//       name: "Google Domains",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//       description: "Seamless domain provisioning with top-tier DNS integration.",
//     },
//     {
//       name: "Namecheap",
//       logo: Namecheap,
//       description: "Trusted provider for domain transfers & hosting infrastructure.",
//     },
//     {
//       name: "cPanel",
//       logo: cPanel,
//       description: "Providing web hosting control panels for our shared hosting clients.",
//     },
//     {
//       name: "Cloudflare",
//       logo: Cloudflare,
//       description: "Empowering our DNS and website security with global CDN and DDoS protection.",
//     },
//     {
//       name: "Let's Encrypt",
//       logo: Let ,
//       description: "Free SSL integration for all hosted domains through secure certification.",
//     },
//     {
//       name: "DigitalOcean",
//       logo: DigitalOcean,
//       description: "Cloud infrastructure for scalable droplets and managed databases.",
//     },
//     {
//       name: "Amazon Web Services",
//       logo: AWS,
//       description: "Enterprise-grade cloud services powering our high-availability hosting.",
//     },
//     {
//       name: "Microsoft Azure",
//       logo: MicrosoftAzure,
//       description: "Hybrid cloud solutions enhancing our global resilience.",
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-blue-100 relative overflow-hidden px-6 py-10">
//       {/* Background Animation */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }} />
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
//       </div>

//       {/* Hero Section */}
//       <section className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12 py-10">
//         <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
//             🤝 Our Partners
//           </div>
//           <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
//             Trusted By Industry <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Leading Partners
//             </span>
//           </h1>
//           <p className="text-lg text-slate-600 mb-8">
//             We collaborate with the world's most reliable technology providers to deliver secure, scalable, and top-tier hosting solutions.
//           </p>
//         </div>

//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: 50, scale: 0.95 }}
//           animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : {}}
//           transition={{
//             duration: 2,
//             ease: 'easeOut',
//             scale: { repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'easeInOut' },
//           }}
//         >
//           <img
//             src={PartnerBanner}
//             alt="Our Partners"
//             className="w-full max-h-[420px] object-contain animate-gentle-bounce"
//           />
//         </motion.div>
//       </section>

//       {/* Partner Cards */}
//       <section className="relative z-10 py-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-slate-800 mb-12">Our Strategic Alliances</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {partners.map((partner, i) => (
//               <div
//                 key={i}
//                 className="bg-white/80 p-6 rounded-xl border border-blue-200/50 text-center hover:scale-105 hover:shadow-xl transition"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={`${partner.name} logo`}
//                   className="mx-auto mb-4 max-h-20 object-contain"
//                 />
//                 <h3 className="text-xl font-semibold text-slate-800 mb-2">{partner.name}</h3>
//                 <p className="text-slate-600 text-sm">{partner.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-white/90 relative z-10 rounded-2xl shadow-lg">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {[
//             { icon: 'Users', label: 'Clients Served', value: '10K+' },
//             { icon: 'Globe', label: 'Countries Covered', value: '80+' },
//             { icon: 'Handshake', label: 'Partnerships', value: '50+' },
//             { icon: 'Award', label: 'Industry Awards', value: '15' },
//           ].map((stat, i) => (
//             <div key={i} className="flex flex-col items-center ">
//               <stat.icon size={48} className="text-indigo-600 mb-2" />
//               <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
//               <p className="text-slate-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-10 z-10 relative">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-slate-800 mb-4">Partner With EsteemHost</h2>
//           <p className="text-lg text-slate-600 mb-8">
//             Interested in collaborating with us? We’re always open to working with visionary companies.
//           </p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 shadow-lg transition">
//             Contact Our Team
//           </button>
//         </div>
//       </section>

//       <EsteemhostFAQ />
//       <Testimonials />
//     </div>
//   );
// };

// export default OurPartnersPage;



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
// import Testimonials from '../../../components/Testimonials';
// import PartnerBanner from '../../../assets/4.png';
// import Namecheap from '../../../assets/Namecheap.svg';
// import cPanel from '../../../assets/cPanel.svg';
// import Cloudflare from '../../../assets/Cloudflare.svg';
// import Let from '../../../assets/Let.svg';


// const OurPartnersPage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const partners = [
//     {
//       name: "Google Domains",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//       description: "Collaborating on seamless domain provisioning and DNS services.",
//     },
//     {
//       name: "Namecheap",
//       logo: Namecheap,
//       description: "Trusted for domain transfers and infrastructure support.",
//     },
//     {
//       name: "cPanel",
//       logo: cPanel,
//       description: "Providing web hosting control panels for our shared hosting clients.",
//     },
//     {
//       name: "Cloudflare",
//       logo: Cloudflare,
//       description: "Empowering our DNS and website security with global CDN and DDoS protection.",
//     },
//     {
//       name: "Let's Encrypt",
//       logo: Let ,
//       description: "Free SSL integration for all hosted domains through secure certification.",
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-blue-100 relative overflow-hidden px-6 py-10">
//       {/* Background Animation */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12 py-10">
//         <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
//             🤝 Our Partners
//           </div>
//           <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
//             Trusted By Industry <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leading Partners</span>
//           </h1>
//           <p className="text-lg text-slate-600 mb-8">
//             We collaborate with the world's most reliable technology partners to deliver secure, scalable, and top-tier hosting solutions for our customers.
//           </p>
//         </div>

//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: 50, scale: 0.95 }}
//           animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : {}}
//           transition={{
//             duration: 2,
//             ease: 'easeOut',
//             scale: {
//               repeat: Infinity,
//               repeatType: 'loop',
//               duration: 3,
//               ease: 'easeInOut',
//             },
//           }}
//         >
//           <img
//             src={PartnerBanner}
//             alt="Our Partners"
//             className="w-full max-h-[320px] object-contain animate-gentle-bounce"
//           />
//         </motion.div>
//       </section>

//       {/* Partner Cards */}
//       <section className="relative z-10 py-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-slate-800 mb-12">Our Strategic Alliances</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {partners.map((partner, i) => (
//               <div
//                 key={i}
//                 className="bg-white/70 p-6 rounded-xl border border-blue-200/50 text-center hover:scale-105 hover:shadow-xl transition"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="mx-auto mb-4 max-h-16 object-contain"
//                 />
//                 <h3 className="text-xl font-semibold text-slate-800 mb-2">{partner.name}</h3>
//                 <p className="text-slate-600 text-sm">{partner.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-10 z-10 relative">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-slate-800 mb-4">Partner With EsteemHost</h2>
//           <p className="text-lg text-slate-600 mb-8">
//             Interested in collaborating with us? We’re always open to working with visionary companies.
//           </p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 shadow-lg transition">
//             Contact Our Team
//           </button>
//         </div>
//       </section>

//       <EsteemhostFAQ />
//       <Testimonials />
//     </div>
//   );
// };

// export default OurPartnersPage;
