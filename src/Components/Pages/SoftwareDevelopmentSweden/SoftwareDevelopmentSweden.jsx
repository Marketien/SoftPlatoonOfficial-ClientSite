import { Link } from "react-router-dom";
import img1 from "../../../../public/Images/Software.png";
import OurServiceSweden from "./OurServiceSweden/OurServiceSweden";

const SoftwareDevelopmentSweden = () => {
  return (
    <div className="lg:mt-[90px] md:mt-[90px] sm: mt-[80px] bg-[#59287f1c]">
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
          <button title="contact us" className="btn bg-white text-[#5A287F] hover:bg-[#5A287F] hover:text-white">
            <Link to="https://wa.me/8801540380460" target="_blank">Contact Us</Link>
          </button>
        </div>
        {/* image section  */}
        <div className="py-5">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* Content section  */}
        <div className="flex justify-center">
      <div className="lg:mx-52 md:mx-10 sm: mx-5 py-20">
{/* Our service seciton  */}
<OurServiceSweden/>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentSweden;
