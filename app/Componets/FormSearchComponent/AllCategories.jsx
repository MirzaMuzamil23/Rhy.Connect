import React from "react";
import { ListFilter } from "lucide-react";

const AllCategories = () => {
  return (
    <div className="w-full md:w-[25%] mt-5 relative">
      <ListFilter 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
        size={18} 
      />

      <input
        type="text"
        placeholder="Category"
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#f3f3f5]
                   focus:border-gray-500 focus:outline-none text-sm text-[#8a8a95]"
      />
    </div>
  );
};

export default AllCategories;
