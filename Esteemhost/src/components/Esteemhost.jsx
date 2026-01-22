import React from "react";
import Hero60 from "../assets/hero60.jpg";


const Esteemhost = () => {
  return (
    <div className="py-5 px-4 bg-blue-100 relative overflow-hidden ">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={Hero60}
            alt="EsteemHost"
            className="w-full max-w-md rounded-xl shadow-lg object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Welcome to EsteemHost
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cyan-600 mb-6 leading-relaxed">
            Your Partner for Reliable Digital Solutions
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed font-light">
            At <span className="font-medium text-gray-800">EsteemHost</span>, we redefine the way businesses power their digital presence. Whether you're just starting out, scaling up, or already an established company — we deliver solutions designed just for you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Esteemhost;

// import React, { useState, useEffect } from 'react';
// import Hero60 from "../assets/hero60.jpg";


// const Esteemhost = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const handleMouseMove = (e) => {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
//       const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
//       setMousePosition({ x, y });
//     };

//     const container = document.getElementById('hero-container');
//     if (container) {
//       container.addEventListener('mousemove', handleMouseMove);
//       return () => container.removeEventListener('mousemove', handleMouseMove);
//     }
//   }, []);

//   return (
//     <div
//       id="hero-container"
//       className="min-h-screen py-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden cursor-none"
//       style={{
//         perspective: '1000px',
//         transformStyle: 'preserve-3d'
//       }}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Orbs */}
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full opacity-20 animate-pulse"
//             style={{
//               width: `${120 + i * 40}px`,
//               height: `${120 + i * 40}px`,
//               background: `radial-gradient(circle, ${['#60a5fa', '#a78bfa', '#34d399', '#fbbf24', '#f87171', '#fb7185'][i]
//                 } 0%, transparent 70%)`,
//               left: `${10 + i * 15}%`,
//               top: `${10 + i * 12}%`,
//               animation: `float-${i} ${8 + i * 2}s ease-in-out infinite`,
//               transform: `translateZ(${i * 50}px)`,
//             }}
//           />
//         ))}

//         {/* Geometric Shapes */}
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-spin"
//           style={{ animationDuration: '15s', transformOrigin: 'center', transform: 'translateZ(100px)' }} />
//         <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-purple-400/30 rounded-full animate-bounce"
//           style={{ animationDelay: '2s', transform: 'translateZ(150px)' }} />

//         {/* Particle Grid */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${2 + Math.random() * 4}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Custom Mouse Cursor */}
//       <div
//         className="fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
//         style={{
//           left: `${mousePosition.x * 100 + 50}%`,
//           top: `${mousePosition.y * 100 + 50}%`,
//           transform: 'translate(-50%, -50%) scale(1.2)',
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-screen">
//           {/* Left Image Section */}
//           <div
//             className={`flex justify-center transform transition-all duration-1500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
//               }`}
//             style={{
//               transform: `
//                 translateX(${isVisible ? 0 : -100}px) 
//                 rotateY(${mousePosition.x * 10}deg) 
//                 rotateX(${-mousePosition.y * 10}deg)
//                 translateZ(50px)
//               `,
//               transformStyle: 'preserve-3d',
//             }}
//           >
//             <div className="relative group">
//               {/* 3D Card Container */}
//               <div
//                 className="relative w-full max-w-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden"
//                 style={{
//                   transform: `rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg)`,
//                   transformStyle: 'preserve-3d',
//                 }}
//               >
//                 {/* Image Placeholder with 3D Effect */}
//                 <div
//                   className="w-full h-80 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-inner relative overflow-hidden"
//                   style={{ transform: 'translateZ(30px)' }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" />
//                   <img
//                     src={Hero60}
//                     alt="EsteemHost"
//                     className="w-full max-w-md rounded-xl shadow-lg object-contain"
//                     loading="lazy"
//                   />

//                   {/* Floating Elements inside image */}
//                   <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce" />
//                   <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-400/30 rounded-full animate-ping" />
//                 </div>

//                 {/* 3D Border Glow */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
//               </div>
//             </div>
//           </div>

//           {/* Right Content Section */}
//           <div
//             className={`text-center lg:text-left transform transition-all duration-1500 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//               }`}
//             style={{
//               transform: `
//                 translateX(${isVisible ? 0 : 100}px) 
//                 rotateY(${-mousePosition.x * 5}deg) 
//                 rotateX(${mousePosition.y * 5}deg)
//                 translateZ(30px)
//               `,
//               transformStyle: 'preserve-3d',
//             }}
//           >
//             {/* Main Heading with 3D Text Effect */}
//             <h1
//               className="text-5xl md:text-7xl font-black mb-6 leading-tight relative"
//               style={{
//                 transform: 'translateZ(40px)',
//                 background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #34d399)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 textShadow: '0 0 30px rgba(96, 165, 250, 0.5)',
//               }}
//             >
//               <span className="block animate-pulse">Welcome to</span>
//               <span
//                 className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient"
//                 style={{
//                   backgroundSize: '200% 200%',
//                   animation: 'gradient 3s ease infinite',
//                 }}
//               >
//                 EsteemHost
//               </span>
//             </h1>

//             {/* Subtitle with Floating Effect */}
//             <h2
//               className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-8 leading-relaxed animate-bounce"
//               style={{
//                 transform: 'translateZ(30px)',
//                 animationDuration: '3s',
//                 textShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
//               }}
//             >
//               Your Partner for Reliable Digital Solutions
//             </h2>

//             {/* Description with Glass Morphism */}
//             <div
//               className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8"
//               style={{ transform: 'translateZ(20px)' }}
//             >
//               <p className="text-lg text-gray-200 leading-relaxed font-light">
//                 At <span className="font-bold text-cyan-300 animate-pulse">EsteemHost</span>, we redefine the way businesses power their digital presence. Whether you're just starting out, scaling up, or already an established company — we deliver solutions designed just for you.
//               </p>
//             </div>

//             {/* CTA Buttons with 3D Effect */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button
//                 className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden"
//                 style={{ transform: 'translateZ(25px)' }}
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>

//               <button
//                 className="group px-8 py-4 border-2 border-purple-500 text-purple-300 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
//                 style={{ transform: 'translateZ(25px)' }}
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes float-0 { 0%, 100% { transform: translateY(0px) translateZ(0px); } 50% { transform: translateY(-20px) translateZ(50px); } }
//         @keyframes float-1 { 0%, 100% { transform: translateY(0px) translateZ(50px); } 50% { transform: translateY(-30px) translateZ(100px); } }
//         @keyframes float-2 { 0%, 100% { transform: translateY(0px) translateZ(100px); } 50% { transform: translateY(-25px) translateZ(150px); } }
//         @keyframes float-3 { 0%, 100% { transform: translateY(0px) translateZ(150px); } 50% { transform: translateY(-35px) translateZ(200px); } }
//         @keyframes float-4 { 0%, 100% { transform: translateY(0px) translateZ(200px); } 50% { transform: translateY(-40px) translateZ(250px); } }
//         @keyframes float-5 { 0%, 100% { transform: translateY(0px) translateZ(250px); } 50% { transform: translateY(-30px) translateZ(300px); } }
//       `}</style>
//     </div>
//   );
// };

// export default Esteemhost;