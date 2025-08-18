import { useState } from "react";
import jorts from "../assets/jorts.png";
import jorts2 from "../assets/jeans.png";
import jorts3 from "../assets/jorts3.png";
import Rating from "@mui/material/Rating";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function Items() {
  const [ratings] = useState(5);
  const images = [jorts, jorts2, jorts3];
  const [selectedImage, setSelectedImage] = useState(jorts); // default image
  const [selectedSize, setSelectedSize] = useState("Small"); // default image
  const [number, setNumber] = useState(1);
  const basePrice = 87; 
  const discount = 0.68;  
  const finalPrice = basePrice * (1 - discount);
  const totalPrice = finalPrice * number;
  const discountPercent = discount * 100;
  

  const feedBackData = [
    {
      name: "Alex K.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Sarah M.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "James L.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Mona D.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    
  ];

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    setNumber((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-full py-10 min-h-screen overflow-x-hidden px-4 md:px-12 lg:px-16">
      <div className="w-full gap-8 md:grid grid-cols-2">
        {/* Left section */}
        <div className="w-full md:pb-0 gap-4 pb-6 md:flex md:flex-row-reverse">
          {/* Main Image */}
          <div className="bg-gray-200 mb-4 flex-1 h-[22rem] md:h-full flex items-center justify-center rounded-3xl">
            <img
              className="object-contain h-full"
              src={selectedImage}
              alt="Jorts"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="h-full gap-4 justify-between flex md:flex-col">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-full group p-2 h-35 md:h-full md:w-30 lg:w-32 rounded-3xl bg-gray-200 cursor-pointer 
                  ${
                    selectedImage === img
                      ? "border-2 border-black"
                      : "border-2 border-transparent"
                  }`}
              >
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-contain"
                  src={img}
                  alt={`Jorts ${index}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="w-full h-full">
          <p className="text-3xl mb-4 font-extrabold font-[Montserrat]">
            ONE LIFE BLACK JORTS
          </p>
          <Rating name="User Rating" readOnly value={ratings} size="medium" />
          <div className="flex gap-4">
            <p className="text-3xl my-1 font-semibold">${totalPrice.toFixed(2)}</p>
            <p className="text-3xl line-through text-gray-400 my-1 font-semibold">
              ${(basePrice * number).toFixed(2)}
            </p>
            <p className="px-10 bg-red-100 flex items-center justify-center w-12 rounded-3xl text-red-400 my-1 font-semibold">
              -{discountPercent}%
            </p>
          </div>

          <p className="text-gray-400 my-3 text-[.9rem]">
            Lorem ipsum quo fuga porro est eligendi vel in aliquam commodi
            deserunt, asperiores facilis eius magnam eaque nulla error pariatur.
          </p>
          <hr className="my-4 text-gray-300" />
          <div>
            <p className="text-gray-500 font-semibold text-[.9rem]">
              Select Colors
            </p>
            <div className="flex py-4 gap-4">
              <div className="w-10 h-10 rounded-full bg-green-800"></div>
              <div className="w-10 h-10 rounded-full bg-gray-700"></div>
              <div className="w-10 h-10 rounded-full bg-purple-950"></div>
            </div>
          </div>
          <hr className="my-4 text-gray-300" />
          <div>
            <p className="text-gray-500 font-semibold text-[.9rem]">
              Choose Size
            </p>
            <div className="flex py-4 gap-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 px-3 rounded-3xl cursor-pointer transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <hr className="my-4 text-gray-300"/>

          <div className="py-3 flex gap-4">
            <div className="flex bg-gray-200 w-35 h-13 rounded-4xl items-center px-4 justify-between text-2xl text-gray-700">
              <p className="text-4xl cursor-pointer" onClick={decrement}>-</p>
              <p>{number}</p>
              <p className="text-4xl cursor-pointer" onClick={increment}>+</p>
            </div>
            <div className="bg-black flex-1 h-13 cursor-pointer flex rounded-4xl items-center px-4 justify-center text-white">Add to Cart</div>
          </div>
        </div>


      </div>



      {feedBackData.map((item, index) => (
          <div key={index} className="p-3">
            <div className="border hover:scale-105 transition ease-in-out duration-1000 rounded-3xl h-[17rem] px-8 pt-8 border-gray-300 bg-white shadow-sm">
              <Rating name="User Rating" readOnly value={ratings} size="small" />
              <p className="font-bold py-4 flex gap-2 items-center">
                {item.name}
                <RiVerifiedBadgeFill className="text-green-500" />
              </p>
              <p className="text-[.85rem] text-gray-500">{item.text}</p>
            </div>
          </div>
        ))}



    </div>
  );
}

export default Items;
