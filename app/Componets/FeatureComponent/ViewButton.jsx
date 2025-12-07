import React from 'react'
import { ArrowRight } from 'lucide-react'

const ViewButton = () => {
  return (
    <div className="
      absolute 
      mt-20
      mr-8
      top-6 
      right-4 
      sm:top-6 
      sm:right-6 
      md:top-8 
      md:right-8 
      lg:top-10 
      lg:right-10
      xl:top-12 
      xl:right-12
    ">
      <button className="
        text-orange-500
        border
        border-orange-500
        bg-white/90
        px-4 
        py-2 
        sm:px-5 
        sm:py-2.5 
        md:px-6 
        md:py-3 
        rounded-md 
        font-medium 
        hover:opacity-90 
        transition 
        flex 
        items-center 
        gap-1 
        sm:gap-2
        hover:shadow-xl
        text-sm 
        sm:text-base
      ">
        View All 
        <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
      </button>
    </div>
  )
}

export default ViewButton