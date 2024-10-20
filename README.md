# Demo Site :

color -1: #5A287F ;
color -2: #84207E ;
color -3: #723988 ;
bg-color : #e6e6eb ;
Transparent-color : #59287f1c ------------------------------>;
linear-gradient(to right, #4a2665, #6b2066, #593468)

Link: https://wa.me/8801540380460 ;

font 1: style={{ fontFamily: "Open Sans,sans-serif" }}
font 2: style={{ fontFamily: "Ubuntu,sans-serif" }}
font 2: style={{ fontFamily: "Sumana,serif" }}

other classes:
default-text-color,
dafault-heading,
default-margin

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
