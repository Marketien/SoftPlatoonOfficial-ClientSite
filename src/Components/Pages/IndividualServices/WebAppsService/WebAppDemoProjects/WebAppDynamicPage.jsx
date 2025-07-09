import img1 from "../../../../../assets/Images/dynamic-page-banner-1.png";
import Breadcrumb from "../../../../Hooks/Breadcrumb/Breadcrumb";
import img2 from "../../../../../assets/RecentPosts/Demo_School/1.png";
import icon1 from "../../../../../assets/Icons/checked.png";
import icon2 from "../../../../../assets/Icons/cancel.png";
import icon3 from "../../../../../assets/OurServices/Business-Automation-Logo.png";
import icon4 from "../../../../../assets/OurServices/E-commerce-Platform-Logo.png";
import icon5 from "../../../../../assets/OurServices/Employee-Management-Logo.png";
import icon6 from "../../../../../assets/OurServices/Data-Driven-Logo.png";
import { Link } from "react-router-dom";
import SecureSuccess from "../../../../Shared/HomeSection/SecureSuccess/SecureSuccess";

const rightTika = [
  { title: "Determine marketing gaps" },
  { title: "Expand your reach" },
  { title: "Improve audience targeting" },
  { title: "Save time, money and resources" },
  { title: "Increase traffic, leads and conversions" },
];
const wrongTika = [
  { title: "Define clear goals" },
  { title: "Identify and fix digital marketing mistakes" },
  { title: "Grow your sales pipeline" },
  { title: "Leverage available marketing channels" },
  { title: "Outperform your competitors" },
];

const serviceData = [
  {
    icon: icon3,
    title: "Business Process Automation",
    disc: "Streamline your day-to-day operations with tailored automation solutions. Whether it's managing workflows, handling repetitive tasks, or integrating various business tools, our solutions are designed to save time and boost productivity.",
  },
  {
    icon: icon4,
    title: "E-commerce Platform Development",
    disc: "Looking to expand your business online? We provide end-to-end e-commerce solutions, from user-friendly website design to secure payment integration and inventory management systems, ensuring a seamless shopping experience for your customers.",
  },
  {
    icon: icon5,
    title: "Employee Management System",
    disc: "Simplify HR processes with our comprehensive employee management solutions. Track attendance, manage payroll, monitor performance, and keep all your employee data organized in one secure platform.",
  },
  {
    icon: icon6,
    title: "Data-Driven Decision Making",
    disc: "Leverage your data for smarter decisions. Our analytics and reporting tools provide actionable insights through customized dashboards, enabling you to track performance, predict trends, and make informed choices for your business.",
  },
];

