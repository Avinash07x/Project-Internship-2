import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy, Shield, Cloud, Server, Database, Mail, Settings, DollarSign } from 'lucide-react';

const WindowsResellerHosting = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Pricing data
  const pricingPlans = [
    {
      title: "Starter",
      price: 299,
      storage: "25 GB",
      features: [
        "25 GB Storage",
        "Unlimited Website",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "Unlimited MSsql Database",
        "One click installation scripts",
        "Unlimited Cpanel/Plesk Panel for Customers",
        "Free Setup!!",
        "24/7/365 Tech Support"
      ],
      popular: false
    },
    {
      title: "Professional",
      price: 499,
      storage: "50 GB",
      features: [
        "50 GB Storage",
        "Unlimited Website",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "Unlimited MSsql Database",
        "One click installation scripts",
        "Unlimited Cpanel/Plesk Panel for Customers",
        "Free Setup!!",
        "24/7/365 Tech Support"
      ],
      popular: true
    },
    {
      title: "Business",
      price: 799,
      storage: "100 GB",
      features: [
        "100 GB Storage",
        "Unlimited Website",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "Unlimited MSsql Database",
        "One click installation scripts",
        "Unlimited Cpanel/Plesk Panel for Customers",
        "Free Setup!!",
        "24/7/365 Tech Support"
      ],
      popular: false
    },
    {
      title: "Enterprise",
      price: 1199,
      storage: "200 GB",
      features: [
        "200 GB Storage",
        "Unlimited Website",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "Unlimited MSsql Database",
        "One click installation scripts",
        "Unlimited Cpanel/Plesk Panel for Customers",
        "Free Setup!!",
        "24/7/365 Tech Support"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What is Windows Reseller Hosting?",
      answer: "Reseller Hosting is a type of web hosting wherein the record proprietor can utilize his or her designated hard drive space and data transmission to have sites for the benefit of outsiders. The Hosting buys the host's administrations in discount and after that pitches them to clients, perhaps for a benefit. An EsteemHosts affiliate design is an awesome path for you to gain cash as an afterthought, or even turn into your own particular full-time web hosting organization."
    },
    {
      question: "Which Control Panel do I get?",
      answer: "Most recent Plesk Control Panel with Multi-dialect Availability. Screen Server Status. Point of confinement bundles, indicate circle space, transmission capacity, email, databases, and different highlights. Finish Control: Password Modification, DNS, Account Creation/Termination. Most recent Control Panel. Site Statistics: Web stats, Raw Log Manager and Error Logs."
    },
    {
      question: "What is the System Architecture?",
      answer: "Every one of our Windows Reseller Hosting designs accompanies a 99.99% uptime assurance and highlight boundless databases and add-on spaces. Inquire as to whether you require any help. Reseller hosting plan gives you finish control over each part of your hosting business, from asset designation to installment techniques."
    },
    {
      question: "What Kind of languages and scripts are supported?",
      answer: "We support a wide array of scripts and languages including ASP, ASP.NET 4.0, IIS 7.5, PHP 5.2x, Ajax Toolkit, cURL, MS SQL 2008, MySQL 5.0.X, Crystal Reports, ionCube Loader. CGI, Fast CGI, PHP 5, SSL. Programming Modules: Curl, CPAN, GD Library, ImageMagick."
    },
    {
      question: "What about support and email features?",
      answer: "24/7/365 Premium Support via Phone, Live Chat, and Ticket System (Email), 24/7/365 Server Monitoring, Online Support Portal with over 500+ Video Tutorials and 680+ Help Articles. Email Features: Unlimited POP3 Email Accounts with SMTP. WebMail Access: Horde, mailable."
    }
  ];

  const features = [
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Control Panel-Cpanel",
      description: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc."
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: "Disk Space",
      description: "Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it. We will decrease the price of your web hosting work."
    },
    {
      icon: <Server className="w-12 h-12 text-purple-500" />,
      title: "E-Commerce Features",
      description: "EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce, OS Commerce and Zen Cart can be installed with just a click."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "For Programmers",
      description: "Esteemhost provides you the freedom to forget your website designed with the latest programming languages by supporting it. CGI, PHP 5, Perl, Python, Free Module Installation, htaccess support, SSI, SMTP Support, Cron, FrontPage."
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Money Back Guarantee",
      description: "Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% of its clients. But even after if you are ever dissatisfied with our service, we offer a 100% money-back refund for a full 30 days."
    },
    {
      icon: <Mail className="w-12 h-12 text-indigo-500" />,
      title: "Email Features",
      description: "Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains. You can access your email through POP/IMAP as Mobile, Outlook, etc."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: "Free Google Ads Credit",
      description: "Let your clients find you on google, Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-. Google AdWords is Google's advertising program."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "Customer Support 24/7",
      description: "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Windows Reseller Hosting
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              EsteemHost provides the most Cheap and Reliable Windows Reseller Hosting Plans in India.
              Not only being the Best Web Hosting Company in Jaipur, EsteemHost is also known as the Best and affordable Windows Reseller Hosting Provider in India
            </p>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block mb-8">
              <span className="font-semibold">10% OFF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Pricing Slider */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Plan Selector */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {pricingPlans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlan(index)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedPlan === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {plan.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Plan Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{pricingPlans[selectedPlan].title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Website</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Storage</div>
                  <div className="font-semibold">{pricingPlans[selectedPlan].storage}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Bandwidth</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">MySQL</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">FTP Account</div>
                  <div className="font-semibold">Unlimited</div>
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                ₹{pricingPlans[selectedPlan].price}<span className="text-lg text-gray-500">/month</span>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Windows Reseller Hosting Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-600">Windows Reseller Hosting</span> Pricing Table
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow">
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {index === 0 && "Web hosting within budget for beginners and small websites"}
                    {index === 1 && "Unlimited Resources for heavy traffic and big websites"}
                    {index === 2 && "If you have multiple websites than we have solution for you"}
                    {index === 3 && "You may required everything unlimited that you will get here"}
                  </p>
                  <div className="mb-6">
                    <div className="text-sm text-gray-500">Start at</div>
                    <div className="text-3xl font-bold text-blue-600">
                      ₹{plan.price}<span className="text-lg text-gray-500">/m</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-600">Windows Hosting</span> Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
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

      Bottom Content
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Windows Reseller Hosting</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              It is a known fact that the Windows operating system is more familiar than other operating systems that people work on. 
              Nowadays, the windows operating system is becoming one of the priorities for people wanting to start an affordable reseller hosting business. 
              Windows reseller hosting in India is very popular in many cases and you will be amazed at how low-cost, easy and profitable is to have our windows hosting plans.
            </p>
            <p className="text-gray-600 mb-6">
              Here is a brief overview of our windows hosting plans:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Reseller control panel to access contents</li>
              <li>• POP3 Mail accounts</li>
              <li>• Unlimited FTP access to the websites</li>
              <li>• MYSQL Database support</li>
              <li>• Detailed web statistics to remain up to date</li>
              <li>• Web technologies like ASP/ASP.NET 2.0 and 3.5, Ajax and Microsoft Access support</li>
              <li>• Plans are hosted on state of the art Dual Quad Core servers running Windows Server 2008 and Internet Information Server 7.0</li>
              <li>• World-renowned Windows website control panel Plesk for easy management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsResellerHosting;