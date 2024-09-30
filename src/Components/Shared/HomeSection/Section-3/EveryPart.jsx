import bgImg from "../../../../../public/Images/web page-08.png";
import { BsCheckCircleFill } from "react-icons/bs";

const EveryPart = () => {
  return (
    <div className="bg-gray-100 py-[20px]">
        <div className="relative md:block sm: hidden">
      <div className="relative">
        {/* image div  */}
        <div className="flex justify-between">
          <div></div>
          <div>
            <img className="w-[750px]" src={bgImg} alt="" />
          </div>
        </div>
        {/* information section */}
        <div className="absolute md:top-[250px] lg:left-[445px] sm: top-0  lg:mx-0 md:mx-6 sm: mx-4">
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
      </div>
        </div>
    </div>
  );
};

export default EveryPart;
