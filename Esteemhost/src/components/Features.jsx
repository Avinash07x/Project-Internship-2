import React from "react";
import Share from "../assets/share.jpg";
import Coll from "../assets/coll.jpg";
import Setting from "../assets/setting.jpg";
import CloudImage from "../assets/cloud.jpg";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Share",
      description:
        "Share through email, link, or social network. Unlimited downloads. No wait times.",
      icon: Share,
    },
    {
      id: 2,
      title: "Collaborate",
      description:
        "Store and share any file type. Share folders of project files. Easily email large files.",
      icon: Coll,
    },
    {
      id: 3,
      title: "Store",
      description:
        "10GB for free. Up to 50GB free with bonuses. Store all your photos, audio, and videos.",
      icon: CloudImage,
    },
    {
      id: 4,
      title: "Access",
      description:
        "Always have your important files with you. Never forget your work at home files with you.",
      icon: Setting,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden py-5 px-4">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-cyan-500 uppercase text-sm font-bold tracking-widest mb-3">
          Powerful and Simple
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Handles all of your file needs
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-7">
          File storage made easy – including powerful features you won't find
          anywhere else. Whether you're sharing photos, videos, audio, or docs,
          MediaFire can simplify your workflow.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-4">{feature.description}</p>
              <div className="w-10 h-10 mx-auto bg-cyan-100 text-cyan-600 font-semibold rounded-full flex items-center justify-center shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {feature.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
