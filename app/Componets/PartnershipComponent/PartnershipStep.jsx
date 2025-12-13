import React from "react";

const PartnershipStep = () => {
  const steps = [
    { number: "1", title: "Apply", desc: "Submit your portfolio" },
    { number: "2", title: "Review", desc: "We verify your skills" },
    { number: "3", title: "Onboard", desc: "Get set up in our system" },
    { number: "4", title: "Build", desc: "Start creating websites" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mt-10">

      {/* ---- THIN GRADIENT LINE ---- */}
      <div className="relative w-full h-[2px] bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">

        {/* ---- CIRCLES ---- */}
        <div className="absolute -top-8 left-0 w-full grid grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex justify-center">
              <div
                className="
                  w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                  bg-white rounded-full border-2 sm:border-3 border-orange-400
                  shadow-lg flex items-center justify-center
                  text-orange-500 font-bold text-lg sm:text-xl md:text-2xl
                  transition-transform duration-300 hover:scale-110
                "
              >
                {s.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- TEXT ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 gap-6 text-center">
        {steps.map((s, i) => (
          <div key={i} className="px-2">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
              {s.title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PartnershipStep;
