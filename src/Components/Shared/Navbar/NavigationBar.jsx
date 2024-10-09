import './Navbar.css'
import { Link } from "react-router-dom";
import homeLogo from "../../../../public/Icons/Untitled-4-02.png";
import scrolledLogo from "../../../../public/Icons/Untitled-4-01.png";
import bangladesh from "../../../../public/Icons/Bangladesh.jpg";
import { useEffect, useRef, useState } from "react";
import { CgMail } from "react-icons/cg";
// import { PiArrowFatLineUpFill } from "react-icons/pi";
import whatsAppLogo from "../../../../public/Icons/whatsapp.png";
import { CiMenuFries } from "react-icons/ci";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ------------------------- handlescrool start -----------------------------------
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
      setMenuOpen(false) ;

    } else {
      setIsVisible(false);
    }
    if (window.scrollY > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // ------------------------- handlescrool end  -----------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 600;
      setScrolled(isScrolled);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Clicked outside of the nav, close all dropdowns
        setMenuOpen(false);
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
    <>
      <div className='sm: -ms-[10px] '>
        {/* contact info  */}
        <div
          style={{ fontFamily: "Open Sans,sans-serif" }}
          className={` w-full flex md:justify-end sm: justify-center lg:px-[20px] md:pe-3 sm: text-xs py-4 gap-5 top-0 fixed z-10  mb-2
        ${scrolled ? "text-white" : "text-black"}
        ${
          scrolled
            ? "bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988]"
            : "bg-white"
        }
        `}
        >
          <p className="flex items-center">
            <span className="me-1">
              <CgMail size={20} />
            </span>{" "}
            <span>sales@softplatoon.com</span>
          </p>
          <p className="flex items-center">
            <span className="me-1">
              <img className="w-[20px]" src={bangladesh} alt="" />
            </span>
            <span>+8801333836300</span>
          </p>
        </div>
        {/* navbar section  */}
        <nav 
        className={`
          flex flex-wrap
          items-center
          justify-between
          w-full
          sm: py-2
          px-4
          text-lg
          text-gray-700
          shadow-md
          shadow-gray-800
          fixed
          top-[50px]
          z-10
         ${
           scrolled
             ? "bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988]"
             : "bg-white"
         }
          `}
        >
          <div>
            <Link to="/">
              <img
                className="md:w-[150px] sm: w-[100px]"
                src={scrolled ? homeLogo : scrolledLogo}
                alt=""
              />
            </Link>
          </div>
          {/* ------------------------------- Menu button ---------------------------------- */}
          <div className="lg:hidden md:block sm: block">
            <button onClick={toggleMenu}>
              <CiMenuFries className={`${scrolled ? " text-white" : "text-black "}`} />
            </button>
          </div>
          {/* ------------------------------ menu for large device ----------------------------------------- */}
          <ul
            className={`
                text-sm
                ${scrolled ? " text-white" : "text-black "}
                lg:flex
                lg:justify-between 
                lg:items-center
                md:hidden
                sm: hidden
                gap-3
                `}
          >
            <li>
              <Link
                to="/ourServices"
                className="md:p-4 py-2 block uppercase hover:text-purple-500 "
              >
                Our Services
              </Link>
            </li>
            <li>
              <a
                href="#industries"
                className="md:p-4 py-2 uppercase  hover:text-purple-500 flex items-center relative "
              >
                Industries
              </a>
            </li>

            <li>
              <Link
                to="/aboutUs"
                className="md:p-4 py-2 block uppercase hover:text-purple-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="md:p-4 py-2 block uppercase hover:text-purple-500"
              >
                Contact
              </a>
            </li>
            {/* contact option  */}
            <li className="animate-pulse">
              <Link
                to="/getProposal"
                className="flex px-2 py-2 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
              >
                Get Proposal
              </Link>
            </li>
          </ul>
          {/* ------------------------------ menu for medium & small  device ----------------------------------------- */}
          {menuOpen ? (
            <div className= "w-full h-screen flex justify-center">
            <ul className={` ${scrolled ? " text-white" : "text-black "} text-sm text-black text-center gap-3 leading-[70px] uppercase} `}>
              <li>
                <Link
                  to="/ourServices"
                  className=" hover:text-purple-500 "
                >
                  Our Services
                </Link>
              </li>
              <li>
                <a
                  href="#industries"
                  className="r:text-purple-500 "
                >
                  Industries
                </a>
              </li>

              <li>
                <Link
                  to="/aboutUs"
                  className=" hover:text-purple-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                 href="#contact"
                  className=" hover:text-purple-500"
                >
                  Contact
                </a>
              </li>
              {/* contact option  */}
              <li className="animate-pulse">
                <Link
                  to="/"
                  className=" text-white px-5 py-2 hover:text-purple-500 bg-purple-900"
                >
                  Get Proposal
                </Link>
              </li>
              {/* contact number  */}
              {/* <li
                style={{ fontFamily: "Open Sans,sans-serif" }}
                className="flex justify-center gap-5 fixed mt-2 z-10 mb-2 w-full bg-[#ffffff] p-2"
              >
                <p className="flex items-center ">
                  <span className="">
                    <CgMail size={20} />
                  </span>{" "}
                  <span>sales@softplatoon.com</span>
                </p>
                <p className="flex items-center">
                  <span className="">
                    <img className="w-[20px]" src={bangladesh} alt="" />
                  </span>
                  <span>+8801333836300</span>
                </p>
              </li> */}
            </ul>
            </div>
          ) : (
            <></>
          )}
        </nav>
      </div>

      {/* Whats AppLogo section  */}
      <Link
        to=""
        className=" bounce fixed bottom-5 right-5 
            flex items-center justify-center z-50 rounded-full w-[55px] hover:w-[60px] border-2 bg-green-500 border-border-white  text-white hover:text-gray-300"
      >
        <img className="" src={whatsAppLogo} alt="" />
      </Link>
    </>
  );
};

export default NavigationBar;
