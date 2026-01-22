import React, { useState, useEffect } from 'react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';

const LinuxHostingPage = () => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Hosting plans data
  const hostingPlans = [
    {
      title: 'Starter',
      price: { USD: 149, INR: 149, EUR: 149, GBP: 149, CAD: 149 },
      currency: { USD: '$', INR: '₹', EUR: '€', GBP: '£', CAD: '$' },
      url: '#',
      features: {
        websites: '1 Website',
        storage: '20 GB',
        bandwidth: '100GB Bandwidth',
        mysql: '1 mysql',
        email: '7',
        subdomains: '2'
      },
      description: 'web hosting within budget for beginners and small websites',
      detailedFeatures: [
        '1 Website',
        '20 GB Storage',
        '100GB Bandwidth',
        '7 Email Accounts',
        '2 Sub Domains',
        '1 Mysql Database',
        'One click installation scripts',
        'Free SSL'
      ]
    },
    {
      title: 'Professional',
      price: { USD: 299, INR: 299, EUR: 299, GBP: 299, CAD: 299 },
      currency: { USD: '$', INR: '₹', EUR: '€', GBP: '£', CAD: '$' },
      url: '#',
      features: {
        websites: '5 Website',
        storage: 'Unlimited',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        subdomains: 'Unlimited'
      },
      description: 'Unlimited Resources for one heavy traffic and big websites',
      detailedFeatures: [
        '5 Website',
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Unlimited Sub Domains',
        'Unlimited Mysql Database',
        'One click installation scripts',
        'Free SSL'
      ],
      popular: true
    },
    {
      title: 'Business',
      price: { USD: 499, INR: 499, EUR: 499, GBP: 499, CAD: 499 },
      currency: { USD: '$', INR: '₹', EUR: '€', GBP: '£', CAD: '$' },
      url: '#',
      features: {
        websites: '10 Website',
        storage: 'Unlimited',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        subdomains: 'Unlimited'
      },
      description: 'If you have multiple websites than we have solution for you',
      detailedFeatures: [
        '10 Website',
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Unlimited Sub Domains',
        'Unlimited Mysql Database',
        'One click installation scripts',
        'Free SSL'
      ]
    },
    {
      title: 'Enterprise',
      price: { USD: 799, INR: 799, EUR: 799, GBP: 799, CAD: 799 },
      currency: { USD: '$', INR: '₹', EUR: '€', GBP: '£', CAD: '$' },
      url: '#',
      features: {
        websites: 'Unlimited',
        storage: 'Unlimited',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        subdomains: 'Unlimited'
      },
      description: 'You may required everything unlimited that you will get here',
      detailedFeatures: [
        'Unlimited Website',
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Unlimited Sub Domains',
        'Unlimited Mysql Database',
        'One click installation scripts',
        'Free SSL'
      ]
    }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Control Panel-Cpanel',
      description: 'Esteemhost\'s Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc.'
    },
    {
      icon: '💾',
      title: 'Disk Space',
      description: 'Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it.'
    },
    {
      icon: '🚀',
      title: 'E-Commerce Features',
      description: 'EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts can be installed with just a click.'
    },
    {
      icon: '🔧',
      title: 'For Programmers',
      description: 'Esteemhost provides you the freedom to forget your website designed with the latest programming languages by supporting it. CGI, PHP 5, Perl, Python, Free Module Installation, htaccess support, SSI, SMTP Support, Cron, FrontPage.'
    },
    {
      icon: '💰',
      title: 'Money Back Guarantee',
      description: 'We offer a 100% money-back refund for a full 30 days. Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% of its clients.'
    },
    {
      icon: '📧',
      title: 'Email Features',
      description: 'Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains.'
    },
    {
      icon: '💡',
      title: 'Free Google Ads Credit',
      description: 'Let your clients find you on google, Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-. Google AdWords is Google\'s advertising program.'
    },
    {
      icon: '🎧',
      title: 'Customer Support 24/7',
      description: 'Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support.'
    }
  ];

  const faqData = [
    {
      question: 'WHAT IS A LINUX SHARED WEB HOSTING?',
      answer: 'In today\'s competitive world, businesses can only survive by inducing the best possible online strategies. Web hosting being an essential part of it plays a significant role to promote them through websites. So if you have built a business website of your company and are planning to host it on a Linux server, then it is the most important and intelligent decision on your part. Linux web hosting is known for its powerful and superior hosting when it comes to speed, reliability and versatility.'
    },
    {
      question: 'WHAT FEATURES ESTEEM HOST OFFERS WITH LINUX SHARED HOSTING',
      answer: '• Unlimited webspace.\n• Unmetered data transfer.\n• Unlimited MySQL database space.\n• Unlimited Email ids in the control panel section.\n• Unlimited sub-domains.\n• Blazing fast speed as we have a datacenter in the US.\n• Safety and security guaranteed with the best of software and hardware.'
    },
    {
      question: 'ADDITIONAL FEATURES FOR SMALL BUSINESS WEBSITE AND BLOGGERS',
      answer: '• Ecommerce support with PHP technologies supported such as Magento, Zen Cart, Open Cart, etc.\n• Softaculous scripts installation with one click.\n• Intuitive web control panel and website administration.\n• Real-time traffic statistics.\n• Proactive server management.\n• 24X7X365 technical support via phone, chat, and email.\n• 99.9% server uptime.\n• Customizable plans for your business requirement.'
    },
    {
      question: 'WILL SHARED HOSTING WORKS SMOOTHER FOR MY WEBSITE TOO?',
      answer: 'Linux hosting India has gained much popularity among business entrepreneurs as they have found a much cheaper and reliable alternative in the field of Linux web hosting servers. Esteem Host has generated a niche for itself in the market with affordable portal hosting and set a standard to be followed by others.'
    },
    {
      question: 'WHAT KIND OF LINUX WEB HOSTING PLAN DO I NEED?',
      answer: 'With linux shared hosting, various destinations make a website online on a comparative server and split the cost charged by the Web encouraging association. This makes linux shared Web hosting the most fiscally wise Web encouraging game plan. However for every dollar you save with linux shared Web hosting costs, you may pay in various ways – including the shot of extended downtime, space, and information exchange limit insufficiency restrictions that go with sharing servers.'
    }
  ];

  const currentCurrency = 'INR';
  const plan = hostingPlans[currentPlan];

  const handleSliderChange = (value) => {
    setCurrentPlan(value);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              LINUX WEB HOSTING
            </h1>
            <p className="text-xl opacity-90">
              Providing you the Best & Cheap Linux Hosting Services in India. Get the Best Linux Hosting Plans at cheap price by choosing through our various Shared Hosting Plans.
            </p>
          </div>

          {/* Discount Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
              10% off
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-8">
                {hostingPlans.map((planItem, index) => (
                  <div
                    key={index}
                    className={`text-center cursor-pointer transition-all duration-300 ${currentPlan === index ? 'scale-110 opacity-100' : 'opacity-70'
                      }`}
                    onClick={() => handleSliderChange(index)}
                  >
                    <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    </div>
                    <h4 className="font-semibold">{planItem.title}</h4>
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
                value={currentPlan}
                onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Current Plan Features */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <div className="text-center">
                <div className="text-sm opacity-75">Website</div>
                <div className="font-bold">{plan.features.websites}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">Storage</div>
                <div className="font-bold">{plan.features.storage}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">Bandwidth</div>
                <div className="font-bold">{plan.features.bandwidth}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">Mysql</div>
                <div className="font-bold">{plan.features.mysql}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">Email</div>
                <div className="font-bold">{plan.features.email}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">Sub Domains</div>
                <div className="font-bold">{plan.features.subdomains}</div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">
                {plan.currency[currentCurrency]}{plan.price[currentCurrency]}/m
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              India's Best Linux Hosting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Cheap Linux Shared Hosting Plans
            </h2>
            <p className="text-lg text-gray-600">pricing table</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingPlans.map((planItem, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                {planItem.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                    Popular
                  </div>
                )}

                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{planItem.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{planItem.description}</p>
                    <div className="text-3xl font-bold text-blue-600">
                      <span className="text-sm text-gray-500">Start at</span>
                      <div>{planItem.currency[currentCurrency]}{planItem.price[currentCurrency]}/m</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {planItem.detailedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <EsteemhostFAQ />
      <Testimonials />

      {/* Custom slider styles */}
      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          appearance: none;
          background: rgba(255, 255, 255, 0.3);
          outline: none;
          border-radius: 15px;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default LinuxHostingPage;