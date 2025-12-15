import React from 'react'

const HeroImage = () => {
  return (
    <div className="relative w-full overflow-visible">
        <div className="w-full flex justify-center">
            <img 
                src='/assets/images/HeroImage.png' 
                alt="Hero Illustration" 
                className="
                    // Mobile - bada image
                    w-full max-w-none scale-110
                    // Tablet
                    sm:w-full sm:scale-100
                    // Desktop
                    md:max-w-5xl
                    lg:max-w-6xl
                    xl:max-w-7xl
                    // Height management
                    h-auto
                    max-h-[550px] sm:max-h-[500px] md:max-h-[550px] lg:max-h-[650px] xl:max-h-[750px]
                    // Smooth transitions
                    transition-all duration-300
                    // Object fit
                    object-contain"
            />
        </div>
    </div>
  )
}

export default HeroImage