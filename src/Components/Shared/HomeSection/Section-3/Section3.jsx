import { BsCheckCircleFill } from "react-icons/bs";
import icon from "../../../../../public/Images/3d presentation.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Section3 = () => {

  Aos.init();

  return (
    <div  data-aos="fade-left" data-aos-duration="2000">
    <div 
     style={{ fontFamily: "Open Sans,sans-serif" }}
     className=" rounded-sm bg-[white] p-5 mt-20 gap-10 mx-auto my-[80px]
    shadow-lg
     lg:max-w-5xl md:max-w-3xl sm: max-w-sm
    lg:flex lg:justify-between 
    md:flex-wrap md:justify-around
    sm: flex-wrap sm:justify-around 
    ">
      {/* information section */}
      <div className="lg:absolute md:static sm: static lg:pe-[0px] mb-5">
        <div >
        <h1 className=" text-3xl font-semibold mt-5">
          Every Part of Your IT Ecosystem. <br /> Taken Care Of.
        </h1>
        <p className="text-xl  font-normal mt-5">
          Comprehensive care of your cloud or on-premises infrastructure <br /> and
          applications :
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
              <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Management
              and support
            </li>
          </span>
          <span>
            <li className="flex items-center text-lg mb-2">
              <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Security
            </li>
            <li className="flex items-center text-lg mb-2">
              <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Help desk
              services
            </li>
            <li className="flex items-center text-lg">
              <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Migration
            </li>
          </span>
        </p>
        </div>
      </div>
      {/* icon section  */}
      <div className="lg:relative md:static sm: static
       lg:bottom-[50px] md:bottom-[50px] lg:left-[630px] 
        rounded-sm bg-white 
       shadow-lg shadow-[#e6e6eb]">
        <img 
        className="lg:w-[430px] lg:h-[360px]
        md:w-[500px] md:h-[400px]
        sm:w-[320px] sm:h-[256px]
        w-full h-auto" src={icon}
         alt="" />
      </div>
    </div>
    </div>
  );
};

export default Section3;
