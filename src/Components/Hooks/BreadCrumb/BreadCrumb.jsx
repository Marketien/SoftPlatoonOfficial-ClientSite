import { useLocation, Link } from "react-router-dom";
// import SlashImg from "../../../assets/Icons/slash-logo.png";
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="bg-gray-200">
<ul className="max-w-md mx-auto py-2 flex gap-2 text-[#2E4053] md:text-[14px] sm:text-xs justify-center items-center">
        {/* Home Link */}
        <Link
          to="/"
          className={`cursor-pointer flex items-center gap-1 p-2 ${
            pathname === "/home" && "text-[#723988] font-bold"
          }`}
        >
          <span>
            <IoHome />
          </span>
          <span>Home</span>
        </Link>

        {/* Our Services Breadcrumb */}
        {pathname.includes("/our-services") && (
          <>
            <IoIosArrowForward />
            <Link
              to="/our-services"
              className={`cursor-pointer flex items-center gap-1 p-2 ${
                pathname === "/our-services" && "text-[#723988] font-bold"
              }`}
            >
              <span>
                <FaServicestack />
              </span>
              <span>Our Services</span>
            </Link>
          </>
        )}

        {/* Web App Services Breadcrumb */}
        {pathname.includes("/our-services/web-app-Services") && (
          <>
            <IoIosArrowForward />
            <Link
              to="/our-services/web-app-Services"
              className={`cursor-pointer flex items-center gap-1 p-2 ${
                pathname === "/our-services/web-app-Services" &&
                "text-[#723988] font-bold"
              }`}
            >
              <span>
                <FaServicestack />
              </span>
              <span>Web App Services</span>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
