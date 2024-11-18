import { useLocation, Link } from "react-router-dom";
import SlashImg from "../../../assets/Icons/slash-logo.png";

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="bg-white">
    <ul className="flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
      {/* Home Link */}
      <Link
        to="/home"
        className={`cursor-pointer hover:bg-[#E8DAEF] hover:text-black p-4 rounded-md ${
          pathname === "/home" && "bg-[#b572d6] text-white"
        }`}>
        Home
      </Link>

      {/* Our Services Breadcrumb */}
      {(pathname.includes("/our-services") || pathname.includes("/web-app-Services")) && (
        <>
          <img src={SlashImg} className="w-5 h-5" alt="Slash" />
          <Link
            to="/our-services"
            className={`hover:text-black cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
              pathname.includes("/our-services") && !pathname.includes("/web-app-Services") && "bg-[#b572d6] text-white"
            }`}>
            Our Services
          </Link>
        </>
      )}

      {/* Web App Services Breadcrumb */}
      {pathname.includes("/web-app-Services") && (
        <>
          <img src={SlashImg} className="w-5 h-5" alt="Slash" />
          <Link
            to="/web-app-Services"
            className={`hover:text-black cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
              pathname.includes("/web-app-Services") && "bg-[#b572d6] text-white"
            }`}>
            Web App Services
          </Link>
        </>
      )}
    </ul>
  </div>
  );
};

export default Breadcrumb;
