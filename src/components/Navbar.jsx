import React, { useState, useEffect, useRef } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const navRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  function handleClickOutside(e) {
    if (nav && navRef.current && !navRef.current.contains(e.target)) {
      setNav(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [nav]);


  return (
    <div className=" top-0 sticky z-50 h-20 flex items-center justify-center">
      <nav
      ref={navRef}
        className={
          nav
            ? `w-[90%] flex-col h-17 flex z-30 items-center border border-gray-200 justify-between md:rounded-full rounded-tr-3xl rounded-tl-3xl ${
                isTop ? "w-full  h-20" : "bg-white shadow-lg"
              }`
            : `w-[90%] rounded-full h-17 flex z-30 border border-gray-200 ${
                isTop ? "w-full h-20 border-b-1 border-0 bg-white rounded-none" : "bg-white shadow-lg"
              }`
        }
      >
        <div className="w-full px-2 gap- md:gap-0 flex justify-between items-center ">
          <div className="flex items-center gap-4 transition ease-in-out duration-500 md:ml-12 md:mr-4 justify-center h-full">
            {/* nav-logo */}
            <div className="md:hidden">
              <Hamburger toggled={nav} toggle={setNav} />
            </div>

            <h1 className="font-extrabold font-[Montserrat] text-4xl">
              SHOP.CO
            </h1>
          </div>

          <ul className="md:flex md:text-[.75rem] gap-2 font-semibold w-[20rem] hidden items-center justify-evenly">
            {/* nav-links */}
            <Link to="home" smooth={true} duration={500} offset={-70}>
              Home
            </Link>
            <Link
              to="cards"
              smooth={true}
              duration={500}
              offset={-70}
              className="flex items-center h-full justify-between"
            >
              Shop
              <RiArrowDropDownLine size={20} className="hover:cursor-pointer" />
            </Link>
            <Link to="cards" smooth={true} duration={500} offset={-70}>
              On Sale
            </Link>
            <Link to="browse" smooth={true} duration={500} offset={-70}>
              Browse
            </Link>
            <Link  to="feedback" smooth={true} duration={500} offset={-70}>
              Feedbacks
            </Link>
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
        </div>

        <div className={nav ? "w-full md:hidden" : "hidden"}>
          <div className="flex sticky top-0 border-b-2 border-[#bababacc] bg-white w-full rounded-3xl ">
            <ul className="flex w-full font-semibold  text-black text-lg flex-col items-center mt-2">
              {/* nav-links */}
              <RouteLink
                className="p-5 w-full border-b-2  border-[#ddddddcc]"
                to={"/"}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => (setNav(false))}
              >
                Home
              </RouteLink>
              <Link
                to="cards"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
                offset={-70}
                className="p-5 w-full flex items-center gap-2 border-b-2  border-[#ddddddcc]"
              >
                Shop
                <RiArrowDropDownLine
                  size={30}
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link
                className="p-5 w-full border-b-2  border-[#ddddddcc]"
                to="cards"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
                offset={-70}
              >
                On Sale
              </Link>
              <Link
                className="p-5 w-full border-b-2  border-[#ddddddcc]"
                to="browse"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
                offset={-70}
              >
                Browse
              </Link>
              <Link
                className="p-5 w-full "
                to="feedback"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
                offset={-70}
              >
                Feedbacks
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
