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
import { PiArrowFatLineUpFill  } from "react-icons/pi";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsDropDownOpen, setAboutUsDropDownOpen] = useState(false);
  const [ourServiceDropDownOpen, setOurServiceDropDownOpen] = useState(false);
  const [demoDropDownOpen, setDemoDropDownOpen] = useState(false);
  const [webAppSubMenuOpen, setWebAppSubMenuOpen] = useState(false);
  const [softwareSubMenuOpen, setSoftwareSubMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null) ;

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
    // Close all dropdowns on scroll
    setAboutUsDropDownOpen(false);
    setOurServiceDropDownOpen(false);
    setDemoDropDownOpen(false);
    setWebAppSubMenuOpen(false);
    setSoftwareSubMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// ------------------------- handlescrool end  -----------------------------------
  const toggleAboutUsDropDown = () => {
    setAboutUsDropDownOpen(!aboutUsDropDownOpen);
    setOurServiceDropDownOpen(false);
    setDemoDropDownOpen(false);
    setWebAppSubMenuOpen(false);
    setSoftwareSubMenuOpen(false);
  };

  const toggleOurServiceDropDown = () => {
    setOurServiceDropDownOpen(!ourServiceDropDownOpen);
    setAboutUsDropDownOpen(false);
    setDemoDropDownOpen(false);
    setWebAppSubMenuOpen(false);
    setSoftwareSubMenuOpen(false);
  };
  const toggleProductsDropDown = () => {
    setDemoDropDownOpen(!demoDropDownOpen);
    setAboutUsDropDownOpen(false);
    setOurServiceDropDownOpen(false);
    setWebAppSubMenuOpen(false);
    setSoftwareSubMenuOpen(false);
  };

  const toggleWebAppSubMenu = () => {
    setWebAppSubMenuOpen(!webAppSubMenuOpen);
    setSoftwareSubMenuOpen(false);''
  };

  const toggleSoftwareSubMenu = () => {
    setSoftwareSubMenuOpen(!softwareSubMenuOpen);
    setWebAppSubMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 600;
      setScrolled(isScrolled);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Clicked outside of the nav, close all dropdowns
        setMenuOpen(false);
        setAboutUsDropDownOpen(false);
        setOurServiceDropDownOpen(false);
        setDemoDropDownOpen(false);
        setWebAppSubMenuOpen(false);
        setSoftwareSubMenuOpen(false);
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
      w-full sm: hidden md:flex justify-end px-[10px]
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
        lg:top-6
        md:top-6
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
              src={scrolled ? homeLogo :  scrolledLogo}
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
          } w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <ul
            className={`
              text-sm
              ${scrolled ? " text-white" : "text-black "}
              md:flex
              md:justify-between 
              md:items-center
              gap-3
              `}
          >
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-blue-500 "
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={toggleAboutUsDropDown}
                className="md:p-4 py-2 uppercase  hover:text-blue-500 flex items-center relative "
                
              >
                About Us <IoIosArrowDown className="ms-2" />
              </a>
              {/* about us ul li ------- */}
              <ul
                className={`${
                  aboutUsDropDownOpen ? "block" : "hidden"
                }  bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988]
                 text-white shadow-md shadow-gray-500 rounded-sm
                  p-3 leading-10 absolute w-[200px] text-center z-50`}
              >
                <li className="hover:text-black hover:bg-white">Our Steps & guidance</li>
                <li className="hover:text-black hover:bg-white">Our Team</li>
                <li className="hover:text-black hover:bg-white">Photo Gallery</li>
              </ul>
            </li>
            <li>
              <a
                onClick={toggleOurServiceDropDown}
                className="md:p-4 py-2 uppercase hover:text-blue-500 flex items-center relative"
                
              >
                Our Services <IoIosArrowDown className="ms-2" />
              </a>
              {/* OUr Service ul li ------- */}
              <ul className={`${ourServiceDropDownOpen ? "block" : "hidden"} bg-gradient-to-r from-[#5A287F] via-[#84207E] to-[#723988]
               text-white shadow-md shadow-gray-500 rounded-sm
                p-3 leading-10 absolute w-[200px] text-center z-40`}>
                  <li>
                    <a onClick={toggleWebAppSubMenu} className="ps-[55px] flex items-center hover:text-black hover:bg-white">
                      Web App <IoIosArrowDown className="ms-2" />
                    </a>
                    <ul className={`${webAppSubMenuOpen ? "block" : "hidden"} bg-gray-400
                     text-white shadow-md shadow-gray-500 rounded-sm
                      p-3 leading-10 absolute w-[200px] text-center z-30`}>
                    <Link target="blank" to="https://school.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_School </li>
                </Link>
                <Link target="blank" to="https://restaurant.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Restaurant</li>
                </Link>
                <Link target="blank" to="https://parkwayhealthcareltd.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Hospital</li>
                </Link>
                <Link target="blank" to="/">
                  <li className="hover:text-black hover:bg-white">Demo_Consultancy</li>
                </Link>
                <Link target="blank" to="https://movies.slashsofttech.xyz/admin/dashboard">
                  <li className="hover:text-black hover:bg-white">Demo_Movies</li>
                </Link>
                    </ul>
                  </li>
                <li >
                  <a onClick={toggleSoftwareSubMenu} className="ps-[55px] flex items-center hover:text-black hover:bg-white">
                  Software <IoIosArrowDown className="ms-2" />
                  </a>
                  <ul className={`${softwareSubMenuOpen ? "block" : "hidden"} bg-gray-400
                   text-white shadow-md shadow-gray-500 rounded-sm
                    p-3 leading-10 absolute w-[200px] text-center z-30`}>
                  <Link target="blank" to="https://pos.linkshotnerbd.site/home">
                  <li className="hover:text-black hover:bg-white">Demo_POS</li>
                </Link>
                <Link target="blank" to="https://accountant-advance.otsglobal.org/user/activate">
                  <li className="hover:text-black hover:bg-white">Demo_Accounting</li>
                </Link>
                <Link target="blank" to="https://demo.eaccount.xyz/">
                  <li className="hover:text-black hover:bg-white">Demo_EA account</li>
                </Link>
                <Link target="blank" to="https://demo.cloudonex.com/dashboard/">
                  <li className="hover:text-black hover:bg-white">Demo_Account Management/Main</li>
                </Link>
                <Link target="blank" to="https://demo.cloudonex.com/client/dashboard/">
                  <li className="hover:text-black hover:bg-white">Demo_Account Management/User</li>
                </Link>
                <Link target="blank" to="https://erp.cgi.com.bd/dashboard">
                  <li className="hover:text-black hover:bg-white">Demo_ERP</li>
                </Link>
                    </ul>
                  </li>
                <li className="hover:text-black hover:bg-white">Software</li>
                <li className="hover:text-black hover:bg-white">ERP</li>
              </ul>
            </li>

            {/* Products  */}
            <li>
              <a
                onClick={toggleProductsDropDown}
                className="md:p-4 py-2 uppercase hover:text-blue-500 flex items-center relative"
                
              >
                Products <IoIosArrowDown className="ms-2" />
              </a>
              {/* Products ul li ------- */}
              <ul
                className={`${
                  demoDropDownOpen ? "block" : "hidden"
                }  bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988]
                 text-white shadow-md shadow-gray-500 rounded-sm
                  p-3 leading-10 absolute w-[250px] text-center z-40`}
              >
                <Link target="blank" to="https://school.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_School </li>
                </Link>
                <Link target="blank" to="https://restaurant.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Restaurant</li>
                </Link>
                <Link target="blank" to="/">
                  <li className="hover:text-black hover:bg-white">Demo_Hospital</li>
                </Link>
                <Link target="blank" to="https://parkwayhealthcareltd.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Consultancy</li>
                </Link>
                
              </ul>
            </li>

            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-blue-500"
               
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-blue-500"
                
              >
                Event
              </a>
            </li>
            {/* contact option  */}
            <li className="animate-pulse">
              <a
                className="lg:flex md:hidden sm: hidden md:p-2  py-2 uppercase 
                 hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
                href="/userLogin"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="lg:hidden md:hiden sm: flex md:p-4 py-2 text-white bg-[#501b79] w-[80px] items-center justify-center my-2"
                
              >
                Contact
              </a>
            </li>
            {/* contact number  */}
            <li
            style={{ fontFamily: "Open Sans,sans-serif" }}
            className="lg:hidden md:hidden sm: flex gap-5 fixed -ms-[20px] mt-2 z-10 mb-2 w-full bg-[#ffffff] p-2">
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
     {isVisible && (
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
      )}
    </>
  );
};

export default Navbar;
