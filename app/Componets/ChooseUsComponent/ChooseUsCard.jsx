import React from "react";

const ChooseUsCard = ({ number, title, description, icon }) => {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition w-full hover:border-orange-400/60 transition-all duration-300 shadow-lg hover:shadow-orange-500/20">

      {/* Number bubble */}
      <div className="absolute -top-4 right-6 bg-white border-2 border-orange-500 text-orange-500 
                      w-10 h-10 flex justify-center items-center rounded-full font-bold shadow-md">
        {number}
      </div>

      {/* Icon Box */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center 
                      bg-linear-65 from-purple-500 to-pink-500 text-white text-3xl mb-4">
        {icon}
      </div>

      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
