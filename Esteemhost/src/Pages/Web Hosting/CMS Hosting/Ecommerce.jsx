import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Monitor, MousePointer, Rocket, Lock, Trophy, UserCheck, Cloud, Award } from 'lucide-react';

const EcommerceHostingPage = () => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('shared');

  // Mock configuration data
  const hostingPlans = [
    {
      title: 'Starter',
      price: 199,
      url: '#',
      features: {
        websites: 'Unlimited',
        storage: '25 GB',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        ftp: 'Unlimited'
      },
      description: 'web hosting within budget for beginners and small websites',
      planFeatures: [
        '1 Website',
        '2 GB Storage',
        '5GB Bandwidth',
        '5 Email Accounts',
        '2 Sub Domains',
        '1 Mysql Database',
        'One click installation scripts'
      ]
    },
    {
      title: 'Professional',
      price: 299,
      url: '#',
      features: {
        websites: 'Unlimited',
        storage: '50 GB',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        ftp: 'Unlimited'
      },
      description: 'Unlimited Resources for one heavy traffic and big websites',
      planFeatures: [
        '1 Website',
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Unlimited Sub Domains',
        'Unlimited Mysql Database',
        'One click installation scripts'
      ],
      popular: true
    },
    {
      title: 'Business',
      price: 499,
      url: '#',
      features: {
        websites: 'Unlimited',
        storage: '100 GB',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        ftp: 'Unlimited'
      },
      description: 'If you have multiple websites then we have solution for you',
      planFeatures: [
        '10 Website',
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Unlimited Sub Domains',
        'Unlimited Mysql Database',
        'One click installation scripts'
      ]
    },
    {
      title: 'Enterprise',
      price: 799,
      url: '#',
      features: {
        websites: 'Unlimited',
        storage: '200 GB',
        bandwidth: 'Unlimited',
        mysql: 'Unlimited',
        email: 'Unlimited',
        ftp: 'Unlimited'
      },
      description: 'You may required everything unlimited that you will get here',
      planFeatures: [
        'Unlimited Website',
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Unlimited Sub Domains',
        'Unlimited Mysql Database',
        'One click installation scripts'
      ]
    }
  ];

  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Control Panel-Cpanel',
      description: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc."
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: 'Disk Space',
      description: 'Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'E-Commerce Features',
      description: 'EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce, eCommerce Framework, OS Commerce and Zen Cart can be installed with just a click.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'For Programmers',
      description: 'Esteemhost provides you the freedom to forget your website designed with the latest programming languages by supporting it. CGI, PHP 5, Perl, Python, Free Module Installation, htaccess support, SSI, SMTP Support, Cron, FrontPage.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Money Back Guarantee',
      description: 'Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% of its clients as we are a best hosting solution provider.'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Email Features',
      description: 'Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Free Google Ads Credit',
      description: 'Let your clients find you on google, Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-. Google AdWords is Google\'s advertising program.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Customer Support 24/7',
      description: 'Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support.'
    }
  ];

  const faqs = [
    {
      question: 'What is a ecommerce Hosting?',
      answer: 'Ecommerce hosting plans in India are extraordinarily redone for the best execution with our new eCommerce condition. Our Ecommerce Toolkit hosting accompanies ground-breaking highlights that empower you to test new modules, subjects, and code before pushing it live to your destinations.'
    },
    {
      question: 'Why Choose Ecommerce Hosting?',
      answer: 'Choose more than several promptly accessible topics, modules and administrations to manufacture your site with negligible coding. Facilitating exceptionally streamlined for Ecommerce controlled sites.'
    },
    {
      question: 'What Advantage Will I get with Ecommerce Hosting?',
      answer: 'Blasting Fast Website: With first class equipment and reserving, which stores your sites habitually utilized pages and an all around circulated CDN, your site will stack up to 2x speedier. Progressed Caching: We have manufactured progressed Nginx/Varnish bases reserving to enhance the speed of your site.'
    },
    {
      question: 'Do I need to Install Ecommerce Manually?',
      answer: 'The one-click installer does everything from start to finish – downloads WP creates a DB with a DB user, creates an admin account in Ecommerce and initializes Ecommerce so that it\'s fully ready for use out of the box.'
    },
    {
      question: 'Do I need to Update CMS Manually or Will It Be Automatically?',
      answer: 'Get programmed updates of all your eCommerce establishments from one main issue. Refresh eCommerce, modules, and also topics, specifically or in mass. Rapidly find and introduce a module or topic on an Ecommerce example.'
    }
  ];

  const PlanSlider = () => {
    const currentPlanData = hostingPlans[currentPlan];
    
    return (
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              E-Commerce Hosting
              <span className="block text-lg font-normal text-blue-200 mt-2">
                Experience The Uninterrupted and Fast Web Hosting
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                10% off
              </div>
              
              {/* Plan Selector */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {hostingPlans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPlan(index)}
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      currentPlan === index 
                        ? 'bg-blue-600 text-white scale-105' 
                        : 'bg-white/20 text-blue-200 hover:bg-white/30'
                    }`}
                  >
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">{plan.title}</h4>
                      <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Plan Features */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">Website</div>
                  <div className="font-semibold">{currentPlanData.features.websites}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">Storage</div>
                  <div className="font-semibold">{currentPlanData.features.storage}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">Bandwidth</div>
                  <div className="font-semibold">{currentPlanData.features.bandwidth}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">MySQL</div>
                  <div className="font-semibold">{currentPlanData.features.mysql}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">Email</div>
                  <div className="font-semibold">{currentPlanData.features.email}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">FTP Account</div>
                  <div className="font-semibold">{currentPlanData.features.ftp}</div>
                </div>
              </div>

              {/* Price and Action */}
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">
                  ₹{currentPlanData.price}<span className="text-lg font-normal">/m</span>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FeatureSection = () => (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">E-Commerce Hosting</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PricingSection = () => (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">E-Commerce Reseller hosting</span> pricing table
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hostingPlans.map((plan, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-blue-600">
                    ₹{plan.price}<span className="text-lg font-normal text-gray-500">/m</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.planFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FAQSection = () => (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">E-Commerce hosting</span> frequently asked questions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                >
                  <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta would go in document head */}
      <title>Best Ecommerce Website Hosting in India | Ecommerce Hosting Plans | Unlimited eCommerce Hosting - Esteemhost</title>
      
      <PlanSlider />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default EcommerceHostingPage;