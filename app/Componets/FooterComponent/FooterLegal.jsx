import React from "react";

const FooterLegal = () => {
  const items = ["Privacy Policy", "Terms of Service", "Imprint"];

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
        {items.map((legal, index) => (
          <li
            key={index}
            className="text-white text-sm hover:text-white transition cursor-pointer"
          >
            {legal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLegal;
