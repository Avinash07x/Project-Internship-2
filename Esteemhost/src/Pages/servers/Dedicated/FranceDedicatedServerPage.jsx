import React, { useState, useEffect } from 'react';
import { Globe, Users, Server, CheckSquare, Phone, Mail, MapPin } from 'lucide-react';

const FranceDedicatedServerPage = () => {
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
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "India Based Windows Dedicated",
      description: "If your web application or web site is not well-matched with shared hosting and a dedicated server is not in your funds, then Choose dedicated servers that provide you dedicated server atmosphere at low expenditure, we are providing a variety of dedicated servers.",
      link: "/windows-dedicated-server-hosting",
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "US Based Linux Dedicated",
      description: "Dedicated stands for Virtual Private Server. A dedicated is considered as a step ahead towards having your dedicated server from shared web hosting. With the increasing power, performance, and memory of the CPU of server hardware, virtualization is playing a very important role.",
      link: "/us-based-linux-dedicated-server",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "US Based Windows Dedicated",
      description: "You can also get windows based dedicated servers. These types of dedicated are available with some additional license charges. Physical Memory: With the help of physical memory it can be calculated that the dedicated can what number of applications.",
      link: "/us-based-windows-dedicated-server",
      gradient: "from-red-500 to-red-700"
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              WEB HOSTING SERVICE IN FRANCE
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Experience The Uninterrupted and Fast 
              <span className="text-blue-600"> Dedicated Server Hosting Services</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Free Domain Name",
                "Over 500+ Email Accounts",
                "Easy Web Design No Coding Required",
                "All Hosting Features"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Web hosting services come up with a number of options for businesses and individuals. This ensures that their website remains accessible to the people at every single instance of time. Dedicated server hosting is one such extremely popular web hosting solution and it is known to offer a number of benefits to the companies which completely relies on e-commerce.
              </p>
              <p>
                Looking for your next dedicated server hosting providers of France? Get Dedicated hosting servers in France and VPS Hosting for international & local clients from the most reliable and fast France data-center. We are providing a variety of dedicated servers that will help you to get complete solution for your personal and business requirements.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-green-600 text-6xl font-bold mb-2">30</div>
                <div className="text-gray-600 text-sm">DAY</div>
                <div className="text-gray-800 font-semibold">MONEY BACK</div>
                <div className="text-gray-800 font-semibold">GUARANTEE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div id="counter-section" className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-400">Company</span> Statistics
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, count: counters.domains, label: "domains registered", color: "text-blue-400" },
              { icon: Users, count: counters.clients, label: "happy clients", color: "text-green-400" },
              { icon: Server, count: counters.vps, label: "vps servers sold", color: "text-purple-400" },
              { icon: CheckSquare, count: counters.dedicated, label: "dedicated servers sold", color: "text-red-400" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                  <div className="text-4xl font-bold mb-2">{item.count.toLocaleString()}</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Server Plans */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Managed Dedicated Servers from <span className="text-blue-600">France</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serverPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${plan.gradient} p-6`}>
                  <h3 className="text-xl font-bold text-white text-center">{plan.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{plan.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    View Plans
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Low Cost Dedicated Server Hosting Service Provider in <span className="text-blue-600">France</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Esteemhost, dedicated virtual server hosting company since 2011 offers web hosting solutions, shared vps dedicated hosting, VPS, domain name, cloud, SSL, backup and storage.
              </p>
              <p>
                Dedicated hosting implies that you also get far more control over how the server is configured. You can add and remove software, install updates or tweak all settings, allowing you to optimize the server for your specific needs.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Best Dedicated Server Hosting Company - France
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Esteemhost is one of the leading and reliable dedicated server hosting company in France. We offer various type of dedicated web hosting packages including Dedicated VPS Server Hosting, Linux Web Hosting, JAVA Web Hosting and Windows Web Hosting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              French Dedicated Server Hosting Features at <span className="text-blue-400">Esteemhost</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                For further inquiry regarding our dedicated server hosting company
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 bg-blue-600 px-6 py-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+91-7357-228899</span>
                </div>
                <div className="text-gray-300">or</div>
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Esteemhost</h3>
              <p className="text-gray-400">
                Your trusted partner for dedicated server hosting solutions since 2011.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dedicated Servers</li>
                <li>VPS Hosting</li>
                <li>Domain Names</li>
                <li>SSL Certificates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Technical Support</li>
                <li>Live Chat</li>
                <li>Knowledge Base</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-7357-228899</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@esteemhost.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>France</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Esteemhost. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default FranceDedicatedServerPage;