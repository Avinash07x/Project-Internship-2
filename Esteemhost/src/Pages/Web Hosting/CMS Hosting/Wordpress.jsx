import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WordPressHostingPage = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(0);

  // Mock pricing data - in real app this would come from props or API
  const pricingData = {
    wordpresshosting: [
      {
        title: "Starter",
        price: { USD: 99, INR: 99 },
        url: "#",
        features: ["1 Website", "2 GB Storage", "5GB Bandwidth", "5 Email Accounts", "2 Sub Domains", "1 Mysql Database", "One click installation scripts"]
      },
      {
        title: "Professional",
        price: { USD: 149, INR: 149 },
        url: "#",
        features: ["1 Website", "Unlimited Storage", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Sub Domains", "Unlimited Mysql Database", "One click installation scripts"]
      },
      {
        title: "Business",
        price: { USD: 199, INR: 199 },
        url: "#",
        features: ["10 Website", "Unlimited Storage", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Sub Domains", "Unlimited Mysql Database", "One click installation scripts"]
      },
      {
        title: "Enterprise",
        price: { USD: 299, INR: 299 },
        url: "#",
        features: ["Unlimited Website", "Unlimited Storage", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Sub Domains", "Unlimited Mysql Database", "One click installation scripts"]
      }
    ]
  };

  const currency = { USD: '$', INR: '₹' };
  const currentCurrency = 'INR';

  const sliderData = [
    { website: 'Unlimited', storage: '25 GB', bandwidth: 'Unlimited', mysql: 'Unlimited', email: 'Unlimited', ftp: 'Unlimited' },
    { website: 'Unlimited', storage: '50 GB', bandwidth: 'Unlimited', mysql: 'Unlimited', email: 'Unlimited', ftp: 'Unlimited' },
    { website: 'Unlimited', storage: '100 GB', bandwidth: 'Unlimited', mysql: 'Unlimited', email: 'Unlimited', ftp: 'Unlimited' },
    { website: 'Unlimited', storage: '200 GB', bandwidth: 'Unlimited', mysql: 'Unlimited', email: 'Unlimited', ftp: 'Unlimited' }
  ];

  const faqData = [
    {
      question: "What is a WordPress Hosting?",
      answer: "WordPress hosting plans in India are extraordinarily redone for the best execution with our new WordPress condition. Our WordPress Toolkit hosting accompanies ground-breaking highlights that empower you to test new modules, subjects, and code before pushing it live to your destinations."
    },
    {
      question: "Why Choose WordPress Hosting?",
      answer: "Choose more than several promptly accessible topics, modules and administrations to manufacture your site with negligible coding. Facilitating exceptionally streamlined for WordPress controlled sites."
    },
    {
      question: "How WordPress Web Hosting Different From Linux Web Hosting?",
      answer: "Blasting Fast Website: With first-class equipment and reserving, which stores your sites habitually utilized pages and an all-around circulated CDN, your site will stack up to 2x speedier."
    },
    {
      question: "Do I need to Install WordPress Manually?",
      answer: "The one-click installer does everything from start to finish – downloads WP creates a DB with a DB user, creates an admin account in WordPress and initializes WordPress."
    },
    {
      question: "Do I need to Update WordPress Manually?",
      answer: "Get programmed updates of all your WordPress establishments from one main issue. Refresh WordPress, modules, and also topics, specifically or in mass."
    }
  ];

  const features = [
    {
      icon: "🖥️",
      title: "Control Panel-Cpanel",
      desc: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc."
    },
    {
      icon: "💾",
      title: "Disk Space",
      desc: "Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it."
    },
    {
      icon: "🚀",
      title: "E-Commerce Features",
      desc: "EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce Shopping Cart, eCommerce Framework Shopping Cart can be installed with just a click."
    },
    {
      icon: "🔒",
      title: "For Programmers",
      desc: "Esteemhost provides you the freedom to forget your website designed with the latest programming languages by supporting it. CGI, PHP 5, Perl, Python, Free Module Installation, htaccess support, SSI, SMTP Support, Cron, FrontPage."
    },
    {
      icon: "🏆",
      title: "Money Back Guarantee",
      desc: "We offer a 100% money-back refund for a full 30 days if you are ever dissatisfied with our service as we are referred by 99% of its clients as the best hosting solution provider."
    },
    {
      icon: "👨‍⚕️",
      title: "Email Features",
      desc: "Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains."
    },
    {
      icon: "☁️",
      title: "Free Google Ads Credit",
      desc: "Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-. Google AdWords is Google's advertising program and the Internet's leading provider of pay-per-click (PPC) advertising."
    },
    {
      icon: "📞",
      title: "Customer Support 24/7",
      desc: "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Head equivalent */}
      <div className="hidden">
        <title>WordPress Hosting in India + Free SSL | Best WordPress Hosting Provider</title>
        <meta name="description" content="Get 4X Faster WordPress Hosting in India with free SSL Buy Now! Esteemhost has #1 recommended wordpress web hosting provider with 1 click installation, free domain and backup." />
      </div>

      {/* Hero Section with Pricing Slider */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">WordPress Hosting</h2>
            <p className="text-xl opacity-90">Experience The Uninterrupted and Fast Web Hosting</p>
          </div>

          {/* Pricing Slider */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg">
              10% off
            </div>
            
            {/* Server Images */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {pricingData.wordpresshosting.map((plan, index) => (
                  <div key={index} className={`text-center p-4 rounded-lg cursor-pointer transition-all ${activeSlider === index ? 'bg-blue-100 scale-105' : 'hover:bg-gray-100'}`} onClick={() => setActiveSlider(index)}>
                    <h4 className="font-semibold mb-2">{plan.title}</h4>
                    <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-white font-bold">S{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Range */}
            <div className="mb-8">
              <input
                type="range"
                min="0"
                max="3"
                value={activeSlider}
                onChange={(e) => setActiveSlider(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Features Display */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Website</span>
                <span className="font-semibold">{sliderData[activeSlider].website}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Storage</span>
                <span className="font-semibold">{sliderData[activeSlider].storage}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Bandwidth</span>
                <span className="font-semibold">{sliderData[activeSlider].bandwidth}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">MySQL</span>
                <span className="font-semibold">{sliderData[activeSlider].mysql}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Email</span>
                <span className="font-semibold">{sliderData[activeSlider].email}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">FTP Account</span>
                <span className="font-semibold">{sliderData[activeSlider].ftp}</span>
              </div>
            </div>

            {/* Price and Action */}
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {currency[currentCurrency]}{pricingData.wordpresshosting[activeSlider].price[currentCurrency]}/m
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">WordPress Hosting Features</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">WordPress Hosting Pricing Table</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingData.wordpresshosting.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${index === 1 ? 'border-2 border-green-500' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 && "web hosting within budget for beginners and small websites"}
                    {index === 1 && "Unlimited Resources for one heavy traffic and big websites"}
                    {index === 2 && "If you have multiple websites than we have solution for you"}
                    {index === 3 && "You may required everything unlimited that you will get here"}
                  </p>
                  <div className="mb-6">
                    <span className="text-sm text-gray-500">Start at</span>
                    <div className="text-3xl font-bold text-blue-600">
                      {currency[currentCurrency]}{plan.price[currentCurrency]}
                      <span className="text-lg text-gray-500">/m</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">WordPress Hosting FAQ</h2>
            <p className="text-gray-600">Frequently Asked Questions</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-4">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                >
                  <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                  {activeFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema equivalent would go in a real Next.js app */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Service",
            "name": "WordPress Hosting",
            "description": "2024's best cheap WordPress hosting in India offered! Meet your online Solution Partner with PHP WordPress support, free SSL & live support.",
            "brand": {
              "@type": "Brand",
              "name": "Esteemhost technologies"
            },
            "offers": [
              {
                "@type": "AggregateOffer",
                "name": "Starter WordPress Hosting",
                "priceCurrency": "INR",
                "lowPrice": 99
              },
              {
                "@type": "AggregateOffer",
                "name": "Professional WordPress Hosting",
                "priceCurrency": "INR",
                "lowPrice": 149
              },
              {
                "@type": "AggregateOffer",
                "name": "Business WordPress Hosting",
                "priceCurrency": "INR",
                "lowPrice": 199
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default WordPressHostingPage;