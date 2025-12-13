import React from 'react'
import { ArrowRight } from 'lucide-react'

const ViewButton = () => {
  return (
    <div className="
      mt-6
      flex justify-start
      md:absolute
      md:top-8
      md:right-8
    ">
      <button className="
        flex items-center gap-2
        border border-orange-500
        text-orange-500
        bg-white
        px-5 py-2.5
        rounded-md
        text-sm sm:text-base
        font-medium
        hover:shadow-lg
        transition
      ">
        View All
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default ViewButton
