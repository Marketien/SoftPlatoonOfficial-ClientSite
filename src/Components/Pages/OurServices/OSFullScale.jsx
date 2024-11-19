import './OurServices.css'
import icon1 from "../../../assets/OurServices/Business analysis.png";
import icon2 from "../../../assets/OurServices/UX and UI design.png";
import icon3 from "../../../assets/OurServices/Front-end development.png";
import icon4 from "../../../assets/OurServices/Back-end development.png";
import icon5 from "../../../assets/OurServices/Integration.png";
import icon6 from "../../../assets/OurServices/Testing and QA.png";
import icon7 from "../../../assets/OurServices/Help desk.png";
import icon8 from "../../../assets/OurServices/Continuous support and evolution.png";

const fullScaleeData = [
  {
    icon: icon1,
    title: "Business analysis",
    disc: "Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.",
  },
  {
    icon: icon2,
    title: "UX and UI design",
    disc: "We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys. Along the way, our UI designers join in to wrap the interface into a stylish cover.",
  },
  {
    icon: icon3,
    title: "Front-end development",
    disc: "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as React, NextJs etc.",
  },
  {
    icon: icon4,
    title: "Back-end development",
    disc: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in Node.js, PHP, Laravel etc.",
  },
  {
    icon: icon5,
    title: "Integration",
    disc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems.",
  },
  {
    icon: icon6,
    title: "Testing and QA",
    disc: "We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that.",
  },
  {
    icon: icon7,
    title: "Help desk",
    disc: "Providing L1, L2 and L3 support services, we deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app.",
  },
  {
    icon: icon8,
    title: "Continuous support and evolution",
    disc: "We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks.",
  },
];

const OSFullScale = () => {
  return (
    <div className="mt-32">
      <h1
        style={{ fontFamily: "Sumana, serif" }}
        className="font-bold text-5xl mb-2"
      >
        Full-Scale Web Development by{" "}
        <span className="text-purple-800">SoftPlatoon</span>
      </h1>
      <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-lg my-5">
        Throughout all web development services, SoftPlatoon adheres to a
        quality-first approach based on ISO 9001-certified quality management
        system. <br /> Our comprehensive security management program with robust
        security controls, <br /> policies and technologies is compliant with
        ISO 27001 regulations.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-8 mt-10">
        {fullScaleeData.map(({ icon, title, disc }, index) => (
          <div key={index} className='border shadow-md hover:shadow-lg rounded-sm'>
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
  );
};

export default OSFullScale;
