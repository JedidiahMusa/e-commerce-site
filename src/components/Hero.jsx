import React from "react";
import image from "../assets/image.png";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import calvin from "../assets/calvin.svg";
import gucci from "../assets/gucci.svg";
import zara from "../assets/zara.png";
import prada from "../assets/prada.svg";
import versace from "../assets/versace.svg";

function Hero() {
  return (
    <div className="w-full lg:max-h-screen ">
      
      <div className="bg-gray-100 overflow-x-hidden md:grid grid-cols-2 w-full">
      <div className="w-full flex flex-col items-center h-full md:items-start md:col-span-1">
        <div className="text-7xl font-[Anton] xl:mt-8 mx-4 pt-6">
           <h1>
          FIND CLOTHES
        </h1>
        <h1>
          THAT MATCHES
        </h1>
        <h1>
          YOUR STYLE
        </h1>
        </div>
       
        <p className="mx-4 pt-4">
          Browse through our diverse range of metriculously crafted germents,
          designed to bring out your individuality and cater to your sense of
          style
        </p>
        <button className="flex w-[95%] p-4 items-center justify-center md:ml-4 md:w-[15rem] h-[3.5rem] my-6 rounded-4xl bg-black text-white ">
          Shop Now
        </button>
        <div className="grid grid-cols-2 md:text-[.7rem] lg:text-[.9rem] gap-y-4 md:ml-4 md:grid-cols-3 md:gap-4 grid-rows-2 w-[95%]">

          <div className="flex w-full border-r-1 border-gray-500 flex-col col-span-1 items-center justify-center">
            <CountUp
              end={200}
              duration={3}
              suffix="+"
              delay={1}
              className="text-3xl flex justify-center font-semibold "
            />
            <p>International Brands</p>
          </div>

          <div className="flex flex-col w-full md:border-r-1 md:border-gray-500 items-center md:col-span-1 justify-center">
            <CountUp
              end={2000}
              duration={5}
              delay={1}
              suffix="+"
              className="text-3xl w-full flex justify-center md:col-span-1 font-semibold "
            />
            <p>High-Quality Products</p>
          </div>

          <div className="flex w-full flex-col col-span-2 md:col-span-1 items-center justify-center">
            <CountUp
              end={30000}
              duration={9}
              delay={1}
              suffix="+"
              className="text-3xl flex justify-center  font-semibold "
            />
            <p>Happy customers</p>
          </div>
        </div>
        <div className="my-4 flex justify-center w-full "></div>
      </div>

      <div className="w-full h-full flex justify-center">
        <img src={image} alt="" className="object-cover " />
      </div>
      
       
      
      
    </div>
    <Marquee className="bg-black h-[5rem] flex items-center overflow-y-hidden w-full " gradient={false} pauseOnHover={true} speed={50}>

      <img src={calvin} alt="" className=" object-cover mx-2 md:mx-4 bg-black" />
      <img src={gucci} alt="" className=" object-cover mx-2 md:mx-4 bg-black" />
      <img src={zara} alt="" className=" object-cover mx-2 md:mx-4 bg-black" />
      <img src={prada} alt="" className=" object-cover mx-2 md:mx-4 bg-black" />
      <img src={versace} alt="" className=" object-cover mx-2 md:mx-4 bg-black" />

      </Marquee>
    </div>
     
   
  );
}

export default Hero;
