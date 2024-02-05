import "./ITEcosystem.css";
import { BsCheckCircleFill } from "react-icons/bs";
import icon from "../../../../../public/Images/Dark analytics-amico.png";

const ITEcosystem = () => {
  return (
    <div className="rounded-sm bg-[white] p-5 mt-20
    grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-10 
    shadow-lg shadow-slate-500 lg:w-[90%] md:w-[90%] sm: w-[95%]
   lg:ms-[53px] sm: ms-[10px]
    ">
      {/* information section */}
      <div className="lg:absolute md:static sm: static lg:w-[700px] ">
        <h1 className=" text-3xl font-semibold mt-5">
          Every Part of Your IT Ecosystem. <br /> Taken Care Of.
        </h1>
        <p className="text-xl  font-normal mt-5">
          Comprehensive care of your cloud or on-premises infrastructure and
          applications :
        </p>
        <p className="mt-5 flex items-center gap-5">
          <span className="">
            <li className="flex items-center text-lg mb-2">
              <BsCheckCircleFill className="me-2 text-[#095868]" /> Consulting
            </li>
            <li className="flex items-center text-lg mb-2">
              <BsCheckCircleFill className="me-2 text-[#095868]" />{" "}
              Implementation
            </li>
            <li className="flex items-center text-lg">
              <BsCheckCircleFill className="me-2 text-[#095868]" /> Management
              and support
            </li>
          </span>
          <span>
            <li className="flex items-center text-lg mb-2">
              <BsCheckCircleFill className="me-2 text-[#095868]" /> Security
            </li>
            <li className="flex items-center text-lg mb-2">
              <BsCheckCircleFill className="me-2 text-[#095868]" /> Help desk
              services
            </li>
            <li className="flex items-center text-lg">
              <BsCheckCircleFill className="me-2 text-[#095868]" /> Migration
            </li>
          </span>
        </p>
      </div>
      {/* icon section  */}
      <div className="lg:relative md:relative sm: static
       lg:bottom-[50px] md:bottom-[50px] lg:left-[643px] 
        rounded-sm bg-white 
       shadow-lg shadow-slate-500
        lg:w-[500px] lg:h-[400px]
        md:w-[400px] md:h-[400px]
        sm: w-[320px] sm: h-[400px]
       ">
        <img 
        className="
        lg:w-[500px] lg:h-[400px]
        md:w-[400px] md:h-[400px]
        sm: w-[320px] sm: h-[400px]
        " src={icon}
         alt="" />
      </div>
    </div>
  );
};

export default ITEcosystem;
