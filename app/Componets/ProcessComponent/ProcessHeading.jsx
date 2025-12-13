import React from "react";

const ProcessHeading = () => {
  return (
    <div className="text-center mt-17 px-4">
      <p className="text-sm font-semibold text-orange-400 tracking-widest">
        PROCESS
      </p>

      <h2 className="text-xl sm:text-4xl md:text-5xl  text-white mt-2">
        Get Started in{" "}
        <span className="bg-gradient-to-r from-orange-400 to-purple-400 text-transparent bg-clip-text">
          Minutes
        </span>
      </h2>

      <p className="text-gray-300 mt-3 text-sm sm:text-base">
        Three simple steps to expand your business reach
      </p>
    </div>
  );
};

export default ProcessHeading;
