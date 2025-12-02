import React from 'react'
import { MoveRight } from 'lucide-react';

const HeroStartedButton = () => {
  return (
      <button className='bg-[#331410] text-white px-4 py-3 opacity-90 mt-2 rounded-lg'>
        Get Started <MoveRight className='inline-block ml-1' size={20} />
      </button>

  )
}

export default HeroStartedButton