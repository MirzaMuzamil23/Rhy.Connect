import React from 'react'
import { Sparkles } from 'lucide-react';

const HeroButton = () => {
  return (
    <button className='relative text-sm sm:text-base inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full
        bg-[#0B0F19] text-[#FF8904] font-medium
        before:absolute before:inset-0 before:rounded-full 
        before:p-0.5 before:bg-linear-to-r
        before:from-[#FF8904] before:to-[#C27AFF]
        before:content-[""] before:-z-10
    '>
      <Sparkles className='mx-1 text-[#FF8904]' size={17}/> Rhine Valley's Digital Hub
    </button>
  )
}

export default HeroButton
