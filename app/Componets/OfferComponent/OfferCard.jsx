import React from "react";
import { MapPin, Tag, Clock, Star } from "lucide-react";

const OfferCard = ({ image, days, rating, category, title, location }) => {
  return (
    <div className="relative w-full  max-w-sm bg-[#0D1224] rounded-2xl overflow-hidden border border-white/10 hover:border-orange-400/60 transition-all duration-300 shadow-lg hover:shadow-orange-500/20">

      {/* Top Image */}
      <div className="relative w-full h-48">
        <img
          src={image}
          alt="offer"
          className="w-full h-full object-cover opacity-35 z-0"
        />

        {/* Days Badge */}
        <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-white text-xs flex items-center gap-1">
          <Clock className="text-orange-500 w-4 h-4" />
          {days} days left
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 right-3 bg-white px-3 py-1 mb-2 rounded-full text-black text-xs font-semibold flex items-center gap-1 z-20 shadow-lg">
          <Star strokeWidth={0} fill="#fc7603" className="w-4 h-4" />
          {rating}
        </div>


        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#0D1224] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 text-white flex flex-col justify-between h-36">

        <div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 text-orange-500" />
            <p className="text-sm text-orange-400 pl-2 font-medium">{category}</p>
          </div>

          <h2 className="text-lg font-bold mt-1">
            {title}
          </h2>
        </div>
        {/* Location Fixed at Bottom */}
        <div className="text-sm text-gray-400 flex items-center gap-1">
          <MapPin className="w-5 h-5 text-gray-500" /> {location}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
