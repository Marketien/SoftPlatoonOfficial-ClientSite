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
import { IoIosArrowDown } from "react-icons/io";

const ResNavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
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
            lg:py-0
            md:py-0
            sm: py-3
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
                  className="w-[150px]"
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
              lg:flex  lg:justify-between  lg:items-center md:hidden sm: hidden
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
                <Link target="blank" to="https://consultant.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Consultancy</li>
                </Link>
                <Link target="blank" to="https://ecom.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_ECommerce</li>
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
                <Link target="blank" to="https://parkwayhealthcareltd.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Hospital</li>
                </Link>
                <Link target="blank" to="https://consultant.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Consultancy</li>
                </Link>
                <Link target="blank" to="https://ecom.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_ECommerce</li>
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
                Get Proposal
              </a>
            </li>
            <li>
              <a
                className="lg:hidden md:hiden sm: flex md:p-4 py-2 text-white bg-[#501b79] w-[150px] items-center justify-center my-2"
                
              >
                Get Proposal
              </a>
            </li>
          </ul>
            {/* ------------------------------ menu for medium & small  device ----------------------------------------- */}
            {menuOpen ? (
              <div className= "w-full h-screen flex justify-center">
              <ul
            className={`
              text-sm
              ${scrolled ? " text-white" : "text-black "}
              lg:hidden md:block sm: block
               sm: justify-between 
              gap-3  md:leading-[90px] sm: leading-[50px]
              `}
          >
            <li>
              <a
                className="ms-[20px] md:p-4 py-2 block uppercase hover:text-blue-500 "
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
                <Link target="blank" to="https://consultant.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Consultancy</li>
                </Link>
                <Link target="blank" to="https://ecom.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_ECommerce</li>
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
                <Link target="blank" to="https://parkwayhealthcareltd.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Hospital</li>
                </Link>
                <Link target="blank" to="https://consultant.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_Consultancy</li>
                </Link>
                <Link target="blank" to="https://ecom.softplatoon.com/">
                  <li className="hover:text-black hover:bg-white">Demo_ECommerce</li>
                </Link>
                
              </ul>
            </li>

            <li>
              <a
                className="ms-[30px] md:p-4 py-2 block uppercase hover:text-blue-500"
               
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="ms-[30px] md:p-4 py-2 block uppercase hover:text-blue-500"
                
              >
                Event
              </a>
            </li>
            {/* contact option  */}
            <li className="animate-pulse">
              <a
                className={`${scrolled ? " text-white" : "text-black "} md:ms-[20px] sm: ms-[5px] md:p-2  py-2 uppercase 
                 hover:text-black hover:bg-gray-300  underline rounded-sm`}
                href="/userLogin"
              >
                Get Proposal
              </a>
            </li>
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
          className="bounce fixed bottom-5 right-5 
              flex items-center justify-center z-50 rounded-full w-[55px] hover:w-[60px] border-2 bg-green-500 border-border-white  text-white hover:text-gray-300"
        >
          <img className="" src={whatsAppLogo} alt="" />
        </Link>
      </>
    );
};

export default ResNavBar;