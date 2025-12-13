import React from 'react'
import { MapPin, Star } from 'lucide-react'

const ListingCard = ({
  title = "Real Estate",
  head = "Real Estate",
  count = 85,
  description = "Find premium properties and real estate services in your area",
  color = "from-orange-500 to-orange-600",
  location = "St.Gallen",
}) => {
  return (
    <div className="
      rounded-2xl 
      shadow-xl
      overflow-hidden 
      hover:shadow-5xl 
      border 
      border-gray-100
      h-full
      flex 
      flex-col
      group
      hover:border-orange-400 
      transition-all 
      duration-300 
    ">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-70">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt={title}
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Heading */}
        <div className="mb-4">
          <h2 className="
            text-xl 
            sm:text-2xl 
            font-bold 
            text-gray-900 
          ">
            {title}
          </h2>
          <p className="
            text-gray-600 
            text-sm 
            sm:text-base
            mb-4 
            line-clamp-2
          ">
            {head}
          </p>
          {/* Description */}
          <p className="
            text-gray-600 
            text-sm 
            sm:text-base
            line-clamp-2
          ">
            {description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="
          flex 
          items-center 
          justify-between 
          rounded-xl
          mt-auto
        ">
          <div className="flex items-center">
            <div className={`
              rounded-full 
              bg-gradient-to-r 
              ${color.replace('500', '100').replace('600', '200')}
              flex 
              items-center 
              justify-center
            `}>
              <MapPin className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <div className="text-xs ml-1 text-gray-500">{location}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1">
              <Star strokeWidth={0} fill="#fc7603" className="w-4 h-4" />
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-sm text-gray-500">({count})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard