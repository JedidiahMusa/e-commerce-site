import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch, IoMdClose, IoIosClose  } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen(){
    setIsOpen(!isOpen);
  }

  function handleClick() {
    setNav(!nav);
  }
  return (

    <>
         <div className={isOpen? "text-white flex items-center justify-center h-[2rem] bg-black text-[.8rem]": "hidden"}>

        <p className="m-auto"> 
          Sign up and get 20% off your first order.
          <span className="underline hover:cursor-pointer">Sign Up Now</span>
        </p>
        <div className="ml-auto mr-2 ">
        <IoIosClose onClick={handleOpen} className="cursor-pointer " size={23} />
        </div>
      </div>

      <nav className="w-full h-18 flex sticky top-0 z-30 bg-white items-center justify-between ">
   

        <div className="flex items-center ease-in-out duration-500 md:ml-12 md:mr-4 justify-center h-full">
          {/* nav-logo */}
          {!nav ? (
            <GiHamburgerMenu
              size={28}
              onClick={handleClick}
              className="md:hidden ease-in-out duration-500 mx-2 mr-4"
            />
          ) : (
            <IoMdClose  
              size={32}
              onClick={handleClick}
              className="md:hidden mx-2 ease-in-out duration-500 mr-4"
            />
          )}

          <h1 className="font-extrabold font-[Montserrat] text-4xl">SHOP.CO</h1>
        </div>

        <ul className="md:flex md:text-[.75rem] font-semibold w-[20rem] hidden items-center justify-evenly">
          {/* nav-links */}
          <li className="flex items-center h-full justify-between">
            Shop
            <RiArrowDropDownLine size={20} className="hover:cursor-pointer" />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <div className="md:flex hidden flex-1 mx-6 h-full py-4 items-center justify-end">
          {/* nav-search */}
          <button className="bg-gray-100 h-full pl-2 rounded-bl-3xl rounded-tl-3xl hover:cursor-pointer ">
            <IoIosSearch size={27} />
          </button>
          <input
            type="text"
            placeholder="Search for items"
            className="pl-4 placeholder:text-gray-400 h-full w-full bg-gray-100 rounded-br-3xl rounded-tr-3xl"
          />
        </div>

        <div className=" flex items-center mr-6 md:mr-12 gap-4 justify-end">
          {/* nav-icons */}
          <IoIosSearch size={30} className="hover:cursor-pointer md:hidden" />
          <LuShoppingCart size={24} className="hover:cursor-pointer" />
          <CgProfile size={24} className="hover:cursor-pointer" />
        </div>
      </nav>

      <div
        className={
          nav
            ? "flex w-[75%] ease-in-out duration-500 z-50 top-0 right-0 fixed bg-[#000000f6] h-full"
            : "hidden"
        }
      >
        <ul className="flex w-full font-semibold  text-gray-300 text-lg flex-col items-center mt-2">
          {/* nav-links */}
          <li className="p-5 w-full border-b-1 border-[#313131cc]">Shop</li>
          <li className="p-5 w-full border-b-1 border-[#313131cc]">On Sale</li>
          <li className="p-5 w-full border-b-1 border-[#313131cc]">
            New Arrivals
          </li>
          <li className="p-6 w-full border-b-1 border-[#313131cc]">Brands</li>
        </ul>
      </div>
   
    </>
  
     
  );
}

export default Navbar;
