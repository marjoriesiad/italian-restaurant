import React from "react";

const ContactUs = () => {
  return (
    <div
      className="h-screen w-full overflow-hidden flex justify-center"
      id="contact"
    >
      <div className="w-full h-full relative">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fcontact-pizza.png?alt=media"
          alt=""
          className="w-full brightness-75"
        />

        <div className="absolute bottom-20 w-full text-center">
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Flogo.png?alt=media"
              alt=""
              className="w-24 h-24"
            />
            <p className="text-white font-bold text-5xl">Pizzeria Bella Luna</p>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Ffb.png?alt=media"
                alt=""
                className="w-24 h-24 rounded-full"
              />
            </a>
            <a href="#">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Finsta.png?alt=media"
                alt=""
                className="w-24 h-24 rounded-full"
              />
            </a>
            <a href="#">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fwhatsapp.png?alt=media"
                alt=""
                className="w-24 h-24 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
