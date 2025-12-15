import React from 'react'
import { Sparkles } from 'lucide-react';

const HeroButton = () => {
  return (
    <button className='relative text-xs sm:text-sm md:text-base inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
        bg-[#0B0F19] text-[#FF8904] font-medium
        before:absolute before:inset-0 before:rounded-full 
        before:p-0.5 before:bg-gradient-to-r
        before:from-[#FF8904] before:to-[#C27AFF]
        before:content-[""] before:-z-10
        hover:scale-105 transition-transform duration-200
    '>
      <Sparkles className='mx-1 text-[#FF8904] w-3 h-3 sm:w-4 sm:h-4'/> 
      <span className="whitespace-nowrap">Rhine Valley's Digital Hub</span>
    </button>
  )
}

export default HeroButton