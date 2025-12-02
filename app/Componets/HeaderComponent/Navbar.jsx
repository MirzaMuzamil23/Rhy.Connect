import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1E2939] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer">
          <img 
            src="/assets/images/RhyConnectLogo.png" 
            alt="Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <h1 className="text-orange-400 cursor-pointer hover:underline">Home</h1>
          <h1 className="cursor-pointer hover:text-orange-400">Companies</h1>
          <h1 className="cursor-pointer hover:text-orange-400">Categories</h1>
          <h1 className="cursor-pointer hover:text-orange-400">Pricing</h1>
          <h1 className="cursor-pointer hover:text-orange-400">News</h1>
          <h1 className="cursor-pointer hover:text-orange-400">About</h1>
          <h1 className="cursor-pointer hover:text-orange-400">Contact</h1>
        </div>

        {/* Button */}
        <button className="hidden md:block bg-[#F54900] text-white text-sm rounded-lg px-4 py-2 shadow-[0_6px_15px_rgba(245,73,0,0.5)] 
          hover:bg-[#FF6900] transition">
          List Your Business
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-4 pb-4 text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-orange-400 cursor-pointer">Home</h1>
          <h1 className="cursor-pointer">Companies</h1>
          <h1 className="cursor-pointer">Categories</h1>
          <h1 className="cursor-pointer">Pricing</h1>
          <h1 className="cursor-pointer">News</h1>
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Contact</h1>

          <button className="bg-[#F54900] text-white text-sm rounded-lg px-4 py-2 shadow-[0_6px_15px_rgba(245,73,0,0.5)] 
            hover:bg-[#FF6900] transition">
            List Your Business
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
