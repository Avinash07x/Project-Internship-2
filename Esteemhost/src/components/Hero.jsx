import React, { useState, useEffect, useRef } from "react";
import Hero10 from "../assets/5.png";
import Hero20 from "../assets/2.png";
import Hero30 from "../assets/16.png";
import Hero40 from "../assets/17.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef(null);

  const slides = [
    {
      id: 1,
      heading: "A Domain Name Reflects your Brand!",
      paragraph:
        "Domain name is identity that you would like to be known in the online world. Get over $100 worth of Free Services with every Domain",
      price: "As low as $0.90/mo",
      services: [
        {
          icon: "✉️",
          title: "Free Email Accounts",
          description: "Get 2 personalized Email Addresses such as mail@yourdomain.com",
        },
        {
          icon: "🔗",
          title: "Domain Forwarding",
          description: "Forward your domain to another running website for free",
        },
        {
          icon: "🔒",
          title: "Domain Theft Protection",
          description: "Web hosting within budget for beginners and small websites",
        },
        {
          icon: "⚙️",
          title: "DNS Management",
          description: "DNS service which allows you to manage DNS to point your domain",
        },
      ],
      image: Hero10,
      showButton: true,
      imagePosition: "right",
    },
    {
      id: 2,
      heading: "Fast Secure Uninterrupted Hosting!",
      paragraph:
        "Powerful and Cheap Web Hosting and Domain Name Registration in India. Our Web hosting is known for its powerful and superior hosting when it comes to speed, reliability, versatility and affordable price.",
      price: "As low as $0.79/mo",
      services: [
        {
          icon: "📦",
          title: "Unlimited Webspace",
          description: "Never think about disk space gets full, you will feel free about it.",
        },
        {
          icon: "🔄",
          title: "Unlimited Data Transfer",
          description: "Make unlimited changes, no restriction Upload and download files.",
        },
        {
          icon: "✉️",
          title: "Unlimited Email Accounts",
          description: "Create unlimited email accounts for the main domain as well as subdomains.",
        },
        {
          icon: "🗄️",
          title: "Unlimited Databases",
          description: "Create unlimited databases without any size limit.",
        },
      ],
      image: Hero20,
      showButton: true,
      imagePosition: "right",
    },
    {
      id: 3,
      heading: "Design Your Website By Yourself!",
      paragraph:
        "With our simple and effortless drag-drop functions, designing your websites is as easy as playing a game.",
      price: "As low as $2.49/mo",
      services: [
        {
          icon: "🎨",
          title: "Effortless drag-drop functions",
          description: "With our simple website builder designing a website is as easy.",
        },
        {
          icon: "🎭",
          title: "175 themes & 85,000 images",
          description: "Designs Personal, Blog and Professional Themes are available.",
        },
        {
          icon: "🧩",
          title: "30+ Dynamic Components",
          description: "It's including Image Galleries, Blogs, and WebForms.",
        },
        {
          icon: "✏️",
          title: "Easy Visual Editor",
          description: "Real-Time Editor - See the changes as you make them!",
        },
      ],
      image: Hero30,
      showButton: true,
      imagePosition: "right",
    },
    {
      id: 4,
      heading: "Powerful Servers are Affordable Now!",
      paragraph:
        "No Sharing get pure physical hardware server with full root access. We Provide best-dedicated server hosting to fit every situation and fit your budget.",
      price: "As low as $99/mo",
      services: [
        {
          icon: "🖥️",
          title: "Complete Control Root Access",
          description: "Check server, View Memory, Hard Disk, CPU or Network Usage.",
        },
        {
          icon: "💻",
          title: "Dedicated Hardware",
          description: "Dedicate Hardware server no Resource Restrictions.",
        },
        {
          icon: "🛡️",
          title: "1GBPS DDoS Protection",
          description: "Our servers are secured as behind firewall and DDoS Protected.",
        },
        {
          icon: "💾",
          title: "Builtup RAID Technology",
          description: "Reliable by RAID mirroring keeps your data safe on the second HDD.",
        },
      ],
      image: Hero40,
      showButton: true,
      imagePosition: "right",
    },
  ];

  // Enhanced slide change function
  const changeSlide = (newSlide) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-slide effect with enhanced transition
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 6000); // Slide change every 6 seconds

    return () => clearInterval(slideInterval.current); // Cleanup on unmount
  }, [currentSlide]);

  // Manual slide navigation
  const goToSlide = (index) => {
    clearInterval(slideInterval.current);
    changeSlide(index);
    // Restart auto-slide after manual navigation
    setTimeout(() => {
      slideInterval.current = setInterval(() => {
        changeSlide((currentSlide + 1) % slides.length);
      }, 6000);
    }, 100);
  };

