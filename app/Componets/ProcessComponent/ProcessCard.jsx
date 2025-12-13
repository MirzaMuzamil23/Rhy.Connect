import React from "react";

const ProcessCard = ({ number, icon, title, description }) => {
  return (
    <div
      className="
        bg-[#0d1125] border border-orange-500/40 
        rounded-2xl p-6 sm:p-8 
        shadow-lg shadow-orange-500/10
        hover:shadow-orange-500/30 
        transition-all duration-300

      "
    >
      {/* Number */}
      <h3 className="text-5xl font-bold bg-gradient-to-b from-gray-600 to-gray-900 text-transparent bg-clip-text">
        {number}
      </h3>

      {/* Icon */}
      <div className="mt-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-xl sm:text-2xl font-semibold text-white mt-5">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;
