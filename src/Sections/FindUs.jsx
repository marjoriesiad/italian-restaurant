import React from "react";
import Minimap from "../utils/Minimap";

const FindUs = () => {
  return (
    <div
      className="min-h-screen w-full bg-[#D9D9D9] flex flex-col items-center justify-around text-slate-700 p-6"
      id="find-us"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-4xl">
        {/* Section Texte */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="uppercase text-3xl font-bold underline text-center md:text-left">
            Find Us
          </h2>
          <div className="flex items-start gap-4 pl-20 md:pl-0 ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Flocate-fixed.png?alt=media"
              alt="Location Icon"
              className="mt-1 w-6 h-6"
            />
            <p className="text-left">3 Grande rue Lorem Ipsum, 75000, Paris.</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-left pl-36 md:pl-0">Opening hours:</p>
            <p className="text-left pl-36 md:pl-0">Monday - Sunday, 12 pm - 8 pm.</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-left pl-36 md:pl-0">Delivery:</p>
            <p className="text-left pl-36 md:pl-0">Tuesday - Sunday, 12 pm - 8 pm.</p>
          </div>
        </div>

        {/* Section Minimap */}
        <div className="w-full md:w-1/2 flex justify-center z-0">
          <Minimap />
        </div>
      </div>
    </div>
  );
};

export default FindUs;
