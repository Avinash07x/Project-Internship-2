import React, { useState, useEffect } from 'react';
import { Phone, LifeBuoy, MessageCircle, User, UserPlus, Menu, X } from 'lucide-react';
import DCKNav from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [domainInput, setDomainInput] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('.com');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currencies = ['INR', 'USD', 'EUR'];

  const domainExtensions = [
    '.com', '.in', '.net', '.org', '.biz', '.pw', '.co.in', '.net.in', '.org.in',
    '.gen.in', '.firm.in', '.ind.in', '.in.net', '.co', '.info', '.name', '.pro',
    '.sx', '.us', '.co.uk', '.org.uk', '.me.uk', '.de', '.es', '.ca', '.com.au',
    '.net.au', '.eu', '.cn.com', '.com.co', '.net.co', '.nom.co', '.nl', '.me',
    '.mobi', '.tel', '.ru', '.com.ru', '.net.ru', '.org.ru', '.tv', '.cc', '.ws'
  ];

  // const domainPrices = [
  //   { extension: '.com', price: '₹299' },
  //   { extension: '.in', price: '₹199' },
  //   { extension: '.net', price: '₹399' },
  //   { extension: '.org', price: '₹349' },
  //   { extension: '.co.in', price: '₹249' },
  //   { extension: '.biz', price: '₹299' }
  // ];

  const handleDomainSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', domainInput + selectedExtension);
  };

  const navItems = [
    {
      name: 'Domains',
      sections: [
        {
          title: 'Registration',
          links: [
            { name: 'Domain Registration', href: '/domain-registration' },
            { name: 'Bulk Domain Registration', href: '/Bulk-domain-registration' },
            { name: 'New Domain Extensions', href: '/new-extensions' },
            { name: 'Premium Domains', href: '/premium-domains' }
          ]
        },
        {
          title: 'Transfer',
          links: [
            { name: 'Transfer Domain', href: '/transfer-domain' },
            { name: 'Bulk Domain Transfer', href: '/bulk-transfer' }
          ]
        },
        {
          title: 'Other/Add-ons',
          links: [
            { name: 'Domain Reseller', href: '/domain-reseller' },
            { name: 'Free with every domain', href: '/free-services' },
            { name: 'Name suggestion tool', href: '/name-suggestion' },
            { name: 'Whois lookup', href: '/whois' }
          ]
        }
      ]
    },
    {
      name: 'Web Hosting',
      sections: [
        {
          title: 'Shared Hosting',
          links: [
            { name: 'Linux Web Hosting', href: '/linux-hosting' },
            { name: 'Windows Web Hosting', href: '/windows-hosting' },
            { name: 'Java Web Hosting', href: '/java-hosting' }
          ]
        },
        {
          title: 'Reseller Hosting',
          links: [
            { name: 'Linux Hosting', href: '/linux-reseller' },
            { name: 'Windows Hosting', href: '/windows-reseller' }
          ]
        },
        {
          title: 'CMS Hosting',
          links: [
            { name: 'WordPress Hosting', href: '/wordpress-hosting' },
            { name: 'Ecommerce Hosting', href: '/ecommerce-hosting' },
            { name: 'Cloud Web Hosting', href: '/cloud-hosting' }
          ]
        }
      ]
    },
    {
      name: 'Servers',
      sections: [
        {
          title: 'Cloud Server',
          links: [
            { name: 'India Based Cloud', href: '/india-cloud' },
            { name: 'USA Based Cloud', href: '/usa-cloud' },
            { name: 'France Based Cloud', href: '/france-cloud' },
            { name: 'Germany Based Cloud', href: '/germany-cloud' }
          ]
        },
        {
          title: 'VPS Server',
          links: [
            { name: 'India Based VPS', href: '/india-vps' },
            { name: 'USA Based VPS', href: '/usa-vps' },
            { name: 'France Based VPS', href: '/france-vps' },
            { name: 'Germany Based VPS', href: '/germany-vps' }
          ]
        },
        {
          title: 'Dedicated Server',
          links: [
            { name: 'India Based Servers', href: '/india-dedicated' },
            { name: 'USA Based Servers', href: '/usa-dedicated' },
            { name: 'France Based Servers', href: '/france-dedicated' },
            { name: 'Germany Based Servers', href: '/germany-dedicated' }
          ]
        }
      ]
    },
    {
      name: 'Email & Securities',
      sections: [
        {
          title: 'Email Server',
          links: [
            { name: 'Email Marketing Server', href: '/email-marketing' },
            { name: 'Zimbra Mail Server', href: '/zimbra-mail' },
            { name: 'Mailbox Server', href: '/mailbox-server' }
          ]
        },
        {
          title: 'Securities',
          links: [
            { name: 'SSL Certificates', href: '/ssl' },
            { name: 'SiteLock', href: '/sitelock' },
            { name: 'Codeguard Website Backup', href: '/codeguard' }
          ]
        },
        {
          title: 'Advanced Securities',
          links: [
            { name: 'Threat Management', href: '/threat-management' },
            { name: 'Sensible Security', href: '/sensible-security' }
          ]
        }
      ]
    },
    {
      name: 'About',
      sections: [
        {
          title: 'About',
          links: [
            { name: 'About Us', href: '/about-us' },
            { name: 'Our Infrastructure', href: '/infrastructure' }
          ]
        },
        {
          title: 'Services',
          links: [
            { name: 'Our Services', href: '/services' },
            { name: 'Terms & Conditions', href: '/terms' }
          ]
        },
        {
          title: 'Partners',
          links: [
            { name: 'Our Partners', href: '/partners' }
          ]
        }
      ]
    },
    {
      name: 'Offer',
      sections: [
        {
          title: 'New Offer',
          links: [
            { name: 'Festive Offer', href: '/republic-day-offer' }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 10) {
        header.classList.add("bg-white/90", "backdrop-blur", "shadow-md");
      } else {
        header.classList.remove("bg-white/90", "backdrop-blur", "shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Contact bar */}
      <div className="bg-slate-800 text-white py-2 text-xs pl-3 pr-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <a href="tel:+911414920868" className="hover:text-blue-400 transition-colors">(P) +91-141-4920868</a>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <a href="tel:+918290898367" className="hover:text-blue-400 transition-colors">(M) +91-9782-569-564</a>
              </div>
              <div className="flex items-center gap-1">
                <LifeBuoy size={14} />
                <a href="/support" className="hover:text-blue-400 transition-colors">Support</a>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                <a href="/chat" className="hover:text-blue-400 transition-colors">Live Chat</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-slate-700 text-white border-none px-2 py-1 rounded text-xs"
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              <div className="flex items-center gap-2">
                <a href="/login" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <User size={14} />
                  LOGIN
                </a>
                <span className="text-gray-400">|</span>
                <a href="/register" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <UserPlus size={14} />
                  SIGNUP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <header className="bg-white sticky top-0 z-[9999] transition-all duration-300 pl-3 pr-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center py-2 gap-4">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex-shrink-0">
                <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
                  <Link to={"/"}><img src={DCKNav} alt="Logo" /></Link>
                </div>
              </div>
            </div>
            {/* Domain Search in Header */}
            <div className="flex-1 max-w-2xl w-full lg:mx-6">
              <div className="flex bg-gray-50 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="Enter a Domain Name"
                  className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
                />
                <select
                  value={selectedExtension}
                  onChange={(e) => setSelectedExtension(e.target.value)}
                  className="px-3 py-2 bg-white border-l border-gray-200 outline-none text-sm hover:bg-gray-50 transition-colors"
                >
                  {domainExtensions.map(ext => (
                    <option key={ext} value={ext}>{ext}</option>
                  ))}
                </select>
                <button
                  onClick={handleDomainSearch}
                  className="px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Modified Dropdown Hover Alignment and Sticky Header Confirmed */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-6">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a
                      href="#"
                      className="text-slate-700 font-medium py-2 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      {item.name}
                    </a>

                    <div
                      className={`absolute top-full right-0 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 rounded-lg border transform translate-y-2 group-hover:translate-y-0 z-40
                      ${item.sections.length <= 1 && item.sections[0].links.length <= 2 ? 'min-w-[220px]' : 'min-w-[700px]'}`}
                    >
                      <div
                        className={`grid gap-6 ${item.sections.length <= 1 ? 'grid-cols-1' : 'grid-cols-3'
                          }`}
                      >
                        {item.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="transform transition-all duration-300 hover:scale-105"
                          >
                            <h4 className="text-slate-800 font-semibold text-sm mb-3 pb-2 border-b-2 border-blue-500">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href={link.href}
                                    className="text-gray-600 text-sm hover:text-blue-600 transition-all duration-300 hover:translate-x-1 block"
                                  >
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}

              </ul>
            </nav>


          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b pb-2 transform transition-all duration-300 hover:translate-x-2">
                  <div className="font-medium text-slate-700 py-2">{item.name}</div>
                  <div className="grid gap-4 pl-4">
                    {item.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="font-medium text-sm text-slate-600 mb-1">{section.title}</div>
                        <div className="space-y-1 pl-2">
                          {section.links.map((link, linkIndex) => (
                            <a key={linkIndex} href={link.href} className="block text-sm text-gray-500 hover:text-blue-600 transition-all duration-300 hover:translate-x-1">
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { Phone, LifeBuoy, MessageCircle, User, UserPlus, Menu, X } from 'lucide-react';
// import DCKNav from "../assets/logo.jpg";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [selectedCurrency, setSelectedCurrency] = useState('INR');
//   const [domainInput, setDomainInput] = useState('');
//   const [selectedExtension, setSelectedExtension] = useState('.com');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navbarRef = useRef(null);

//   const currencies = ['INR', 'USD', 'EUR'];

//   const domainExtensions = [
//     '.com', '.in', '.net', '.org', '.biz', '.pw', '.co.in', '.net.in', '.org.in',
//     '.gen.in', '.firm.in', '.ind.in', '.in.net', '.co', '.info', '.name', '.pro',
//     '.sx', '.us', '.co.uk', '.org.uk', '.me.uk', '.de', '.es', '.ca', '.com.au',
//     '.net.au', '.eu', '.cn.com', '.com.co', '.net.co', '.nom.co', '.nl', '.me',
//     '.mobi', '.tel', '.ru', '.com.ru', '.net.ru', '.org.ru', '.tv', '.cc', '.ws'
//   ];

//   const handleDomainSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', domainInput + selectedExtension);
//   };

//   const navItems = [
//     {
//       name: 'Domains',
//       sections: [
//         {
//           title: 'Registration',
//           links: [
//             { name: 'Domain Registration', href: '/domain-registration' },
//             { name: 'Bulk Domain Registration', href: '/Bulk-domain-registration' },
//             { name: 'New Domain Extensions', href: '/new-extensions' },
//             { name: 'Premium Domains', href: '/premium-domains' }
//           ]
//         },
//         {
//           title: 'Transfer',
//           links: [
//             { name: 'Transfer Domain', href: '/transfer-domain' },
//             { name: 'Bulk Domain Transfer', href: '/bulk-transfer' }
//           ]
//         },
//         {
//           title: 'Other/Add-ons',
//           links: [
//             { name: 'Domain Reseller', href: '/domain-reseller' },
//             { name: 'Free with every domain', href: '/free-services' },
//             { name: 'Name suggestion tool', href: '/name-suggestion' },
//             { name: 'Whois lookup', href: '/whois' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Web Hosting',
//       sections: [
//         {
//           title: 'Shared Hosting',
//           links: [
//             { name: 'Linux Web Hosting', href: '/linux-hosting' },
//             { name: 'Windows Web Hosting', href: '/windows-hosting' },
//             { name: 'Java Web Hosting', href: '/java-hosting' }
//           ]
//         },
//         {
//           title: 'Reseller Hosting',
//           links: [
//             { name: 'Linux Hosting', href: '/linux-reseller' },
//             { name: 'Windows Hosting', href: '/windows-reseller' }
//           ]
//         },
//         {
//           title: 'CMS Hosting',
//           links: [
//             { name: 'WordPress Hosting', href: '/wordpress-hosting' },
//             { name: 'Ecommerce Hosting', href: '/ecommerce-hosting' },
//             { name: 'Cloud Web Hosting', href: '/cloud-hosting' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Servers',
//       sections: [
//         {
//           title: 'Cloud Server',
//           links: [
//             { name: 'India Based Cloud', href: '/india-cloud' },
//             { name: 'USA Based Cloud', href: '/usa-cloud' },
//             { name: 'France Based Cloud', href: '/france-cloud' },
//             { name: 'Germany Based Cloud', href: '/germany-cloud' }
//           ]
//         },
//         {
//           title: 'VPS Server',
//           links: [
//             { name: 'India Based VPS', href: '/india-vps' },
//             { name: 'USA Based VPS', href: '/usa-vps' },
//             { name: 'France Based VPS', href: '/france-vps' },
//             { name: 'Germany Based VPS', href: '/germany-vps' }
//           ]
//         },
//         {
//           title: 'Dedicated Server',
//           links: [
//             { name: 'India Based Servers', href: '/india-dedicated' },
//             { name: 'USA Based Servers', href: '/usa-dedicated' },
//             { name: 'France Based Servers', href: '/france-dedicated' },
//             { name: 'Germany Based Servers', href: '/germany-dedicated' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Email & Securities',
//       sections: [
//         {
//           title: 'Email Server',
//           links: [
//             { name: 'Email Marketing Server', href: '/email-marketing' },
//             { name: 'Zimbra Mail Server', href: '/zimbra-mail' },
//             { name: 'Mailbox Server', href: '/mailbox-server' }
//           ]
//         },
//         {
//           title: 'Securities',
//           links: [
//             { name: 'SSL Certificates', href: '/ssl' },
//             { name: 'SiteLock', href: '/sitelock' },
//             { name: 'Codeguard Website Backup', href: '/codeguard' }
//           ]
//         },
//         {
//           title: 'Advanced Securities',
//           links: [
//             { name: 'Threat Management', href: '/threat-management' },
//             { name: 'Sensible Security', href: '/sensible-security' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'About',
//       sections: [
//         {
//           title: 'About',
//           links: [
//             { name: 'About Us', href: '/about-us' },
//             { name: 'Our Infrastructure', href: '/infrastructure' }
//           ]
//         },
//         {
//           title: 'Services',
//           links: [
//             { name: 'Our Services', href: '/services' },
//             { name: 'Terms & Conditions', href: '/terms' }
//           ]
//         },
//         {
//           title: 'Partners',
//           links: [
//             { name: 'Our Partners', href: '/partners' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Offer',
//       sections: [
//         {
//           title: 'New Offer',
//           links: [
//             { name: 'Festive Offer', href: '/republic-day-offer' }
//           ]
//         }
//       ]
//     }
//   ];

//   // Smooth scroll function to scroll to elements by id
//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Close mobile menu on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileMenuOpen &&
//         navbarRef.current &&
//         !navbarRef.current.contains(event.target)
//       ) {
//         setMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [mobileMenuOpen]);

//   return (
//     <div className="font-sans">
//       {/* Contact bar */}
//       <div ref={navbarRef} className="bg-slate-800 text-white py-2 text-xs pl-3 pr-3">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-3">
//             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//               <div className="flex items-center gap-1">
//                 <Phone size={14} />
//                 <a href="tel:+911414920868" className="hover:text-blue-400 transition-colors">(P) +91-141-4920868</a>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Phone size={14} />
//                 <a href="tel:+918290898367" className="hover:text-blue-400 transition-colors">(M) +91-9782-569-564</a>
//               </div>
//               <div className="flex items-center gap-1">
//                 <LifeBuoy size={14} />
//                 <a href="/support" className="hover:text-blue-400 transition-colors">Support</a>
//               </div>
//               <div className="flex items-center gap-1">
//                 <MessageCircle size={14} />
//                 <a href="/chat" className="hover:text-blue-400 transition-colors">Live Chat</a>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <select
//                 value={selectedCurrency}
//                 onChange={(e) => setSelectedCurrency(e.target.value)}
//                 className="bg-slate-700 text-white border-none px-2 py-1 rounded text-xs"
//               >
//                 {currencies.map(currency => (
//                   <option key={currency} value={currency}>{currency}</option>
//                 ))}
//               </select>
//               <div className="flex items-center gap-4">
//                 <a href="/login" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
//                   <User size={14} />
//                   LOGIN
//                 </a>
//                 <span className="text-gray-400">|</span>
//                 <a href="/register" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
//                   <UserPlus size={14} />
//                   SIGNUP
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="bg-white sticky top-0 z-50 transition-all duration-300 pl-3 pr-3 border-b border-gray-200 scrollbar-hide">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col lg:flex-row justify-between items-center py-2 gap-4">
//             <div className="flex items-center gap-3 w-full lg:w-auto">
//               <button
//                 className="lg:hidden"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//               >
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//               <div className="flex-shrink-0">
//                 <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
//                   <Link to={"/"}>
//                     <img src={DCKNav} alt="Logo" />
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Domain Search in Header */}
//             <div className="flex-1 max-w-2xl w-full lg:mx-6">
//               <form onSubmit={handleDomainSearch} className="flex bg-gray-50 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
//                 <input
//                   type="text"
//                   value={domainInput}
//                   onChange={(e) => setDomainInput(e.target.value)}
//                   placeholder="Enter a Domain Name"
//                   className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
//                 />
//                 <select
//                   value={selectedExtension}
//                   onChange={(e) => setSelectedExtension(e.target.value)}
//                   className="px-3 py-2 bg-white border-l border-gray-200 outline-none text-sm hover:bg-gray-50 transition-colors"
//                 >
//                   {domainExtensions.map(ext => (
//                     <option key={ext} value={ext}>{ext}</option>
//                   ))}
//                 </select>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex">
//               <ul className="flex gap-6">
//                 {navItems.map((item, index) => (
//                   <li key={index} className="relative group">
//                     <a
//                       href="#"
//                       className="text-slate-700 font-medium py-2 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
//                       onClick={(e) => e.preventDefault()}
//                     >
//                       {item.name}
//                     </a>

//                     <div
//                       className={`absolute top-full right-0 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 rounded-lg border transform translate-y-2 group-hover:translate-y-0`}
//                       style={{ minWidth: '350px', zIndex: 9999 }}
//                     >
//                       <div className="grid grid-cols-3 gap-6">
//                         {item.sections.map((section, i) => (
//                           <div key={i}>
//                             <h4 className="font-semibold mb-2 text-sm">{section.title}</h4>
//                             <ul className="space-y-1 text-xs">
//                               {section.links.map((link, idx) => (
//                                 <li key={idx}>
//                                   <Link
//                                     to={link.href}
//                                     className="block px-2 py-1 rounded hover:bg-gray-100"
//                                   >
//                                     {link.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t shadow-inner max-h-[60vh] overflow-y-auto scrollbar-hide">
//             <div className="px-4 py-2 space-y-4">
//               {navItems.map((item, index) => (
//                 <div key={index}>
//                   <button
//                     className="w-full text-left font-semibold text-gray-800 hover:text-blue-600"
//                     onClick={() => handleScroll(item.name.toLowerCase())}
//                   >
//                     {item.name}
//                   </button>
//                   <div className="pl-4 mt-1">
//                     {item.sections.map((section, idx) => (
//                       <div key={idx} className="mb-2">
//                         <h5 className="font-medium text-sm">{section.title}</h5>
//                         <ul className="space-y-1 text-xs">
//                           {section.links.map((link, i) => (
//                             <li key={i}>
//                               <Link
//                                 to={link.href}
//                                 className="block px-2 py-1 rounded hover:bg-gray-100"
//                                 onClick={() => setMobileMenuOpen(false)}
//                               >
//                                 {link.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Phone, Menu, X, ChevronDown } from 'lucide-react';
// import DCKNav from "../assets/logo.jpg";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.relative')) {
//         setActiveDropdown(null);
//         setActiveSubMenu(null);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   const menuItems = [
//     { name: 'HOME', hasDropdown: false, link: "/" },
//     { name: 'HOSTING', hasDropdown: true },
//     { name: 'SERVERS', hasDropdown: true },
//     { name: 'FOREX SERVER', hasDropdown: false },
//     { name: 'EMAIL MARKETING', hasDropdown: false },
//     { name: 'ABOUT US', hasDropdown: false },
//   ];

//   const dropdownContent = {
//     HOSTING: [
//       { name: 'SHARED HOSTING', link: '/Shared-Hosting' },
//       { name: 'RESELLER HOSTING', link: '/Reseller-Hosting' },
//       { name: 'CMS HOSTING', link: '/cms-hosting' },
//     ],
//     SERVERS: [
//       {
//         name: 'VPS',
//         hasSubMenu: true,
//         subItems: [
//           { name: 'INDIA', link: '#' },
//           { name: 'FOREIGN', link: '#' },
//         ],
//       },
//       {
//         name: 'CLOUD SERVER',
//         hasSubMenu: true,
//         subItems: [
//           { name: 'INDIA', link: '#' },
//           { name: 'FOREIGN', link: '#' },
//         ],
//       },
//       {
//         name: 'DEDICATED SERVER',
//         hasSubMenu: true,
//         subItems: [
//           { name: 'INDIA', link: '#' },
//           { name: 'FOREIGN', link: '#' },
//         ],
//       },
//     ],
//   };

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const handleDropdownToggle = (itemName) => {
//     setActiveDropdown(activeDropdown === itemName ? null : itemName);
//     setActiveSubMenu(null);
//   };
//   const handleSubMenuToggle = (subMenuName) => {
//     setActiveSubMenu(activeSubMenu === subMenuName ? null : subMenuName);
//   };

//   return (
//     <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
//               <Link to={"/"} target="home"><img src={DCKNav} alt="Logo" /></Link>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {menuItems.map((item) => (
//               <div key={item.name} className="relative">
//                 {item.hasDropdown ? (
//                   <button
//                     className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition"
//                     onClick={() => handleDropdownToggle(item.name)}
//                     aria-haspopup={item.hasDropdown}
//                     aria-expanded={activeDropdown === item.name}
//                   >
//                     <span>{item.name}</span>
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
//                         }`}
//                     />
//                   </button>
//                 ) : (
//                   <Link
//                     to={item.link}
//                     className="text-gray-700 hover:text-teal-600 font-medium transition"
//                   >
//                     {item.name}
//                   </Link>
//                 )}

//                 {/* Dropdown Content */}
//                 {item.hasDropdown && activeDropdown === item.name && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                     {dropdownContent[item.name]?.map((dropdownItem, index) => (
//                       <div key={index} className="border-b border-gray-100 last:border-b-0">
//                         {dropdownItem.hasSubMenu ? (
//                           <div className="px-4 py-2 text-gray-900 font-medium">
//                             <button
//                               className="flex items-center justify-between w-full"
//                               onClick={() => handleSubMenuToggle(dropdownItem.name)}
//                             >
//                               <span>{dropdownItem.name}</span>
//                               <ChevronDown
//                                 className={`w-4 h-4 transition-transform ${activeSubMenu === dropdownItem.name ? 'rotate-180' : ''
//                                   }`}
//                               />
//                             </button>
//                             {activeSubMenu === dropdownItem.name && (
//                               <div className="mt-1">
//                                 {dropdownItem.subItems?.map((subItem, subIndex) => (
//                                   <a
//                                     key={subIndex}
//                                     href={subItem.link}
//                                     className="block px-2 py-1 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition"
//                                     onClick={() => setActiveDropdown(null)}
//                                   >
//                                     {subItem.name}
//                                   </a>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ) : (
//                           <a
//                             href={dropdownItem.link}
//                             className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition"
//                             onClick={() => setActiveDropdown(null)}
//                           >
//                             {dropdownItem.name}
//                           </a>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//           </div>

//           {/* Desktop Contact + LOGIN */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* <div className="flex items-center text-teal-600 space-x-2">
//               <Phone className="w-4 h-4" />
//               <span className="font-semibold"></span>
//             </div> */}
//             <Link to="/login">
//               <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition">
//                 LOGIN
//               </button>
//             </Link>
//           </div>

//           {/* Mobile menu toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-700 hover:text-teal-600 transition"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden border-t border-gray-100">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {menuItems.map((item) => (
//                 <div key={item.name}>
//                   <button
//                     className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
//                     onClick={() => handleDropdownToggle(item.name)}
//                   >
//                     <span>{item.name}</span>
//                     {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
//                   </button>

//                   {item.hasDropdown && activeDropdown === item.name && (
//                     <div className="ml-4 mt-2 space-y-1">
//                       {dropdownContent[item.name]?.map((dropdownItem, index) => (
//                         <div key={index}>
//                           {dropdownItem.hasSubMenu ? (
//                             <div>
//                               <button
//                                 className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium text-gray-800"
//                                 onClick={() => handleSubMenuToggle(dropdownItem.name)}
//                               >
//                                 <span>{dropdownItem.name}</span>
//                                 <ChevronDown
//                                   className={`w-4 h-4 transition-transform ${activeSubMenu === dropdownItem.name ? 'rotate-180' : ''
//                                     }`}
//                                 />
//                               </button>
//                               {activeSubMenu === dropdownItem.name && (
//                                 <div className="mt-1">
//                                   {dropdownItem.subItems?.map((subItem, subIndex) => (
//                                     <a
//                                       key={subIndex}
//                                       href={subItem.link}
//                                       className="block px-6 py-1 text-sm text-gray-600 hover:text-teal-600 transition"
//                                     >
//                                       {subItem.name}
//                                     </a>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                           ) : (
//                             <a
//                               href={dropdownItem.link}
//                               className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition"
//                             >
//                               {dropdownItem.name}
//                             </a>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="px-4 py-4 border-t border-gray-100 space-y-3">
//               <div className="flex items-center text-teal-600 space-x-2">
//                 <Phone className="w-4 h-4" />
//                 <span className="font-semibold">1-855-672-2788</span>
//               </div>
//               <Link to="/login">
//                 <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition">
//                   LOGIN
//                 </button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;