import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';

const Sharedpage = () => {
  const [billing, setBilling] = useState('monthly');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleBilling = () => {
    setBilling((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  const plans = [
    {
      name: 'Basic',
      price: { monthly: '$2', yearly: '$20' },
      features: [
        '1 Website',
        '1 Cpanel account',
        '10GB Storage',
        '50GB Bandwidth',
        '10 Email Accounts',
        'Free SSL Certificate',
        'Email Support',
        '1 MySQL Database'
      ],
      color: 'bg-blue-300 hover:bg-blue-500',
    },
    {
      name: 'Standard',
      price: { monthly: '$5', yearly: '$50' },
      features: [
        '10 Websites',
        '10 Cpanel accounts',
        '50GB Storage',
        '500GB Bandwidth',
        '50 Email Accounts',
        'Free SSL Certificate',
        '24/7 Support',
        '10 MySQL Databases'
      ],
      color: 'bg-blue-600 hover:bg-blue-700',
      popular: true,
    },
    {
      name: 'Premium',
      price: { monthly: '$10', yearly: '$100' },
      features: [
        'Unlimited Websites',
        'Unlimited Cpanel accounts',
        '100GB+ Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        'Priority Support',
        'Unlimited MySQL Databases'
      ],
      color: 'bg-blue-300 hover:bg-blue-500',
    },
  ];

  return (
    <div className="bg-blue-100 min-h-screen relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <section className={`text-center py-16 px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 animate-pulse">
          Affordable Shared Hosting
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Fast, secure & reliable hosting for your website
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:scale-110 hover:shadow-cyan-500/25 transition-all duration-300 text-sm transform hover:-translate-y-1 relative overflow-hidden group">
          <span className="relative z-10">FREE SIGN UP</span>
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </section>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Animated Toggle Billing Cycle */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-flex border border-blue-500 rounded-full overflow-hidden shadow-2xl bg-white">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-transform duration-300 ease-in-out ${billing === 'yearly' ? 'translate-x-full' : 'translate-x-0'}`} style={{ width: '50%' }}></div>
            <button
              onClick={toggleBilling}
              className={`relative px-8 py-3 text-sm font-medium transition-all duration-300 z-10 ${billing === 'monthly'
                  ? 'text-white'
                  : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={toggleBilling}
              className={`relative px-8 py-3 text-sm font-medium transition-all duration-300 z-10 ${billing === 'yearly'
                  ? 'text-white'
                  : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Animated Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 transition-all duration-700 ease-out transform bg-white border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                } ${plan.popular
                  ? 'border-2 border-green-500 scale-105 shadow-2xl shadow-green-500/20'
                  : 'border-gray-200 hover:border-gray-300 shadow-xl'
                } hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group`}
              style={{
                animationDelay: `${idx * 200 + 500}ms`,
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="mb-6">
                <div className={`text-6xl transition-transform duration-300 ${hoveredCard === idx ? 'scale-110 animate-pulse' : ''}`}>
                  {plan.icon}
                </div>
              </div>

              <h3 className="text-2xl text-center font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-blue-600 transition-all duration-300">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-6">Starting From</p>

              {/* Animated Price */}
              <div className="relative mb-8">
                <div className={`text-5xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r ${plan.color} mb-2 transition-all duration-500 ${hoveredCard === idx ? 'scale-110' : ''}`}>
                  {plan.price[billing]}
                  <span className="text-lg text-gray-500 font-medium">
                    /{billing === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
              </div>

              {/* Animated Button */}
              <button className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-white font-bold text-sm rounded-2xl py-4 mb-8 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group`}>
                <span className="relative z-10">Choose Plan</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              {/* Features List */}
              <div className="text-left">
                <h4 className="font-bold mb-4 text-gray-800 text-lg border-b border-gray-200 pb-2">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`text-sm text-gray-600 flex items-center transition-all duration-300 hover:text-gray-800 hover:translate-x-2 ${hoveredCard === idx ? 'animate-pulse' : ''
                        }`}
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating particles effect on hover */}
              {hoveredCard === idx && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Features Section */}
        <section className={`py-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Shared Hosting?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <CheckCircle className="mx-auto text-blue-600 w-10 h-10 mb-2" />
                <p className="font-medium">Free SSL Certificate</p>
              </div>
              <div>
                <CheckCircle className="mx-auto text-blue-600 w-10 h-10 mb-2" />
                <p className="font-medium">99.9% Uptime Guarantee</p>
              </div>
              <div>
                <CheckCircle className="mx-auto text-blue-600 w-10 h-10 mb-2" />
                <p className="font-medium">One-click WordPress</p>
              </div>
              <div>
                <CheckCircle className="mx-auto text-blue-600 w-10 h-10 mb-2" />
                <p className="font-medium">24/7 Support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default Sharedpage;