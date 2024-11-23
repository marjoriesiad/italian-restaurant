import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-[#D9D9D9] flex justify-center items-center h-screen gap-20' id='about-us'>
      <img src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fabout-us.png?alt=media" alt="" className='w-[331px] h-[395px] rounded-lg shadow-xl' />
      <div className=' flex flex-col gap-5 w-[338px] h-[395px] justify-center text-slate-700'>
        <h2 className='uppercase text-3xl underline font-bold'>About Us</h2>
        <div className='flex flex-col text-lg text-justify gap-7'>
            <p>Welcome to Pizzeria Bella Luna, where we serve up authentic Italian pizza made fresh daily.</p>
            <p>Our dough is handcrafted with love, and our toppings are always fresh and flavorful. Come join us for a slice of Italy in a warm and inviting atmosphere.</p>
            <p>We can't wait to share our passion for pizza with you!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
