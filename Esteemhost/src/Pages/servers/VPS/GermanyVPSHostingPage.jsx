import React, { useState, useEffect } from 'react';
import { Check, Server, Database, Gauge, HardDrive, Laptop, RefreshCw, DollarSign, Mail, Headphones, ChevronDown, ChevronUp } from 'lucide-react';

const GermanyVPSHostingPage = () => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [activeTab, setActiveTab] = useState('windows');
  const [openFaq, setOpenFaq] = useState(0);

  // VPS Plans Data
  const vpsPlans = [
    {
      title: "VPS Basic",
      price: "$9.99",
      cores: "2 CPU Cores",
      ram: "2 GB RAM",
      storage: "30 GB SSD",
      bandwidth: "1 TB",
      ip: "1 IP Address",
      setup: "FREE Setup",
      url: "#",
      description: "Perfect for beginners and small websites"
    },
    {
      title: "VPS Standard",
      price: "$19.99",
      cores: "2 CPU Cores", 
      ram: "4 GB RAM",
      storage: "80 GB SSD",
      bandwidth: "2 TB",
      ip: "1 IP Address",
      setup: "FREE Setup",
      url: "#",
      description: "Great for growing businesses",
      popular: true
    },
    {
      title: "VPS Professional",
      price: "$39.99",
      cores: "4 CPU Cores",
      ram: "6 GB RAM", 
      storage: "100 GB SSD",
      bandwidth: "2 TB",
      ip: "1 IP Address",
      setup: "FREE Setup",
      url: "#",
      description: "Perfect for multiple websites"
    },
    {
      title: "VPS Enterprise",
      price: "$59.99",
      cores: "4 CPU Cores",
      ram: "8 GB RAM",
      storage: "100 GB SSD", 
      bandwidth: "2 TB",
      ip: "1 IP Address",
      setup: "FREE Setup",
      url: "#",
      description: "Everything unlimited for power users"
    }
  ];

  const features = [
    {
      icon: <Check className="w-8 h-8" />,
      title: "Full Root Access",
      description: "Complete control with root access and custom software installation. Our Server Management Panel provides actions like Start, Stop, Rebuild and much more."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Management Tools", 
      description: "Easy control panel to manage your VPS with 24x7 support. Monitor memory, CPU, network usage, and manage server operations seamlessly."
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "RAID 10 Storage",
      description: "Enhanced storage reliability through redundancy. Multiple disk drives combined into logical units for data distribution and backup safety."
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "E-Commerce Features",
      description: "Comprehensive e-commerce support with shopping carts like nopCommerce, OS Commerce, and Zen Cart installable via Fantastico."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Free Website Migration",
      description: "Expert migration assistance from any host. We handle the technical complexities while you focus on your business growth."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Money Back Guarantee", 
      description: "100% money-back guarantee for 30 days. We're confident in our service quality with 99% client satisfaction rate."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Features",
      description: "Unlimited email accounts on your domain with POP/IMAP access, mobile support, Outlook integration, and webmail systems."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock expert support via live chat, phone, and tickets. Fast, friendly responses to resolve any technical issues."
    }
  ];

  const faqs = [
    {
      question: "What is Windows VPS Hosting?",
      answer: "Windows VPS Hosting uses virtualization technology to create isolated virtual machines. These offer dedicated resources like a dedicated server at no extra cost, powered by cloud and SSD storage, supporting .NET framework and PHP languages with MySQL and MSSQL."
    },
    {
      question: "What Are the Advantages of Windows VPS Hosting?",
      answer: "Key advantages include: Complete Isolation from other users, Root Access for custom applications, Guaranteed Resources (CPU, RAM, HDD), Fast SSD processing, SQL Support (MySQL, MSSQL), and Language Support for .NET and PHP frameworks."
    },
    {
      question: "Can I Install Any Kind of Software?",
      answer: "Yes, with root access on your SSD Cloud VPS, you can install any compatible software. Cpanel comes included with all packages. However, software violating our Acceptable Usage Policy cannot be installed."
    },
    {
      question: "Which Control Panel Will I Get?",
      answer: "You'll receive Plesk Latest version as the default control panel, with automated installation. Other control panels are also available upon request through our automated setup process."
    },
    {
      question: "What Kind of Support Do You Offer?",
      answer: "We provide complete 24x7 support for Boot, Network, Hardware, Login, and VPS re-installation issues. This includes basic firewall setup and security investigation via LiveChat, Phone, and Email tickets."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Germany Based VPS Server
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Get Very Fast Performance Server
            </p>
          </div>

          {/* Plan Selector */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  10% OFF
                </div>
                
                {/* Plan Slider */}
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {vpsPlans.map((plan, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPlan(index)}
                        className={`flex-shrink-0 p-4 rounded-xl transition-all ${
                          currentPlan === index 
                            ? 'bg-white text-blue-900 shadow-lg' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Server className="w-12 h-12 mx-auto mb-2" />
                        <h4 className="font-semibold">{plan.title}</h4>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Plan Details */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">Cores</p>
                    <p className="font-semibold">{vpsPlans[currentPlan].cores}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">RAM</p>
                    <p className="font-semibold">{vpsPlans[currentPlan].ram}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">Storage</p>
                    <p className="font-semibold">{vpsPlans[currentPlan].storage}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">Bandwidth</p>
                    <p className="font-semibold">{vpsPlans[currentPlan].bandwidth}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">IP Address</p>
                    <p className="font-semibold">{vpsPlans[currentPlan].ip}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">Setup</p>
                    <p className="font-semibold text-green-400">{vpsPlans[currentPlan].setup}</p>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-4">
                    {vpsPlans[currentPlan].price}<span className="text-2xl text-blue-200">/month</span>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              US Based Windows VPS Server
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:shadow-lg p-6 rounded-xl transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">US Based Linux VPS Server</span> Pricing Table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {vpsPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500">Start at</div>
                    <div className="text-4xl font-bold text-blue-600">
                      {plan.price}<span className="text-lg text-gray-500">/m</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{plan.cores}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{plan.ram}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{plan.storage}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{plan.bandwidth} Bandwidth</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{plan.ip}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Free CentOS WP-Cpanel</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-green-600 font-semibold">FREE Setup!!</span>
                    </li>
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Linux Hosting</span> Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-all"
                >
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">US Based Windows VPS Hosting</h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              We always work on technology that can provide you <strong>Windows VPS Hosting US Based</strong> quickly, 
              scalable, and securely. We provide VPS with high-end performance that can be used instead of dedicated servers. 
              You can undoubtedly upgrade your VPS's RAM or hard disk with a single reboot after changing the resource statistics.
            </p>

            <h2 className="text-2xl font-bold mb-4">SSD VPS Available at Normal Price</h2>
            <p className="text-gray-300 leading-relaxed">
              EsteemHost provides all VPS with SSD Hard Drive, meaning your server will perform at the fastest speed, 
              and you'll be able to upgrade your disk if your server is running out of space. Upgrading the VPS Disk is 
              secure, available whenever you need it, and doesn't affect your current data or settings. EsteemHost provides 
              hassle-free disk upgrade options when you truly need them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanyVPSHostingPage;