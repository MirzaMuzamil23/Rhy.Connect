import React from "react";

const ContactHeading = () => {
  return (
    <div className="text-center">
      <p className="text-xs tracking-[4px] text-orange-300">CONTACT</p>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">
        Get In <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
      </h1>
      <p className="text-sm md:text-base text-gray-300 mt-3">
        Ready to join the Rhine Valley’s digital hub? We'd love to hear from you.
      </p>
    </div>
  );
};

export default ContactHeading;
