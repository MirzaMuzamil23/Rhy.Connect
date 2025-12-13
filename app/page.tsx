import React from 'react'
import Navbar from './Componets/HeaderComponent/Navbar'
import HeroSection from './Sections/HeroSection/HeroSection'
import SearchCard from './Sections/SearchCardSection/SearchCard'
import BrowserIndustry from './Sections/BrowserIndustrySection/BrowserIndustry'
import FeatureBusssiness from './Sections/FeatureSection/FeatureBussiness'
import SpecialOffer from './Sections/OfferSection/SpecialOffer'
import NewListing from './Sections/NewListingSection/NewListing'
import CarOffers from './Sections/CarOfferSection.jsx/CarOffers'
import WhyChooseUs from './Sections/ChooseUsSection/WhyChooseUs'
import SponsoerSpace from './Sections/SponsoerSpaceSection/SponsoerSpace'
import Process from './Sections/ProcessSection/Process'
import Partnership from './Sections/PartnershipSection/Partnership'
import AboutUs from './Sections/AboutUsSection/AboutUs'
import Contact from './Sections/ContactSection/Contact'
import Footer from './Sections/FooterSection/Footer'

import './globals.css'


const page = () => {
  return (
    <>   
    <Navbar />
    <HeroSection />
    <SearchCard />
    <BrowserIndustry />
    <FeatureBusssiness />
    <SpecialOffer /> 
    <NewListing />
    <CarOffers />
    <WhyChooseUs />
    <SponsoerSpace /> 
    <Process />
    <SponsoerSpace />
    <Partnership/>
    <SponsoerSpace/>
    <AboutUs/>
    <Contact/>
    <Footer/>



    </>
  )
}

export default page