return (
  <div className="relative w-full bg-blue-100 overflow-hidden">
    {/* Background circles */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-float"></div>
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-float-reverse"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-tl from-orange-200/20 to-transparent rounded-full animate-pulse-gentle"></div>
    </div>

    {/* Main Container */}
    <div className="max-w-7xl mx-auto px-6 py-2 relative min-h-[480px]">
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 scale-100'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full scale-95'
                : 'opacity-0 translate-x-full scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              {/* Text Section */}
              <div className="text-center lg:text-left space-y-4 order-2 lg:order-1">
                <h1 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent transition-all duration-700 ${
                  index === currentSlide ? 'animate-slide-in-left' : ''
                }`}>
                  {slide.heading}
                </h1>
                {slide.heading2 && (
                  <h2 className={`text-xl md:text-2xl font-semibold text-gray-800 transition-all duration-700 delay-100 ${
                    index === currentSlide ? 'animate-slide-in-left' : ''
                  }`}>
                    {slide.heading2}
                  </h2>
                )}
                <p className={`text-md text-gray-600 transition-all duration-700 delay-200 ${
                  index === currentSlide ? 'animate-slide-in-left' : ''
                }`}>
                  {slide.paragraph}
                </p>

                {/* Services */}
                <div className="space-y-3 my-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {slide.services.map((service, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start space-x-3 p-3 bg-white/70 rounded-lg shadow-sm transition-all duration-700 hover:shadow-md hover:scale-105 ${
                          index === currentSlide ? 'animate-slide-in-up' : ''
                        }`}
                        style={{ animationDelay: `${300 + idx * 100}ms` }}
                      >
                        <div className="text-2xl animate-bounce-gentle">{service.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{service.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className={`text-lg transition-all duration-700 delay-500 ${
                  index === currentSlide ? 'animate-slide-in-left' : ''
                }`}>
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold">
                    {slide.price}
                  </span>
                </p>

                {slide.showButton && (
                  <div className={`flex justify-center lg:justify-start transition-all duration-700 delay-600 ${
                    index === currentSlide ? 'animate-slide-in-up' : ''
                  }`}>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm animate-pulse-button">
                      Get Started
                    </button>
                  </div>
                )}
              </div>

              {/* Image Section */}
              <div className="flex justify-center order-1 lg:order-2">
                <div className={`relative transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0 scale-100 animate-slide-in-right' 
                    : 'opacity-0 translate-x-full scale-95'
                }`}>
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="w-full max-w-[500px] object-contain animate-float-image hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse-gentle opacity-70"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse-gentle opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Custom CSS Animations */}
    <style jsx>{`
      @keyframes gentleBounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-8px); }
        60% { transform: translateY(-4px); }
      }
      @keyframes slideInLeft {
        0% { opacity: 0; transform: translateX(-50px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        0% { opacity: 0; transform: translateX(50px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes floatReverse {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(20px) rotate(-180deg); }
      }
      @keyframes floatImage {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes pulseGentle {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      @keyframes bounceGentle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      @keyframes pulseButton {
        0%, 100% { box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 8px 16px rgba(59, 130, 246, 0.4); }
      }
      .animate-slide-in-left { animation: slideInLeft 0.7s ease-out forwards; }
      .animate-slide-in-right { animation: slideInRight 0.7s ease-out forwards; }
      .animate-slide-in-up { animation: slideInUp 0.7s ease-out forwards; }
      .animate-float { animation: float 20s ease-in-out infinite; }
      .animate-float-reverse { animation: floatReverse 25s ease-in-out infinite; }
      .animate-float-image { animation: floatImage 4s ease-in-out infinite; }
      .animate-pulse-gentle { animation: pulseGentle 3s ease-in-out infinite; }
      .animate-bounce-gentle { animation: bounceGentle 2s ease-in-out infinite; }
      .animate-pulse-button { animation: pulseButton 2s ease-in-out infinite; }
    `}</style>
  </div>
);
};

export default Hero;

