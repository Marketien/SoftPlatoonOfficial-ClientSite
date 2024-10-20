import { Link } from "react-router-dom";
import img1 from "../../../../public/Images/Software.png";
import OurServiceSweden from "./OurServiceSweden/OurServiceSweden";
import RecentProjectSweden from "./RecentProjectSweden/RecentProjectSweden";
import HomeTechnologies from "../../Shared/HomeSection/HomeTechnologies/HomeTechnologies";
import QuestionAnswer from "../../Shared/HomeSection/FAQ/QuestionAnswer";
import HomeContact from "../../Shared/HomeSection/HomeContact/HomeContact";

const SoftwareDevelopmentSweden = () => {
  return (
    <div className="lg:mt-[90px] md:mt-[90px] sm: mt-[80px] overflow-x-hidden">
      {/* ---------------------------- Banner Section ----------------------------------- */}
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center
          lg:px-32 md:px-10 sm: px-5 py-10 bg-[#5A287F] text-white"
      >
        {/* title section  */}
        <div>
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-5xl mb-2"
          >
            Software Developer Sweden
          </h1>
          <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            Your Partner for Digital Success
          </p>
          <p className="text-lg my-5">
            Since 2019, SoftPlatoon has been a reliable partner to over 230+
            clients, driving digital transformation, implementing innovative
            software, and ensuring stable and cost-effective IT operations.
          </p>
          <button
            title="contact us"
            className="btn bg-white text-[#5A287F] hover:bg-[#5A287F] hover:text-white"
          >
            <Link to="https://wa.me/8801540380460" target="_blank">
              Contact Us
            </Link>
          </button>
        </div>
        {/* image section  */}
        <div className="py-5 md:flex justify-end sm: block">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* Content section  */}
      <div className=" py-20 ">
        {/* Our service seciton  */}
        <OurServiceSweden />
      </div>
      {/* Recent Projects seciton  */}
      <div className="bg-white py-20">
        <RecentProjectSweden />
      </div>
      {/* Recent Projects seciton  */}
      <div className=" py-20">
        <HomeTechnologies />
      </div>
      {/* FAQ seciton  */}
      <div className="bg-white py-20">
        < QuestionAnswer/>
      </div>
      {/*  Contact seciton  */}
      <div className=" py-0">
        < HomeContact href="#contact"/>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentSweden;
