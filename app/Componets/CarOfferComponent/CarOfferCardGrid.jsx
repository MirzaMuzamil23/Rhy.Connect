import React from 'react';
import CarOfferCard from './CarOfferCard';

const CarOfferCardGrid = () => {
  const carOffers = [
    {
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop',
      year: '2024',
      title: 'BMW 3 Series',
      dealer: 'AutoHaus Schmidl',
      price: 'CHF 45,900',
      originalPrice: '52,000',
      location: 'Buchs',
      mileage: '5,000 km',
      reviews: '156 reviews',
      rating: '4.9',
      discount: '12%',
      fuelType: 'Hybrid',
      isHotDeal: true
    },
    {
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
      year: '2023',
      title: 'Audi A4 Avant',
      dealer: 'Avant Motors',
      price: 'CHF 39,900',
      originalPrice: '44,000',
      location: 'Zurich',
      mileage: '8,000 km',
      reviews: '89 reviews',
      rating: '4.6',
      discount: '9%',
      fuelType: 'Petrol',
      isHotDeal: false
    },
    {
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
      year: '2022',
      title: 'Mercedes-Benz C-Class',
      dealer: 'Rhine Valley Motors',
      price: 'CHF 52,900',
      originalPrice: '58,000',
      location: 'Basel',
      mileage: '12,000 km',
      reviews: '203 reviews',
      rating: '4.9',
      discount: '9%',
      fuelType: 'Hybrid',
      isHotDeal: true
    },
    {
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&auto=format&fit=crop',
      year: '2023',
      title: 'VW Golf GTI',
      dealer: 'Swiss Auto Group',
      price: 'CHF 32,900',
      originalPrice: '36,000',
      location: 'Geneva',
      mileage: '7,500 km',
      reviews: '112 reviews',
      rating: '4.4',
      discount: '9%',
      fuelType: 'Petrol',
      isHotDeal: false
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {carOffers.map((car, index) => (
            <CarOfferCard key={index} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarOfferCardGrid;