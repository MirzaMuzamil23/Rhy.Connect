import React from "react";
import AboutusHeading from "../../Componets/AboutUsComponent/AboutusHeading"
import AboutUsInlineCard from "../../Componets/AboutUsComponent/AboutUsInlineCard";
import AboutUsImageBox from "../../Componets/AboutUsComponent/AboutUsImageBox";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div>
          <AboutusHeading />
          <AboutUsInlineCard />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center lg:justify-end">
          <AboutUsImageBox />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
