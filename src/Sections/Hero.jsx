import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full md:overflow-hidden flex flex-col items-center justify-center">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fmain-picture.png?alt=media"
      alt=""
      className="w-full h-full object-cover"
    />
    <div className="absolute bg-white bg-opacity-70 w-11/12 max-w-[452px] p-4 sm:p-6 flex items-center justify-center text-center rounded-lg">
        <p className="text-sm sm:text-lg italic text-slate-700 leading-relaxed">
          "Enjoy our homemade Italian pizzas, prepared with passion and fresh
          ingredients!"
        </p>
      </div>
  </div>
  );
};

export default Hero;
