import React, { useState, useEffect } from 'react';
import { Server, Users, Globe, CheckCircle, Shield, Zap, HardDrive, Cpu, Database, Clock } from 'lucide-react';

const DedicatedServerPage = () => {
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
        domains: 670,
        clients: 980,
        vpsServers: 250,
        dedicatedServers: 275
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
      title: "India Based Dedicated Server",
      description: "The word dedicated stands for Virtual Private Server, it is used to provide immediate services to different users by following the technique of splitting a single physical server computer. The virtual machine which is designed in a way of separating the physical computers permits the users to make changes in their server according to their needs.",
      location: "India",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "USA Based Dedicated Server",
      description: "If your web application or web site is not well-matched with shared hosting and a dedicated server is not in your funds, then Choose dedicated servers that provide you dedicated server atmosphere at low expenditure, we are providing a variety of dedicated servers.",
      location: "USA",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "France Based Dedicated Server",
      description: "Dedicated stands for Virtual Private Server. A dedicated is considered as a step ahead towards having your dedicated server from shared web hosting. With the increasing power, performance, and memory of the CPU of server hardware, virtualization is playing a very important role.",
      location: "France",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Germany Based Dedicated Server",
      description: "You can also get windows based dedicated servers. These types of dedicated are available with some additional license charges. Physical Memory: With the help of physical memory it can be calculated that the dedicated can what number of applications.",
      location: "Germany",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    { icon: <Globe className="w-6 h-6" />, text: "Free Domain Name" },
    { icon: <Users className="w-6 h-6" />, text: "Over 500+ Email Accounts" },
    { icon: <Zap className="w-6 h-6" />, text: "Easy Web Design No Coding Required" },
    { icon: <Server className="w-6 h-6" />, text: "All Hosting Features" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get your India based, desired dedicated server hosting service
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Experience The Uninterrupted and Fast Dedicated Server Hosting Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-blue-600">{feature.icon}</div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Web hosting services come up with a number of options for businesses and individuals. This ensures that their website remains accessible to the people at every single instance of time. <strong className="text-blue-600">Dedicated server for hosting</strong> is one such extremely popular web hosting solution and it is known to offer a number of benefits to the companies which completely relies on e-commerce.
              </p>
              
              <p>
                Looking for your next dedicated server hosting providers of India? Get Dedicated hosting servers in India and VPS Hosting for international & local clients from the most reliable and fast India data-center. We are providing a variety of dedicated servers that will help you to get complete solution for your personal and business requirements.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">Service Locations:</h3>
                <p className="text-blue-700">
                  Offer Dedicated Server Hosting in Mumbai, Delhi, Noida, Chandigarh, Gurgaon, Pune, Hyderabad, Bangalore, Ahmedabad, Cochin, Chennai, Rajasthan.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
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
              <span className="text-blue-400">Company</span> Statistics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <span className="text-4xl font-bold text-blue-400">{counters.domains}</span>
                <p className="text-gray-300 mt-2">Domains Registered</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <span className="text-4xl font-bold text-green-400">{counters.clients}</span>
                <p className="text-gray-300 mt-2">Happy Clients</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Server className="w-12 h-12 text-purple-400 mb-4" />
                <span className="text-4xl font-bold text-purple-400">{counters.vpsServers}</span>
                <p className="text-gray-300 mt-2">VPS Servers Sold</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col items-center">
                <HardDrive className="w-12 h-12 text-orange-400 mb-4" />
                <span className="text-4xl font-bold text-orange-400">{counters.dedicatedServers}</span>
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
              Choose Your Managed Dedicated Servers from <span className="text-blue-600">Different Locations</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serverPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    View Plans
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">What are Dedicated Servers?</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Dedicated server is an online physical hardware machine also can called <strong className="text-blue-600">Dedicated web hosting</strong> that can be access from anywhere anytime. Dedicated server entirely leased or rented to client and it not shared to any one other person. Dedicated servers are more reliable, secure and flexible than shared hosting, client have full access and control over the servers also client have option for operation system and hardware.
              </p>
              
              <p>
                Dedicated server can be <strong className="text-blue-600">managed dedicated server</strong> or <strong className="text-blue-600">unmanaged dedicated server</strong> as per customer requirement, Dedicated server are rented for separated time like monthly, quarterly, semi-annually and yearly or any term suitable for customer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Cpu className="w-6 h-6 mr-2" />
                  Benefits of Dedicated Servers
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    Uninterrupted Dedicated Resources
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    Latest Hardware for better performance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    24X7 Dedicated Support Team
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    Blazing fast speed
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-2" />
                  Server Management Options
                </h3>
                <div className="space-y-3 text-green-700">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                    <span><strong>Unmanaged:</strong> You manage the server</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                    <span><strong>Semi-managed:</strong> We manage server level</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                    <span><strong>Fully managed:</strong> Complete management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Choose the perfect dedicated server for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              View All Plans
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedServerPage;