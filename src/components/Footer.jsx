import React from "react";
import {
  FaTwitter,
  FaApplePay,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import googlepay from "../assets/googlepay.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-200 px-[1rem] md:px-[3rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] relative">
      <div className="justify-between lg:flex gap-8">
        {/* black div 
      <div className='w-full px-[1rem] absolute -top-0 h-fit md:px-[3rem] lg:px-[5rem]'>
         <div className=' w-full text-white items-center rounded-3xl p-8 md:flex bg-black '>
        <p className='w-full md:w-[60%] font-[Anton]  text-4xl flex justify-center '>STAY UP TO DATE ABOUT OUR LATEST OFFERS</p>
        <div>
          <input type="text" placeholder='Enter your email address' className='bg-white w-full rounded-full mt-4 p-3 placeholder-gray-400 ' />
          <button className='bg-white my-4 rounded-full font-semibold text-black p-3 w-full ' type='submit'>Subscribe to Newsletter</button>
        </div>
      </div>
      </div>

       
      */}
        <div className="w-full lg:max-w-[30%] ">
          <h1 className="font-[Montserrat] font-extrabold text-3xl ">
            SHOP.CO
          </h1>
          <p className="text-gray-400 my-3 text-[.8rem] ">
            We have cloths that suits your style and which you're proud to wear.
            From women to men.
          </p>
          <div className="flex mb-4 gap-2">
            <div className="p-2 border-1 rounded-full border-gray-300 bg-white ">
              <FaTwitter size={15} />
            </div>
            <div className="p-2 border-1 rounded-full bg-black ">
              <FaFacebookF size={15} className="text-white" />
            </div>
            <div className="p-2 border-1 rounded-full bg-white border-gray-300 ">
              <FaInstagram size={15} />
            </div>
            <div className="p-2 border-1 rounded-full bg-white border-gray-300 ">
              <FaGithub size={15} />
            </div>
          </div>
        </div>

        <div className="grid lg:flex justify-between lg:flex-1 grid-cols-2 grid-rows-2 gap-4">
          <div>
            <h2 className="mb-4">COMPANY</h2>
            <p className="text-gray-400 my-1 text-[.8rem]">About</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Features</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Works</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Career</p>
          </div>
          <div>
            <h2 className="mb-4">COMPANY</h2>
            <p className="text-gray-400 my-1 text-[.8rem]">About</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Features</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Works</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Career</p>
          </div>
          <div>
            <h2 className="mb-4">COMPANY</h2>
            <p className="text-gray-400 my-1 text-[.8rem]">About</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Features</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Works</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Career</p>
          </div>
          <div>
            <h2 className="mb-4">COMPANY</h2>
            <p className="text-gray-400 my-1 text-[.8rem]">About</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Features</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Works</p>
            <p className="text-gray-400 my-1 text-[.8rem]">Career</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#afafaf] h-[1.1px] my-8 "></div>

      <div className="lg:flex justify-between  items-center ">
        <p className="text-[.8rem] text-center mb-4 lg:mb-0 text-gray-400 ">
          Shop.co©2020-{year}.All Rights Reserved
        </p>

        <div className="flex items-center justify-center gap-4 ">
          <div className="p-1 rounded-lg w-fit bg-white ">
            <SiVisa size={25} className="text-blue-600 mx-2" />
          </div>
          <div className="p-1 flex overflow-hidden w-[3rem] h-[2.2rem] items-center justify-center rounded-lg bg-white ">
            <img src={mastercard} className="object-fit  " alt="" />
          </div>
          <div className="p-1 flex overflow-hidden w-[3rem] h-[2.2rem] items-center justify-center rounded-lg bg-white ">
            <img src={paypal} className="object-fit  " alt="" />
          </div>

          <div className="p-1 rounded-lg w-fit bg-white ">
            <FaApplePay size={25} className="mx-2" />
          </div>
          <div className="p-1 flex overflow-hidden w-[3rem] h-[2.2rem] items-center justify-center rounded-lg bg-white ">
            <img src={googlepay} className="object-fit  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
