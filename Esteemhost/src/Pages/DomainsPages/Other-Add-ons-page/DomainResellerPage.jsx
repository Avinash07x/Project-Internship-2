import React, { useState, useEffect } from 'react';
import {
  Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight, Check, Star,
  Upload, Download, Trash2, Plus, X, RefreshCw, AlertCircle, Users, TrendingUp,
  Zap, Award, DollarSign, BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion'; // ✅ Fix: import motion
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero80 from '../../../assets/17.png'; // ✅ Make sure the path is correct

const DomainResellerPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resellerPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 4999,
      popular: false,
      features: [
        'Up to 100 domains/month',
        'Basic reseller dashboard',
        'Email support',
        '20% commission',
        'White-label control panel',
        'API access',
        'Domain management tools',
        'Custom pricing control (Not Included)',
        'Bulk domain tools (Not Included)',
        'Marketing materials (Not Included)',
        'Dedicated account manager (Not Included)',
        'Advanced reporting (Not Included)'
      ],
      limits: {
        domains: '100/month',
        commission: '20%',
        support: 'Email'
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 9999,
      popular: true,
      features: [
        'Up to 500 domains/month',
        'Advanced reseller dashboard',
        'Priority support',
        '25% commission',
        'Full white-label solution',
        'Advanced API access',
        'Custom pricing control',
        'Bulk domain tools',
        'Marketing materials',
        'Dedicated account manager (Not Included)',
        'Advanced reporting',
        'Custom development (Not Included)'
      ],
      limits: {
        domains: '500/month',
        commission: '25%',
        support: 'Priority'
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 19999,
      popular: false,
      features: [
        'Unlimited domains',
        'Enterprise dashboard',
        'Dedicated account manager',
        '30% commission',
        'Complete white-label branding',
        'Premium API access',
        'Custom pricing control',
        'Bulk domain tools',
        'Marketing materials',
        'Dedicated account manager',
        'Advanced reporting',
        'Custom development'
      ],
      limits: {
        domains: 'Unlimited',
        commission: '30%',
        support: 'Dedicated Manager'
      }
    }
  ];


  const domainPricing = [
    { ext: '.com', cost: 599, retail: 749, profit: 150 },
    { ext: '.net', cost: 719, retail: 899, profit: 180 },
    { ext: '.org', cost: 679, retail: 849, profit: 170 },
    { ext: '.in', cost: 519, retail: 649, profit: 130 },
    { ext: '.co', cost: 1039, retail: 1299, profit: 260 },
    { ext: '.io', cost: 1999, retail: 2499, profit: 500 }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "White-Label Solution",
      description: "Complete branded experience with your logo, colors, and domain. Your customers see only your brand."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Profit Margins",
      description: "Earn up to 30% commission on every domain sale with our competitive wholesale pricing structure."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Provisioning",
      description: "Domains are registered instantly through our automated system with real-time API integration."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Support",
      description: "Dedicated account managers and priority technical support to help grow your business."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Advanced Management",
      description: "Powerful reseller dashboard with bulk tools, customer management, and detailed analytics."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Detailed Reporting",
      description: "Comprehensive reports on sales, commissions, customer activity, and business performance."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Recurring Revenue",
      description: "Build a sustainable business with domain renewals generating ongoing income year after year."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Market",
      description: "Tap into the worldwide domain market with support for international customers and currencies."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Infrastructure",
      description: "Built on enterprise-grade infrastructure with 99.9% uptime and military-grade security."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your business runs smoothly at all times."
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleGetStarted = () => {
    setShowPricing(true);
  };

  return (
    <div className="min-h-screen relative w-full bg-blue-100 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

    {/* Hero Section */}
      <section className="relative py-4 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              💼 Start Your Domain Business Today
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              BECOME A<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DOMAIN RESELLER
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              Start your own domain registration business with our white-label reseller program.
              Earn high commissions while providing domain services to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Reselling <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
              <button className="bg-white/70 text-slate-800 px-8 py-2 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all border border-blue-200/50">
                View Pricing
              </button>
            </div>
          </div>

          {/* Hero Image Right */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{
              duration: 3,
              ease: 'easeOut',
              scale: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 3,
                ease: 'easeInOut',
              },
            }}
          >
            <img
              src={Hero80}
              alt="Domain Reseller"
              className="w-full h-auto max-h-[480px] object-contain animate-gentle-bounce"
            />
          </motion.div>
        </div>
      </section>


      {/* Reseller Plans */}
      <section className="py-4 px-6 bg-blue-100 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">Choose Your Reseller Plan</h2>
          <p className="mb-8 text-gray-600">Flexible plans to start and scale your domain reselling business</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resellerPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white border hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'border-green-500 shadow-lg scale-105' : 'border-green-200'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-500 mb-4">Includes {plan.limits.domains}, {plan.limits.support} Support</p>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  ₹{plan.price.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/mo</span>
                </div>
                <ul className="text-left mt-4 space-y-2 text-sm text-gray-700">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`mt-6 w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 hover:scale-105 transition`}
                >
                  {selectedPlan === plan.id ? 'Choose Plan' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Pricing */}
      <section className="py-5 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Wholesale <span className="text-blue-600">Pricing</span>
          </h2>
          <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-200/50">
                    <th className="text-left py-4 px-4 text-slate-800 font-semibold">Extension</th>
                    <th className="text-center py-4 px-4 text-slate-800 font-semibold">Your Cost</th>
                    <th className="text-center py-4 px-4 text-slate-800 font-semibold">Suggested Retail</th>
                    <th className="text-center py-4 px-4 text-slate-800 font-semibold">Your Profit</th>
                    <th className="text-center py-4 px-4 text-slate-800 font-semibold">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {domainPricing.map((domain, index) => (
                    <tr key={index} className="border-b border-blue-200/30 hover:bg-blue-50/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-800 text-lg">{domain.ext}</td>
                      <td className="py-4 px-4 text-center text-slate-700">₹{domain.cost}</td>
                      <td className="py-4 px-4 text-center text-blue-600 font-semibold">₹{domain.retail}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">₹{domain.profit}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {Math.round((domain.profit / domain.retail) * 100)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-600 bg-blue-50/60 rounded-lg p-4 inline-block">
                Pricing shown is for Professional plan. Higher volume discounts available for Enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Reseller <span className="text-blue-600">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/60 border border-blue-200/50 hover:scale-105 transition-all hover:shadow-xl">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-5 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">Revenue Calculator</h2>
          <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-blue-50/60 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
                <div className="text-slate-600 mb-2">Domains/Month</div>
                <div className="text-sm text-slate-500">Average Sales</div>
              </div>
              <div className="text-center p-6 bg-green-50/60 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">₹150</div>
                <div className="text-slate-600 mb-2">Avg Profit/Domain</div>
                <div className="text-sm text-slate-500">Conservative Estimate</div>
              </div>
              <div className="text-center p-6 bg-purple-50/60 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">₹7,500</div>
                <div className="text-slate-600 mb-2">Monthly Revenue</div>
                <div className="text-sm text-slate-500">Potential Earnings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-2">Annual Revenue Potential: ₹90,000+</div>
              <p className="text-slate-600">Plus recurring renewal commissions every year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Why Partner <span className="text-blue-600">With Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/60 rounded-xl border border-blue-200/50 hover:scale-105 transition-all">
                <div className="text-blue-600 bg-blue-100/60 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Sign Up</h3>
              <p className="text-slate-600">Choose your reseller plan and create your account in minutes.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Customize</h3>
              <p className="text-slate-600">Brand your control panel with your logo, colors, and domain.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Market</h3>
              <p className="text-slate-600">Promote domain services to your customers and start selling.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Earn</h3>
              <p className="text-slate-600">Receive commissions and build recurring revenue streams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-8">Ready to Start Your Domain Business?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Join thousands of successful resellers earning recurring income with our proven platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
              Start Reselling Today <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="bg-white/70 text-slate-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all border border-blue-200/50">
              <Headphones className="w-5 h-5 inline mr-2" />
              Talk to Sales
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            No setup fees • 30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </section>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default DomainResellerPage;