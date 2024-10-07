import "./Section4.css";
import "react-tabs/style/react-tabs.css";
import icon1 from "../../../../../public/Icons/cubel (1).png";
import icon2 from "../../../../../public/Icons/artificial-intelligence.png";
import icon3 from "../../../../../public/Icons/vision.png";
import icon4 from "../../../../../public/Icons/innovation.png";
import icon5 from "../../../../../public/Icons/blockchain.png";
import icon6 from "../../../../../public/Icons/virtual-support.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Section4 = () => {
  Aos.init();

  // const data = [
  //   {
  //     icon: icon1,
  //     title: "Big Data",
  //     disc: "",
  //   },
  //   {
  //     icon: icon2,
  //     title: "Artificial ",
  //     disc: "Intelligence",
  //   },
  //   {
  //     icon: icon3,
  //     title: "Computer ",
  //     disc: "Vision",
  //   },
  //   {
  //     icon: icon4,
  //     title: "Internet ",
  //     disc: "Of Things",
  //   },
  //   {
  //     icon: icon5,
  //     title: "BlockChain",
  //     disc: "",
  //   },
  //   {
  //     icon: icon6,
  //     title: "Mixed Reality",
  //     disc: "",
  //   },
  // ];

  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="my-[180px] lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
    >
      <div 
       data-aos="fade-right">
      <h1
      style={{ fontFamily: "Sumana,serif" }}
      className="text-5xl font-bold mt-5 ">
        <span className="text-purple-900 me-2 ">Improve and Innovate</span> with
        <br />
        The Tech Trends
      </h1>
      <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="default-text-color  text-xl mt-5">
        Our team can assist you in transforming your business with the <br />{" "}
        latest tech capabilities to stay ahead of the curve
      </p>
      </div>

      {/* Tab section fot large device */}
      <div
       data-aos="fade-right"
      style={{ fontFamily: "Ubuntu,sans-serif" }}
      className="mt-32 grid lg:grid-cols-6 md:grid-cols-3 sm: grid-cols-1 gap-4">
        {/*---------------------- title 1 ------------------ */}
        <div className="relative">
          {/* title div  */}
          <div
            className="relative flex justify-center items-center bg-white py-[70px] text-xl shadow-lg rounded-md 
            lg:mb-0 md:mb-[55px] sm: mb-[55px] lg:mx-0 md:mx-0 sm: mx-14"
          >
            <h1>
            Big Data
            </h1>
          </div>
          {/* img div  */}
          <div className="absolute -top-[55px] lg:left-[30px] md:left-[55px] sm: left-[115px] clipPathDiv bg-gray-100 shadow-lg z-10">
           <div className=" flex justify-center items-center w-[120px] h-[100px] "> <img className="w-[60px] h-[60px]" src={icon1} alt="" /></div>
          </div>
        </div>
        
        {/*---------------------- title 2 ------------------ */}
        <div className="relative">
          {/* title div  */}
          <div
            className="relative flex justify-center items-center bg-white py-14 text-xl shadow-lg rounded-md 
            lg:mb-0 md:mb-[55px] sm: mb-[55px] lg:mx-0 md:mx-0 sm: mx-14"
          >
            <h1 className="text-center">
           <span>Artificial</span> <br /> <span>Intelligence</span>
            </h1>
          </div>
          {/* img div  */}
          <div className="absolute -top-[55px] lg:left-[30px] md:left-[55px] sm: left-[115px] clipPathDiv bg-gray-100 shadow-lg z-10">
           <div className=" flex justify-center items-center w-[120px] h-[100px] "> <img className="w-[60px] h-[60px]" src={icon2} alt="" /></div>
          </div>
        </div>
              
        {/*---------------------- title 3 ------------------ */}
        <div className="relative">
          {/* title div  */}
          <div
            className="relative flex justify-center items-center bg-white py-14 text-xl shadow-lg rounded-md 
            lg:mb-0 md:mb-[55px] sm: mb-[55px] lg:mx-0 md:mx-0 sm: mx-14"
          >
            <h1 className="text-center">
           <span>Computer</span> <br /> <span>Vision</span>
            </h1>
          </div>
          {/* img div  */}
          <div className="absolute -top-[55px] lg:left-[30px] md:left-[55px] sm: left-[115px] clipPathDiv bg-gray-100 shadow-lg z-10">
           <div className=" flex justify-center items-center w-[120px] h-[100px] "> <img className="w-[60px] h-[60px]" src={icon3} alt="" /></div>
          </div>
        </div>
              
        {/*---------------------- title 4 ------------------ */}
        <div className="relative">
          {/* title div  */}
          <div
            className="relative flex justify-center items-center bg-white py-14 text-xl shadow-lg rounded-md 
            lg:mb-0 md:mb-[55px] sm: mb-[55px] lg:mx-0 md:mx-0 sm: mx-14"
          >
            <h1 className="text-center">
           <span>Internet</span> <br /> <span>Of Things</span>
            </h1>
          </div>
          {/* img div  */}
          <div className="absolute -top-[55px] lg:left-[30px] md:left-[55px] sm: left-[115px] clipPathDiv bg-gray-100 shadow-lg z-10">
           <div className=" flex justify-center items-center w-[120px] h-[100px] "> <img className="w-[60px] h-[60px]" src={icon4} alt="" /></div>
          </div>
        </div>
              
        {/*---------------------- title 5 ------------------ */}
        <div className="relative">
          {/* title div  */}
          <div
            className="relative flex justify-center items-center bg-white py-[70px] text-xl shadow-lg rounded-md 
            lg:mb-0 md:mb-[55px] sm: mb-[55px] lg:mx-0 md:mx-0 sm: mx-14"
          >
            <h1>
            BlockChain
            </h1>
          </div>
          {/* img div  */}
          <div className="absolute -top-[55px] lg:left-[30px] md:left-[55px] sm: left-[115px] clipPathDiv bg-gray-100 shadow-lg z-10">
           <div className=" flex justify-center items-center w-[120px] h-[100px] "> <img className="w-[60px] h-[60px]" src={icon5} alt="" /></div>
          </div>
        </div>
              
        {/*---------------------- title 6 ------------------ */}
        <div className="relative">
          {/* title div  */}
          <div
            className="relative flex justify-center items-center bg-white py-[70px] text-xl shadow-lg rounded-md 
            lg:mb-0 md:mb-[55px] sm: mb-[55px] lg:mx-0 md:mx-0 sm: mx-14"
          >
            <h1>
            Mixed Reality
            </h1>
          </div>
          {/* img div  */}
          <div className="absolute -top-[55px] lg:left-[30px] md:left-[55px] sm: left-[115px] clipPathDiv bg-gray-100 shadow-lg z-10">
           <div className=" flex justify-center items-center w-[120px] h-[100px] "> <img className="w-[60px] h-[60px]" src={icon6} alt="" /></div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Section4;
