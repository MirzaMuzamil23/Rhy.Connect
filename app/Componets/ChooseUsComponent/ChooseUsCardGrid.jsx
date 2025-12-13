import React from "react";
import ChooseUsCard from "./ChooseUsCard";
import { Target, Users2, TrendingUp, ShieldCheck } from "lucide-react";

const ChooseUsCardGrid = () => {
  const cards = [
    {
      number: 1,
      title: "Targeted Local Reach",
      description: "Connect directly with customers in the Rhine Valley who are actively searching for your services.",
      icon: <Target size={28} />
    },
    {
      number: 2,
      title: "Growing Community",
      description: "Join 500+ local businesses and 10,000+ monthly visitors in our thriving regional marketplace.",
      icon: <Users2 size={28} />
    },
    {
      number: 3,
      title: "Boost Your Visibility",
      description: "Premium listings get priority placement and dedicated support to maximize your online presence.",
      icon: <TrendingUp size={28} />
    },
    {
      number: 4,
      title: "Verified & Trusted",
      description: "All businesses are verified, building trust and credibility with potential customers.",
      icon: <ShieldCheck size={28} />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 py-10 mb-16 ">
      {cards.map((item, index) => (
        <ChooseUsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ChooseUsCardGrid;
