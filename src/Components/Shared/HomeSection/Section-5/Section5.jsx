import "./Section5.css";
import icon1 from "../../../../../public/Icons/App Development.png";
import icon2 from "../../../../../public/Icons/Design & Development.png";
import icon3 from "../../../../../public/Icons/Innovative Solutions.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section5 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="default-margin"
    >
      <h1 className="text-center text-white text-lg font-semibold mb-5">
        PRICING PLAN
      </h1>
      <h2 className=" text-center text-4xl font-bold leading-[50px] text-white mb-5">
        Choose Pricing Plan
      </h2>

      {/* cards section  */}
      <div
        className=" items-center mt-10 gap-5
           lg:flex lg:justify-center lg:-ms-[0px]
             md:flex-wrap md:justify-around md:ms-[150px]
             sm: flex-wrap sm:justify-around sm: -ms-[40px]
        "
      >
        {/* Basic  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact py-[40px]
            lg:w-[320px] lg:h-[450px] 
            md:w-[320px] md:h-[450px] 
            sm: w-[320px] sm: h-[450px] 
            bg-base-100 rounded-md px-4"
        >
          <div className="card-body">
            <h2 className="text-center font-semibold text-3xl text-[#323738] mb-5">Basic</h2>
            <p className="text-5xl font-bold text-[#095868] text-center relative"> 
            <span className="text-[20px] absolute left-[35px] top-[10px]">$</span> 299 
             <span className=" text-lg text-[#565e60]">/Month</span>
             </p>
            <p className="text-lg text-center p-[20px] text-[#095868]">
              Social Media Marketing Social Media Management 24/7 Support
            </p>
            {/* choose Plan button  */}
            <div className="flex justify-center">
              <button className=" uppercase btn rounded-full w-[200px]">
            <a href="/">
                Choose Plan
            </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
