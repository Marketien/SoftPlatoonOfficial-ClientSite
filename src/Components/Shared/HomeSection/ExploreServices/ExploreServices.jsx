import icon1 from "../../../../assets/Icons/web page-01.png";
import icon2 from "../../../../assets/Icons/web page-02.png";
import icon3 from "../../../../assets/Icons/web page-03.png";
import icon4 from "../../../../assets/Icons/web page-05.png";
import icon5 from "../../../../assets/Icons/web page-04.png"; 
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExploreServicesData = [
  {
    icon: icon1,
    title: "Website",
    disc: "Design"
  },
  {
    icon: icon2,
    title: "Website",
    disc: "Development"
  },
  {
    icon: icon3,
    title: "UX/UI",
    disc: "Design"
  },
  {
    icon: icon4,
    title: "Graphics",
    disc: "Design"
  },
  {
    icon: icon5,
    title: "Digital",
    disc: "Marketing"
  },
];
const ExploreServices = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

    return (
        <div className=" bg-white text-black md:py-[160px] sm: py-[20px] ">
        <div
         data-aos="zoom-in"
         className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4">
           <h1 
            style={{ fontFamily: "Sumana,serif" }}
           className="font-bold text-5xl md:flex md:items-center md:text-start sm: text-center">
            Explore Our Popular <p className='text-purple-900 md:ms-2 sm: ms-0'> Services</p>
           </h1>
    
          {/* cards section */}
          <div
          className="mt-[30px] mb-[80px] grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
            {
            ExploreServicesData.map(({ icon, title, disc }) => (
              <div
             
                key={title}
                className=" bg-[#59287f1c] shadow-lg shadow-[#2d253447]  rounded-md px-4 mb-3"
              >
                <div className="flex justify-center mt-5 ms-3">
                  <img className="w-[80px]" src={icon} alt={title} loading="lazy"  />
                </div>
                <div style={{ fontFamily: "Ubuntu,sans-serif" }} className="card-body">
                  <h2 className="text-center text-xl text-[#323738]">{title}</h2>
                  <h2 className="text-center text-xl text-[#323738]">{disc}</h2>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        </div>
    );
};

export default ExploreServices;