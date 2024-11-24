import React from "react";
import Minimap from "../utils/Minimap";

const FindUs = () => {
  return (
    <div
      className="h-screen w-full bg-[#D9D9D9] flex flex-col justify-around items-center text-slate-700"
      id="find-us"
    >
      <div className="flex gap-32 w-[720px]">
        <div className="flex flex-col gap-5 h-[364px] justify-center">
          <h2 className="underline uppercase text-3xl font-bold">Find Us</h2>
          <div className="flex gap-10">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/code-up-31d9f.appspot.com/o/pro-projects-ressources%2Frestaurant%2Flocate-fixed.png?alt=media"
                alt=""
                className="mt-1"
              />
            </div>
            <div className="flex flex-col gap-5 -ml-9">
              <p>3 Grande rue Lorem Ipsum, 75000, Paris.</p>
              <div>
                <p className="text-xl">Opening hours:</p>
                <p>Monday - Sunday, 12pm - 8pm.</p>
              </div>
              <div>
                <p className="text-xl">Delivery:</p>
                <p>Tuesday - Sunday, 12pm - 8pm.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Minimap />
        </div>
      </div>
    </div>
  );
};

export default FindUs;
