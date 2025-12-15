import React from "react";
import { Star } from 'lucide-react';

const HeroCards = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      
      {/* Card 1 */}
      <div className="bg-[#1c0f16] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 text-[#fc7603]">500+</h1>
        <p className="text-xs sm:text-[13px] text-[#99a1af]">Active Businesses</p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#150d2a] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 text-[#ba66fe]">10K+</h1>
        <p className="text-xs sm:text-[13px] text-[#99a1af]">Monthly Visitors</p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1c0f16] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 flex items-center text-[#fc7603]">
          4.9 
          <Star strokeWidth={0} fill="#fc7603" className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
        </h1>
        <p className="text-xs sm:text-[13px] text-[#99a1af]">Average Rating</p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#150d2a] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 text-[#ba66fe]">15+</h1>
        <p className="text-xs sm:text-[13px] text-[#99a1af]">Categories</p>
      </div>

    </div>
  );
};

export default HeroCards;