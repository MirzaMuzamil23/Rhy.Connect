import React from "react";
import CategoryCard from "./CategoryCard";
import CategoryTitle from "./CategoryTitle";
import { Building2, Briefcase, Hammer, Car } from "lucide-react";

const Categories = () => {
  const data = [
    {
      icon: Building2,
      title: "Companies",
      subtitle: "Find Local Bussiness",
      iconColor: "#f6983a",
      iconBg: "#fdf7ee",
    },
    {
      icon: Briefcase,
      title: "Jobs",
      subtitle: "Explore job opening",
      iconColor: "#f6983a",
      iconBg: "#fdf7ee",
    },
    {
      icon: Hammer,
      title: "Real Estate",
      subtitle: "Your new home",
      iconColor: "#f6983a",
      iconBg: "#fdf7ee",
    },
    {
      icon: Car,
      title: "Cars",
      subtitle: "Browse the car market",
      iconColor: "#f6983a",
      iconBg: "#fdf7ee",
    },
  ];

  return (
    <div className="px-4 py-10">

      <div
        className="
          
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-4
          justify-items-center
        "
      >
        {data.map((item, index) => (
          <CategoryCard
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            iconColor={item.iconColor}
            iconBg={item.iconBg}
          />
        ))}
      </div>
   
       <div>
      <CategoryTitle/>
       </div>
    </div>
  );
};

export default Categories;
