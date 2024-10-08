import bgImg from "../../../../../public/Images/web page-08.png";
import { BsCheckCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const EveryPart = () => {

  Aos.init();

  return (
    <div className="lg:block md:flex md:justify-center bg-white py-[20px]">
    <div className="">
      {/* for medium and large device  */}
        <div className="relative lg:block md:hiden sm: hidden">
      <div className="relative">
        {/* image div  */}
        <div className="flex justify-between">
          <div></div>
          <div>
            <img className="w-[1050px] h-[850px]" src={bgImg} alt="" />
          </div>
        </div>
        {/* information section */}
        <div 
         data-aos="fade-right"
        className="absolute md:top-[250px] lg:left-[445px] sm: top-0  lg:mx-0 md:mx-6 sm: mx-4">
          <div>
            <h1 
            style={{ fontFamily: "Sumana,serif" }}
            className=" text-5xl font-bold mt-5 leading-[60px]">
              Every Part of Your IT Ecosystem. <br /> <span className="text-purple-900 "> Taken Care Of.</span>
            </h1>
            <p className="text-xl font-semibold mt-5">
              Comprehensive care of your cloud or on-premises infrastructure{" "}
              <br /> and applications :
            </p>
            <p className="mt-5 flex items-center font-semibold gap-5">
              <span className="">
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />
                  Consulting
                </li>
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                  Implementation
                </li>
                <li className="flex items-center text-lg">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                  Management and support
                </li>
              </span>
              <span>
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Security
                </li>
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Help
                  desk services
                </li>
                <li className="flex items-center text-lg">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                  Migration
                </li>
              </span>
            </p>
          </div>
        </div>
      </div>
        </div>
        {/*-------------------------- for small device ------------------------- */}
        <div className="relative lg:hidden md:block sm: block">
      <div className="relative">
        {/* information section */}
        <div 
         data-aos="fade-down"
      className="lg:mx-0 md:mx-6 sm: mx-4">
          <div>
            <h1 className=" text-3xl font-semibold mt-5 ">
              Every Part of Your IT Ecosystem. <br /> Taken Care Of.
            </h1>
            <p className="text-xl  font-normal mt-5">
              Comprehensive care of your cloud or on-premises infrastructure{" "}
              <br /> and applications :
            </p>
            <p className="mt-5 flex items-center gap-5">
              <span className="">
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />
                  Consulting
                </li>
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                  Implementation
                </li>
                <li className="flex items-center text-lg">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                  Management and support
                </li>
              </span>
              <span>
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Security
                </li>
                <li className="flex items-center text-lg mb-2">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Help
                  desk services
                </li>
                <li className="flex items-center text-lg">
                  <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                  Migration
                </li>
              </span>
            </p>
          </div>
        </div>
         {/* image div  */}
          <div>
            <img className="w-[750px]" src={bgImg} alt="" />
          </div>
      </div>
        </div>
    </div>
    </div>
  );
};

export default EveryPart;
