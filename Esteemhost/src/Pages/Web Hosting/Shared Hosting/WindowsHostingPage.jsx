import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Server, HardDrive, Wifi, Database, Mail, Globe, Shield, Trophy, Users, Cloud, Award, Clock } from 'lucide-react';

const WindowsHostingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Mock pricing data
  const hostingPlans = [
    {
      title: "Starter",
      price: "149",
      currency: "₹",
      website: "Single",
      storage: "20 GB",
      bandwidth: "100GB Bandwidth",
      mysql: "1 mysql",
      email: "7",
      subdomains: "2",
      url: "#"
    },
    {
      title: "Professional",
      price: "299",
      currency: "₹",
      website: "5 Website",
      storage: "Unlimited",
      bandwidth: "Unlimited",
      mysql: "Unlimited",
      email: "Unlimited",
      subdomains: "Unlimited",
      url: "#"
    },
    {
      title: "Business",
      price: "499",
      currency: "₹",
      website: "10 Website",
      storage: "Unlimited",
      bandwidth: "Unlimited",
      mysql: "Unlimited",
      email: "Unlimited",
      subdomains: "Unlimited",
      url: "#"
    },
    {
      title: "Enterprise",
      price: "799",
      currency: "₹",
      website: "Unlimited",
      storage: "Unlimited",
      bandwidth: "Unlimited",
      mysql: "Unlimited",
      email: "Unlimited",
      subdomains: "Unlimited",
      url: "#"
    }
  ];

  const features = [
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Control Panel-WP",
      description: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc."
    },
    {
      icon: <HardDrive className="w-12 h-12 text-green-500" />,
      title: "Disk Space",
      description: "Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it."
    },
    {
      icon: <Wifi className="w-12 h-12 text-green-500" />,
      title: "E-Commerce Features",
      description: "EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce, OS Commerce and Zen Cart can be installed with just a click."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "For Programmers",
      description: "Esteemhost provides you the freedom to forget your website designed with the latest programming languages by supporting CGI, PHP 5, Perl, Python, Free Module Installation, htaccess support, SSI, SMTP Support, Cron, FrontPage."
    },
    {
      icon: <Trophy className="w-12 h-12 text-green-500" />,
      title: "Money Back Guarantee",
      description: "We offer a 100% money-back refund for a full 30 days if you are ever dissatisfied with our service. We are referred by 99% of our clients as the best hosting solution provider."
    },
    {
      icon: <Mail className="w-12 h-12 text-green-500" />,
      title: "Email Features",
      description: "Esteemhost provides you the power to create unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains. You can access your email through POP/IMAP."
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-500" />,
      title: "Free Google Ads Credit",
      description: "Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-. Google AdWords is Google's advertising program and currently the Internet's leading provider of pay-per-click advertising."
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Customer Support 24/7",
      description: "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime (24/7/365) by live chat, phone or ticket support."
    }
  ];

  const faqs = [
    {
      question: "WHAT IS A WINDOWS SHARED WEB HOSTING?",
      answer: "Hosting a website is one of the important considerations and many people tend to stumble when choosing a hosting plan for their website. When you need a well-designed option, then it is important to go with Windows hosting. Windows is itself a large name in industry and hosting based on windows provides simplicity which further makes possible to build compatibility between software and hardware. For dynamic database website, windows web hosting in India is the best option in the market. At Esteem Host you will find perfect, powerful and scalable web hosting solution for your business needs."
    },
    {
      question: "HERE WHAT WE OFFER TO OUR WINDOWS HOSTING CLIENTS.",
      answer: "• Unlimited webspace.\n• Unlimited bandwidth and monthly data transfer.\n• Xeon Quad Core RAID 10 machines for 99.9 percent uptime with 64GB of RAM.\n• Standard editions of Windows 2008 and 2012.\n• Technologies supported are MySQL, PHP, ASP.NET, Perl, Ajax, etc.\n• Unlimited FTP accounts.\n• Backup manager and raw access & error logs."
    },
    {
      question: "WINDOWS HOSTING CONTROLS PANEL FEATURES",
      answer: "• Plesk and hosting controller for managing windows servers.\n• Ensuring best window hosting safety and security behind sophisticated firewalls.\n• Anonymous nameservers for your domains.\n• Full scalable hosting options whether the user is a startup or have a big enterprise.\n• On-site 24X7 support by technicians that are highly trained and professional."
    },
    {
      question: "IS WINDOWS SHARE HOSTING EXPENSIVE OR CRITICAL?",
      answer: "When it comes to windows hosting, it is known to be a little expensive mainly because of proprietary software costs associated with it, however, the benefit of integrating these applications outweighs the additional costs incurred. Windows hosting India has now become enormously popular among all the major companies. We at Esteem Host are there to evaluate your cheap hosting requirements."
    },
    {
      question: "WHATS NEW WITH WINDOWS SHARED HOSTING?",
      answer: "Now you can host PHP and .Net both frameworks on windows server along with MySQL and MySQL both supports. Also now it's possible to host WordPress and other opensource applications. Linux and Windows servers can both give CGI and Perl, PHP and ASP, however, Linux is the one that you discover those on more usually."
    }
  ];

  const currentPlan = hostingPlans[selectedPlan];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Meta Information */}
      <div className="sr-only">
        <h1>Reliable Windows hosting India! Best Windows Web hosting from only 149₹./month!</h1>
        <p>Get windows hosting from Esteemhost! Host your site at reliable servers which are located in India. Buy now Windows hosting in India only from 149₹!/month.</p>
      </div>

      {/* Hero Section with Pricing Slider */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">WINDOWS WEB HOSTING</h2>
            <p className="text-xl text-blue-200">
              Windows web hosting with the Best and Cheap Web Hosting Plans. 
              EsteemHost is one of the best and affordable Windows Web Hosting providers in India
            </p>
          </div>

          {/* Pricing Slider */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 relative">
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              10% off
            </div>
            
            {/* Plan Selection */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {hostingPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlan(index)}
                  className={`p-4 rounded-lg text-center transition-all ${
                    selectedPlan === index 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <Server className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold">{plan.title}</h4>
                </button>
              ))}
            </div>

            {/* Plan Details */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <div className="text-center">
                <span className="block text-sm text-blue-200 mb-2">Website</span>
                <span className="block font-semibold">{currentPlan.website}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-blue-200 mb-2">Storage</span>
                <span className="block font-semibold">{currentPlan.storage}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-blue-200 mb-2">Bandwidth</span>
                <span className="block font-semibold">{currentPlan.bandwidth}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-blue-200 mb-2">MySQL</span>
                <span className="block font-semibold">{currentPlan.mysql}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-blue-200 mb-2">Email</span>
                <span className="block font-semibold">{currentPlan.email}</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-blue-200 mb-2">Sub Domains</span>
                <span className="block font-semibold">{currentPlan.subdomains}</span>
              </div>
            </div>

            {/* Price and Action */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">
                <span className="text-green-400">{currentPlan.currency}{currentPlan.price}</span>
                <span className="text-xl">/m</span>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">India's Best Windows Hosting</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cheap Windows Hosting Plans</h2>
            <p className="text-xl text-gray-600">pricing table</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-500 text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                  <div className="text-3xl font-bold">
                    <span className="text-sm">Start at</span>
                    <br />
                    <span>{plan.currency}{plan.price}</span>
                    <span className="text-lg">/m</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {plan.website === "Single" ? "1 Website" : `${plan.website}`}
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {plan.storage} Storage
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {plan.bandwidth.replace("Bandwidth", "")} Bandwidth
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {plan.email} Email Accounts
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {plan.subdomains} Sub Domains
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {plan.mysql} Database
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      One click installation scripts
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Free SSL
                    </li>
                  </ul>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Windows hosting</h2>
            <p className="text-xl text-gray-600">frequently asked questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsHostingPage;