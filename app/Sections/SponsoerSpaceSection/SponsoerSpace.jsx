import React from 'react'
import SponsoreSpaceHeading from '../../Componets/SponsoreSpaceComponent/SponsoreSpaceHeading'
import PriceButton from '../../Componets/SponsoreSpaceComponent/PriceButton'
import SponsorePoint from '../../Componets/SponsoreSpaceComponent/SponsorePoint'

const SponsoerSpace = () => {
    return (
        <div className="w-full min-h-[70vh] bg-[#0B0F19] flex items-center justify-center py-12">
            {/* CARD */}
            <div className="w-[90%] md:w-[85%] bg-[#111827] rounded-3xl border border-orange-500 p-8 md:p-14 
                      flex flex-col md:flex-row items-center gap-10">

                {/* LEFT */}
                <div className='w-full md:w-1/2'>
                    <PriceButton />
                    <SponsoreSpaceHeading />
                    <SponsorePoint />
                </div>

                <div className="relative flex justify-center items-center">

                    {/* BIG GRADIENT CIRCLE */}
                    <div className="
                        w-56 h-56 md:w-72 md:h-72
                        rounded-full
                        bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700
                        flex items-center justify-center
                        relative
                        shadow-[0_0_40px_rgba(255,120,0,0.35)]
                    ">

                        {/* CENTER WHITE ICON */}
                        <div className="
                        w-20 h-20 md:w-24 md:h-24 
                        bg-white rounded-full
                        shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                        flex items-center justify-center
                        ">
                            <span className="text-4xl text-[#fe8805] drop-shadow-md">
                               
                            </span>
                        </div>
                    </div>

                    {/* LEFT GLOWING SPARK */}
                    <div className="
                        absolute left-[22%] md:left-[26%]
                        top-1/2 -translate-y-1/2
                        text-[#ff9900]
                        text-3xl
                        drop-shadow-[0_0_8px_rgba(255,153,0,0.8)]
                    ">
                        ✦
                    </div>

                    {/* RIGHT GLOWING SPARK */}
                    <div className="
                        absolute right-[22%] md:right-[26%]
                        top-1/2 -translate-y-1/2
                        text-[#ff9900]
                        text-3xl
                        drop-shadow-[0_0_8px_rgba(255,153,0,0.8)]
                    ">
                        ✦
                    </div>
                    <div className="
                        absolute right-[30%] md:right-[90%]
                        top-1/2 -translate-y-1/2
                        text-[#ff9900]
                        text-3xl
                        drop-shadow-[0_0_8px_rgba(255,153,0,0.8)]
                    ">
                        ✦
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SponsoerSpace