const WebAppDynamicPage = () => {
  return (
    <div className=" md:mt-[85px] sm: mt-[65px] pb-20 bg-white">
      {/* ---------------------------- Banner Section ----------------------------------- */}
      {/* image section  */}
      <div className="relative">
        <div className="relative">
          <img src={img1} alt="" />
        </div>
        <div className="absolute top-0 w-full bg-black opacity-40 inset-0" />
        <div className="text-white absolute inset-0 w-full flex justify-center items-center text-center">
          <div>
            <h1
              style={{ fontFamily: "Sumana, serif" }}
              className="uppercase text-3xl"
            >
              Demo School
            </h1>
            <p className=" mt-3 font-semibold text-lg">
              Genuine care for your web app project
            </p>
          </div>
        </div>
      </div>
      <Breadcrumb />
      {/* main content section  */}
      <div
        style={{ fontFamily: "Ubuntu,sans-serif" }}
        className="lg:max-w-5xl md:max-w-3xl sm: max-w-sm px-4 mx-auto "
      >
        {/* What We Want section-------------------------------------------------------------------------  */}
        <div className="mt-20">
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-4xl mb-1"
          >
            You Know What You
            <span className="text-purple-800"> Want</span>
          </h1>
          <p className="text-lg mb-5 text-purple-800">
            We Ensure You Don’t Take the Wrong Turn En Route to Success
          </p>
          <div className="flex gap-5 p-2 leading-8 my-5">
            <div>
              <p>
                A recent report revealed that nearly 50 percent of businesses
                don’t have a clearly defined online marketing strategy to steer
                their digital marketing efforts. This means many market leaders
                are investing their time, money and resources in paid digital
                marketing services without a well-planned approach for goal
                setting and achievement, task prioritization, marketing
                direction and budget and resource allocation.
              </p>
            </div>
            <div>
              <img className="border-t-2" src={img2} alt="" />
            </div>
          </div>
          <p className="leading-8">
            Where are you now? Where do you want to be? What is the best
            approach to achieve your business goals? Where does your digital
            marketing budget go? Our digital strategy company addresses these
            questions to help you generate lucrative online marketing ideas and
            get you to your desired destination. <br />
            Let us assist you in building a robust digital marketing strategy
            framework for your brand. Get your digital marketing campaign moving
            with Thrive Internet Marketing Agency’s marketing strategy services.
          </p>
        </div>
        {/* Strategy section ----------------------------------------------------------------------- */}
        <div className="mt-20">
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-4xl mb-1"
          >
            Why You Need to Start With
            <span className="text-purple-800"> Strategy</span>
          </h1>
          <p className="text-lg mb-5 text-purple-800">
            Uncover Market Opportunities and Increase Your Revenue
          </p>
          <span className="mb-2 leading-8">
            Marketing your brand without an internet marketing strategy or using
            an inappropriate online marketing plan is a surefire way to lose
            money, waste time and get <br />
            In today’s digital world, growing a business comes with many
            challenges and opportunities that demand different web marketing
            strategies and solutions. A digital marketing strategy that has
            worked for a specific audience segment may not be the best approach
            for another. <br /> Likewise, internet marketing strategies that
            yielded positive results a year ago may not generate the same
            results today. All too often, outdated and unfocused online
            marketing strategies turn profitable businesses into an also-ran.
            Does your brand have a clear-cut digital marketing strategy? Don’t
            miss out on opportunities to boost your digital performance. Now’s
            the time to invest in marketing strategy services and take your
            digital success to the next level.
          </span>
          {/* ---------------------------------------------- */}
          <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-8 my-5 ">
            {/* rightTika section  */}
            <div className="relative">
              <div className="ralative shadow-lg rounded-2xl border-t-[50px] border-b-[10px] bg-[#5A287F] border-[#5A287F]">
                <div className=" py-5 px-3 bg-white rounded-t-2xl rounded-b-2xl leading-8">
                  {rightTika.map(({ title }, index) => (
                    <div key={index}>
                      <p className="flex gap-2 items-center">
                        <span>
                          <img className="w-5" src={icon1} alt="" />
                        </span>
                        <span>{title}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="absolute top-3 left-14 text-white">
                  A Concrete Digital Marketing Strategy Allows You To:
                </h1>
              </div>
            </div>
            {/* wrong section  */}
            <div className="relative">
              <div className="ralative shadow-lg rounded-2xl border-t-[50px] border-b-[10px] bg-[#84207E] border-[#84207E]">
                <div className=" py-5 px-3 bg-white rounded-t-2xl rounded-b-2xl leading-8">
                  {wrongTika.map(({ title }, index) => (
                    <div key={index}>
                      <p className="flex gap-2 items-center">
                        <span>
                          <img className="w-5" src={icon2} alt="" />
                        </span>
                        <span>{title}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="absolute top-3 left-4 text-center text-white">
                  Without A Well-Defined Online Marketing Strategy, You Fail To:
                </h1>
              </div>
            </div>
          </div>
          <p className="leading-8">
            Jumping straight into execution without a well-structured internet
            marketing strategy is one of the biggest mistakes you could ever
            make in running your business.
            <br />
            Eliminate the frustration and confusion in optimizing your web
            processes and overall performance. Partner with our marketing
            strategy company and take advantage of our custom digital strategy
            services.
          </p>
        </div>
        {/*  Master Plan button section-------------------------------------------------------------------------  */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/our-services/web-app-Services/web-app-demos"
            className="px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
          >
            Lets Build Your Master Plan
          </Link>
        </div>
        {/* Clear Path section-------------------------------------------------------------------------  */}
        <div className="mt-20">
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-4xl mb-1"
          >
            Obstacles Along the Way to
            <span className="text-purple-800"> Clear Path</span>
          </h1>
          <p className="text-lg mb-5 text-purple-800">
            Define Your Long-term Goals and Achieve Them
          </p>
          <span className="mb-2 leading-8">
            Digital marketing strategy development is the process of creating
            roadmaps and action plans that guide business owners and marketers
            in achieving their brand objectives. To secure a competitive
            position in the online marketplace, every industry leader must have
            a definitive internet marketing plan to carry on operations and hit
            business goals. <br />
            Many marketers, however, get right into search engine marketing
            (SEM) without a concrete marketing strategy plan. This is a bad
            move, as the adage goes: “Failing to plan is planning to fail.”
            Without a digital marketing plan, your search engine optimization
            (SEO) and other digital marketing efforts will struggle to get off
            the ground, and you won’t see the return on investment (ROI) you’re
            hoping for.
          </span>
          <div className="mt-10">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/X8ipUgXH6jw?si=46B9agyF3_zQ8F9H"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p className="mt-5 leading-8">
            Discover how our digital strategy company can help you better
            understand your web optimization needs, technical processes and
            organic traffic growth. Get in touch with a marketing strategy
            consultant and let us create an online marketing plan that suits
            your brand and drives real results.
          </p>
        </div>
        {/* service section ---------------------------------------------------------------------------- */}
        <div className="mt-20">
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-4xl mb-1"
          >
            Considers Your Unique
            <span className="text-purple-800">Industry</span>
          </h1>
          <p className="text-lg mb-5 text-purple-800">
            Choose a Reliable Firm That Maps Out Every Step
          </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-8 mt-5">
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
                  <p className="text-center text-md">{disc}</p>
                  <hr className="hr-animation absolute top-0 left-0 right-0 h-[4px] transition-all duration-200 border-[#5A287F] bg-[#5A287F] z-10 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Secure the Success ---------------------------------------------------------------------------- */}
        <SecureSuccess />
        {/*  Contact Us button section-------------------------------------------------------------------------  */}
        <div className="flex justify-center">
          <Link
            to="/our-services/web-app-Services/web-app-demos"
            className="px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
          >
            Want A Second opinion? Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebAppDynamicPage;
