import React from "react";
import { Search } from "lucide-react";

const SearchTab = () => {
  return (
    <div className="w-full md:w-[50%] mt-5 relative">
      <Search 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
        size={18} 
      />

      <input
        type="text"
        placeholder="Search companies, services..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#f3f3f5] 
                   focus:border-gray-500 focus:outline-none text-sm text-[#8a8a95]"
      />
    </div>
  );
};

export default SearchTab;
