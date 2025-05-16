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
    <div className="relative bg-gray-200 px-[1rem] mt-[6rem] md:px-[3rem] pt-[10rem] md:pt-[7rem] pb-[3rem] lg:pt-[6rem] lg:px-[5rem] lg:pb-[7rem]">

      {/* Newsletter Banner - Overlapping */}
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-full px-[1rem] md:px-[3rem] lg:px-[5rem] z-20">
        <div className="bg-black text-white rounded-3xl p-6 md:py-6 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-xl max-w-7xl mx-auto">
          <p className="text-center md:text-left font-[Montserrat] font-extrabold text-2xl md:text-4xl mb-4 md:mb-0 md:w-[60%]">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="w-full md:w-[35%]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-white w-full rounded-full text-[.9rem] px-6 p-3 placeholder-gray-400 mb-2"
            />
            <button
              className="bg-white text-[.9rem] rounded-full font-semibold text-black p-3 w-full"
              type="submit"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="justify-between lg:flex gap-8">
        <div className="w-full lg:max-w-[30%]">
          <h1 className="font-[Montserrat] font-extrabold text-3xl">SHOP.CO</h1>
          <p className="text-gray-400 my-3 text-[.8rem]">
            We have cloths that suit your style and you're proud to wear. From women to men.
          </p>
          <div className="flex mb-4 gap-2">
            <div className="p-2 border border-gray-300 rounded-full bg-white">
              <FaTwitter size={15} />
            </div>
            <div className="p-2 rounded-full bg-black">
              <FaFacebookF size={15} className="text-white" />
            </div>
            <div className="p-2 border border-gray-300 rounded-full bg-white">
              <FaInstagram size={15} />
            </div>
            <div className="p-2 border border-gray-300 rounded-full bg-white">
              <FaGithub size={15} />
            </div>
          </div>
        </div>

        <div className="grid lg:flex justify-between lg:flex-1 grid-cols-2 grid-rows-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <h2 className="mb-4">COMPANY</h2>
              <p className="text-gray-400 my-1 text-[.8rem]">About</p>
              <p className="text-gray-400 my-1 text-[.8rem]">Features</p>
              <p className="text-gray-400 my-1 text-[.8rem]">Works</p>
              <p className="text-gray-400 my-1 text-[.8rem]">Career</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#afafaf] h-[1.1px] my-8"></div>

      {/* Bottom Row */}
      <div className="lg:flex justify-between items-center">
        <p className="text-[.8rem] text-center mb-4 lg:mb-0 text-gray-400">
          Shop.co©2020–{year}. All Rights Reserved
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="p-1 rounded-lg bg-white">
            <SiVisa size={25} className="text-blue-600 mx-2" />
          </div>
          <div className="p-1 flex overflow-hidden w-[3rem] h-[2.2rem] items-center justify-center rounded-lg bg-white">
            <img src={mastercard} className="object-contain" alt="Mastercard" />
          </div>
          <div className="p-1 flex overflow-hidden w-[3rem] h-[2.2rem] items-center justify-center rounded-lg bg-white">
            <img src={paypal} className="object-contain" alt="Paypal" />
          </div>
          <div className="p-1 rounded-lg bg-white">
            <FaApplePay size={25} className="mx-2" />
          </div>
          <div className="p-1 flex overflow-hidden w-[3rem] h-[2.2rem] items-center justify-center rounded-lg bg-white">
            <img src={googlepay} className="object-contain" alt="Google Pay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
