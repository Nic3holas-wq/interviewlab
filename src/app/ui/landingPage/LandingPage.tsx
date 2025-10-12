import React from 'react'

export const LandingPage = () => {
  return (
    <div className='w-[55%]'>
      <div className='mb-8'>
        <h1 className='text-5xl font-black'>Land Your Dream Job With</h1>
        <h1 className='text-4xl font-black text-purple-600 pb-6'>AI-Powered Interview Coaching</h1>
        <p className='text-xl'>Master interviews with AI feedback on your answers, delivery, and body language - all for FREE</p>
      </div>

      <div className='flex gap-4'>
        <button className='bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-12 rounded-3xl'>
          Get started free
        </button>
        <button className='hover:bg-orange-600 hover:text-white border hover:border-none border-gray-400 py-2 px-12 rounded-3xl'>
          Watch demo
        </button>
      </div>
        
    </div>
  )
}
