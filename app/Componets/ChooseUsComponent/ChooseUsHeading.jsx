import React from "react";

const ChooseUsHeading = () => {
  return (
    <div className="text-center px-4 sm:px-6 md:px-10 pt-16 mt-10">
      <h3 className="text-orange-500 text-sm font-semibold tracking-wide">
        WHY CHOOSE US
      </h3>

      <h1 className="text-xl sm:text-4xl md:text-5xl mt-3">
        Built for the
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent ml-2">
          Rhine Valley
        </span>
      </h1>

      <p className="text-gray-500 mt-3 mb-4 max-w-2xl mx-auto text-sm sm:text-lg">
        The leading digital platform connecting businesses and customers in your region
      </p>
    </div>
  );
};

export default ChooseUsHeading;
