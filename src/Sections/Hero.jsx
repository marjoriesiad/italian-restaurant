import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='bg-red-500 h-[93vh] w-full overflow-hidden flex flex-col items-center justify-center'>
      <img src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fmain-picture.png?alt=media" alt="" className=' w-full object-cover' />
      <div className='absolute bg-white opacity-70 w-[452px] h-[120px] flex items-center justify-center text-center rounded-lg'>
      <p className='p-10 italic text-slate-700'>"Enjoy our homemade Italian pizzas, prepared with passion and fresh ingredients!"</p>
      </div>
    </div>
    </>
  )
}

export default Hero
