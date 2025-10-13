import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <main 
     style={{ backgroundImage: "url('/assets/background.jpg')" }}
     className="flex flex-col md:flex-row items-start pt-[25%] pb-[10%] sm:pb-[25%] sm:pt-[10%] justify-between w-full md:w-[100%] mx-auto px-6 min-h-screen">
      {/* LEFT SIDE - TEXT SECTION */}
      <div className="md:w-1/2 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight">
            Land Your Dream Job With
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-purple-600 pb-2 sm:pb-4">
            AI-Powered Interview Coaching
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Master interviews with AI feedback on your answers, delivery, and body language — all for <span className="font-bold text-orange-500">FREE</span>.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 sm:py-3 sm:px-10 rounded-3xl font-semibold">
            Get Started Free
          </button>
          <button className="border border-gray-400 hover:bg-orange-600 hover:text-white hover:border-transparent transition py-3 px-10 rounded-3xl font-semibold">
            Watch Demo
          </button>
        </div>
        <section className="mt-8 sm:mt-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-600">50K+</h3>
              <p className="text-gray-600">Users Worldwide</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-600">85%</h3>
              <p className="text-gray-600">Improved Confidence</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-600">4.6/5</h3>
              <p className="text-gray-600">User Satisfaction</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-600">15K+</h3>
              <p className="text-gray-600">Mock Interviews Completed</p>
            </div>
          </div>
        </section>

      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/assets/interview.png"
          alt="Interview Illustration"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>
    </main>
  )
}

export default HeroSection