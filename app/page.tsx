import React from 'react'
import Navbar from './Componets/HeaderComponent/Navbar'
import HeroSection from './Sections/HeroSection/HeroSection'
import SearchCard from './Sections/SearchCardSection/SearchCard'
import BrowserIndustry from './Sections/BrowserIndustrySection/BrowserIndustry'
import FeatureBusssiness from './Sections/FeatureSection/FeatureBussiness'
import './globals.css'


const page = () => {
  return (
    <>   
    <Navbar />
    <HeroSection />
    <SearchCard />
    <BrowserIndustry />
    <FeatureBusssiness />
    </>
  )
}

export default page