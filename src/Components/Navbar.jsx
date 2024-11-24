import React, {useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="flex items-center justify-between md:justify-around h-14 md:h-20 fixed bg-white w-full">
      <div className="flex items-center gap-2 p-3">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Flogo.png?alt=media"
          alt="Logo Pizzeria Bella Luna"
          className="h-10 w-10"
        />
        <blockquote className="italic hidden md:block">Pizzeria Bella Luna</blockquote>
      </div>
      <div className="gap-5 font-semibold hidden md:flex">
        <a href="#about-us">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#find-us">Find us</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        onClick={toggleMenu}
        className="p-3 focus:outline-none md:hidden lg:hidden"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="fixed top-12 w-full rounded-md shadow-md z-50 pt-5 bg-white">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#hero">About us</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#menu">Menu</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#find-s">Find us</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
      

    </div>
  );
};

export default Navbar;
