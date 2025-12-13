import React from "react";
import { ArrowRight } from "lucide-react";

const PartnershipWorks = () => {
  return (
    <div className="w-full flex justify-center px-4 mt-14 mb-15">

      <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[90%] mb-30
        bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
        rounded-2xl text-white py-14 px-6 md:px-14 shadow-xl relative">

        <h2 className="text-2xl md:text-3xl font-bold text-center">
          How Partnership Works
        </h2>

        <p className="text-center text-base md:text-lg mt-4 leading-relaxed opacity-90">
          When a business chooses our Platinum package, we connect them with our
          verified development partners. You build their custom mini-website,
          they get a professional online presence, and we all grow together.
        </p>

        <div className="flex justify-center mt-8">
          <button className="
            bg-white text-orange-600 font-medium px-6 py-3 rounded-xl
            shadow-md flex items-center gap-2 hover:shadow-lg transition">
            Become a Partner <ArrowRight size={18} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default PartnershipWorks;
