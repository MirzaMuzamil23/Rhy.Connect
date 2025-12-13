import React from 'react'
import ViewButton from './ViewButton'

const FeatureHeading = () => {
  return (
    <section className="relative">
      
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dots */}
        <div className="
          absolute inset-0
          bg-[radial-gradient(#00000015_1px,transparent_1px)]
          [background-size:14px_14px]
          md:[background-size:22px_22px]
        " />

        {/* Orange Glow */}
        <div className="
          absolute
          right-1/2 translate-x-1/2
          md:right-[-15%] md:translate-x-0
          top-1/2 -translate-y-1/2
          w-[90%] h-[50%]
          md:w-[55%] md:h-[75%]
          rounded-full
          bg-gradient-to-l
          from-orange-300/50
          via-orange-200/30
          to-transparent
          blur-[70px]
          md:blur-[120px]
        " />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">

        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold text-orange-400 mb-2 uppercase">
            Featured
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Top-Rated
          </h1>

          <h1 className="
            text-3xl sm:text-4xl lg:text-5xl
            font-bold
            bg-gradient-to-r
            from-[#da5225]
            via-[#c5349d]
            to-[#ab1fff]
            bg-clip-text
            text-transparent
            mb-4
          ">
            Businesses
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Discover trusted local companies in the Rhine Valley
          </p>
        </div>

        <ViewButton />
      </div>
    </section>
  )
}

export default FeatureHeading
