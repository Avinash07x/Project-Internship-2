import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, ShieldCheck } from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero80 from '../../../assets/46.png'; // 🖼️ Replace this path as needed

const WhoisLookupPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [domain, setDomain] = useState('');
    const [whoisData, setWhoisData] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const dummyData = {
        domainName: "example.com",
        registrar: "NameCheap, Inc.",
        registrationDate: "2000-01-01",
        expiryDate: "2030-01-01",
        status: "Active",
        owner: "Private (WHOIS Guard Enabled)"
    };

    const handleLookup = () => {
        if (!domain) return;
        setTimeout(() => {
            setWhoisData(dummyData);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full bg-blue-100 overflow-hidden relative">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 z-10">
                <div className={`max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
                            🔍 WHOIS Domain Lookup
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                            WHOIS <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                LOOKUP TOOL
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-6">
                            Find domain ownership details, registrar info, and important WHOIS records.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <motion.div
                        className="md:w-1/2"
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
                            alt="Whois Lookup Illustration"
                            className="w-full h-auto max-h-[480px] object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Lookup Input */}
            <section className="py-20 px-6 relative z-10 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-blue-200/50">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800 flex justify-center items-center gap-2">
                            <Search className="w-6 h-6 text-blue-500" /> Enter a domain to look up WHOIS data:
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <input
                                type="text"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                placeholder="e.g. example.com"
                                className="w-full sm:w-2/3 px-6 py-4 text-lg rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                onClick={handleLookup}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-105"
                            >
                                Lookup WHOIS <Globe className="w-5 h-5 inline ml-2" />
                            </button>
                        </div>

                        {/* WHOIS Result */}
                        {whoisData && (
                            <div className="mt-10 text-left bg-blue-50/70 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-4">WHOIS Result for: {domain}</h3>
                                <ul className="space-y-2 text-slate-700">
                                    <li><strong>Domain Name:</strong> {whoisData.domainName}</li>
                                    <li><strong>Registrar:</strong> {whoisData.registrar}</li>
                                    <li><strong>Registration Date:</strong> {whoisData.registrationDate}</li>
                                    <li><strong>Expiry Date:</strong> {whoisData.expiryDate}</li>
                                    <li><strong>Status:</strong> {whoisData.status}</li>
                                    <li><strong>Owner:</strong> {whoisData.owner}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 backdrop-blur-sm z-10 relative text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Want to Register a Domain?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Use our search to check availability and secure it before it's gone.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
                        Search & Register <ShieldCheck className="w-5 h-5 inline ml-2" />
                    </button>
                </div>
            </section>

            <EsteemhostFAQ />
            <Testimonials />
        </div>
    );
};

export default WhoisLookupPage;
