import React from "react";

const AboutUsImageBox = () => {
    return (
        <div className="relative w-full max-w-xl mx-auto lg:mx-0">
            <div className="
        rounded-2xl overflow-hidden shadow-xl
        border border-gray-200
        
      ">
                <img
                    src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb2ZmaWNlJTIwc2VsZmllfGVufDB8fDB8fHww"
                    alt="Team"
                    className="w-full h-[320px] md:h-[300px] lg:h-[330px] object-cover"
                />

                {/* Floating Badge */}
                <div className=" absolute top-4 right-4 bg-white shadow-lg px-4 py-2 rounded-xl">
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-4xl text-transparent ml-2">
                       500+
                    </span>
                    <p className="text-sm text-black"> Businesses</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsImageBox;
