import React from 'react'
import { Code , Palette, Zap , DollarSign } from "lucide-react";
import PartnershipCard from './PartnershipCard';

const PartnershipCardGrid = () => {

     const cards = [
    {
      number: 1,
      title: "Build Mini-Websites",
      description: "Create professional websites for Platinum members and earn steady income",
      icon:  <Code  size={28} />
    },
    {
      number: 2,
      title: "Creative Freedom",
      description: "Showcase your design skills with full creative control within brand guidelines",
      icon:  <Palette size={28} />
    },
    {
      number: 3,
      title: "Steady Projects",
      description: "Regular flow of projects from businesses upgrading to Platinum packages",
      icon: <Zap size={28} />
    },
    {
      number: 4,
      title: "Fair Compensation",
      description: "Competitive rates for quality work with transparent payment terms",
      icon: <DollarSign size={28} /> ,
    }
  ];



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 py-10 mb-16 ">
      {cards.map((item, index) => (
        <PartnershipCard key={index} {...item} />
      ))}
    </div>
  )
}

export default PartnershipCardGrid