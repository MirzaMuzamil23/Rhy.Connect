import React from 'react';
import { MapPin, Flame, Calendar, Gauge, Zap, Star } from 'lucide-react';

const CarOfferCard = ({
  image,
  year,
  title,
  dealer,
  price,
  originalPrice,
  location,
  mileage,
  reviews,
  rating,
  isHotDeal,
  discount,
  fuelType
}) => {
  return (
    <div className="bg-[#13182B] rounded-2xl overflow-hidden border border-white/10 hover:border-orange-400/60 transition-all duration-300 shadow-lg hover:shadow-orange-500/20">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        {/* HOT DEAL Badge - Below Year */}
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-2 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
              HOT DEAL
            </div>
          </div>
      
        {/* Discount Badge - TOP RIGHT */}
        <div className="absolute top-4 right-4">
          <div className=" flex items-center gap-1 text-black bg-white px-3 py-1  rounded-2xl">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" strokeWidth={0} />
            {rating}
          </div>
        </div>

        {/* Bottom Image Info */}
        <div className="absolute bottom-0  right-2 p-4">
          <div className="flex justify-between items-center">
            <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white px-1 py-1 rounded-2xl text-sm">
              {discount} OFF
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-white ">{title}</h3>
        <span className="text-gray-400 font-medium text-sm ">{dealer}</span>


        {/* SPECIFICATIONS - Price ke UPAR wala section */}
        <div className="flex items-center gap-4 mb-4 mt-5">
          {/* Year with Calendar Icon */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm font-medium">{year}</span>
          </div>

          {/* Mileage with Gauge Icon */}
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm font-medium">{mileage}</span>
          </div>

          {/* Hybrid/Fuel Type with Zap Icon */}
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm font-medium">{fuelType}</span>
          </div>
        </div>

         <div className="border-t border-gray-700 mb-5"></div>

        {/* Price Section - EXACT SCREENSHOT FORMAT */}
        <div className="mb-5">
          <div className="flex items-baseline gap-3">
            <span className="text-xl font-bold text-orange-500">{price}</span>
            <div className="flex items-center">
              <span className="text-gray-400 text-base line-through">CHF-{originalPrice}</span>
            </div>
          </div>
        </div>

        {/* Location and Reviews in ONE LINE */}
        <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
          {/* Location on LEFT */}
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <span className="font-medium">{location}</span>
          </div>

          {/* Reviews on RIGHT */}
          <div className="flex items-center gap-1">
            <span className="font-medium">{reviews}</span>
          </div>
        </div>



      </div>
    </div>
  );
};

export default CarOfferCard;