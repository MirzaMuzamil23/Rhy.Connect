import React from 'react'
import HeroButton from '../../Componets/HeroComponent/HeroButton'
import HeroStartedButton from '../../Componets/HeroComponent/HeroStartedButton'
import HeroCards from '../../Componets/HeroComponent/HeroCards'
import HeroImage from '../../Componets/HeroComponent/HeroImage'

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen sm:min-h-[145vh] bg-[#030712] mt-1 relative overflow-hidden px-4 sm:px-0">

      {/* Purple glow in center - Responsive */}
      <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full 
    bg-gradient-radial from-[#c861c7] via-[#c861c7]/40 to-transparent 
    opacity-40 sm:opacity-60 transform -translate-x-1/2 -translate-y-1/2 z-0">
      </div>

      {/* Orange stars */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto">
        
        {/* Left Side Content */}
        <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 lg:pl-8 xl:pl-16">
          <div className="mb-6 sm:mb-8">
            <HeroButton />
          </div>
          
          {/* Connect Heading  */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4">
              Connect <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full ml-1 sm:ml-2"></span>
            </h1>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-redhat text-white mt-2 sm:mt-4'>
              Discover<span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full ml-1 sm:ml-2"></span>
            </h1>
            <h1 className='text-3xl sm:text-4xl md:text-[52px] lg:text-[62px] font-redhat font-semibold bg-gradient-to-r from-[#FF8904] to-[#C27AFF] bg-clip-text text-transparent mt-2 sm:mt-4'>
              Grow Together<span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-[#FF8904] to-[#C27AFF] rounded-full ml-1 sm:ml-2"></span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-200 font-medium text-sm sm:text-base md:text-lg max-w-xl">
              The ultimate platform connecting local businesses with their community in the Rhine Valley region.
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              Find and support businesses near you.
            </p>
          </div>
          
          {/* Button */}
          <div className='mb-8 sm:mb-12 md:mb-16'>
            <HeroStartedButton />
          </div>

          {/* Cards Section - Mobile: below content, Desktop: right side */}
          <div className="block lg:hidden w-full mt-8">
            <HeroCards />
          </div>
        </div>

        {/* Cards Right Side - Desktop only */}
        <div className="hidden lg:block absolute top-1/2 right-8 xl:right-16 transform -translate-y-1/2 z-20">
          <HeroCards />
        </div>

      </div>

      {/* Hero Image - Bottom Section */}
      <div className="relative z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:top-[62%] lg:transform lg:-translate-x-1/2 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-0">
        <div className="animate-float">
          <HeroImage />
        </div>
      </div>

    </section>
  )
}

export default HeroSection