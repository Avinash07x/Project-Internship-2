import React, { useState, useEffect } from 'react';
import { Globe, Users, Server, CheckSquare, Phone, Mail, MapPin, Star, Shield, Clock, Zap } from 'lucide-react';

const USADedicatedServerHosting = () => {
  const [counters, setCounters] = useState({
    domains: 0,
    clients: 0,
    vps: 0,
    dedicated: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counter-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounter = (target, key) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animateCounter(3854, 'domains');
      animateCounter(2285, 'clients');
      animateCounter(3565, 'vps');
      animateCounter(4678, 'dedicated');
    }
  }, [isVisible]);

  const serverPlans = [
    {
      title: "India Based Linux Dedicated",
      description: "The word dedicated stands for Virtual Private Server, it is used to provide immediate services to different users by following the technique of splitting a single physical server computer. The virtual machine which is designed in a way of separating the physical computers permits the users to make changes in their server according to their needs.",
      link: "/linux-dedicated-server-hosting",
      gradient: "from-blue-500 to-blue-700",
      icon: <Server className="w-8 h-8 text-white" />
    },
    {
      title: "India Based Windows Dedicated",
      description: "If your web application or web site is not well-matched with shared hosting and a dedicated server is not in your funds, then Choose dedicated servers that provide you dedicated server atmosphere at low expenditure, we are providing a variety of dedicated servers.",
      link: "/windows-dedicated-server-hosting",
      gradient: "from-green-500 to-green-700",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "US Based Linux Dedicated",
      description: "Dedicated stands for Virtual Private Server. A dedicated is considered as a step ahead towards having your dedicated server from shared web hosting. With the increasing power, performance, and memory of the CPU of server hardware, virtualization is playing a very important role.",
      link: "/us-based-linux-dedicated-server",
      gradient: "from-purple-500 to-purple-700",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "US Based Windows Dedicated",
      description: "You can also get windows based dedicated servers. These types of dedicated are available with some additional license charges. Physical Memory: With the help of physical memory it can be calculated that the dedicated can what number of applications.",
      link: "/us-based-windows-dedicated-server",
      gradient: "from-red-500 to-red-700",
      icon: <Star className="w-8 h-8 text-white" />
    }
  ];

  const features = [
    "Root Access using SSH and Restart Facility",
    "Fully Managed Dedicated Server",
    "Full Technical Support",
    "No TPA Support",
    "Direct Phone Support 365 Days",
    "All Hardware are Latest",
    "Unlimited Bandwidth with 1 Gbps Connection",
    "Install Software as you like",
    "No Restriction on Resource Usage"
  ];

  const mainFeatures = [
    { icon: <Globe className="w-6 h-6" />, title: "Free Domain Name", desc: "Get a free domain with your hosting plan" },
    { icon: <Mail className="w-6 h-6" />, title: "500+ Email Accounts", desc: "Professional email hosting included" },
    { icon: <Zap className="w-6 h-6" />, title: "Easy Web Design", desc: "No coding required website builder" },
    { icon: <CheckSquare className="w-6 h-6" />, title: "All Hosting Features", desc: "Complete hosting solution package" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-indigo-400 rounded-full opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-400"></div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
              WEB HOSTING SERVICE IN USA
            </h1>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto">
              Premium dedicated server hosting solutions with 99.99% uptime guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-8">
                Experience The Uninterrupted and Fast 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Dedicated Server Hosting Services</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg">
                Web hosting services come up with a number of options for businesses and individuals. This ensures that their website remains accessible to the people at every single instance of time. Dedicated server hosting is one such extremely popular web hosting solution and it is known to offer a number of benefits to the companies which completely relies on e-commerce.
              </p>
              <p className="text-lg">
                Looking for your next dedicated server hosting providers of USA? Get Dedicated hosting servers in USA and VPS Hosting for international & local clients from the most reliable and fast USA data-center. We are providing a variety of dedicated servers that will help you to get complete solution for your personal and business requirements.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white p-8 rounded-2xl text-center">
                  <div className="text-green-600 text-7xl font-bold mb-3">30</div>
                  <div className="text-gray-600 text-sm mb-1">DAY</div>
                  <div className="text-gray-800 font-bold text-lg">MONEY BACK</div>
                  <div className="text-gray-800 font-bold text-lg">GUARANTEE</div>
                  <div className="mt-4 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div id="counter-section" className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Animated background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-blue-400">Company</span> Statistics
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-4">Trusted by thousands of clients worldwide</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, count: counters.domains, label: "domains registered", color: "from-blue-400 to-blue-600" },
              { icon: Users, count: counters.clients, label: "happy clients", color: "from-green-400 to-green-600" },
              { icon: Server, count: counters.vps, label: "vps servers sold", color: "from-purple-400 to-purple-600" },
              { icon: CheckSquare, count: counters.dedicated, label: "dedicated servers sold", color: "from-red-400 to-red-600" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-3">{item.count.toLocaleString()}</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Server Plans */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Choose Your Managed Dedicated Servers from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">USA</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-4">Premium hosting solutions tailored for your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serverPlans.map((plan, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                <div className={`bg-gradient-to-br ${plan.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-30">
                    {plan.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{plan.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">{plan.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Plans
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Low Cost Dedicated Server Hosting Service Provider in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">USA</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Esteemhost, dedicated virtual server hosting company since 2011 offers web hosting solutions, shared vps dedicated hosting, VPS, domain name, cloud, SSL, backup and storage.
                </p>
                <p className="text-lg">
                  Dedicated hosting implies that you also get far more control over how the server is configured. You can add and remove software, install updates or tweak all settings, allowing you to optimize the server for your specific needs.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl text-white">
                  <div className="text-center">
                    <Clock className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-blue-100">Always here to help you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Best Dedicated Server Hosting Company - USA
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                Esteemhost is one of the leading and reliable dedicated server hosting company in USA. We offer various type of dedicated web hosting packages including Dedicated VPS Server Hosting, Linux Web Hosting, JAVA Web Hosting and Windows Web Hosting. Our network is designed for high availability and high security so our web hosting service is most reliable for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                USA Dedicated Server Hosting Features at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Esteemhost</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-medium leading-relaxed group-hover:text-blue-200 transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-300 mb-8 text-lg">
                For further inquiry regarding our dedicated server hosting company
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl shadow-lg">
                  <Phone className="w-6 h-6" />
                  <span className="font-semibold text-lg">+91-9782569564</span>
                </div>
                <div className="text-gray-300 text-lg">or</div>
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Esteemhost</h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for premium dedicated server hosting solutions since 2011. Delivering excellence in web hosting services.
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Dedicated Servers</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">VPS Hosting</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Domain Names</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">SSL Certificates</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Cloud Hosting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">24/7 Technical Support</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Live Chat</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Knowledge Base</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Contact Us</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Server Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91-9782569564</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@esteemhost.com</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Esteemhost. All rights reserved. | Premium USA Dedicated Server Hosting Solutions</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default USADedicatedServerHosting;