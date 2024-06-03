import icon1 from "../../../../../public/Icons/App Development.png";
import icon2 from "../../../../../public/Icons/Design & Development.png";
import icon3 from "../../../../../public/Icons/Innovative Solutions.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section0 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="default-margin"
    >
      <h1 className="text-center text-white text-lg font-semibold mb-5">
        WHAT WE DO{" "}
      </h1>
      <h2 className=" text-center text-4xl font-bold leading-[50px] text-white mb-5">
        Don't be afraid to give up the good <br /> to go for the great
      </h2>

      {/* cards section  */}
      {/* <div
        className=" items-center mt-10 gap-5
         lg:flex lg:justify-center lg:-ms-[0px]
           md:flex-wrap md:justify-around md:ms-[150px]
           sm: flex-wrap sm:justify-around sm: -ms-[40px]
      "
      > */}
      <div className="mx-tuto grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5">
        {/* App Development  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact bg-base-100 rounded-md px-4 mb-3"
        >
          <div className="flex justify-start mt-5 ms-3">
            <img
              className=" w-[80px] "
              src={icon1}
              alt="App Development icon"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#323738]">
              App Development
            </h2>
            <p className="text-lg text-[#095868]">
              Far far away, behind the word moun far from the countries Vokalia
              Place supplies with regelialia.
            </p>
            <a href="/"><p className="uppercase font-bold hover:text-[#05819a] flex items-center">
             Read More
              <span className="ms-2">
                <IoIosArrowRoundForward size={25} />
              </span>
            </p></a> 
          </div>
        </div>

        {/* Design & Development  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact
          bg-base-100 rounded-md px-4 mb-3"
        >
          <div className="flex  ms-3 mt-5">
            <img
              className="w-[80px]"
              src={icon2}
              alt="Design & Development icon"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#323738]">
              Design & Development
            </h2>
            <p className="text-lg text-[#095868]">
              Far far away, behind the word moun far from the countries Vokalia
              Place supplies with regelialia.
            </p>
            <a href="/"><p className="uppercase font-bold hover:text-[#05819a] flex items-center">
             Read More
              <span className="ms-2">
                <IoIosArrowRoundForward size={25} />
              </span>
            </p></a> 
          </div>
        </div> 

        {/* Innovative Solutions  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact 
         bg-base-100 rounded-md px-4 "
        >
          <div className="flex  ms-3 mt-5">
            <img
              className="w-[80px]"
              src={icon3}
              alt="Innovative Solutions icon"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#323738]">
              Innovative Solutions
            </h2>
            <p className="text-lg text-[#095868]">
              Far far away, behind the word moun far from the countries Vokalia
              Place supplies with regelialia.
            </p>
            <a href="/"><p className="uppercase font-bold hover:text-[#05819a] flex items-center">
             Read More
              <span className="ms-2">
                <IoIosArrowRoundForward size={25} />
              </span>
            </p></a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section0;
