import React from 'react'
import ListingButton from './ListingButton'

const ListingHeading = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Background Pattern */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(#00000015_1px,transparent_1px)]
          [background-size:16px_16px]
          md:[background-size:22px_22px]
          bg-gradient-to-r from-white via-white/90 to-white
        "
      />

      {/* Orange Glow */}
      <div
        className="
          absolute
          right-[-20%]
          md:right-[-15%]
          top-1/2
          -translate-y-1/2
          w-[90%]
          h-[60%]
          md:w-[55%]
          md:h-[75%]
          rounded-full
          bg-gradient-to-l
          from-orange-300/60
          via-orange-200/40
          to-transparent
          blur-[90px]
          md:blur-[130px]
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="max-w-3xl">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
            New
            <span
              className="
                ml-2
                font-serif
                bg-linear-to-r
                from-[#da5225]
                via-[#c5349d]
                to-[#ab1fff]
                bg-clip-text
                text-transparent
                text-[28px]
                sm:text-[36px]
                md:text-[42px]
                lg:text-[50px]
              "
            >
              Real Estate
            </span>
          </h1>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
            Listings
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
            Discover trusted local companies in the Rhine Valley
          </p>

          {/* ✅ Button – mobile ke liye content ke neeche */}
          <div className="mt-6 md:hidden">
            <ListingButton />
          </div>
        </div>

        {/* ✅ Desktop ke liye top-right */}
        <div className="hidden md:block absolute top-8 right-8 lg:top-12 lg:right-12">
          <ListingButton />
        </div>

      </div>
    </div>
  )
}

export default ListingHeading
