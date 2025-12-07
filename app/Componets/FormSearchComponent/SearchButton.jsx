import React from "react";
import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <button className="w-full mt-2 bg-[#f6983a] hover:bg-[#e07d2f] text-white 
                       font-medium py-2 mb-3 rounded-lg flex items-center justify-center 
                       gap-2 transition-colors duration-200">
      <Search size={18} />
      Search
    </button>
  );
};

export default SearchButton;
