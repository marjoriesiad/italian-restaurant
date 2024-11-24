import React from "react";

const ContactUs = () => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center relative overflow-hidden"
      id="contact"
    >
      {/* Image de fond */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fcontact-pizza.png?alt=media"
        alt=""
        className="absolute w-full h-full object-cover brightness-75"
      />

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo et titre */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Flogo.png?alt=media"
            alt="Logo"
            className="w-20 h-20"
          />
          <p className="text-white font-bold text-3xl text-center">
            Pizzeria Bella Luna
          </p>
        </div>

        {/* Icônes des réseaux sociaux */}
        <div className="flex flex-col items-center gap-4">
          <a href="#">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Ffb.png?alt=media"
              alt="Facebook"
              className="w-12 h-12 rounded-full"
            />
          </a>
          <a href="#">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Finsta.png?alt=media"
              alt="Instagram"
              className="w-12 h-12 rounded-full"
            />
          </a>
          <a href="#">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Fwhatsapp.png?alt=media"
              alt="WhatsApp"
              className="w-12 h-12 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
