import React from 'react'
import HeroButton from '../../Componets/HeroComponent/HeroButton'
import HeroStartedButton from '../../Componets/HeroComponent/HeroStartedButton'
import HeroCards from '../../Componets/HeroComponent/HeroCards'
import HeroImage from '../../Componets/HeroComponent/HeroImage'


const HeroSection = () => {
  return (
    <section className="w-full min-h-[145vh] bg-[#030712] mt-1 relative overflow-hidden">

      {/* Purple glow in center */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full 
    bg-gradient-radial from-[#c861c7] via-[#c861c7]/40 to-transparent 
    opacity-60 transform -translate-x-1/2 -translate-y-1/2 z-0">
      </div>

      {/* Orange stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}

      {/* Button in top-left */}
      <div className="absolute top-25 left-53  z-20">
        <HeroButton />
        {/* Connect Heading  */}
        <div>
          <h1 className="text-white text-5xl md:text-6xl mt-4 ">
            Connect <span className=" inline-block w-[11px] h-2.5 bg-white rounded-full "></span>
          </h1>
          <h1 className='text-[60px] font-redhat text-white  md:text-6xl mt-4'>Discover<span className="inline-block w-2.5 h-2.5 bg-white rounded-full "></span></h1>
          <h1 className='text-[62px] font-redhat font-semibold bg-linear-to-r from-[#FF8904] to-[#C27AFF] bg-clip-text text-transparent'>Grow Together<span className="inline-block w-2.5 h-2.5 bg-linear-to-r from-[#FF8904] to-[#C27AFF] rounded-full"></span> </h1>
        </div>
        <div>
          <p className="text-gray-200 font-medium text-base mt-3">
            The ultimate platform connecting local businesses with <br />
            their community in the Rhine Valley region.
          </p>
        </div>
        <div className='mt-6'>
          <HeroStartedButton />
        </div>
      </div>
            {/* Cards Right Side */}
      <div className="absolute top-[35%] right-40 transform -translate-y-[55%] z-20">
        <HeroCards />
      </div>

      <div className="absolute bottom-0 left-1/2 top-[62%] transform -translate-x-1/2 z-10 animate-float w-[84%]">
        <HeroImage />
      </div>
      

    </section>


  )
}

export default HeroSection