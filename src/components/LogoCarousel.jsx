import React from "react";
import Marquee from "react-fast-marquee";
import calvin from "../assets/calvin.svg";
import gucci from "../assets/gucci.svg";
import zara from "../assets/zara.png";
import prada from "../assets/prada.svg";
import versace from "../assets/versace.svg";

function LogoCarousel() {
  return (
    
      <Marquee className="bg-black h-[5rem] flex items-center overflow-y-hidden w-full " gradient={false} pauseOnHover={true} speed={50}>

      <img src={calvin} alt="" className=" object-contain bg-black" />
      <img src={gucci} alt="" className=" object-contain bg-black" />
      <img src={zara} alt="" className=" object-contain bg-black" />
      <img src={prada} alt="" className=" object-contain bg-black" />
      <img src={versace} alt="" className=" object-contain bg-black" />

      </Marquee>

  );
}

export default LogoCarousel;
