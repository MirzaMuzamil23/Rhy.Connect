"use client";

import React, { useRef } from 'react'
import {
  House, Car, UtensilsCrossed, Briefcase,
  ShoppingBag, Wrench, Building2, Laptop,
  ChevronLeft, ChevronRight
} from 'lucide-react'

const data = [
  { icon: House, title: "Real Estate", no: 85 },
  { icon: Car, title: "Automotive", no: 62 },
  { icon: UtensilsCrossed, title: "Restaurants", no: 134 },
  { icon: Briefcase, title: "Professional", no: 98 },
  { icon: ShoppingBag, title: "Retail", no: 154 },
  { icon: Wrench, title: "Craftsmen", no: 73 },
  { icon: Building2, title: "Construction", no: 45 },
  { icon: Laptop, title: "IT Services", no: 91 }
]

const IndustryCard = () => {
  const scrollRef = useRef(null)

  const scrollBy = (distance) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: distance,
      behavior: 'smooth'
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      {/* MOBILE ARROWS */}
      <button
        onClick={() => scrollBy(-150)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20
          w-8 h-8 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center text-white lg:hidden"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => scrollBy(150)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20
          w-8 h-8 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center text-white lg:hidden"
      >
        <ChevronRight size={18} />
      </button>

      {/* Mobile Scroll Container (arrow-controlled only) */}
      <div
        ref={scrollRef}
        className="
          flex gap-4
          overflow-x-hidden
          snap-x snap-mandatory
          pb-4
          lg:hidden
        "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="
              snap-start
              w-[140px]
              bg-white/5
              border border-white/10
              rounded-xl
              p-4
              flex flex-col items-center
              shrink-0
              hover:border-orange-500
              transition
            "
          >
            <item.icon className="w-7 h-7 text-[#bec1c8] mb-2" />
            <h3 className="text-white text-sm text-center mb-2">
              {item.title}
            </h3>
            <span className="text-[#bec1c8] text-sm font-bold">
              {item.no}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-4 xl:grid-cols-8 gap-4 xl:gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center hover:border-orange-500 transition"
          >
            <item.icon className="w-7 h-7 text-[#bec1c8] mb-2" />
            <h3 className="text-white text-sm xl:text-base text-center mb-2">
              {item.title}
            </h3>
            <span className="text-[#bec1c8] text-sm xl:text-base font-bold">
              {item.no}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndustryCard
