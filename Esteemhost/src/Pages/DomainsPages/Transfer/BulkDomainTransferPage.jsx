import React, { useState, useEffect } from 'react';
import {
  Search, Shield, Globe, Settings, Headphones, Lock, ArrowRight,
  Check, Star, Upload, Download, Trash2, Plus, X, RefreshCw, AlertCircle
} from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import { motion } from 'framer-motion';
import Hero80 from '../../../assets/18.png'; // Ensure this path/image exists

const BulkDomainTransferPage = () => {
  const [domainList, setDomainList] = useState(['']);
  const [transferResults, setTransferResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const transferPricing = {
    '.com': 799,
    '.net': 949,
    '.org': 899,
    '.in': 699,
    '.co': 1399,
    '.io': 2599
  };

  const features = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Bulk Transfer",
      description: "Transfer multiple domains simultaneously with our streamlined bulk transfer process."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Auto-Renewal Extension",
      description: "All transferred domains get an additional year added to their existing expiration date."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DNS Preservation",
      description: "Keep your existing DNS settings intact during transfer with zero downtime."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Free Privacy Protection",
      description: "Get complimentary WHOIS privacy protection for all transferred domains."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Registrar Support",
      description: "Transfer domains from any registrar worldwide with our universal transfer system."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Transfer Process",
      description: "Military-grade security ensures your domains are transferred safely and securely."
    }
  ];

  const addDomainField = () => setDomainList([...domainList, '']);
  const removeDomainField = (index) => {
    if (domainList.length > 1) {
      setDomainList(domainList.filter((_, i) => i !== index));
    }
  };

  const updateDomain = (index, value) => {
    const newList = [...domainList];
    newList[index] = value;
    setDomainList(newList);
  };

  const updateAuthCode = (index, authCode) => {
    const newResults = [...transferResults];
    newResults[index].authCode = authCode;
    setTransferResults(newResults);
  };

  const handleBulkTransferCheck = () => {
    const validDomains = domainList.filter(domain => domain.trim() !== '');
    const results = validDomains.map(domain => {
      const cleanDomain = domain.toLowerCase().trim();
      const extension = cleanDomain.substring(cleanDomain.lastIndexOf('.'));
      const isEligible = Math.random() > 0.2;
      const price = transferPricing[extension] || 999;
      const daysUntilExpiry = Math.floor(Math.random() * 365) + 30;
      return {
        domain: cleanDomain,
        eligible: isEligible,
        price,
        extension,
        daysUntilExpiry,
        authCode: '',
        selected: isEligible,
        status: isEligible ? 'ready' : 'locked'
      };
    });

    setTransferResults(results);
    setShowResults(true);
  };

  const toggleDomainSelection = (index) => {
    const updatedResults = [...transferResults];
    updatedResults[index].selected = !updatedResults[index].selected;
    setTransferResults(updatedResults);
  };

  const calculateTotal = () =>
    transferResults
      .filter(result => result.selected && result.eligible)
      .reduce((sum, item) => sum + item.price, 0);

  const getSelectedCount = () =>
    transferResults.filter(result => result.selected && result.eligible).length;

  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "text/plain" || file.name.endsWith(".csv") || file.name.endsWith(".txt"))) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const lines = e.target.result.split('\n').map(line => line.trim()).filter(Boolean);
        setDomainList(lines);
      };
      reader.readAsText(file);
    }
  };

  const canProceedWithTransfer = () =>
    transferResults.filter(result => result.selected && result.eligible).every(r => r.authCode.trim() !== '');

  return (
    <div className="min-h-screen relative w-full bg-blue-100 mt-0 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen bg-blue-100 px-6 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse w-fit">
            🔄 Bulk Transfer - Free Privacy Included
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            TRANSFER MULTIPLE<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DOMAINS INSTANTLY
            </span>
          </h1>
          <p className="text-lg text-slate-600">
            Move all your domains to us in one go. Get better pricing, superior management tools,
            and free privacy protection with our streamlined bulk transfer process.
          </p>
        </div>

        <motion.div
          className="w-full lg:w-1/2 max-w-xl"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : { opacity: 0, x: 50, scale: 0.95 }}
          transition={{
            duration: 3,
            ease: 'easeOut',
            scale: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 3,
              ease: 'easeInOut'
            }
          }}
        >
          <img
            src={Hero80}
            alt="Bulk Domain Transfer"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>


      {/* Bulk Transfer Form */}
      <section className="px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Bulk Domain Transfer</h2>

            {/* Upload CSV Option */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-xl border border-blue-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Upload</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <label className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                  <Upload className="w-5 h-5" />
                  Upload Domain List
                  <input type="file" accept=".csv,.txt" onChange={handleCSVUpload} className="hidden" />
                </label>
                <span className="text-slate-600">or add domains manually below</span>
              </div>
            </div>

            {/* Manual Domain Entry */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Domains to Transfer</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {domainList.map((domain, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => updateDomain(index, e.target.value)}
                      placeholder={`Enter full domain name (e.g., example.com)`}
                      className="flex-1 px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {domainList.length > 1 && (
                      <button
                        onClick={() => removeDomainField(index)}
                        className="px-3 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={addDomainField}
                className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Plus className="w-5 h-5" />
                Add Another Domain
              </button>
            </div>

            {/* Check Transfer Eligibility */}
            <div className="text-center">
              <button
                onClick={handleBulkTransferCheck}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 font-semibold text-lg"
              >
                <RefreshCw className="w-5 h-5 inline mr-2" />
                Check Transfer Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Results */}
      {showResults && (
        <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/70 rounded-2xl border border-blue-200/50 shadow-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800">Transfer Results</h2>
                <div className="text-right">
                  <div className="text-sm text-slate-600">Selected: {getSelectedCount()} domains</div>
                  <div className="text-2xl font-bold text-blue-600">Total: ₹{calculateTotal().toLocaleString()}</div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-200/50">
                      <th className="text-left py-3 px-4">Select</th>
                      <th className="text-left py-3 px-4">Domain</th>
                      <th className="text-center py-3 px-4">Status</th>
                      <th className="text-center py-3 px-4">Days to Expiry</th>
                      <th className="text-center py-3 px-4">Transfer Price</th>
                      <th className="text-left py-3 px-4">Auth Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transferResults.map((result, index) => (
                      <tr key={index} className="border-b border-blue-200/30 hover:bg-blue-50/50 transition-colors">
                        <td className="py-4 px-4">
                          {result.eligible && (
                            <input
                              type="checkbox"
                              checked={result.selected}
                              onChange={() => toggleDomainSelection(index)}
                              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                          )}
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-800">{result.domain}</td>
                        <td className="py-4 px-4 text-center">
                          {result.eligible ? (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Eligible</span>
                          ) : (
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              Locked
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`${result.daysUntilExpiry < 60 ? 'text-red-600 font-semibold' : 'text-slate-600'}`}>
                            {result.daysUntilExpiry} days
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {result.eligible ? (
                            <span className="text-blue-600 font-semibold">₹{result.price.toLocaleString()}</span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {result.eligible && result.selected ? (
                            <input
                              type="text"
                              value={result.authCode}
                              onChange={(e) => updateAuthCode(index, e.target.value)}
                              placeholder="Enter auth code"
                              className="w-full px-3 py-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {getSelectedCount() > 0 && (
                <div className="mt-8">
                  <div className="bg-blue-50/60 border border-blue-200/50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-slate-700">
                        <strong>Important:</strong> Authorization codes are required for domain transfers.
                        Contact your current registrar to obtain auth codes for the selected domains.
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      className={`${canProceedWithTransfer()
                        ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                        : 'bg-gray-400 cursor-not-allowed'
                        } text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg`}
                      disabled={!canProceedWithTransfer()}
                    >
                      {canProceedWithTransfer() ? (
                        <>
                          Initiate Transfer for {getSelectedCount()} Domains - ₹{calculateTotal().toLocaleString()}
                          <ArrowRight className="w-5 h-5 inline ml-2" />
                        </>
                      ) : (
                        'Enter Auth Codes to Proceed'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Transfer Pricing */}
      <section className="py-5 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Transfer <span className="text-blue-600">Pricing</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(transferPricing).map(([ext, price]) => (
              <div key={ext} className="text-center p-6 bg-white/60 rounded-xl border border-blue-200/50 hover:scale-105 transition-all">
                <div className="text-2xl font-bold text-blue-600 mb-2">{ext}</div>
                <div className="text-lg font-semibold text-slate-800">₹{price}</div>
                <div className="text-sm text-slate-600">+1 Year Extension</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600 bg-white/50 rounded-lg p-4 inline-block">
              All transfers include a free 1-year extension and complimentary privacy protection
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">
            Transfer <span className="text-blue-600">Features</span>
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

      {/* Transfer Process */}
      {/* <section className="py-5 px-6 bg-gradient-to-r from-blue-200/40 to-purple-200/40 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-16">Transfer Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Check Eligibility</h3>
              <p className="text-slate-600">Verify your domains are eligible for transfer and get pricing details.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Provide Auth Codes</h3>
              <p className="text-slate-600">Enter authorization codes obtained from your current registrar.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Complete Transfer</h3>
              <p className="text-slate-600">We handle the rest! Your domains will be transferred within 5-7 days.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Transfer */}
      <section className="py-5 px-6 backdrop-blur-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-12">Why Transfer to Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Better Pricing</h3>
              <p className="text-slate-600">Competitive renewal rates and no hidden fees</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Superior Management</h3>
              <p className="text-slate-600">Advanced control panel with bulk management tools</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Free Privacy</h3>
              <p className="text-slate-600">Complimentary WHOIS privacy protection included</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
            Start Domain Transfer <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </section>
      <EsteemhostFAQ />
      <Testimonials />
    </div>
  );
};

export default BulkDomainTransferPage;