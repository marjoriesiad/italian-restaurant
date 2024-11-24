import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import menuItems from "../utils/menu";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Pizza");
  const categories = Object.keys(menuItems);

  return (
    <div
      className="h-screen w-full flex justify-center items-center overflow-hidden bg-gray-900 relative"
      id="menu"
    >
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fbg-menu-section.png?alt=media"
          alt="Menu Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Menu Content */}
      <div className="absolute flex flex-col items-center gap-8 p-4 text-center">
        {/* Title */}
        <h2 className="text-white text-4xl sm:text-5xl font-bold underline uppercase">
          Our Menu
        </h2>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
                activeCategory === category
                  ? "bg-slate-300 text-slate-900"
                  : "bg-white text-slate-700"
              } hover:bg-slate-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Swiper for Mobile */}
        <div className="block md:hidden w-full max-w-md">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {Object.entries(menuItems[activeCategory]).map(
              ([itemName, itemDetails]) => (
                <SwiperSlide key={itemName}>
                  <div className="flex flex-col items-center bg-white rounded-lg shadow p-10">
                    <img
                      src={itemDetails.image}
                      alt={itemName}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-lg font-bold">{itemName}</p>
                      <p className="text-gray-700">{`$${itemDetails.price}`}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-lg p-6 shadow-lg w-full max-w-6xl">
          {Object.entries(menuItems[activeCategory]).map(
            ([itemName, itemDetails]) => (
              <div
                key={itemName}
                className="flex flex-col items-center bg-gray-100 rounded-lg shadow p-4 transition hover:scale-105"
              >
                <img
                  src={itemDetails.image}
                  alt={itemName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between w-full">
                  <p className="text-lg font-bold">{itemName}</p>
                  <p className="text-gray-700">{`$${itemDetails.price}`}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
