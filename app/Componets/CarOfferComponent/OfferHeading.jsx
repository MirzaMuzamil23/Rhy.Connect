import React from 'react'

const OfferHeading = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 pt-10">
      
      <h1 className="text-xs sm:text-sm mb-1 text-orange-500">
        AUTOMOTIVE
      </h1>

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-semibold">
        LATEST JOB
      </h1>

      <h1
        className="
          bg-linear-to-br 
          from-[#da5225] 
          via-[#c5349d] 
          to-[#ab1fff]  
          bg-clip-text 
          text-transparent 
          font-semibold 
          mt-1 
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          font-mono
        "
      >
        OFFERS
      </h1>

      <p className="text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl">
        Premium vehicles from trusted dealerships in the Rhine Valley
      </p>
    </div>
  )
}

export default OfferHeading
