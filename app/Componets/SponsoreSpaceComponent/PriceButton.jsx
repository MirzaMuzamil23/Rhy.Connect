import React from 'react'
import { Sparkles } from 'lucide-react';

const PriceButton = () => {
  return (
    <div className="inline-block bg-gradient-to-bl from-orange-600 to-purple-0 px-4 py-2  rounded-full mb-4 border border-orange-400">
      <p className="text-orange-400 text-sm  flex font-semibold tracking-wide">
        <Sparkles className='mx-1text-[#FF8904]' size={17} />
        PRICING</p>
    </div>
  )
}

export default PriceButton
