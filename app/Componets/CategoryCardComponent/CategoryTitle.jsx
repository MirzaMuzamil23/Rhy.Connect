import React from "react";

const CategoryTitle = () => {
  return (
    <div className="flex justify-center mt-4 w-full -mb-12">
      <h1
        className="
          text-[45px] 
          sm:text-[70px] 
          md:text-[100px] 
          lg:text-[130px] 
          xl:text-[150px] 
          font-extrabold
          text-transparent 
          stroke-orange-400
          hover:text-[#fed4c0]
          hover:bg-linear-to-r 
          hover:from-[#fed4c0]
          hover:to-[#fed4c0]
          hover:bg-clip-text
          transition-all duration-500
        "
        style={{
          WebkitTextStroke: "2px #f97316",
        }}
      >
        CATEGORIES
      </h1>
    </div>
  );
};

export default CategoryTitle;
