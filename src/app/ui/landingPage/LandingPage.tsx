import React from 'react'
import CompaniesSection from './CompaniesSection'
import HeroSection from './HeroSection'
import TransformSection from './TransformSection'
import HowItWorks from './HowItWorks'
import Features from './Features'
import Testimonials from './Testimonials'
import FAQSection from './FAQSection'

export const LandingPage = () => {
  return (
    <main>
      <HeroSection/>
      <CompaniesSection/>
      <TransformSection/>
      <HowItWorks/>
      <Features/>
      <Testimonials/>
      <FAQSection/>
    </main>

    
  )
}
