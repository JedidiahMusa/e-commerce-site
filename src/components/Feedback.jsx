import React, { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Feedback() {
  const sliderRef = useRef();
  const [ratings] = useState(5);
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // hide built-in arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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
    {
      name: "Kyle S.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-20 py-10 ">
      {/* Header and arrows */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-[Montserrat] font-extrabold text-3xl md:text-4xl">
          OUR HAPPY CUSTOMERS
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-2 group"
          >
            <FaArrowLeft className="group-hover:scale-125 " size={22} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2 group "
          >
            <FaArrowRight className="group-hover:scale-125 " size={22} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
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
      </Slider>
    </div>
  );
}

export default Feedback;
