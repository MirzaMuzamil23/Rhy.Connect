import React from "react";

const BusinessHours = () => {
  return (
    <div className="bg-orange-500 p-6 rounded-xl text-white">
      <h3 className="font-semibold text-lg mb-3">Business Hours</h3>

      <div className="space-y-2 text-sm">
        <p className="flex justify-between">
          <span>Monday - Friday</span>
          <span>9:00 – 18:00</span>
        </p>

        <p className="flex justify-between">
          <span>Saturday</span>
          <span>10:00 – 14:00</span>
        </p>

        <p className="flex justify-between">
          <span>Sunday</span>
          <span>Closed</span>
        </p>
      </div>
    </div>
  );
};

export default BusinessHours;
