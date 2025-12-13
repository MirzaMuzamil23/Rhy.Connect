import React from "react";
import FooterLogo from "../../Componets/FooterComponent/FooterLogo"
import FooterLinks from "../../Componets/FooterComponent/FooterLinks"
import FooterLegal from "../../Componets/FooterComponent/FooterLegal"

const Footer = () => {
  return (
    <footer className="bg-[#0f1116] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-10
        "
        >
          <FooterLogo />
          <FooterLinks />
          <FooterLegal />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>

        {/* Bottom Text */}
        <p className="text-white text-center text-sm mt-6">
          © 2025 Rhy-Connect.ch. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
