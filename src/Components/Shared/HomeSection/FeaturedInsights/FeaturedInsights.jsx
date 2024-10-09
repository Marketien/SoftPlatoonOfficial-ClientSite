import img1 from "../../../../../public/Images/is1.png";
import img2 from "../../../../../public/Images/is2.png";
import img3 from "../../../../../public/Images/is3.png";
import img4 from "../../../../../public/Images/is4.png";
import img5 from "../../../../../public/Images/is5.png";
import img6 from "../../../../../public/Images/is6.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
const featuredData = [
  {
    image: img1,
    service: "Digital Transformation",
    title:
      "Seeking to Elevate Insurance Customer Digital Experience? Here’s Where You Should Start",
    disc: "Securing the value-first customer experience improvement in insurance: planning, software to recognize client expectations, KPIs to measure success.",
  },
  {
    image: img2,
    service: "CRM",
    title: "Mortgage CRM: The Future of Loan Management",
    disc: "Get to know how a specialized mortgage CRM can increase your profits and boost team productivity.",
  },
  {
    image: img3,
    service: "Information Security",
    title:
      "In-House vs. Outsourced SOC: Finding the Right Cybersecurity Strategy",
    disc: "Find out why a SOC is a foundation of your company’s cybersecurity posture and explore the benefits and risks of an in-house and outsourced SOC",
  },
  {
    image: img4,
    service: "Information Security",
    title:
      "Why SOC 2 Compliance Is the Gold Standard of Security for SaaS Companies",
    disc: "Learn how to achieve SOC 2 compliance and find out why this status is a beacon of trust and credibility for SaaS companies’ clients.",
  },
  {
    image: img5,
    service: "Information Security",
    title:
      "BYOD Security Policy Best Practices: Safeguarding Employee Devices",
    disc: "Learn why a strong BYOD security policy is essential for remote and hybrid work and discover best practices for securing employee devices to protect your corporate data.",
  },
  {
    image: img6,
    service: "Information Security",
    title: "7 Web Application Risks You Can Reveal with Penetration Testing",
    disc: "Learn about penetration testing tactics for web application security and the most common cybersecurity risks they help prevent.",
  },
];

const FeaturedInsights = () => {
  Aos.init();
  const [showData, setShowData] = useState(3);

  const handleLoadMore = () => {
    setShowData(featuredData.length);
  };

  return (
    <div className="bg-white py-[180px] ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:px-7 sm: px-4"
      >
        <h1
          data-aos="fade-up"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          Featured
          <span className="text-purple-900 ms-2 "> Insights</span>
        </h1>

        <div
          data-aos="fade-up"
          style={{ fontFamily: "Sumana,serif" }}
          className="relative mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-6"
        >
          {featuredData.slice(0, showData).map(({ service, image, title, disc }, index) => (
            <div
              key={index}
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="relative bg-gray-100 px-3 py-3 rounded-sm shadow-lg hover:shadow-xl"
            >
              <div className="mb-5">
                <img src={image} alt="" />
              </div>
              <p className="text-sm text-purple-700 font-semibold uppercase mb-5 ">
                {service}
              </p>
              <h1
                style={{ fontFamily: "Open Sans,sans-serif" }}
                className="font-bold text-lg mb-3"
              >
                {title}
              </h1>
              <p className="pb-10">{disc}</p>
              <div
                title="Read More"
                className="absolute bottom-2 right-3 py-3 "
              >
                <button className="flex items-center gap-1 text-purple-900 hover:text-purple-300 rounded-sm ps-2">
                  <span>Read More</span>
                  <span>
                    <IoIosArrowRoundForward size={25} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button --------------- */}
        <div className="flex justify-center mt-20">
          {showData < featuredData.length && (
            <button
              onClick={handleLoadMore}
              className="border-2 border-purple-900 hover:border-purple-500 
            text-purple-900 hover:text-purple-500 hover:bg-gray-100
            rounded-sm px-8 py-2 text-lg font-semibold uppercase"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
