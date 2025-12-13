import React from 'react'
import OfferHeading from '../../Componets/OfferComponent/OfferHeading'
import OfferCardGrid from '../../Componets/OfferComponent/OfferCardGrid'
import ViewButton from '../../Componets/OfferComponent/ViewButton'

const SpecialOffer = () => {
  return (
    <div className='bg-linear-to-br from-[#101828] to-[#302153] min-h-[80vh] relative'  >
      <OfferHeading /> 
      <ViewButton />
      <OfferCardGrid />

    </div>
  )
}

export default SpecialOffer