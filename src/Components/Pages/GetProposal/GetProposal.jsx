import HomeContact from "../../Shared/HomeSection/HomeContact/HomeContact";
import img1 from "../../../assets/Images/Office Presentation-01.png"
import { useEffect } from "react";

const GetProposal = () => {

  useEffect(() => {
    document.title = "Softplatoon - Get Proposal";
  }, []);

    return (
        <div className="lg:mt-[90px] md:mt-[90px] sm: mt-[120px]">
        {/* ---------------------------- Banner Section ----------------------------------- */}
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center
        lg:px-32 md:px-10 sm: px-5 py-2 bg-[#5A287F] text-white"
      >
        {/* title section  */}
        <div>
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-5xl mb-2"
          >
            Send Proposal
          </h1>
          <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
          Your Partner for Digital Success
          </p>
          <p
           
            className="text-lg my-5"
          >
            Since 2019, SoftPlatoon has been a reliable partner to over 230+ clients, driving digital transformation, implementing innovative software, and ensuring stable and cost-effective IT operations.
          </p>
        </div>
        {/* image section  */}
        <div className="py-5 md:flex justify-end sm: block">
          <img src={img1} alt="" />
        </div>
      </div>
          <HomeContact/>  
        </div>
    );
};

export default GetProposal;