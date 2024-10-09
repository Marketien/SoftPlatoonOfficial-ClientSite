import icon1 from "../../../../../public/industry_icons/HealthCare.png";
import icon2 from "../../../../../public/industry_icons/E Commerce.png";
import icon3 from "../../../../../public/industry_icons/Education.png";
import icon4 from "../../../../../public/industry_icons/Hospitality.png";
import icon5 from "../../../../../public/industry_icons/Automative.png";
import icon6 from "../../../../../public/industry_icons/Professional Services.png";
import icon7 from "../../../../../public/industry_icons/Logistics & Transporation.png";
import icon8 from "../../../../../public/industry_icons/Business Automation.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import './IndustryExpertise.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const data = [
  {
    icon: icon1,
    title: "HealthCare",
  },
  {
    icon: icon2,
    title: "E Commerce",
  },
  {
    icon: icon3,
    title: "Education",
  },
  {
    icon: icon4,
    title: "Hospitality",
  },
  {
    icon: icon5,
    title: "Automative",
  },
  {
    icon: icon6,
    title: "Professional Services",
  },
  {
    icon: icon7,
    title: "Logistics & Transporation",
  },
  {
    icon: icon8,
    title: "Business Automation",
  },
];
const IndustryExpertise = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <div id="industries" className=" py-[180px] lg:mx-auto md:mx-7 sm: mx-4 ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          data-aos="fade-up"
          style={{ fontFamily: "Sumana, serif" }}
          className="font-bold text-5xl mb-5"
        >
          Our Industry <span className="text-purple-900 ms-2 "> Expertise</span>
        </h1>
        <p
          data-aos="fade-up"
          className="text-xl font-semibold"
        >
          We’ve excelled our experience in a wide range of industries to bring
          valuable insights and provide our clients with the truly beneficial
          solutions.
        </p>

        <div
          data-aos="fade-right"
          className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-1 gap-8"
        >
          {data.map(({ icon, title }, index) => (
            <div key={index}>
            <div  className="relative group bg-white py-8 rounded-md shadow-md hover:shadow-lg
             "> 
            <div className="relative flex justify-center ">
              <div className="flex justify-center w-[80px] py-2 border  rounded-md bg-[#59287f1c]">
                <img className="w-[50px]" src={icon} alt={title} />
                </div>
            </div>
              <div style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-center mt-5 text-lg">{title}</div>
              <div className="absolute top-1 right-2 -rotate-45 transition-transform duration-300 group-hover:rotate-[-2deg]">
                <IoIosArrowRoundForward size={25} className="text-purple-900 " />
              </div>
              <hr className="hr-animation absolute bottom-0 left-0 right-0 h-[4px] transition-all duration-200 border-[#5A287F] bg-[#5A287F] z-10 opacity-0 group-hover:opacity-100" />
          
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
