import React from 'react'
import { ArrowRight } from 'lucide-react'

const ListingButton = () => {
  return (
    <button
      className="
        flex items-center gap-2
        text-orange-500
        border border-orange-500
        bg-white/90
        px-5 py-2.5
        sm:px-6 sm:py-3
        rounded-md
        font-medium
        text-sm sm:text-base
        hover:opacity-90
        hover:shadow-xl
        transition
      "
    >
      View All
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  )
}

export default ListingButton
