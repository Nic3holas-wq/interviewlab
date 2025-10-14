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
      <section id="hero">
        <HeroSection />
      </section>

      <section id="companies">
        <CompaniesSection />
      </section>

      <section id="transform">
        <TransformSection />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
    </main>
  )
}
