import "./Section0.css";
import icon1 from "../../../../../public/Icons/web page-01.png";
import icon2 from "../../../../../public/Icons/web page-02.png";
import icon3 from "../../../../../public/Icons/web page-03.png";
import icon4 from "../../../../../public/Icons/web page-05.png";
import icon5 from "../../../../../public/Icons/web page-04.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Section0 = () => {
  Aos.init();

  const section0Data = [
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

  return (
    <div  className=" bg-gray-100  py-[20px]">
    <div style={{ fontFamily: "Open Sans, sans-serif" }}
     className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4">
       <h1 className="dafault-heading">Explore
       <span className="-ms-[150px]"> <br />  Our Popular <span className='text-purple-900'> Service</span> </span></h1>

      {/* cards section */}
      <div  data-aos="fade-down"
        data-aos-duration="2000" className="my-[80px] grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {section0Data.map(({ icon, title, disc }) => (
          <div
            key={title}
            className="card card-compact bg-[#59287f1c] shadow-lg shadow-[#2d253447] rounded-md px-4 mb-3"
          >
            <div className="flex justify-center mt-5 ms-3">
              <img className="w-[80px]" src={icon} alt={title} />
            </div>
            <div className="card-body">
              <h2 style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-center text-xl text-[#323738]">{title}</h2>
              <h2 style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-center text-xl text-[#323738]">{disc}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Section0;
