// IndustryHeading.jsx - CORRECTED
import React from 'react'

const IndustryHeading = () => {
  return (
    <div > {/* Background gradient */}
        <h1 className='text-[30px] md:text-[45px] text-white text-center font-redhat font-semibold pt-35 '>
          Browse by <span className='bg-linear-to-r from-[#ff9d2e] to-[#C27AFF] bg-clip-text text-transparent'>Industry</span>
        </h1>
        <p className='text-center text-[#bec1c8] text-lg md:text-xl font-medium mb-10 '>
          Find exactly what you're looking for
        </p>
    </div>
  )
}

export default IndustryHeading