import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureCardGrid = () => {
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
    <div className="max-w-9xl mx-auto ">
      {/* 4 Cards Grid - Responsive */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-2 
        sm:gap-7 
        md:gap-8
      ">
        {cardsData.map((card, index) => (
          <FeatureCard
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

export default FeatureCardGrid