import React, { useState } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Database, Globe, Mail, Server, Shield, Trophy, Users } from 'lucide-react';

const CloudHostingPage = () => {
  // Mock configuration data (replace with your actual data)
  const config = {
    price: {
      cloudeWebHostingIndia: [
        {
          title: "Starter",
          INR: "99",
          USD: "1.99",
          url: "/order/starter"
        },
        {
          title: "Professional",
          INR: "199",
          USD: "3.99",
          url: "/order/professional"
        },
        {
          title: "Business",
          INR: "299",
          USD: "5.99",
          url: "/order/business"
        },
        {
          title: "Enterprise",
          INR: "499",
          USD: "9.99",
          url: "/order/enterprise"
        }
      ],
      currsign: {
        INR: "₹",
        USD: "$"
      }
    }
  };

  const [selectedPlan, setSelectedPlan] = useState(0);
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const planFeatures = [
    {
      website: "Single",
      storage: "2 GB",
      bandwidth: "Unlimited",
      mysql: "1 mysql",
      email: "5",
      subDomains: "2"
    },
    {
      website: "Single",
      storage: "Unlimited",
      bandwidth: "Unlimited",
      mysql: "Unlimited",
      email: "Unlimited",
      subDomains: "Unlimited"
    },
    {
      website: "10 Website",
      storage: "Unlimited",
      bandwidth: "Unlimited",
      mysql: "Unlimited",
      email: "Unlimited",
      subDomains: "Unlimited"
    },
    {
      website: "Unlimited Website",
      storage: "Unlimited",
      bandwidth: "Unlimited",
      mysql: "Unlimited",
      email: "Unlimited",
      subDomains: "Unlimited"
    }
  ];

  const features = [
    {
      icon: <Server className="w-12 h-12 text-blue-500" />,
      title: "Control Panel-WP",
      description: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc."
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: "Disk Space",
      description: "Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it."
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
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
      description: "We offer a 100% money-back refund for a full 30 days. This is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% of its clients."
    },
    {
      icon: <Mail className="w-12 h-12 text-indigo-500" />,
      title: "Email Features",
      description: "Esteemhost provides you the power to create unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains. You can access your email through POP/IMAP."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Free Google Ads Credit",
      description: "Let your clients find you on google, Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-. Google AdWords is Google's advertising program."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Customer Support 24/7",
      description: "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support."
    }
  ];

  const faqs = [
    {
      question: "WHAT IS A CLOUD SHARED HOSTING?",
      answer: "Cloud hosting, or cloud VPS hosting, permits you to utilize the assets of various servers, as opposed to having your site limited to a solitary server area. This takes into consideration boundless development and is an absolute necessity have for overwhelming movement locales. Cloud hosting additionally takes into consideration more noteworthy security from an overpowered server. Get best and cheap Cloud Hosting in India from esteemhost India's Leading cloud service provider."
    },
    {
      question: "WHAT FEATURES ESTEEM HOST OFFERS WITH CLOUD SHARED HOSTING",
      answer: "• Unlimited webspace.\n• Unmetered data transfer.\n• Unlimited MySQL database space.\n• Unlimited Email ids in the control panel section.\n• Unlimited sub-domains.\n• Blazing fast speed as we have a datacenter in the US.\n• Safety and security guaranteed with the best of software and hardware."
    },
    {
      question: "ADDITIONAL FEATURES FOR SMALL E-COMMERCE BUSINESS WEBSITE AND BLOGGERS",
      answer: "• Ecommerce support with PHP technologies supported such as Magento, Zen Cart, Open Cart, etc.\n• Softaculous scripts installation with one click.\n• Intuitive web control panel and website administration.\n• Real-time traffic statistics.\n• Proactive server management.\n• 24X7X365 technical support via phone, chat, and email.\n• 99.9% server uptime.\n• Customizable plans for your business requirement."
    },
    {
      question: "IS CLOUD HOSTING WIDELY BETTER OPTION?",
      answer: "Cloud hosting is generally observed as a superior alternative to shared hosting in light of its capacity to deal with a lot of activity, its enhanced security insurance, and its unwavering quality. In any case, these additional items do include some major disadvantages, and most cloud hosting alternatives are more costly than shared hosting plans. Be that as it may, in case you're anticipating developing your site and you require a site with an elite rate, then cloud hosting will likely be the best choice for your necessities."
    }
  ];

  const handleSliderChange = (value) => {
    setSelectedPlan(value);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Meta information would go in document head */}
      
      {/* Hero Section with Pricing Slider */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cloud web hosting</h1>
            <p className="text-xl">Unlimited Cloud Web Hosting At Affordable Price</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative">
              <div className="absolute -top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                10% off
              </div>
              
              {/* Plan Selector */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {config.price.cloudeWebHostingIndia.map((plan, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-lg cursor-pointer transition-all ${
                      selectedPlan === index ? 'bg-white/20' : 'bg-white/5'
                    }`}
                    onClick={() => handleSliderChange(index)}
                  >
                    <h4 className="font-semibold text-lg mb-2">{plan.title}</h4>
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <Server className="w-8 h-8" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Plan Features */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                <div className="text-center">
                  <div className="font-semibold text-sm mb-2">Website</div>
                  <div className="text-lg">{planFeatures[selectedPlan].website}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-2">Storage</div>
                  <div className="text-lg">{planFeatures[selectedPlan].storage}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-2">Bandwidth</div>
                  <div className="text-lg">{planFeatures[selectedPlan].bandwidth}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-2">MySQL</div>
                  <div className="text-lg">{planFeatures[selectedPlan].mysql}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-2">Email</div>
                  <div className="text-lg">{planFeatures[selectedPlan].email}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-2">Sub Domains</div>
                  <div className="text-lg">{planFeatures[selectedPlan].subDomains}</div>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">
                  {config.price.currsign[currency]}{config.price.cloudeWebHostingIndia[selectedPlan][currency]}/m
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get Cloud Hosting from India's #1 hosting provider.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              <span className="text-blue-600">Cheap Cloud Web hosting</span> pricing table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.price.cloudeWebHostingIndia.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="p-6 text-center border-b">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 && "web hosting within budget for beginners and small websites"}
                    {index === 1 && "Unlimited Resources for one heavy traffic and big websites"}
                    {index === 2 && "If you have multiple websites than we have solution for you"}
                    {index === 3 && "You may required everything unlimited that you will get here"}
                  </p>
                  <div className="text-3xl font-bold text-blue-600">
                    <div className="text-sm text-gray-500">Start at</div>
                    <div>{config.price.currsign[currency]}{plan[currency]}/m</div>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {index === 0 ? "1 Website" : index === 2 ? "10 Website" : index === 3 ? "Unlimited Website" : "1 Website"}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {index === 0 ? "2 GB Storage" : "Unlimited Storage"}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {index === 0 ? "5GB Bandwidth" : "Unlimited Bandwidth"}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {index === 0 ? "5 Email Accounts" : "Unlimited Email Accounts"}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {index === 0 ? "2 Sub Domains" : "Unlimited Sub Domains"}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {index === 0 ? "1 Mysql Database" : "Unlimited Mysql Database"}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      One click installation scripts
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
              <span className="text-blue-600">Windows hosting</span> frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-white border-t">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
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

export default CloudHostingPage;