import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Shield, Zap, Users, Globe, DollarSign, Headphones, Gift } from 'lucide-react';

const JavaHostingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);

  // Pricing data
  const pricingData = [
    {
      title: "Starter",
      price: "₹499",
      storage: "10 GB",
      memory: "256 MB",
      tomcat: "7.0 or 6.0",
      jdk: "1.7 or 1.6",
      cpanel: "Custom",
      mysql: "Unlimited",
      description: "web hosting within budget for beginners and small websites",
      url: "/order/starter"
    },
    {
      title: "Business",
      price: "₹999",
      storage: "20 GB",
      memory: "512 MB",
      tomcat: "7.0 or 6.0",
      jdk: "1.7 or 1.6",
      cpanel: "Custom",
      mysql: "Unlimited",
      description: "Unlimited Resources for one heavy traffic and big websites",
      url: "/order/business",
      popular: true
    },
    {
      title: "Professional",
      price: "₹1499",
      storage: "40 GB",
      memory: "768 MB",
      tomcat: "7.0 or 6.0",
      jdk: "1.7 or 1.6",
      cpanel: "Custom",
      mysql: "Unlimited",
      description: "If you have multiple websites than we have solution for you",
      url: "/order/professional"
    },
    {
      title: "Enterprise",
      price: "₹2499",
      storage: "100+ GB",
      memory: "2 GB",
      tomcat: "7.0 or 6.0",
      jdk: "1.7 or 1.6",
      cpanel: "Custom",
      mysql: "Unlimited",
      description: "You may required everything unlimited that you will get here",
      url: "/order/enterprise"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Control Panel-Cpanel",
      description: "Esteemhost's Control Panel provides you all types of features and easily accessible stats like server information, webspace, bandwidth, setup your FTP accounts, check your website stats, work with your MySQL databases, etc."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Disk Space",
      description: "Esteemhost brings unlimited disk space suiting your every type of website there we never let you think about disk space gets full, you will feel free about it."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: "E-Commerce Features",
      description: "EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce, OS Commerce and Zen Cart can be installed with just a click."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "For Programmers",
      description: "Esteemhost provides you the freedom to forget your website designed with the latest programming languages by supporting CGI, PHP 5, Perl, Python, Free Module Installation, htaccess support, SSI, SMTP Support, Cron, FrontPage."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Money Back Guarantee",
      description: "We offer a 100% money-back refund for a full 30 days if you are ever dissatisfied with our service."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Email Features",
      description: "Esteemhost provides you the power to create unlimited email accounts on your main domain as well as any domain pointers and subdomains."
    },
    {
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      title: "Free Google Ads Credit",
      description: "Sign up any of our hosting plans & get Free Google Adwords Credit up to INR 2500/-."
    },
    {
      icon: <Headphones className="w-8 h-8 text-cyan-500" />,
      title: "Customer Support 24/7",
      description: "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. We are reachable to you anytime and every time (24/7/365)."
    }
  ];

  const faqData = [
    {
      question: "What is Java Hosting?",
      answer: "Java is one of the most useful and famous programming languages in the world. Java hosting is a service which provides a hosting platform to host your Java-based websites/applications. Our Java Hosting supports JSP, Servlets, Beans, EJB, JMS, JSF, JNDI, JDBC, JTS, JTA, XML technologies."
    },
    {
      question: "What is Apache Tomcat?",
      answer: "Apache Tomcat is an open-source Servlet container for hosting Java code. It provides the environment where Java Servlets are executed and processes customer requests. Since its release in 1999, Tomcat has become an industry standard for hosting Java applications."
    },
    {
      question: "What is different between Tomcat and Apache HTTP Web Server?",
      answer: "Apache HTTP Web Server generates static web content using the C programming language, while Tomcat generates dynamic web content and is written entirely in Java."
    },
    {
      question: "The Different Java Hosting Types",
      answer: "There are various types of Java hosting: Shared Tomcat hosting where your Java application shares one Tomcat instance with other customers, and Private Tomcat hosting where each customer has their own private Tomcat installation with full access and control."
    },
    {
      question: "Which is the Best Java Hosting Service?",
      answer: "Private Tomcat hosting is generally recommended for serious users as it offers superior availability, administrator access, easy deployment, and scalability compared to shared hosting options."
    }
  ];

  const handlePlanSelect = (index) => {
    setSelectedPlan(index);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            JAVA Web Hosting
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            JAVA Hosting Was Never So Easy That We Made For You Now
          </p>
          
          {/* Pricing Slider */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                10% OFF
              </div>
            </div>
            
            {/* Plan Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {pricingData.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => handlePlanSelect(index)}
                  className={`p-4 rounded-lg transition-all ${
                    selectedPlan === index 
                      ? 'bg-white text-blue-900 shadow-lg' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="font-semibold">{plan.title}</h3>
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mt-2 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Current Plan Details */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8 text-center">
              <div>
                <div className="text-sm text-blue-200">Storage</div>
                <div className="text-lg font-semibold">{pricingData[selectedPlan].storage}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200">Heap Memory</div>
                <div className="text-lg font-semibold">{pricingData[selectedPlan].memory}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200">Tomcat</div>
                <div className="text-lg font-semibold">{pricingData[selectedPlan].tomcat}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200">JDK VERSION</div>
                <div className="text-lg font-semibold">{pricingData[selectedPlan].jdk}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200">CPanel</div>
                <div className="text-lg font-semibold">{pricingData[selectedPlan].cpanel}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200">MySQL</div>
                <div className="text-lg font-semibold">{pricingData[selectedPlan].mysql}</div>
              </div>
            </div>
            
            {/* Price and Action */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">
                {pricingData[selectedPlan].price}/m
              </div>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              India's Best Tomcat Java Web Hosting
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
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

      {/* Pricing Table */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Cheap Java hosting plans</span> pricing table
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="p-6 text-center border-b">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Start at</div>
                    <div className="text-3xl font-bold text-blue-600">{plan.price}/m</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {plan.storage} Storage
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {plan.memory} Heap Memory
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      JDK Sun from 5 to 9 + custom
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Tomcat(Dedicated 9.0, 8.0 or 7.0)
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Glassfish 2.1, 3.1, 4.0 custom
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Custom Java CPanel
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Unlimited Mysql PostgreSQL
                    </li>
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Java hosting</span> Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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

export default JavaHostingPage;