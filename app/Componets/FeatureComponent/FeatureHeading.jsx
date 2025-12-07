import React from 'react'
import ViewButton from './ViewButton'
import FeatureCard from './FeatureCard'

const FeatureHeading = () => {
  return (
    <div className=" relative overflow-hidden">
      {/* Background Pattern */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(#00000015_1px,transparent_1px)]
        [background-size:16px_16px] 
        md:[background-size:22px_22px]
        bg-gradient-to-r from-white via-white/90 to-white
      " />

      {/* Right-side Orange Glow - Responsive */}
      <div className="
        absolute 
        -right-[10%] 
        md:right-[-15%] 
        top-1/2 
        -translate-y-1/2
        w-[80%] 
        h-[60%]
        md:w-[55%] 
        md:h-[75%]
        rounded-full
        bg-gradient-to-l 
        from-orange-300/60 
        via-orange-200/40 
        to-transparent
        blur-[80px]
        md:blur-[120px]
      " />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-16 max-w-3xl">
          {/* FEATURED Tag */}
          <div className="text-xs sm:text-sm md:text-[15px] font-semibold text-orange-400 mb-1 md:mb-2 uppercase tracking-[0.5px]">
            FEATURED
          </div>

          {/* Top-Rated - Responsive Text */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-0 leading-tight">
            Top-Rated
          </h1>

          {/* Businesses with Gradient - Responsive */}
          <h1 className="
            text-[28px] 
            sm:text-[36px] 
            md:text-[42px] 
            lg:text-[50px]
            font-bold 
            font-Merriweather 
            bg-linear-to-r 
            from-[#da5225] 
            via-[#c5349d] 
            to-[#ab1fff] 
            bg-clip-text 
            text-transparent
            leading-tight
            mb-3
            md:mb-4
          ">
            Businesses
          </h1>

          {/* Description */}
          <p className="
            text-sm 
            sm:text-base 
            md:text-lg 
            text-gray-600 
            font-normal
            max-w-2xl
          ">
            Discover trusted local companies in the Rhine Valley
          </p>
        </div>
      </div>
      <ViewButton />
    </div>
  )
}

export default FeatureHeading