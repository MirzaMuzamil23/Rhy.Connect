import React from 'react'
import ListingHeading from '../../Componets/NewListingComponent/ListingHeading'
import ListingCardGrid from '../../Componets/NewListingComponent/ListingCardGrid'



const NewListing = () => {
  return (
     <div className=' relative'  >
      <ListingHeading />
      <div className='px-10 pb-20'>
         <ListingCardGrid />
      </div>
     
    </div>
  )
}

export default NewListing