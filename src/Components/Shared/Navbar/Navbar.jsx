import { Link } from "react-router-dom";
// import '../../Pages/Home/Nav.js'
// import homeLogo from "../../../../public/Icons/Main Logo White-01.png";
// import scrolledLogo from "../../../../public/Icons/Main Logo-01.png";
import homeLogo from "../../../../public/Icons/Untitled-4-02.png";
import scrolledLogo from "../../../../public/Icons/Untitled-4-01.png";
import bangladesh from "../../../../public/Icons/Bangladesh.jpg";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsDropDownOpen, setAboutUsDropDownOpen] = useState(false);
  const [ourServiceDropDownOpen, setOurServiceDropDownOpen] = useState(false);
  const [demoDropDownOpen, setDemoDropDownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null) ;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutUsDropDown = () => {
    setAboutUsDropDownOpen(!aboutUsDropDownOpen);
    setOurServiceDropDownOpen(false);
    setDemoDropDownOpen(false);
  };

  const toggleOurServiceDropDown = () => {
    setOurServiceDropDownOpen(!ourServiceDropDownOpen);
    setAboutUsDropDownOpen(false);
    setDemoDropDownOpen(false);
  };
  const toggleDemoDropDown = () => {
    setDemoDropDownOpen(!demoDropDownOpen);
    setAboutUsDropDownOpen(false);
    setOurServiceDropDownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Clicked outside of the nav, close all dropdowns
        setMenuOpen(false);
        setAboutUsDropDownOpen(false);
        setOurServiceDropDownOpen(false);
        setDemoDropDownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* contact info  */}
      <div
        className={`
      w-full sm: hidden md:flex justify-end px-[10px]
     gap-5  top-0
      fixed z-10  mb-2
      ${scrolled ? " text-black" : "text-white"}
      ${
        scrolled
          ? " bg-white"
          : "bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988]"
      }
      `}
      >
        <p className="flex items-center">
          <span className="me-1">
            <CgMail size={20} />
          </span>{" "}
          <span>softplatoon@gmail.com</span>
          
        </p>
        <p className="flex items-center">
          <span className="me-1">
            <img className="w-[20px]" src={bangladesh} alt="" />
          </span>
          <span>+1408 785 9959</span>
        </p>
      </div>
      {/* navbar section  */}
      <nav
      ref={navRef}
        className={`
        flex flex-wrap
        items-center
        justify-between
        w-full
        lg:py-0
        md:py-0
        sm: py-3
        px-4
        text-lg
        text-gray-700
        shadow-lg
        shadow-gray-800
        fixed
        lg:top-6
        md:top-6
        sm: top-0
        z-10
       ${
         scrolled
           ? " bg-white"
           : "bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988]"
       }
        `}
      >
        <div>
          <Link to="/">
            <img
              className="w-[150px]"
              src={scrolled ? scrolledLogo : homeLogo}
              alt=""
            />
          </Link>
        </div>

        {/* menu button  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          onClick={toggleMenu}
          className={`h-6 w-6 cursor-pointer md:hidden block ${
            scrolled ? " text-black" : "text-white"
          }`}
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
            className={`
              text-sm
              ${scrolled ? " text-black" : "text-white"}
              md:flex
              md:justify-between 
              md:items-center
              gap-3
              `}
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
                onClick={toggleAboutUsDropDown}
                className="md:p-4 py-2 uppercase  hover:text-[#539ce6] flex items-center relative "
                
              >
                About Us <IoIosArrowDown className="ms-2" />
              </a>
              {/* about us ul li ------- */}
              <ul
                className={`${
                  aboutUsDropDownOpen ? "block" : "hidden"
                }  bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] text-white p-3 leading-10 absolute w-[200px] text-center z-50`}
              >
                <li className="hover:text-[#539ce6]">Our Steps & guidance</li>
                <li className="hover:text-[#539ce6]">Our Team</li>
                <li className="hover:text-[#539ce6]">Photo Gallery</li>
              </ul>
            </li>
            <li>
              <a
                onClick={toggleOurServiceDropDown}
                className="md:p-4 py-2 uppercase hover:text-[#539ce6] flex items-center relative"
                
              >
                Our Services <IoIosArrowDown className="ms-2" />
              </a>
              {/* OUr Service ul li ------- */}
              <ul
                className={`${
                  ourServiceDropDownOpen ? "block" : "hidden"
                }  bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] text-white p-3 leading-10 absolute w-[200px] text-center z-40`}
              >
                <li className="hover:text-[#539ce6]">Student Visa </li>
                <li className="hover:text-[#539ce6]">E-Ticketing</li>
                <li className="hover:text-[#539ce6]">Visit Visa</li>
              </ul>
            </li>

            {/* Demo  */}
            <li>
              <a
                onClick={toggleDemoDropDown}
                className="md:p-4 py-2 uppercase hover:text-[#539ce6] flex items-center relative"
                
              >
                Demo <IoIosArrowDown className="ms-2" />
              </a>
              {/* Demo ul li ------- */}
              <ul
                className={`${
                  demoDropDownOpen ? "block" : "hidden"
                }  bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] text-white p-3 leading-10 absolute w-[200px] text-center z-40`}
              >
                <a target="blank" href="https://school.softplatoon.com/">
                  <li className="hover:text-[#539ce6]">School Management </li>
                </a>
                <a target="blank" href="https://restaurant.softplatoon.com/">
                  <li className="hover:text-[#539ce6]">Restaurant </li>
                </a>
              </ul>
            </li>

            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6]"
               
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6]"
                
              >
                Event
              </a>
            </li>
            {/* contact option  */}
            <li className="animate-pulse">
              <a
                className="lg:flex md:hidden sm: hidden md:p-2  py-2 uppercase 
                 hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-lg"
                href="/userLogin"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="lg:hidden md:hiden sm: flex md:p-4 py-2 text-white bg-[#095868] w-[80px] items-center justify-center"
                
              >
                Contact
              </a>
            </li>
            {/* contact number  */}
            <li className="lg:hidden md:hidden sm: flex gap-5 fixed -ms-[15px] mt-2 z-10 mb-2 w-full bg-[#910a668c] p-2">
              <p className="flex items-center">
                <span className="me-1">
                  <CgMail size={20} />
                </span>{" "}
                <span>gmail@gmail.com</span>
              </p>
              <p className="flex items-center">
                <span className="me-1">
                  <img className="w-[20px]" src={bangladesh} alt="" />
                </span>
                <span>+1 214 306 68 37</span>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
