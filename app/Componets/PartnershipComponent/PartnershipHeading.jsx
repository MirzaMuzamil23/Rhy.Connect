import React from 'react'

const PartnershipHeading = () => {
  return (
    <div className="text-center px-4 sm:px-6 md:px-10 pt-16 mt-10">
      <h3 className="text-orange-500 text-sm font-semibold tracking-wide">
        PARTNERSHIP
      </h3>

      <h1 className="text-xl sm:text-3xl md:text-4xl mt-3">
        Partner With
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent ml-2">
          Us
        </span>
      </h1>

      <p className="text-gray-500 mt-3 mb-4 max-w-2xl mx-auto text-sm sm:text-lg">
        Are you a web developer or designer? Join our network and build custom mini-websites
        for Platinum members
      </p>
    </div>
  )
}

export default PartnershipHeading