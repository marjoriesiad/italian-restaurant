import React, {useState} from 'react'
import menuItems from '../utils/menu';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("Pizza");
    const categories = Object.keys(menuItems);

  return (
    <div className='h-screen w-full overflow-hidden flex justify-center items-center' id='menu'>
        <div className='w-full h-full relative'>
            <img src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fbg-menu-section.png?alt=media" alt="" className='w-full brightness-50' />
        </div>
        <div className='absolute flex flex-col justify-center items-center gap-20'>
            <h2 className='text-white text-3xl underline uppercase font-bold'>Our Menu</h2>
            <div>
                <div className='flex flex-col'>
                    <div className='bg-white flex mb-5 w-[229px] h-[42px] rounded-lg justify-around items-center p-2'>
                        {categories.map((category) => (
                            <p key={category} onClick={() => setActiveCategory(category)} className={`cursor-pointer p-1 rounded-lg ${activeCategory === category ? 'bg-slate-300' : 'bg-white'}`}>{category}</p>
                        ))}
                    </div>
                </div>
                <div className='h-[400px] w-[735px] bg-white flex justify-around items-center pb-5 text-slate-700'>
                    {Object.entries(menuItems[activeCategory]).map(([itemName, itemDetails]) => (
                    <div className='flex flex-col w-[200px] h-[350px] gap-2'>
                    <img src={itemDetails.image} alt="" className='w-[200px] h-[200px] rounded-lg'/>
                    <div className='flex justify-between'>
                        <p>{itemName}</p>
                        <p>{`$ ${itemDetails.price}`}</p>
                    </div>
                    <div className='text-justify'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Menu;
