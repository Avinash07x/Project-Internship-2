import React, { useState, useEffect } from 'react';
import { Server, Users, Globe, CheckCircle, Shield, Zap, HardDrive, Cpu, Database, Clock, Phone, Settings, Lock, Wifi } from 'lucide-react';

const GermanyDedicatedServerPage = () => {
  const [counters, setCounters] = useState({
    domains: 0,
    clients: 0,
    vpsServers: 0,
    dedicatedServers: 0
  });

  // Animate counters on page load
  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        domains: 3854,
        clients: 2285,
        vpsServers: 3565,
        dedicatedServers: 4678
      };

      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          domains: Math.floor(targets.domains * progress),
          clients: Math.floor(targets.clients * progress),
          vpsServers: Math.floor(targets.vpsServers * progress),
          dedicatedServers: Math.floor(targets.dedicatedServers * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const serverPlans = [
    {
      title: "India Based Linux Dedicated",
      description: "The word dedicated stands for Virtual Private Server, it is used to provide immediate services to different users by following the technique of splitting a single physical server computer. The virtual machine which is designed in a way of separating the physical computers permits the users to make changes in their server according to their needs.",
      icon: <Server className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
      link: "linux-dedicated-server-hosting"
    },
    {
      title: "India Based Windows Dedicated",
      description: "If your web application or web site is not well-matched with shared hosting and a dedicated server is not in your funds, then Choose dedicated servers that provide you dedicated server atmosphere at low expenditure, we are providing a variety of dedicated servers.",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      link: "windows-dedicated-server-hosting"
    },
    {
      title: "US Based Linux Dedicated",
      description: "Dedicated stands for Virtual Private Server. A dedicated is considered as a step ahead towards having your dedicated server from shared web hosting. With the increasing power, performance, and memory of the CPU of server hardware, virtualization is playing a very important role.",
      icon: <HardDrive className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      link: "us-based-linux-dedicated-server"
    },
    {
      title: "US Based Windows Dedicated",
      description: "You can also get windows based dedicated servers. These types of dedicated are available with some additional license charges. Physical Memory: With the help of physical memory it can be calculated that the dedicated can what number of applications in a particular amount of time.",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      link: "us-based-windows-dedicated-server"
    }
  ];

  const features = [
    { icon: <Globe className="w-6 h-6" />, text: "Free Domain Name" },
    { icon: <Users className="w-6 h-6" />, text: "Over 500+ Email Accounts" },
    { icon: <Zap className="w-6 h-6" />, text: "Easy Web Design No Coding Required" },
    { icon: <Server className="w-6 h-6" />, text: "All Hosting Features" }
  ];

  const hostingFeatures = [
    { icon: <Settings className="w-5 h-5" />, text: "Root Access using SSH and Restart Facility" },
    { icon: <Shield className="w-5 h-5" />, text: "Fully Managed Dedicated Server" },
    { icon: <Phone className="w-5 h-5" />, text: "Full Technical Support" },
    { icon: <Clock className="w-5 h-5" />, text: "No TPA Support" },
    { icon: <Phone className="w-5 h-5" />, text: "Direct Phone Support 365 Days" },
    { icon: <HardDrive className="w-5 h-5" />, text: "All Hardware are Latest" },
    { icon: <Wifi className="w-5 h-5" />, text: "Unlimited Bandwidth with 1 Gbps Connection" },
    { icon: <Database className="w-5 h-5" />, text: "Install Software as you like" },
    { icon: <Lock className="w-5 h-5" />, text: "No Restriction on Resource Usage" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WEB HOSTING SERVICE IN GERMANY
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Experience The Uninterrupted and Fast Dedicated Server Hosting Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-red-600">{feature.icon}</div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-justify">
                Web hosting services come up with a number of options for businesses and individuals. This ensures that their website remains accessible to the people at every single instance of time. <strong className="text-red-600">Dedicated server hosting</strong> is one such extremely popular web hosting solution and it is known to offer a number of benefits to the companies which completely relies on e-commerce. Dedicated server resources extra space, extra bandwidth, extra RAM and extra resources. This is a wonderful resolution for big size online businesses and outsized websites that has a huge amount of visitors and traffic.
              </p>
              
              <p className="text-justify">
                Looking for your next dedicated server hosting providers of Germany? Get Dedicated hosting servers in Germany and VPS Hosting for international & local clients from the most reliable and fast Germany data-center. We are providing a variety of dedicated servers that will help you to get complete solution for your personal and business requirements. Please have appeared at above plans and wish therefore that will fit in your budget and fulfill your hosting condition.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Money Back Guarantee</h3>
              <p className="text-gray-600">
                30-day money back guarantee on all our dedicated server hosting plans
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-red-400">Company</span> Statistics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 text-red-400 mb-4" />
                <span className="text-4xl font-bold text-red-400">{counters.domains}</span>
                <p className="text-gray-300 mt-2">Domains Registered</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-orange-400 mb-4" />
                <span className="text-4xl font-bold text-orange-400">{counters.clients}</span>
                <p className="text-gray-300 mt-2">Happy Clients</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Server className="w-12 h-12 text-yellow-400 mb-4" />
                <span className="text-4xl font-bold text-yellow-400">{counters.vpsServers}</span>
                <p className="text-gray-300 mt-2">VPS Servers Sold</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <HardDrive className="w-12 h-12 text-green-400 mb-4" />
                <span className="text-4xl font-bold text-green-400">{counters.dedicatedServers}</span>
                <p className="text-gray-300 mt-2">Dedicated Servers Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Server Plans Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choose Your Managed Dedicated Servers from <span className="text-red-600">Germany</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serverPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${plan.gradient} text-white`}>
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.description}</p>
                  <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                    View Plans
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Low Cost Dedicated Server Hosting Service Provider in Germany
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-justify">
                <strong className="text-red-600">Esteemhost</strong>, dedicated virtual server hosting company since 2011 offers web hosting solutions, shared vps dedicated hosting, VPS, domain name, cloud, SSL, backup and storage.
              </p>
              
              <p className="text-justify">
                Dedicated hosting implies that you also get far more control over how the server is configured. You can add and remove software, install updates or tweak all settings, allowing you to optimize the server for your specific needs. Choosing between a dedicated server or a cloud hosting solution is an important decision for your company.
              </p>
            </div>

            <div className="mt-12 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                Best Dedicated Server Hosting Company - Germany
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                Esteemhost is one of the leading and reliable dedicated server hosting company in Germany. Esteemhost offers various type of dedicated web hosting packages. We offer Dedicated VPS Server Hosting, Linux Web Hosting, JAVA Web Hosting and Windows Web Hosting. If you run eCommerce website, CMS website, inventory online application, we have special web hosting packages for these applications. Our network is designed for high availability and High security so our web hosting service is most reliable for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              German Dedicated Server Hosting Features at <span className="text-red-600">Esteemhost</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {hostingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border border-red-200">
                <p className="text-gray-700">
                  For further inquiry regarding our{' '}
                  <span className="text-red-600 font-semibold">dedicated server hosting</span> company,{' '}
                  <span className="font-semibold">call us +91-7357-228899</span> or do 'Live Chat'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started with Germany Hosting?</h2>
          <p className="text-xl mb-8 opacity-90">Experience the power of German dedicated servers</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +91-7357-228899
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              Live Chat Support
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
              View All Plans
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanyDedicatedServerPage;