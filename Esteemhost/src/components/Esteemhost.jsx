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