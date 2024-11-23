import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex justify-center h-[74%] border-2 border-red-800'>
      <img src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fmain-picture.png?alt=media" alt="" className='object-cover h-[517px] w-full absolute' />
      <div className='relative text-xl text-center bg-white lg:w-[513px] w-[312px] h-[120px] flex justify-center items-center top-36 rounded-lg p-4 opacity-70'>
        <blockquote className='text-slate-600'>Enjoy our homemade Italian pizzas, prepared with passion and fresh ingredients!</blockquote>
      </div>
    </div>
    </>
  )
}

export default Hero
