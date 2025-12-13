import React from "react";

const ProcessButton = () => {
  return (
    <div className="flex justify-center mt-12 mb-20">
      <button
        className="
        bg-gradient-to-br from-orange-700 to-red-500
        text-white font-semibold 
        px-6 py-3 rounded-md
        shadow-lg hover:shadow-xl 
        transition-all duration-300
      "
      >
        Get Started Today
      </button>
    </div>
  );
};

export default ProcessButton;
