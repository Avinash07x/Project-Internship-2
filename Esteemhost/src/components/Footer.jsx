// import React from 'react';
// import { Twitter, Facebook, Instagram, Youtube, MapPin, Mail, Phone , Server } from 'lucide-react';

// const Footer = () => {
//   const socialLinks = [
//     { name: 'Twitter', icon: Twitter, href: '#' },
//     { name: 'Facebook', icon: Facebook, href: '#' },
//     { name: 'Instagram', icon: Instagram, href: '#' },
//     { name: 'YouTube', icon: Youtube, href: '#' }
//   ];
//   return (
//     <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300 py-12 px-6 relative overflow-hidden">
//       {/* Background Animation Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           <div>
//             <div className="text-2xl font-bold text-white mb-4">
//               Esteem<span className="text-purple-400">Host</span>
//             </div>
//             <p className="text-gray-300 mb-6">Your trusted partner for domain registration and web hosting solutions.</p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={social.name}
//                     href={social.href}
//                     className="group relative p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:bg-purple-500/10"
//                     aria-label={social.name}
//                   >
//                     <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/10 group-hover:to-purple-500/20 transition-all duration-300"></div>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold ml-2 mb-6 flex items-center">
//               Services
//             </h4>
//             <ul className="space-y-3 text-gray-300">
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Domain Registration</span>
//               </a></li>
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Web Hosting</span>
//               </a></li>
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>SSL Certificates</span>
//               </a></li>
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Email Hosting</span>
//               </a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold ml-2 mb-6 flex items-center">
//               Support
//             </h4>
//             <ul className="space-y-3 text-gray-300">
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Help Center</span>
//               </a></li>
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Contact Us</span>
//               </a></li>
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Live Chat</span>
//               </a></li>
//               <li><a href="#" className="flex items-center space-x-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 group">
//                 <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span>Documentation</span>
//               </a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold ml-1 mb-6 flex items-center">
//               Contact
//             </h4>
//             <div className="space-y-4 text-gray-300">
//               <div className="flex items-start space-x-3 group">
//                 <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-all duration-300">
//                   <MapPin size={16} className="text-purple-400" />
//                 </div>
//                 <div>
//                   <p className="group-hover:text-purple-400 transition-colors duration-300">Amrpali Circle, Vishali Nagar</p>
//                   <p className="group-hover:text-purple-400 transition-colors duration-300">Jaipur, Rajasthan 302021</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3 group">
//                 <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-all duration-300">
//                   <Mail size={16} className="text-purple-400" />
//                 </div>
//                 <a href="mailto:sales@esteemhost.com" className="group-hover:text-purple-400 transition-colors duration-300">
//                   sales@esteemhost.com
//                 </a>
//               </div>
//               <div className="flex items-center space-x-3 group">
//                 <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-all duration-300">
//                   <Phone size={16} className="text-purple-400" />
//                 </div>
//                 <a href="tel:+919782569564"className="group-hover:text-purple-400 transition-colors duration-300">
//                   +91 97825 69564
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-300">
//           <p>&copy; 2025 EsteemHost Technologies. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState } from 'react';
// import { 
//   FileText, 
//   HelpCircle, 
//   Monitor, 
//   Users, 
//   Shield, 
//   Smartphone,
//   Cloud,
//   Info,
//   BookOpen,
//   Code,
//   GitBranch,
//   Mail,
//   Twitter,
//   Facebook,
//   Instagram,
//   Youtube
// } from 'lucide-react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubscribe = () => {
//     if (email.trim()) {
//       setIsSubscribed(true);
//       setTimeout(() => {
//         setIsSubscribed(false);
//         setEmail('');
//       }, 2000);
//     }
//   };

//   const services = [
//     { name: 'Web Development', icon: Code },
//     { name: 'Mobile Apps', icon: Smartphone },
//     { name: 'Cloud Services', icon: Cloud },
//     { name: 'Support', icon: HelpCircle }
//   ];

//   const company = [
//     { name: 'About Us', icon: Users },
//     { name: 'Careers', icon: Info },
//     { name: 'Contact', icon: Mail },
//     { name: 'Blog', icon: BookOpen }
//   ];

//   const resources = [
//     { name: 'Documentation', icon: FileText },
//     { name: 'Tutorials', icon: Monitor },
//     { name: 'Community', icon: GitBranch },
//     { name: 'Help Center', icon: Shield }
//   ];

//   const socialLinks = [
//     { name: 'Twitter', icon: Twitter, href: '#' },
//     { name: 'Facebook', icon: Facebook, href: '#' },
//     { name: 'Instagram', icon: Instagram, href: '#' },
//     { name: 'YouTube', icon: Youtube, href: '#' }
//   ];

//   const FooterSection = ({ title, items }) => (
//     <div className="space-y-3">
//       <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
//       <ul className="space-y-2">
//         {items.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <li key={index}>
//               <a 
//                 href="#" 
//                 className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-sm"
//               >
//                 <IconComponent className="w-3 h-3 mr-2 text-gray-400 group-hover:text-white transition-colors duration-200" />
//                 <span>{item.name}</span>
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );

//   return (
//     <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300 py-5 px-6 relative overflow-hidden">
//       {/* Background Animation Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
//       </div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Services */}
//           <div>
//             <FooterSection title="Services" items={services} />
//           </div>

//           {/* Company */}
//           <div>
//             <FooterSection title="Company" items={company} />
//           </div>

//           {/* Resources */}
//           <div>
//             <FooterSection title="Resources" items={resources} />
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
//             <p className="text-gray-400 text-sm mb-2">
//               Get the latest news and updates.
//             </p>
            
