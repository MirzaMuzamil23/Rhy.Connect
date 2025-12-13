import React from 'react'
import IndustryHeading from '../../Componets/IndustryComponet/IndustryHeading'
import IndustryCard from '../../Componets/IndustryComponet/IndustryCard'

const BrowserIndustry = () => {
  return (
    <section className="
      min-h-[87vh]
      bg-gradient-to-r
      from-[#101828]
      via-[#2b1f4d]
      to-[#3d2722]
      py-16
    ">
      <IndustryHeading />
      <IndustryCard />
    </section>
  )
}

export default BrowserIndustry
