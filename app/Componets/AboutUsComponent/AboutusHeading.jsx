import React from "react";

const AboutUsHeading = () => {
  return (
    <div className="leading-relaxed">
      <h3 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
        ABOUT US
      </h3>

      <h1 className="
        text-3xl md:text-4xl lg:text-4xl
         text-gray-900
        leading-tight mb-5
      ">
        Building the Digital Heart of <br />
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Rhine Valley
        </span>
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Rhys-Connectch was born from a simple observation: local businesses in
        the Rhine Valley needed a better way to connect with their community.
        We're building more than a directory—we're creating a digital ecosystem
        where companies, individuals, and customers come together.
      </p>
    </div>
  );
};

export default AboutUsHeading;