//             <div className="flex flex-col gap-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email"
//                 className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//               />
//               <button
//                 onClick={handleSubscribe}
//                 disabled={isSubscribed}
//                 className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
//                   isSubscribed 
//                     ? 'bg-green-500 text-white' 
//                     : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-md'
//                 }`}
//               >
//                 {isSubscribed ? 'Subscribed!' : 'Subscribe'}
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-white mb-1">Follow Us</h4>
//               <div className="flex space-x-2">
//                 {socialLinks.map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.href}
//                       className="w-8 h-8 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded flex items-center justify-center transition-all duration-300 group"
//                       aria-label={social.name}
//                     >
//                       <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-200" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-6 pt-4 border-t border-slate-700">
//           <div className="text-center">
//             <p className="text-gray-400 text-xs">
//               © 2025 <span className="font-semibold text-white">YourCompany</span>. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState } from 'react';
// import { 
//   FileText, 
//   HelpCircle, 
//   Monitor, 
//   Users, 
//   Shield, 
//   Smartphone,
//   Cloud,
//   Info,
//   BookOpen,
//   Code,
//   GitBranch,
//   Mail,
//   Twitter,
//   Facebook,
//   Instagram,
//   Youtube
// } from 'lucide-react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubscribe = () => {
//     if (email.trim()) {
//       setIsSubscribed(true);
//       setTimeout(() => {
//         setIsSubscribed(false);
//         setEmail('');
//       }, 2000);
//     }
//   };

//   const services = [
//     { name: 'Web Development', icon: Code },
//     { name: 'Mobile Apps', icon: Smartphone },
//     { name: 'Cloud Services', icon: Cloud },
//     { name: 'Support', icon: HelpCircle }
//   ];

//   const company = [
//     { name: 'About Us', icon: Users },
//     { name: 'Careers', icon: Info },
//     { name: 'Contact', icon: Mail },
//     { name: 'Blog', icon: BookOpen }
//   ];

//   const resources = [
//     { name: 'Documentation', icon: FileText },
//     { name: 'Tutorials', icon: Monitor },
//     { name: 'Community', icon: GitBranch },
//     { name: 'Help Center', icon: Shield }
//   ];

//   const socialLinks = [
//     { name: 'Twitter', icon: Twitter, href: '#' },
//     { name: 'Facebook', icon: Facebook, href: '#' },
//     { name: 'Instagram', icon: Instagram, href: '#' },
//     { name: 'YouTube', icon: Youtube, href: '#' }
//   ];

//   const FooterSection = ({ title, items }) => (
//     <div className="space-y-3">
//       <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
//       <ul className="space-y-2">
//         {items.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <li key={index}>
//               <a 
//                 href="#" 
//                 className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-sm"
//               >
//                 <IconComponent className="w-3 h-3 mr-2 text-gray-400 group-hover:text-white transition-colors duration-200" />
//                 <span>{item.name}</span>
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );

//   return (
//     <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300 py-8 px-6 relative overflow-hidden">
//       {/* Background Animation Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
//       </div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Logo and Brand Section */}
//         <div className="mb-8 text-center">
//           <div className="flex items-center justify-center mb-4">
//             <h2 className="text-2xl font-bold text-white">Esteemhost</h2>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Services */}
//           <div>
//             <FooterSection title="Services" items={services} />
//           </div>

//           {/* Company */}
//           <div>
//             <FooterSection title="Company" items={company} />
//           </div>

//           {/* Resources */}
//           <div>
//             <FooterSection title="Resources" items={resources} />
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
//             <p className="text-gray-400 text-sm mb-4">
//               Get the latest news and updates.
//             </p>
            
//             <div className="flex flex-col gap-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email"
//                 className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//               />
//               <button
//                 onClick={handleSubscribe}
//                 disabled={isSubscribed}
//                 className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
//                   isSubscribed 
//                     ? 'bg-green-500 text-white' 
//                     : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-md'
//                 }`}
//               >
//                 {isSubscribed ? 'Subscribed!' : 'Subscribe'}
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-white mb-2">Follow Us</h4>
//               <div className="flex space-x-2">
//                 {socialLinks.map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.href}
//                       className="w-8 h-8 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded flex items-center justify-center transition-all duration-300 group"
//                       aria-label={social.name}
//                     >
//                       <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-200" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-6 pt-4 border-t border-slate-700">
//           <div className="text-center">
//             <p className="text-gray-400 text-xs">
//               © 2025 <span className="font-semibold text-white">YourCompany</span>. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  Monitor, 
  Users, 
  Shield, 
  Smartphone,
  Cloud,
  Info,
  BookOpen,
  Code,
  GitBranch,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Globe,
  Server,
  Database,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 2000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: 'https://www.esteemhost.com/blog/' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/EsteemHostjpr' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/EsteemhostT' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/esteem-host-technologies/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UC_biQbW77JJxe_AgUqHKfMA/' }
  ];

  const FooterSection = ({ title, items, showIcons = false }) => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li key={index}>
              <a 
                href={item.href || "#"} 
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-sm"
              >
                {showIcons && IconComponent && (
                  <IconComponent className="w-3 h-3 mr-2 text-gray-400 group-hover:text-white transition-colors duration-200" />
                )}
                <span className="flex-1">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300 py-8 px-6 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo and Brand Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-2xl font-bold text-white">Esteem Host</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Get your affordable Web Hosting and Domain name today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                <span>Jaipur, India</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                <span>+91-141-513956</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                <span>info@esteemhost.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Follow Us</h4>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterSection title="Quick Links" items={quickLinks.slice(0, 6)} />
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get hosting updates & offers
            </p>
            
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                  isSubscribed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-md'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-gray-400 text-xs">
              Copyright 2011-2025 © <span className="font-semibold text-white">Esteem Host</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;