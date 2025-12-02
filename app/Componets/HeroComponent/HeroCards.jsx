import React from "react";
import { Star } from 'lucide-react';

const HeroCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Card 1 */}
      <div className="bg-[#1c0f16] text-white rounded-2xl p-6 shadow-lg w-61">
        <h1 className="text-4xl mb-3 text-[#fc7603] ">500+</h1>
        <p className="text-[13px] text-[#99a1af]">Active Businesses</p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#150d2a] text-white rounded-2xl p-6 shadow-lg w-61">
        <h1 className="text-4xl mb-3 text-[#ba66fe] ">10K+</h1>
        <p className="text-[13px] text-[#99a1af] ">Monthly Visitor</p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1c0f16] text-white rounded-2xl p-6 shadow-lg w-61">
        <h1 className="text-4xl mb-3 flex text-[#fc7603]">4.9<Star strokeWidth={0} fill="#fc7603"className="mt-2 ml-1" /></h1>
        <p className="text-[13px] text-[#99a1af] ">Average Rating</p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#150d2a] text-white rounded-2xl p-6 shadow-lg w-61">
        <h1 className="text-4xl mb-3 text-[#ba66fe]">15+</h1>
        <p className="text-[13px] text-[#99a1af] ">Categories</p>
      </div>

    </div>
  );
};

export default HeroCards;
