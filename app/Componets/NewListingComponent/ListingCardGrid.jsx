import React from 'react'
import ListingCard from './ListingCard'

const ListingCardGrid = () => {
  const cardsData = [
    {
      title: "Weber Real Estate",
      head: "Real Estate",
      count: 85,
      description: "Premium real estate services in the Rhine Valley region",
      location: "St.Gallen",
    },
    {
      title: "Weber Real Estate",
      head: "Real Estate",
      count: 62,
      description: "Premium real estate services in the Rhine Valley region",
      location: "St.Gallen",
    },
    {
      title: "Weber Real Estate",
      head: "Real Estate",
      count: 124,
      description: "Premium real estate services in the Rhine Valley region",
      location: "St.Gallen",
    },
    {
      title: "Weber Real Estate",
      head: "Real Estate",
      count: 98,
      description: "Premium real estate services in the Rhine Valley region",
      location: "St.Gallen",
    },
    // Add more cards as needed
  ]

  return (
   <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 overflow-hidden">

      {/* 4 Cards Grid - Responsive */}
      <div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4
  gap-4 sm:gap-6 lg:gap-8
">

        {cardsData.map((card, index) => (
          <ListingCard
            key={index}
            title={card.title}
            head={card.head}
            count={card.count}
            description={card.description}
            location={card.location}
          />
        ))}
      </div>
    </div>
  )
}

export default ListingCardGrid