import React, { useEffect, useState } from 'react';
import { Gift, Sparkles, Percent, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FestiveOfferPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const offers = [
    {
      title: "🎉 50% Off Shared Hosting",
      details: "Get 50% OFF on all Linux shared hosting plans. Offer valid till July 31st.",
      code: "FESTIVE50",
    },
    {
      title: "🌟 Free Domain With Annual Plan",
      details: "Buy any annual hosting plan and get a .COM domain absolutely free!",
      code: "FREEDOMAIN",
    },
    {
      title: "🔥 Reseller Hosting @ ₹4,499",
      details: "Flat discount on Professional Reseller Hosting. Limited time only.",
      code: "RESELLERFEST",
    },
    {
      title: "🎁 20% Off VPS Servers",
      details: "Enjoy 20% off on our secure and scalable VPS plans this festive season.",
      code: "VPS20",
    }
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
    <div className="min-h-screen bg-blue-100 relative px-6 py-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold text-sm animate-pulse shadow-lg mb-6">
          <Sparkles className="w-4 h-4" /> Limited Time Offer
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
          EsteemHost <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Festive Deals</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12">
          Celebrate with huge discounts on hosting, domains, and servers. Offers valid for a limited time only!
        </p>
      </motion.div>

      {/* Offer Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-6 bg-white/70 border border-blue-200/50 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">{offer.title}</h3>
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-slate-600 mb-3">{offer.details}</p>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 inline-block rounded-md text-sm font-semibold">
              Use Code: <span className="text-blue-900">{offer.code}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Don’t Miss Out!</h2>
        <p className="text-lg text-slate-600 mb-6">These deals vanish after the festival. Grab your hosting & domain today!</p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-lg">
          Explore Hosting Plans <ArrowRight className="w-5 h-5 inline ml-2" />
        </button>
        <p className="text-sm text-slate-500 mt-4">No coupon stacking • Valid for new purchases only</p>
      </div>
      {/* FAQ Section */}
      <EsteemhostFAQ />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default FestiveOfferPage;
