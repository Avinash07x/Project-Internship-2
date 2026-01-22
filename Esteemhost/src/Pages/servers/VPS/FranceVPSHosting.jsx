import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Server, Shield, HardDrive, Monitor, RefreshCw, DollarSign, Mail, Headphones } from 'lucide-react';

const FranceVPSHosting = () => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('sharedTabQ1');
  const [sliderValue, setSliderValue] = useState(0);

  // VPS Plans Configuration
  const vpsPlans = [
    {
      title: 'VPS Basic',
      cores: '2 CPU Cores',
      ram: '2 GB RAM',
      storage: '30 GB SSD',
      bandwidth: '1 TB',
      ip: '1 IP Address',
      setup: 'FREE Set Up!!',
      price: { USD: 15, EUR: 13, INR: 1200, GBP: 12, CAD: 18 },
      url: '#basic-plan'
    },
    {
      title: 'VPS Standard',
      cores: '2 CPU Cores',
      ram: '4 GB RAM',
      storage: '80 GB SSD',
      bandwidth: '2 TB',
      ip: '1 IP Address',
      setup: 'FREE Set Up!!',
      price: { USD: 25, EUR: 22, INR: 2000, GBP: 20, CAD: 30 },
      url: '#standard-plan'
    },
    {
      title: 'VPS Premium',
      cores: '4 CPU Cores',
      ram: '6 GB RAM',
      storage: '100 GB SSD',
      bandwidth: '2 TB',
      ip: '1 IP Address',
      setup: 'FREE Set Up!!',
      price: { USD: 35, EUR: 31, INR: 2800, GBP: 28, CAD: 42 },
      url: '#premium-plan'
    },
    {
      title: 'VPS Enterprise',
      cores: '4 CPU Cores',
      ram: '8 GB RAM',
      storage: '100 GB SSD',
      bandwidth: '2 TB',
      ip: '1 IP Address',
      setup: 'FREE Set Up!!',
      price: { USD: 45, EUR: 40, INR: 3600, GBP: 36, CAD: 54 },
      url: '#enterprise-plan'
    }
  ];

  const [currency, setCurrency] = useState('USD');
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    INR: '₹',
    GBP: '£',
    CAD: '$'
  };

  const features = [
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Full Root Access',
      description: "With EsteemHost's VPS hosting comes with full root access along with the ability to install custom software, which allows you to fully customize the server environment based on your needs. Our Server Management Panel gives you complete control of the server with actions as Start, Stop, Rebuild and much more."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Management Tools',
      description: 'Esteemhost provides an easy control panel to manage a VPS, there you will not face difficulty to manage. Our support team also will help you to manage your server 24X7: Reboot/Boot/Shutdown VPS, Check the status of the server, View Memory & Hard Disk Usage, View CPU Utilization, View Network Usage, View Traffic Usage.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Raid 10 Storage',
      description: "We are offering RAID10 Storage for VPS, that's a technology that provides increased storage functions and reliability through redundancy. This is achieved by combining multiple disk drive components into a logical unit to distribute the data, it mean your back up is safe with mirror discs."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'E-Commerce Features',
      description: 'EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce Shopping Cart, eCommerce Framework Shopping Cart, OS Commerce Shopping Cart and Zen Cart Shopping Cart can be installed with just a click, via Fantastico.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Free Website Migration',
      description: "If you are not technically sound or don't have time to migrate your server from one host to other than we are here to assist you by experts. Migration from any host can be a tedious task for you. When you are not satisfied with your current host then we are always there for your rescue."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Money Back Guarantee',
      description: 'Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% by our clients as we are a best hosting solution provider. But even after if you are ever dissatisfied with our service, we have 100% money-back for 30 days!'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Features',
      description: 'Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains. You can access your email through POP/IMAP as Mobile, Outlook, etc., or the pre-installed Webmail systems we provide as well.'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Customer Support 24/7',
      description: 'Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. Esteemhost understands clients issue and solving it in the most efficient manner. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support.'
    }
  ];

  const faqData = [
    {
      id: 'sharedTabQ1',
      question: 'What is Linux VPS Hosting?',
      answer: "With VPS Hosting, you have finish disengagement. This implies regardless of what different clients may do on the server, your VPS hosting will be unaffected. With root access get to, you can introduce whatever applications you require. VPS likewise gives you ensured resources, so regardless, the CPU, RAM, HDD and Bandwidth designated to your VPS hosting will dependably be accessible for your applications only. It gives all of you the highlights and elements of a Dedicated server, without the extra cost."
    },
    {
      id: 'sharedTabQ2',
      question: 'What are the advantages of Linux VPS Hosting?',
      answer: "With EsteemHost's VPS Hosting, your site and applications stay unaffected by the exercises did by another client on a similar server. Full root gets to encourages you to introduce any custom programming without confinements. There are four primary preferences of SSD Cloud VPS facilitating: Complete Isolation, Root Access, Ensured Resources, Quick preparing with SSD."
    },
    {
      id: 'sharedTabQ3',
      question: 'Is Additional Dedicated IP available?',
      answer: 'Yes, at an additional cost. You can raise a support ticket to get a dedicated IP on your VPS server. You get 1 free default Dedicated IP with every VPS Hosting Plan. And For additional IPs, kindly get in touch with the support team.'
    },
    {
      id: 'sharedTabQ4',
      question: 'Can I install Any Kind of Software and Control Panel on my VPS?',
      answer: 'You will get CPanel and Plesk 17.8 as a default option for installing on your VPS, but you can also choose to install Other on your VPS. We have an automated installation process configured to help make your control panel setup easy. Since you have the root access on your VPS, you can install any software that is compatible with your VPS hosting plan.'
    },
    {
      id: 'sharedTabQ5',
      question: 'Do You Provide Managed VPS? And What About Support?',
      answer: 'We offer Fully Managed VPS Hosting solutions. We provide complete assistance for the issues that are related to Boot, Network, Hardware, Login and Re-installation of the VPS. This also includes basic firewall setup and preliminary investigation of any system exploits. We provide 24x7 support via three methods – LiveChat, Phone support and Email tickets.'
    }
  ];

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setCurrentPlan(Math.floor(value));
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with VPS Pricing */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Discount Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg animate-pulse">
              10% OFF
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              France Based VPS Server
            </h1>
            <p className="text-xl text-blue-200">Get Very Fast Performance Server</p>
          </div>

          {/* VPS Slider */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-8">
            {/* Server Images */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-4 gap-4">
                {vpsPlans.map((plan, index) => (
                  <div key={index} className={`text-center p-4 rounded-lg transition-all duration-300 ${
                    currentPlan === index ? 'bg-blue-100 scale-110' : 'bg-gray-50'
                  }`}>
                    <Server className={`w-12 h-12 mx-auto mb-2 ${
                      currentPlan === index ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-700">{plan.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="mb-8">
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={currentPlan}
                onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Plan Details */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Core</span>
                <span className="font-bold text-gray-800">{vpsPlans[currentPlan].cores}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">RAM</span>
                <span className="font-bold text-gray-800">{vpsPlans[currentPlan].ram}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Hard Drive</span>
                <span className="font-bold text-gray-800">{vpsPlans[currentPlan].storage}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Bandwidth</span>
                <span className="font-bold text-gray-800">{vpsPlans[currentPlan].bandwidth}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">IP Address</span>
                <span className="font-bold text-gray-800">{vpsPlans[currentPlan].ip}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 mb-1">Setup</span>
                <span className="font-bold text-green-600">{vpsPlans[currentPlan].setup}</span>
              </div>
            </div>

            {/* Price and Action */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {currencySymbols[currency]}{vpsPlans[currentPlan].price[currency]}/m
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">France Based Linux VPS Server</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">France Based Linux VPS Server</span> Pricing Table
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {vpsPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                index === 1 ? 'ring-4 ring-green-500 relative' : ''
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {index === 0 && "Web hosting within budget for beginners and small websites"}
                    {index === 1 && "Unlimited Resources for one heavy traffic and big websites"}
                    {index === 2 && "If you have multiple websites than we have solution for you"}
                    {index === 3 && "You may required everything unlimited that you will get here"}
                  </p>
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-1">Start at</div>
                    <div className="text-4xl font-bold text-blue-600">
                      {currencySymbols[currency]}{plan.price[currency]}<span className="text-lg">/m</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {plan.cores}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {plan.ram}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {plan.storage}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {plan.bandwidth} Bandwidth
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {plan.ip}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Free CentOS WP-Cpanel
                    </li>
                    <li className="flex items-center text-green-600 font-semibold">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {plan.setup}
                    </li>
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Linux Hosting</span> Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                <div 
                  className={`bg-gray-50 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeAccordion === faq.id ? 'bg-blue-50' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <div className="p-6 flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h4>
                    <ChevronDown className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                      activeAccordion === faq.id ? 'rotate-180' : ''
                    }`} />
                  </div>
                  {activeAccordion === faq.id && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Content Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">France Based Linux VPS</h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              Choose a wide range of installed Linux operating system including Cent OS including, Redhat Enterprise, CentOS, Debian, Ubuntu, Fedora, Gentoo, CloudLinux, FreeBSD and all other linux operating system with all versions of operating systems. With various of locations in France, than will provide you fastest performance and network speed.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Customer gets full freedom to choose desired Linux operating system with our <strong>France Based Linux VPS Server Hosting</strong>, not only operating system but also control panel you can get installed accordingly. cPanel and plesk both are web based control panel by that you can manage your server effortlessly.
            </p>

            <h2 className="text-2xl font-bold mb-4">Which Technology Do We Use for France Based Linux VPS?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Now its time to use latest technology and hardware to build <strong>France Based Linux VPS Server</strong>, Using SSD, Latest RAM and high generation CPU. We always focus on quality so that you can get <strong>Cheap France Based Linux VPS</strong> in your budget. EsteemHost use the technology of multi dedicated server on network that calls cloud technology in present, thus we can reduce cost and provide you <strong>Cheap Linux VPS Unlimited Bandwidth</strong> that allows you best performance and secure access on your server.
            </p>
            <p className="text-gray-300 leading-relaxed">
              EsteemHost keep customer free to choose multiple plans of <strong>Cheap Linux VPS France</strong>, there you will get wide range of VPS, that fulfil your requirement and always be in your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Currency Selector (Fixed Position) */}
      <div className="fixed bottom-4 right-4 z-50">
        <select 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="INR">INR (₹)</option>
          <option value="GBP">GBP (£)</option>
          <option value="CAD">CAD ($)</option>
        </select>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default FranceVPSHosting;