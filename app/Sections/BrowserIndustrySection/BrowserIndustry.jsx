import React from 'react'
import IndustryHeading from '../../Componets/IndustryComponet/IndustryHeading'
import IndustryCard from '../../Componets/IndustryComponet/IndustryCard'



const BrowserIndustry = () => {
  return (
    <div className='min-h-[87vh] relative overflow-hidden bg-linear-to-r from-[#101828] via-[#2b1f4d] to-[#3d2722]'  >
      <IndustryHeading />
      <IndustryCard />
    </div>
  )
}

export default BrowserIndustry