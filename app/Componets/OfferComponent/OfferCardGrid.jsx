import React from "react";
import OfferCard from "./OfferCard";

const OfferCardGrid = () => {
  const data = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      days: 3,
      rating: 4.8,
      category: "Dining",
      title: "Summer Special: Restaurant Terrace",
      location: "St. Gallen",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      days: 5,
      rating: 4.6,
      category: "Automotive",
      title: "Car Service Package Deal",
      location: "Buch",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      days: 7,
      rating: 4.1,
      category: "Dining",
      title: "Home Renovation Consultation",
      location: "Alstatten",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      days: 2,
      rating: 4.9,
      category: "Creative",
      title: "Professional Photography Session",
      location: "St. Gallen",
    },
  ];

  return (
    <div className="w-full py-12 px-6 ">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {data.map((card, i) => (
          <OfferCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OfferCardGrid;
