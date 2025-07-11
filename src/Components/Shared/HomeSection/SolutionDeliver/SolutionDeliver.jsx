import { IoIosArrowRoundForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const data = [
  {
    title: "Enterprise Applications",
  },
  {
    title: "ERP",
  },
  {
    title: "Financial Management",
  },
  {
    title: "Supplly Chain Management",
  },
  {
    title: "Assest Management",
  },
  {
    title: "Fleet Management",
  },
  {
    title: "HR Software",
  },
  {
    title: "E Learning Software",
  },
  {
    title: "E Commerce",
  },
  {
    title: "Mobile Apps",
  },
  {
    title: "Content Management",
  },
  {
    title: "Documewnt Management",
  },
  {
    title: "CRM",
  },
  {
    title: "Marketing & Advertising",
  },
  {
    title: "Web Portals",
  },
  {
    title: "Data Analytics",
  },
];

const SolutionDeliver = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);
  
  return (
    <div className="bg-white text-black py-[60px]  ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:px-7 sm: px-4"
      >
        <h1
          data-aos="fade-up"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          Solutions We <span className="text-purple-900 md:ms-2 sm:0"> Deliver</span>
        </h1>
        <p
          data-aos="fade-up"
          className="text-xl font-semibold"
        >
          We IT-enable all kinds of B2B, B2C interactions and internal
          operations.
        </p>

        <div 
        data-aos="fade-right"
        className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
          {data.map(({ title }, index) => (
            <div
             key={index} 
             className="relative group">
              <div className="relative bg-gray-100 font-semibold text-center py-10 shadow-md hover:shadow-lg">
                {title}
              </div>
              <div className="absolute bottom-1 right-2 rotate-45 transition-transform duration-300 group-hover:rotate-[-2deg]">
                <IoIosArrowRoundForward size={25} className="text-purple-900 " />
              </div>
            </div>
          ))}
        </div>
      </div >
    </div>
  );
};

export default SolutionDeliver;
