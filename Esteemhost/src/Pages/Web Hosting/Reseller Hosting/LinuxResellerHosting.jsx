import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Database, Rocket, Lock, Trophy, User, Cloud, Award } from 'lucide-react';

const LinuxResellerHosting = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(0);

  // Mock data for pricing plans
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "₹299",
      storage: "25 GB",
      description: "web hosting within budget for beginners and small websites",
      url: "#"
    },
    {
      title: "Professional Plan",
      price: "₹499",
      storage: "50 GB",
      description: "Unlimited Resources for heavy traffic and big websites",
      url: "#"
    },
    {
      title: "Business Plan",
      price: "₹799",
      storage: "100 GB",
      description: "If you have multiple websites than we have solution for you",
      url: "#"
    },
    {
      title: "Enterprise Plan",
      price: "₹1299",
      storage: "200 GB",
      description: "You may required everything unlimited that you will get here",
      url: "#"
    }
  ];

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Control Panel-Cpanel",
      description: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases etc."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Disk Space",
      description: "Esteemhost brings unlimited disk space suiting your every type of website. We never let you think about disk space gets full, you will feel free about it."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "E-Commerce Features",
      description: "EsteemHost supports you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts can be installed with just a click."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "For Programmers",
      description: "Esteemhost provides you the freedom to get your website designed with the latest programming languages by supporting CGI, PHP 5, Perl, Python, and more."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Money Back Guarantee",
      description: "We offer a 100% money-back refund for a full 30 days if you are ever dissatisfied with our service."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Email Features",
      description: "Create unlimited email accounts on your main domain as well as any domain pointers and subdomains with POP/IMAP access."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Free Google Ads Credit",
      description: "Sign up for any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Customer Support 24/7",
      description: "We provide fast, friendly and straight-forward response with the help of our experts available 24/7/365."
    }
  ];

  const faqData = [
    {
      question: "WHAT IS A LINUX RESELLER HOSTING?",
      answer: "Linux Reseller Hosting empowers you to make sub-plans inside the Disk Space and Bandwidth distributed with your primary hosting plan. You can utilize WHM to make custom plans for your customers. WHM Cpanel that known as Web Host Manager is a renowned device that enables managerial access to the back end of cPanel/Plesk."
    },
    {
      question: "What features and Which control panel do I get with a Reseller Hosting plan?",
      answer: "You will get remarkable features with our reseller hosting plans. All our Reseller Hosting plans are integrated with Softaculous - a popular one-click script installer. Applications such as WordPress, Drupal, Joomla, Magento, etc. can be installed with a single click through Softaculous."
    },
    {
      question: "PURCHASED A LINUX RESELLER HOSTING, NOW WHAT DO I DO?",
      answer: "The WHM Control Panel provisioned with the Reseller Hosting bundle enables you to make and oversee individual facilitating bundles for your clients. WHMCS is an across the board customer administration board which empowers billing and support capacities."
    },
    {
      question: "What are the advantages of Reseller Hosting?",
      answer: "If you are a Web Developer/Designer, you can deal with your sites/customers inside one Reseller Hosting bundle as opposed to dealing with numerous Shared Hosting bundles. This would likewise altogether diminish the cost of facilitating your site."
    },
    {
      question: "Does the Linux Reseller Hosting have money back guarantee?",
      answer: "Yes. All of our Reseller web hosting plans come with a 30-day money-back guarantee. If you don't like it for any reason you can get a full refund, no questions asked."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-400">Linux Reseller Hosting</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Become a Reseller by choosing the Best & Affordable Linux Reseller Hosting Packages.
              Join the Best Linux Reseller Hosting provider in India and enjoy Unlimited cPanel Accounts and MySQL Databases.
            </p>
          </div>

          {/* Plan Selector */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {pricingPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlan(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedPlan === index 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>

            {/* Plan Details */}
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">{pricingPlans[selectedPlan].title}</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">
                  {pricingPlans[selectedPlan].price}<span className="text-lg">/month</span>
                </div>
              </div>
              
              <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-300">Website</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-300">Storage</div>
                  <div className="font-semibold">{pricingPlans[selectedPlan].storage}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-300">Bandwidth</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-300">MySQL</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-300">Email</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-300">FTP Account</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Linux Reseller Hosting Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Linux Reseller Hosting</span> Pricing Table
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${index === 1 ? 'ring-2 ring-green-500' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-semibold">
                    POPULAR
                  </div>
                )}
                <div className={`p-6 ${index === 1 ? 'pt-12' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500">Start at</div>
                    <div className="text-3xl font-bold text-gray-800">{plan.price}<span className="text-lg">/m</span></div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {plan.storage} Storage
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Unlimited Website
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Unlimited Bandwidth
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Unlimited Email Accounts
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Unlimited Sub Domains
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Unlimited MySQL Database
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      One click installation scripts
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Unlimited Cpanel/Plesk Panel
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Free Setup!!
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      24/7/365 Tech Support
                    </li>
                  </ul>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Linux Hosting</span> Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Linux Reseller Hosting</h1>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Start your Self web-Hosting Provider business and Make Huge Profit by turning into a Hosting Provider for your customers. 
                Our <strong>Linux Reseller Hosting</strong> Plans give you complete flexibility to manage customer accounts effectively. 
                We Provide You 24x7 Support On our <strong>Reseller Hosting</strong>.
              </p>
              
              <p>
                Linux Reseller hosting is a reseller hosting that used for hosting open-source programming languages like PHP, WordPress, 
                Joomla, etc. Here the owner of the account can use his allotted resources like web space and bandwidth on the server to 
                host third-party applications and websites.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Benefits of Linux Reseller Hosting:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Free WHMCS Billing system
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Linux plans with all essential features like PHP, MySQL, Perl, and CGI
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Tons of free utilities like mailing lists, forums, live web statistics
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Complete anonymity to customers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Robust technical assistance 24X7
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    Unlimited data transfer with 99.9% uptime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxResellerHosting;