import React from 'react';
import { House, Car, UtensilsCrossed, Briefcase, ShoppingBag, Wrench, Building2, Laptop } from 'lucide-react';

const IndustryCard = () => {
  const data = [
    { icon: House, title: "Real Estate", no: 85 },
    { icon: Car, title: "Automotive", no: 62 },
    { icon: UtensilsCrossed, title: "Restaurants", no: 134 },
    { icon: Briefcase, title: "Professional", no: 98 },
    { icon: ShoppingBag, title: "Retail", no: 154 },
    { icon: Wrench, title: "Craftsmen", no: 73 },
    { icon: Building2, title: "Construction", no: 45 },
    { icon: Laptop, title: "IT Services", no: 91 }
  ];

  return (
    <div className="w-full px-4 md:px-8 pb-8 md:pb-16 overflow-x-auto lg:overflow-x-visible">
      {/* Mobile & Tablet: Horizontal scroll */}
      <div className="flex gap-3 sm:gap-4 min-w-max lg:hidden">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="
              w-[130px] 
              sm:w-[140px]
              bg-white/5 
              border border-white/10 
              rounded-xl 
              p-3 
              sm:p-4
              flex 
              flex-col 
              items-center 
              hover:border-orange-500 
              transition-all 
              duration-300 
              shrink-0
            "
          >
            <div className="w-12 h-10 sm:w-14 sm:h-12 rounded-full flex items-center justify-center mb-2">
              <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#bec1c8]" />
            </div>
            <h3 className="text-white text-xs sm:text-sm text-center mb-2">{item.title}</h3>
            <div className="text-[#bec1c8] text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
              {item.no}
            </div>
          </div>
        ))}
      </div>

      {/* Laptop & Desktop: 8 cards grid (no scroll) */}
      <div className="hidden lg:grid lg:grid-cols-8 gap-4 xl:gap-6">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="
              bg-white/5 
              border border-white/10 
              rounded-xl 
              p-3 
              xl:p-4
              flex 
              flex-col 
              items-center 
              hover:border-orange-500 
              transition-all 
              duration-300
            "
          >
            <div className="w-12 h-10 xl:w-14 xl:h-12 rounded-full flex items-center justify-center mb-2">
              <item.icon className="w-6 h-6 xl:w-7 xl:h-7 text-[#bec1c8]" />
            </div>
            <h3 className="text-white text-sm xl:text-base text-center mb-2">{item.title}</h3>
            <div className="text-[#bec1c8] text-sm xl:text-base font-bold px-2 xl:px-3 py-1 rounded-full">
              {item.no}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCard;