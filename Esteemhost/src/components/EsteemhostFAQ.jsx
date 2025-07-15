import { useState } from 'react';

export default function EsteemhostFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Web Hosting?",
      answer: "Web hosting is the type of hosting service which allows organisations to accessible the website via internet. It provides you a space on server which can owned or leased for the use by the client. Web host also provide data center space and connectivity to the internet. We offer cheapest web hosting in India and all over word with free SSL.",
    },
    {
      question: "What is a Domain Name?",
      answer: "Domain name is basically an identification string that defines a realm of administrative autonomy, authority and control within the world wide web...",
    },
    {
      question: "What is the difference between Domain and Hosting?",
      answer: "A Domain helps you to find your website on the internet and discover your site with a location. while web hosting is the space on the web server where all the content of your website exists.",
    },
    {
      question: "What are the Best 10 Popular Types of Web Hosting Services?",
      answer: "Popular web hosting types include: Shared Hosting, Reseller Hosting, CMS Hosting, VPS Hosting, Dedicated Hosting, Managed Hosting, Colocation Hosting, Cloud Hosting, Clustered Hosting, Grid Hosting, and Home Server.",
    },
    {
      question: "How does web hosting work?",
      answer: "Web hosts are those companies which gave their services and technologies on rent to host website on the internet...",
    },
    {
      question: "What kind of web hosting do I need?",
      answer: "We need a web host which have unlimited data storage and also have bandwidth on the server maintained by the hosting service providers.",
    },
    {
      question: "How long does it take to transfer a website from one host to another?",
      answer: "If the transfer is not denied by the current registrar, then the domain name will be transferred to you within 1-2 hours.",
    },
    {
      question: "Why do you choose Esteem Host?",
      answer: "Esteem Host is India's leading #1 domain registration & web hosting company offers web services including, dedicated servers, free SSL, Cpanel, unlimited space or bandwidth...",
    },
    {
      question: "Expert technology support available 24/7/365",
      answer: "Get 24/7 tech support now. Call our Customer Service executive or submit your request online...",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden px-6 py-5">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gray-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-600 text-lg">Answers to common hosting and domain-related queries</p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-start gap-4 focus:outline-none group"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200 flex-1 tracking-wide">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Animated Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
                  }`}
                >
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-5 shadow-inner">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}