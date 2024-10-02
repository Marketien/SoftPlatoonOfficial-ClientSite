import { Link } from "react-router-dom";
import homeLogo from "../../../../public/Icons/Untitled-4-02.png";
import scrolledLogo from "../../../../public/Icons/Untitled-4-01.png";
import bangladesh from "../../../../public/Icons/Bangladesh.jpg";
import { useEffect, useRef, useState } from "react";
import { CgMail } from "react-icons/cg";
// import { PiArrowFatLineUpFill } from "react-icons/pi";
import whatsAppLogo from "../../../../public/Icons/whatsapp.png";

const NewNavbar = () => {
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
      <div>
        {/* contact info  */}
        <div
          style={{ fontFamily: "Open Sans,sans-serif" }}
          className={`
      w-full sm: hidden md:flex justify-end px-[20px] py-4
     gap-5  top-0
      fixed z-10  mb-2
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
        lg:py-0
        md:py-0
        sm: py-3
        px-4
        text-lg
        text-gray-700
        shadow-lg
        shadow-gray-800
        fixed
        lg:top-[50px]
        md:top-[55px]
        sm: top-0
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
                className="w-[150px]"
                src={scrolled ? homeLogo : scrolledLogo}
                alt=""
              />
            </Link>
          </div>

          {/* menu button  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            onClick={toggleMenu}
            className={`h-6 w-6 cursor-pointer lg:hidden md:block sm: block ${
              scrolled ? "text-white " : " text-black"
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
            ref={navRef}
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
            id="menu"
          >
            <ul
              className={`
              text-sm
              ${scrolled ? " text-white" : "text-black "}
              lg:flex
              lg:justify-between 
              lg:items-center
              gap-3
              `}
            >
              <li>
                <Link to="/" className="md:p-4 py-2 block uppercase hover:text-purple-500 ">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/" className="md:p-4 py-2 uppercase  hover:text-purple-500 flex items-center relative ">
                  Industries
                </Link>
              </li>

              <li>
                <Link to="/" className="md:p-4 py-2 block uppercase hover:text-purple-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="md:p-4 py-2 block uppercase hover:text-purple-500">
                  Contact
                </Link>
              </li>
              {/* contact option  */}
              <li className="animate-pulse">
                <Link to="/" className="lg:flex md:hidden sm: hidden md:p-2  py-2 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
                >
                     Get Proposal
                </Link>
              </li>
              <li>
                <Link className="lg:hidden md:hiden sm: flex md:p-4 py-2 text-white bg-[#501b79] w-[150px] items-center justify-center my-2">
                  Get Proposal
                </Link>
              </li>
              {/* contact number  */}
              <li
                style={{ fontFamily: "Open Sans,sans-serif" }}
                className="lg:hidden md:hidden sm: flex gap-5 fixed -ms-[20px] mt-2 z-10 mb-2 w-full bg-[#ffffff] p-2"
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
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* go top button  */}
      {/* {isVisible && (
        <div
          onClick={scrollToTop}
          title="slide button"
          className="fixed bottom-4 right-4 
        flex items-center justify-center
        shadow-lg shadow-purple-900 z-50
         rounded-full w-[40px] h-[40px] border-2 bg-purple-900 border-border-white  text-white hover:text-gray-300"
        >
          <PiArrowFatLineUpFill size={30} />
        </div>
      )} */}
        <Link to=""
        className="fixed bottom-5 right-5 
          flex items-center justify-center
          shadow-lg shadow-green-500 z-50
           rounded-full w-[60px] border-2 bg-green-500 border-border-white  text-white hover:text-gray-300">
            <img className="" src={whatsAppLogo} alt="" />
            </Link>
    </>
  );
};

export default NewNavbar;
