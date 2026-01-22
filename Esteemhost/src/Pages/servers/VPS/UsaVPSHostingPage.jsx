import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Server, Shield, HardDrive, Wifi, Mail, Users, RefreshCw, DollarSign, Check, Minus } from 'lucide-react';

const UsaVPSHostingPage = () => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState('USD');

  const currencies = {
    USD: '$',
    CAD: '$',
    INR: '₹',
    EUR: '€',
    GBP: '£'
  };

  const vpsPlans = [
    {
      title: "VPS Basic",
      cores: "2 CPU Cores",
      ram: "2 GB RAM",
      disk: "30 GB SSD",
      bandwidth: "1 TB",
      ip: "1 IP Address",
      setup: "FREE Set Up!!",
      price: { USD: 9.99, CAD: 12.99, INR: 799, EUR: 8.99, GBP: 7.99 },
      url: "#basic-plan",
      description: "web hosting within budget for beginners and small websites"
    },
    {
      title: "VPS Standard",
      cores: "2 CPU Cores",
      ram: "4 GB RAM",
      disk: "80 GB SSD",
      bandwidth: "2 TB",
      ip: "1 IP Address",
      setup: "FREE Set Up!!",
      price: { USD: 19.99, CAD: 25.99, INR: 1599, EUR: 17.99, GBP: 15.99 },
      url: "#standard-plan",
      description: "Unlimited Resources for one heavy traffic and big websites",
      popular: true
    },
    {
      title: "VPS Professional",
      cores: "4 CPU Cores",
      ram: "6 GB RAM",
      disk: "100 GB SSD",
      bandwidth: "2 TB",
      ip: "1 IP Address",
      setup: "FREE Set Up!!",
      price: { USD: 29.99, CAD: 39.99, INR: 2399, EUR: 26.99, GBP: 23.99 },
      url: "#professional-plan",
      description: "If you have multiple websites then we have solution for you"
    },
    {
      title: "VPS Enterprise",
      cores: "4 CPU Cores",
      ram: "8 GB RAM",
      disk: "100 GB SSD",
      bandwidth: "2 TB",
      ip: "1 IP Address",
      setup: "FREE Set Up!!",
      price: { USD: 39.99, CAD: 52.99, INR: 3199, EUR: 35.99, GBP: 31.99 },
      url: "#enterprise-plan",
      description: "You may required everything unlimited that you will get here"
    }
  ];

  const features = [
    {
      icon: <Check className="w-8 h-8" />,
      title: "Full Administrator Access",
      description: "With EsteemHost's VPS hosting comes with full root access along with the ability to install custom software, which allows you to fully customize the server environment based on your needs. Our Server Management Panel gives you complete control of the server with actions as Start, Stop, Rebuild and much more."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Management Tools",
      description: "Esteemhost provides an easy control panel to manage a VPS, there you will not face difficulty to manage. Our support team also will help you to manage your server 24X7: Reboot/Boot/Shutdown VPS, Check the status of the server, View Memory & Hard Disk Usage, View CPU Utilization, View Network Usage, View Traffic Usage."
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Raid 10 Storage",
      description: "We are offering RAID10 Storage for VPS, that's a technology that provides increased storage functions and reliability through redundancy. This is achieved by combining multiple disk drive components into a logical unit to distribute the data, it mean your back up is safe with mirror discs."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "E-Commerce Features",
      description: "EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce Shopping Cart, eCommerce Framework Shopping Cart, OS Commerce Shopping Cart and Zen Cart Shopping Cart can be installed with just a click, via Fantastico."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Free Website migration",
      description: "If you are not technically sound or don't have time to migrate your server from one host to other than we are here to assist you by experts. Migration from any host can be a tedious task for you. When you are not satisfied with your current host then we are always there for your rescue."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Money Back Guarantee",
      description: "Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% by our clients as we are a best hosting solution provider. But even after if you are ever dissatisfied with our service, we have 100% money-back for 30 days!"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Features",
      description: "Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains. You can access your email through POP/IMAP as Mobile, Outlook, etc., or the pre-installed Webmail systems we provide as well."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support 24/7",
      description: "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. Esteemhost understands clients issue and solving it in the most efficient manner. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support."
    }
  ];

  const faqs = [
    {
      question: "What is Windows VPS Hosting",
      answer: "For making a Windows VPS Hosting, an innovation called Virtualization is utilized to make segregated virtual machines. These machines are Windows Virtual Private Server Hosting (VPS). These machines offer devoted assets starting at a committed server at no extra cost. EsteemHost's VPS's are controlled by cloud and keep running on SSD stockpiling and subsequently, it is called Windows VPS Hosting, that supports all .net framework language along with PHP framework languages. Also, it supports additionally MySQL with MSSql. That means if you get configured a Windows VPS Hosting then you needn't buy Linux VPS additionally in maximum cases."
    },
    {
      question: "What Are the Advantage of Windows VPS Hosting?",
      answer: "There are six principal points of interest of Windows VPS Hosting: Complete Isolation: Your Windows VPS Plan and its applications stay unaffected with activities of different clients on the server. Root Access: You get root get to that enables you to introduce any perfect utilization of your decision. Ensured Resources: Unlike in shared hosting, regardless of any circumstance, the assets (CPU, RAM, HDD and data transfer capacity) assigned to you will dependably be accessible for your applications. Quick handling with SSD: With SSD stockpiling, your sites and applications will run ordinarily speedier on your VPS. SQL Support: Windows VPS Hosting will support All kind of SQL like my SQL MSSql etc. Language Support for Developers: Windows VPS Hosting will support all kind of languages accept like .net framework and PHP framework, that will fulfill all kind of your requirements."
    },
    {
      question: "Can I install Any Kind of Software?",
      answer: "When you buy a VPS, Cpanel will be installed on your package. This is inclusive of any package that you choose to buy. Since you have the root access on your SSD Cloud VPS, you can install any software that is compatible on your VPS hosting plan. However, any software that violates their Acceptable Usage Policy or has any kind of objection to install on VPS will not be allowed."
    },
    {
      question: "Which Control Panel will I get on my VPS?",
      answer: "You will get Plesk Latest version as a default option for installing on your VPS, but you can also choose to install Other on your VPS. We have an automated installation process configured to help make your control panel setup easy. We have an automated installation process configured on our VPS servers. When you buy a VPS, Plesk Control Panel will be installed on your package. This is inclusive of any package that you choose to buy."
    },
    {
      question: "What Kind of Support do You Offer?",
      answer: "We provide complete assistance for the issues that are related to Boot, Network, Hardware, Login and Re-installation of the VPS. This also includes basic firewall setup and preliminary investigation of any system exploits. We provide 24x7 support via three methods – LiveChat, Phone support and Email tickets. You can contact us anytime to get a resolution for any issues related to your VPS."
    }
  ];

  const handleSliderChange = (index) => {
    setCurrentPlan(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              USA based VPS server
            </h1>
            <p className="text-xl text-blue-200">
              Get Very Fast Performance Server With NVMe SSD
            </p>
          </div>
        </div>
      </div>

      {/* VPS Pricing Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Discount Badge */}
          <div className="relative mb-8">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-bold">10% off</span>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-8">
              {vpsPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => handleSliderChange(index)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentPlan === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>

            {/* Current Plan Display */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <img 
                  src={`/api/placeholder/200/150`} 
                  alt="Server" 
                  className="mx-auto mb-4"
                />
              </div>
            </div>

            {/* Plan Features */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <div className="text-center">
                <div className="text-sm text-gray-600">Core</div>
                <div className="font-semibold text-blue-600">{vpsPlans[currentPlan].cores}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">RAM</div>
                <div className="font-semibold text-blue-600">{vpsPlans[currentPlan].ram}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Hard Drive</div>
                <div className="font-semibold text-blue-600">{vpsPlans[currentPlan].disk}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Bandwidth</div>
                <div className="font-semibold text-blue-600">{vpsPlans[currentPlan].bandwidth}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">IP Address</div>
                <div className="font-semibold text-blue-600">{vpsPlans[currentPlan].ip}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Setup</div>
                <div className="font-semibold text-green-600">{vpsPlans[currentPlan].setup}</div>
              </div>
            </div>

            {/* Price and Action */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {currencies[currentCurrency]}{vpsPlans[currentPlan].price[currentCurrency]}
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Windows VPS Server Hosting
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-blue-300">India based windows vps server</span> pricing table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="bg-white rounded-lg shadow-xl p-6 h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="text-3xl font-bold text-blue-600">
                      {currencies[currentCurrency]}{plan.price[currentCurrency]}
                      <span className="text-lg text-gray-600">/m</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{plan.cores}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{plan.ram}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{plan.disk}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{plan.bandwidth} Bandwidth</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{plan.ip}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Free CentOS WP-Cpanel</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{plan.setup}</span>
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Linux hosting</span> frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800">
                      {faq.question}
                    </h4>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content Section */}
      {/* <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              What is Windows VPS Hosting?
            </h1>
            <p className="text-gray-600 mb-6">
              All our <strong>Windows VPS server</strong> is engineered by virtualization, and installed windows operating system and <strong>Windows VPS Server in India</strong> means it's based in Indian Datacentre. Our <strong>Windows VPS Hosting in India</strong> has been built to give you competent, effectually scalable, and protected code to the very source unit code arrangement at a moderate expense. It is different dialects that need dependability and excellent execution and run uniquely on Microsoft conditions, and ideal for the individuals who need applications in .ASP, .NET, VB, MSSQL and windows scripts.
            </p>
            <p className="text-gray-600 mb-8">
              Get the flexibility to run your website or application on our affordable <strong>Windows VPS</strong>. It is furnished with the FrontPage, making it considerably more helpful. We are one of the most trusted and <strong>Cheap Windows VPS Hosting</strong> specialist organizations in India. Experience the best at the least expensive with us!
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why should I buy Windows VPS?
            </h2>
            <p className="text-gray-600 mb-6">
              With our <strong>India Based Windows VPS</strong> you will get all facilities of dedicated server as remote desktop and administrator level access in the less than half price with all features. VPS Hosting, again provide you full access and dedicated resources that is not shared with anyone else. Each virtual private server hosting plan ensures that you oversee your resources and Control your CPUs, RAM, root access and utilize your favourite OS. The drawback of VPS Hosting is managing and keep is up to date that, while we spread the back-end and server checking, keeping up it every minute of every day, we can give restricted assistance to your task concerning client service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Which Projects Does Windows VPS Supported?
            </h2>
            <p className="text-gray-600">
              Users should use the hosting according to their requirements, if you are using small and low visitor ASP .Net website than you should buy shared or premium hosting, but when your usage increase and need more resources than you need to upgrade to dedicated resources means dedicated server hosting. Sometimes there is two reasons to choose <strong>Cheap Windows VPS</strong>, one if first if you don't have enough budget or you don't have requirement of much resources that dedicated server provides, <strong>India Based Windows VPS Hosting</strong> is suitable in both cases, there you will get full admin access with dedicated resources at affordable price.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UsaVPSHostingPage;