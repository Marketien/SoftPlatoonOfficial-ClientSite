import "./Section0.css";
import icon1 from "../../../../../public/Icons/a1.png";
import icon2 from "../../../../../public/Icons/a2.png";
import icon3 from "../../../../../public/Icons/a4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section0 = () => {
  const section0Data = [
    {
      icon: icon1,
      title: "App Development",
      description:
        "Far far away, behind the word moun far from the countries Vokalia Place supplies with regelialia.",
    },
    {
      icon: icon2,
      title: "Design & Development",
      description:
        "Far far away, behind the word moun far from the countries Vokalia Place supplies with regelialia.",
    },
    {
      icon: icon3,
      title: "Innovative Solutions",
      description:
        "Far far away, behind the word moun far from the countries Vokalia Place supplies with regelialia.",
    },
  ];

  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <h1 className="text-center text-lg font-semibold mb-5 mt-[100px]">
        WHAT WE DO
      </h1>
      <h2 className="text-center text-4xl font-bold leading-[50px]  mb-5">
        Don't be afraid to give up the good <br /> to go for the great
      </h2>

      {/* cards section */}
      <div className="my-[80px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {section0Data.map(({ icon, title, description }) => (
          <div
            key={title}
            className="card card-compact bg-white shadow-lg shadow-[#2d253447] rounded-md px-4 mb-3"
          >
            <div className="flex justify-start mt-5 ms-3">
              <img className="icnonFiterimg" src={icon} alt={title} />
            </div>
            <div className="card-body">
              <h2 style={{ fontFamily: "Ubuntu,sans-serif" }} className=" text-2xl text-[#323738]">{title}</h2>
              <p className="text-lg text-[#095868]">{description}</p>
              <a href="/">
                <p 
                style={{ fontFamily: "Ubuntu,sans-serif" }}
                className="uppercase font-bold hover:text-[#84207E] flex items-center">
                  Read More
                  <span className="ms-2">
                    <IoIosArrowRoundForward size={25} />
                  </span>
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section0;
