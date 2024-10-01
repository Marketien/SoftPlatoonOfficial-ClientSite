import "./Banner.css";
import { useEffect, useState } from "react";
import banner1 from "../../../../../public/Images/a-3d-render-of-a-software-development-environment--4IjFUU9vR0KpGIE3cXgQMg-fLOzlBifRIWgg1V0nkGmAQ.jpeg";
import banner2 from "../../../../../public/Images/a-3d-render-of-a-software-development-scene-there--2MQ1-NpBSLWeevz8VVtm_w-fLOzlBifRIWgg1V0nkGmAQ.jpeg";
import banner3 from "../../../../../public/Images/a-3d-render-of-a-software-development-workspace-th-7mWCpoyrQL-TzcfSkq0QDQ-fLOzlBifRIWgg1V0nkGmAQ.jpeg";
import banner4 from "../../../../../public/Images/a-3d-render-of-a-software-development-workspace-th-YuEotx1cSk-ZREBRjRxXwg-fLOzlBifRIWgg1V0nkGmAQ.jpeg";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next banner index
      const nextBanner = (currentBanner % 4) + 1;
      setCurrentBanner(nextBanner);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentBanner]);
  return (
    <div className="relative">
      {/* bannerImages section  */}
      <div className=" lg:mt-[75px] md:mt-[120px] sm: mt-[50px]">
        <img
          className="bannerImage lg:w-full lg:h-screen sm: h-[700px] bg-[#5A287F]"
          src={banner1}
          alt=""
          style={{ display: currentBanner === 1 ? "block" : "none" }}
        />
        <img
          className="bannerImage lg:w-full lg:h-screen  sm: h-[700px] bg-[#5A287F]"
          src={banner2}
          alt=""
          style={{ display: currentBanner === 2 ? "block" : "none" }}
        />
        <img
          className="bannerImage lg:w-full lg:h-screen  sm: h-[700px] bg-[#5A287F]"
          src={banner3}
          alt=""
          style={{ display: currentBanner === 3 ? "block" : "none" }}
        />
        <img
          className="bannerImage lg:w-full lg:h-screen  sm: h-[700px] bg-[#5A287F]"
          src={banner4}
          alt=""
          style={{ display: currentBanner === 4 ? "block" : "none" }}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-10" />
      {/* banner information section  */}
      <div className="bannerInfo text-white text-center w-full lg:top-[35%] md:top-[35%] sm: top-[0%]">
        <h1 style={{ fontFamily: "Sumana,serif" }} className="h1">
          Software Consulting and Development
        </h1>
        <p
          style={{ fontFamily: "Open Sans,sans-serif" }}
          className="text-3xl  font-light mt-[20px]"
        >
          we
          <span className="typeAnimationSpan">
            <TypeAnimation
              sequence={["Drive", 1500, "Safeguard", 1500, "Encourage", 1500]}
              style={{ fontSize: "30px", width: "100%", height: "100%" }}
              repeat={Infinity}
            />
          </span>
          digital success
        </p>
        <span
          style={{ fontFamily: "Open Sans,sans-serif" }}
          className="ActionSpan font-light  lg:bottom-[47px] md:bottom-[47px] sm: bottom-[84px]"
        >
          Action
        </span>
      </div>
    </div>
  );
};

export default Banner;
