import React from "react";

const FooterLinks = () => {
  const links = [
    "Home",
    "For Businesses",
    "For Partners",
    "Pricing",
    "About",
    "Contact",
  ];

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 ">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-white text-sm hover:text-white transition cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
