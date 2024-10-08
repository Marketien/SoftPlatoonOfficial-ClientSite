import icon1 from "../../../../public/OurServices/provideIcons/webApp.png";
import icon2 from "../../../../public/OurServices/provideIcons/software.png";
import icon3 from "../../../../public/OurServices/provideIcons/erp.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// const serviceData = [
//   {
//     icon: icon1,
//     title: "web apps",
//     disc: "In our portfolio of 230+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation.",
//   },
//   {
//     icon: icon2,
//     title: "software",
//     disc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.",
//   },
//   {
//     icon: icon3,
//     title: "ERP",
//     disc: "4 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes.",
//   },
// ];


const OSProvide = () => {

    const [openWebApp, setOpenWebApp] = useState(false);
    const [openSoftware, setOpenSoftware] = useState(false);
    const [openErp, setOpenErp] = useState(false);

const handleScroll =() =>{
  if(window.scrollY > 100){
    setOpenWebApp(false);
    setOpenSoftware(false);
      setOpenErp(false);
  }
}

    const toggleWebApp = () => {
      setOpenWebApp(!openWebApp);
      setOpenSoftware(false);
      setOpenErp(false);
    };
    const toggleSoftware = () => {
      setOpenSoftware(!openSoftware);
      setOpenWebApp(false);
      setOpenErp(false);
  };
  const toggleErp = () => {
      setOpenErp(!openErp);
      setOpenWebApp(false);
      setOpenSoftware(false);
    };

useEffect(()=> {
window.addEventListener("scroll", handleScroll);
return() => window.removeEventListener("scroll", handleScroll) ;
},[])


    return (
        <div className="mt-10">
        <h1
          style={{ fontFamily: "Sumana, serif" }}
          className="font-bold text-5xl mb-2"
        >
          Services we <span className="text-purple-800">Provide</span>
        </h1>
        <p
          style={{ fontFamily: "Ubuntu,sans-serif" }}
          className="text-lg my-5"
        >
          Web development services help create all types of web-based software
          and ensure great experience for web users. <br /> Different types of
          web solutions may seem similar from the outside, but we approach
          them differently <br /> and know what factors are winning in each
          case.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-8 mt-10">
          {/* ---------------------  web App section --------------------- */}
          <div className=" bg-gray-100 p-8 shadow-md hover:shadow-lg rounded-sm">
            <div className="flex justify-center">
              <img className="w-[80px]" src={icon1} alt="" />
            </div>
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="flex justify-center items-center text-center text-xl uppercase my-5"
            >
              <li className="list-none">
                <a
                  onClick={toggleWebApp}
                  className="  flex items-center hover:text-purple-700"
                >
                  web apps <IoIosArrowDown className="ms-2" />
                </a>
                <ul
                  className={`${openWebApp ? "block" : "hidden"} bg-gray-400
                   text-white text-sm shadow-md shadow-gray-500 rounded-sm
                    p-3 leading-10 absolute w-[200px] text-center z-30`}
                >
                  <Link target="blank" to="https://school.softplatoon.com/">
                    <li className="hover:text-black hover:bg-white">
                      Demo_School{" "}
                    </li>
                  </Link>
                  <Link
                    target="blank"
                    to="https://restaurant.softplatoon.com/"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_Restaurant
                    </li>
                  </Link>
                  <Link target="blank" to="https://parkwayhealthcareltd.com/">
                    <li className="hover:text-black hover:bg-white">
                      Demo_Hospital
                    </li>
                  </Link>
                  <Link
                    target="blank"
                    to="https://consultant.softplatoon.com/"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_Consultancy
                    </li>
                  </Link>
                  <Link target="blank" to="https://ecom.softplatoon.com/">
                    <li className="hover:text-black hover:bg-white">
                      Demo_ECommerce
                    </li>
                  </Link>
                  <Link
                    target="blank"
                    to="https://movies.slashsofttech.xyz/admin/dashboard"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_Movies
                    </li>
                  </Link>
                </ul>
              </li>
            </h1>
            <p className="text-start text-lg">
              In our portfolio of 230+ created web apps, you will find
              solutions for efficient management of different business
              activities. We apply smart automation to streamline workflows
              and integrate corporate apps together for coherent operation.
            </p>
          </div>
          {/* ---------------------  software section ---------------------  */}
          <div className=" bg-gray-100 p-8 shadow-md hover:shadow-lg rounded-sm">
            <div className="flex justify-center">
              <img className="w-[80px]" src={icon2} alt="" />
            </div>
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="flex justify-center items-center text-center text-xl uppercase my-5"
            >
              <li className="list-none">
                <a
                  onClick={toggleSoftware}
                  className=" flex items-center hover:text-purple-700 "
                >
                  Software <IoIosArrowDown className="ms-2" />
                </a>
                <ul
                  className={`${openSoftware ? "block" : "hidden"} bg-gray-400
                 text-white text-sm shadow-md shadow-gray-500 rounded-sm
                  p-3 leading-10 absolute w-[200px] text-center z-30`}
                >
                  <Link
                    target="blank"
                    to="https://pos.linkshotnerbd.site/home"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_POS
                    </li>
                  </Link>
                  <Link
                    target="blank"
                    to="https://accountant-advance.otsglobal.org/user/activate"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_Accounting
                    </li>
                  </Link>
                  <Link target="blank" to="https://demo.eaccount.xyz/">
                    <li className="hover:text-black hover:bg-white">
                      Demo_EA account
                    </li>
                  </Link>
                  <Link
                    target="blank"
                    to="https://demo.cloudonex.com/dashboard/"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_Account Management/Main
                    </li>
                  </Link>
                  <Link
                    target="blank"
                    to="https://demo.cloudonex.com/client/dashboard/"
                  >
                    <li className="hover:text-black hover:bg-white">
                      Demo_Account Management/User
                    </li>
                  </Link>
                </ul>
              </li>
            </h1>
            <p className="text-start text-lg">
              250+ businesses, governmental and non-profit organizations use
              the websites we’ve created for corporate presentation and brand
              building. We make sure our websites have an easy-to-use page
              editor for dynamic content management.
            </p>
          </div>
          {/* ---------------------  erp section ---------------------  */}
          <div className=" bg-gray-100 p-8 shadow-md hover:shadow-lg rounded-sm">
            <div className="flex justify-center">
              <img className="w-[80px]" src={icon3} alt="" />
            </div>
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="flex justify-center items-center text-center text-xl uppercase my-5"
            >
              <li className="list-none">
                <a
                  onClick={toggleErp}
                  className=" flex items-center hover:text-purple-700"
                >
                  ERP <IoIosArrowDown className="ms-2" />
                </a>
                <ul
                  className={`${openErp ? "block" : "hidden"} bg-gray-400
                   text-white text-sm shadow-md shadow-gray-500 rounded-sm
                    p-3 leading-10 absolute w-[200px] text-center z-30`}
                >
                  <Link target="blank" to="https://erp.cgi.com.bd/dashboard">
                    <li className="hover:text-black hover:bg-white">
                      Demo_ERP
                    </li>
                  </Link>
                </ul>
              </li>
            </h1>
            <p className="text-start text-lg">
              4 years in ecommerce development, we’ve grown the expertise from
              entry-level shops for startups to custom ecommerce solutions
              built for large-scale and high-growth businesses. We multiply
              business efficiency by using scalable microservices
              architectures and enabling high automation of all business
              processes.
            </p>
          </div>
        </div>
      </div>
    );
};

export default OSProvide;