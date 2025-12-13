import React from 'react'
import OfferHeading from '../../Componets/CarOfferComponent/OfferHeading'
import OfferButton from '../../Componets/CarOfferComponent/OfferButton'
import CarOfferCardGrid from '../../Componets/CarOfferComponent/CarOfferCardGrid'

const CarOffers = () => {
  return (
    <div className='bg-linear-to-br from-[#101828] to-[#302153] min-h-[80vh] relative' >
        <OfferHeading />
        <OfferButton />
        <CarOfferCardGrid />

    </div>
  )
}

export default CarOffers