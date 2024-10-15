import img1 from "../../../../public/Images/ourService.png";
import Testimonials from "../../Shared/HomeSection/Testimonials/Testimonials";
import OSFullScale from "./OSFullScale";
import OSProvide from "./OSProvide";

const OurServices = () => {


  return (
    <div className="lg:mt-[90px] md:mt-[90px] sm: mt-[80px] bg-white">
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
            Our Services
          </h1>
          <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            Your Vision, Our Digital Expertise
          </p>
          <p
           
            className="text-lg my-5"
          >
            Once a small product company, SoftPlatoon grew to become an IT
            partner with 4+ years in the field and 230+ successful projects.
            Now, we help other businesses across 30+ industries launch
            innovative software that wins the race.
          </p>
        </div>
        {/* image section  */}
        <div className="py-5">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="lg:mx-32 md:mx-10 sm: mx-5 py-20">
        {/* ************************** Provide Section *************************************** */}
       <OSProvide/>
        {/* ************************** Testimonial Section *************************************** */}
        <Testimonials/>
        {/* ************************** FUll Scale Section *************************************** */}
        <OSFullScale/>
      </div>
    </div>
  );
};

export default OurServices;
