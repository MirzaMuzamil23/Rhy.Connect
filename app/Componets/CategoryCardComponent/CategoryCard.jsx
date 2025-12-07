import React from "react";

const CategoryCard = ({ icon: Icon, title, subtitle, iconColor, iconBg }) => {
  if (!Icon) return null;

  return (
    <div
      className="
        bg-white shadow border border-gray-200 rounded-xl 
        flex flex-col items-center 
        p-8 sm:p-10 
        w-full sm:w-[90%] md:w-[80%] lg:w-[95%] 
        transition-all duration-300 
        hover:shadow-lg hover:border-[#f6983a] cursor-pointer
        
      "
    >
      {/* Icon Box */}
      <div
        className="flex items-center justify-center rounded-xl p-4 mb-3 transition-all duration-300"
        style={{ backgroundColor: iconBg }}
      >
        <Icon
          className="w-8 h-8 transition-all duration-300"
          style={{ color: iconColor }}
        />
      </div>

      <h1 className="text-lg font-semibold">{title}</h1>

      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
};

export default CategoryCard;
