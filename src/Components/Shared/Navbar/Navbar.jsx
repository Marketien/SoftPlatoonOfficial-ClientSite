import { Link } from "react-router-dom";
// import '../../Pages/Home/Nav.js'
import homeLogo from "../../../../public/Icons/Main Logo White-01.png";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsDropDownOpen, setAboutUsDropDownOpen] = useState(false);
  const [ourServiceDropDownOpen, setOurServiceDropDownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
//   const toggledropDown = () => {
//     setAboutUsDropDownOpen(!AboutUsDropDownOpen);
//   };

//  about us handle dropdown ----------------
const handleAboutUsMouseEnter = () => {
    setAboutUsDropDownOpen(true);
  };

  const handleAboutUsMouseLeave = () => {
    setAboutUsDropDownOpen(false);
  };
//   our service handle dropdown ----------------
const handleourServiceMouseEnter = () => {
    setOurServiceDropDownOpen(true);
  };

  const handleourServiceMouseLeave = () => {
    setOurServiceDropDownOpen(false);
  };

  return (
    <div>
      <nav
        className="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-3
        px-4
        text-lg
        text-gray-700
        shadow-lg
        shadow-gray-800
        fixed
        z-10
        top-0
        backdrop-blur-md
        "
      >
        <div>
          <Link to="/">
            <img className="w-[100px]" src={homeLogo} alt="" />
          </Link>
        </div>

{/* menu button  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          onClick={toggleMenu}
          className="h-6 w-6 cursor-pointer md:hidden block text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <ul
            className="
              text-sm text-white
              md:flex
              md:justify-between 
              md:items-center
              gap-3"
          >
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6] "
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                // onClick={toggledropDown}
                onMouseEnter={handleAboutUsMouseEnter}
                onMouseLeave={handleAboutUsMouseLeave}
                className="md:p-4 py-2 uppercase  hover:text-[#539ce6] flex items-center relative "
                href="#"
              >
                About Us <IoIosArrowDown className="ms-2" />
              </a>
              {/* about us ul li ------- */}
              <ul
              onMouseEnter={handleAboutUsMouseEnter}
              onMouseLeave={handleAboutUsMouseLeave}
                className={`${
                aboutUsDropDownOpen ? "block" : "hidden"
                } bg-white text-[#3C0753] p-3 leading-10 absolute w-[200px] text-center z-50`}
              >
                <li className="hover:text-[#539ce6]">Our Steps & guidance</li>
                <li className="hover:text-[#539ce6]">Our Team</li>
                <li className="hover:text-[#539ce6]">Photo Gallery</li>
              </ul>
            </li>
            <li>
              <a
               onMouseEnter={handleourServiceMouseEnter}
               onMouseLeave={handleourServiceMouseLeave}
                className="md:p-4 py-2 uppercase hover:text-[#539ce6] flex items-center relative"
                href="#"
              >
                Our Services <IoIosArrowDown className="ms-2" />
              </a>
               {/* OUr Service ul li ------- */}
               <ul
              onMouseEnter={handleourServiceMouseEnter}
              onMouseLeave={handleourServiceMouseLeave}
                className={`${
                    ourServiceDropDownOpen ? "block" : "hidden"
                } bg-white text-[#3C0753] p-3 leading-10 absolute w-[200px] text-center z-40`}
              >
                <li className="hover:text-[#539ce6]">Student Visa </li>
                <li className="hover:text-[#539ce6]">E-Ticketing</li>
                <li className="hover:text-[#539ce6]">Visit Visa</li>
              </ul>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6]"
                href="#"
              >
                Successful Applicants
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6]"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6]"
                href="#"
              >
                Event
              </a>
            </li>
            {/* contact option  */}
            <li className="animate-pulse">
              <a
                className="lg:flex md:hidden sm: hidden md:p-2 py-2  uppercase 
                 hover:text-black hover:bg-gray-300 text-white bg-[#910a668c] rounded-full"
                href="#"
              >
                Contact
              </a>
            </li>
            {/* sign up option */}
            <li className="animate-pulse">
              <a
                className="lg:flex md:hidden sm: hidden md:p-2  py-2 uppercase 
                 hover:text-black hover:bg-gray-300 text-white bg-[#910a668c] rounded-lg"
                href="/userLogin"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a className="lg:hidden md:flex sm: flex md:p-4 py-2  hover:text-[#539ce6] text-purple-500"
                href="#"> Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
