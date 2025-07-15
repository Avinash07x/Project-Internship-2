import React, { useEffect, useState } from 'react';
import { FileText, ShieldCheck, Gavel } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsConditionsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden px-6 py-10">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-4xl mx-auto z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-200/50"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-slate-800">Terms & Conditions</h1>
        </div>

        <p className="text-slate-600 mb-4">
          Welcome to EsteemHost. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please review the following carefully.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">1. Account Registration</h2>
        <p className="text-slate-600 mb-4">
          You must provide accurate information when creating your account. You are responsible for maintaining the security of your login credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">2. Service Usage</h2>
        <p className="text-slate-600 mb-4">
          You agree to use our services in compliance with all applicable laws and regulations. Any abuse of services including spam, malware hosting, or illegal content will result in immediate termination.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">3. Payments and Renewals</h2>
        <p className="text-slate-600 mb-4">
          All services are billed in advance. It is your responsibility to ensure timely payments to avoid suspension. Renewals are processed automatically unless disabled by the user.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">4. Refund Policy</h2>
        <p className="text-slate-600 mb-4">
          We offer a 30-day money-back guarantee on shared hosting. Domain registrations, SSL certificates, and VPS/Dedicated servers are non-refundable.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">5. Limitation of Liability</h2>
        <p className="text-slate-600 mb-4">
          EsteemHost shall not be liable for any indirect or consequential damages. Our total liability is limited to the fees you paid us in the last 12 months for the service involved.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">6. Termination</h2>
        <p className="text-slate-600 mb-4">
          We reserve the right to suspend or terminate your account for violations of these terms, without prior notice.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-2">7. Changes to Terms</h2>
        <p className="text-slate-600 mb-4">
          We may update these terms from time to time. Continued use of services after such changes indicates your acceptance of the updated terms.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <span>Effective Date: July 1, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 mt-4 sm:mt-0">
            <Gavel className="w-5 h-5 text-purple-500" />
            <span>Subject to Legal Jurisdiction: India</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsConditionsPage;
