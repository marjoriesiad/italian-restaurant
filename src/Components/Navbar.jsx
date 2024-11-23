import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around h-14 fixed bg-white w-full'>
      <div className='flex items-center gap-2'>
        <img src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Flogo.png?alt=media" alt="Logo Pizzeria Bella Luna" className='h-10 w-10' />
        <blockquote className='italic'>Pizzeria Bella Luna</blockquote>
      </div>
      <div className='flex gap-5 font-semibold'>
        <a href="#about-us">About Us</a>
        <a href="#">Menu</a>
        <a href="#">Find us</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
