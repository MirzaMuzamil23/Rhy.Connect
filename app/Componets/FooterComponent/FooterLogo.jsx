import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      {/* Logo + Heading */}
      <div className="flex items-center gap-3">
        <img
          src="/assets/images/RhyConnectLogo.png"
          className="h-12 w-auto"
          alt="Rhy-Connect Logo"
        />
        
      </div>

      {/* Description */}
      <p className="text-white text-sm max-w-xs leading-relaxed">
        The Regional Business Hub for the Rhine Valley. Connecting local
        businesses with their community.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
          <Linkedin className="text-white w-5 h-5" />
        </a>
        <a className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
          <Facebook className="text-white w-5 h-5" />
        </a>
        <a className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
          <Instagram className="text-white w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FooterLogo;
