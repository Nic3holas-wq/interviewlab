import React from 'react'

const HowItWorks = () => {
  return (
    <main className="my-6 sm:my-12 w-full py-9 sm:py-18 bg-[#DADFE933]">
        <h2 className="text-xl sm:text-4xl font-bold text-center ">How it works</h2>
        <p className="text-base sm:text-lg text-gray-600 text-center pb-10">
            Get interview-ready with 3 simple steps
        </p>

        <div className="flex flex-col md:flex-row justify-center text-center w-full gap-6 items-center">
            {/* Step 1 */}
            <div className="border border-gray-300 bg-white shadow-sm w-[80%] sm:w-1/4 rounded-3xl px-4 sm:px-6 py-10 transform transition-transform duration-300 hover:scale-105">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">Step 1</p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
                Choose your role & practice level
            </p>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-300 bg-white shadow-sm w-[80%] sm:w-1/4 rounded-3xl px-6 py-10 transform transition-transform duration-300 hover:scale-105">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">Step 2</p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
                Record your answers to realistic questions
            </p>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-300 bg-white shadow-sm w-[80%] sm:w-1/4 rounded-3xl px-6 py-10 transform transition-transform duration-300 hover:scale-105">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">Step 3</p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
                Get instant AI feedback on content, delivery & body language
            </p>
            </div>
        </div>
    </main>

  )
}

export default HowItWorks