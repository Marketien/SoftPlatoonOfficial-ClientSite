import { useEffect } from "react";
import img1 from "../../../../assets/Images/Web App.png";
import icon1 from "../../../../assets/OurServices/Business-Automation-Logo.png";
import icon2 from "../../../../assets/OurServices/E-commerce-Platform-Logo.png";
import icon3 from "../../../../assets/OurServices/Employee-Management-Logo.png";
import icon4 from "../../../../assets/OurServices/Data-Driven-Logo.png";
import Breadcrumb from "../../../Hooks/Breadcrumb/Breadcrumb";
import OSFullScale from "../../OurServices/OSFullScale";
import Testimonials from "../../../Shared/HomeSection/Testimonials/Testimonials";
import HomeContact from "../../../Shared/HomeSection/HomeContact/HomeContact";
import DemoProjects from "./DemoProjects/DemoProjects";

const serviceData = [
  {
    icon: icon1,
    title: "Business Process Automation",
    disc: "Streamline your day-to-day operations with tailored automation solutions. Whether it's managing workflows, handling repetitive tasks, or integrating various business tools, our solutions are designed to save time and boost productivity.",
  },
  {
    icon: icon2,
    title: "E-commerce Platform Development",
    disc: "Looking to expand your business online? We provide end-to-end e-commerce solutions, from user-friendly website design to secure payment integration and inventory management systems, ensuring a seamless shopping experience for your customers.",
  },
  {
    icon: icon3,
    title: "Employee Management System",
    disc: "Simplify HR processes with our comprehensive employee management solutions. Track attendance, manage payroll, monitor performance, and keep all your employee data organized in one secure platform.",
  },
  {
    icon: icon4,
    title: "Data-Driven Decision Making",
    disc: "Leverage your data for smarter decisions. Our analytics and reporting tools provide actionable insights through customized dashboards, enabling you to track performance, predict trends, and make informed choices for your business.",
  },
];
const WebAppsService = () => {
  useEffect(() => {
    document.title = "Softplatoon - Web App Services";
  }, []);

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
            Webapp Services
          </h1>
          <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            Genuine care for your web app project
          </p>
          <p className="text-lg my-5">
            With the expertise built on 230+ web projects, SoftPlatoon
            professionally designs, redesigns and continuously supports
            customer-facing and enterprise web apps and achieves high conversion
            and adoption rates.
          </p>
        </div>
        {/* image section  */}
        <div className="py-5">
          <img src={img1} alt="" />
        </div>
      </div>
      <Breadcrumb />
      {/* main content section  */}
      <div className="lg:mx-32 md:mx-10 sm: mx-5 py-20">
       {/* ************************** Our WebSolution  *************************************** */}
        <div>
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-5xl mb-2"
          >
            Our Web 
            <span className="text-purple-800 ms-2">Solution</span>
          </h1>
          <p
            style={{ fontFamily: "Ubuntu,sans-serif" }}
            className="text-lg my-5"
          >
            The digital world is full of opportunities, but finding the right web solution can be challenging. That’s where we come in. <br /> From building seamless websites and automating processes to crafting personalized online experiences, <br /> we provide innovative solutions tailored to your unique needs. Let us help you unlock <br /> the full potential of the web for your business or personal project.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-8 mt-10">
            {serviceData.map(({ icon, title, disc }, index) => (
              <div
                key={index}
                className="border shadow-md hover:shadow-lg rounded-sm"
              >
                <div className="relative group  p-8">
                  <div className="relative flex justify-center">
                    <img className="w-[70px]" src={icon} alt="" />
                  </div>
                  <h1
                    style={{ fontFamily: "Ubuntu,sans-serif" }}
                    className="flex justify-center items-center text-center text-xl uppercase my-5"
                  >
                    {title}
                  </h1>
                  <p className="text-start text-md">{disc}</p>
                  <hr className="hr-animation absolute top-0 left-0 right-0 h-[4px] transition-all duration-200 border-[#5A287F] bg-[#5A287F] z-10 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* ************************** Demo Projects Section *************************************** */}
          <DemoProjects/>
         {/* ************************** FUll Scale Section *************************************** */}
        <OSFullScale/>
        {/* ************************** Testimonial Section *************************************** */}
        <Testimonials />
        {/* ************************** Content Section *************************************** */}
        <div className="mt-20">
          <HomeContact />
        </div>
      </div>
    </div>
  );
};

export default WebAppsService;
