import React from "react";
import shirt from "../assets/shirt.png";
import jeans from "../assets/jeans.png";

function Cards() {
  return (
    <div className="grid">
      <div className="flex items-center my-8 justify-center">
        <p className="font-bold text-3xl ">NEW ARRIVALS</p>
      </div>

        <div className="mx-4">
          <div className="h-[35rem] flex flex-col w-[20rem] ">
            <div className="h-[25rem] flex items-center justify-center object-contain rounded-3xl bg-gray-200 w-full ">
              <img src={shirt} alt="" className="object-contain " />
            </div>

            <div className="flex p-4 flex-col ">
              <p className="font-bold text-2xl ">T-Shirt with</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-4 text-3xl font-bold">$120</p>
            </div>
          </div>
        </div>

        <div className="mx-4">
          <div className="h-[35rem] flex flex-col w-[20rem] ">
            <div className="h-[25rem] flex overflow-hidden items-center justify-center object-contain bg-gray-200 w-full ">
              <img src={jeans} alt="" className="object-contain " />
            </div>

            <div className="flex p-4 flex-col ">
              <p className="font-bold text-2xl ">T-Shirt with</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-4 text-3xl font-bold">$120</p>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Cards;
