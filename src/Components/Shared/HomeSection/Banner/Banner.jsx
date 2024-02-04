import "./Banner.css";
import { useEffect, useState } from "react";
import banner1 from "../../../../../public/Images/Banner-1.jpg";
import banner2 from "../../../../../public/Images/Banner-2.jpg";
import banner3 from "../../../../../public/Images/Banner-3.jpg";
import banner4 from "../../../../../public/Images/Banner-4.jpg";
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
          className=" lg:w-full lg:h-screen sm: h-[700px] bg-[#720455]"
          src={banner1}
          alt=""
          style={{ display: currentBanner === 1 ? "block" : "none" }}
        />
        <img
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-[#720455]"
          src={banner2}
          alt=""
          style={{ display: currentBanner === 2 ? "block" : "none" }}
        />
        <img
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-[#720455]"
          src={banner3}
          alt=""
          style={{ display: currentBanner === 3 ? "block" : "none" }}
        />
        <img
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-[#720455]"
          src={banner4}
          alt=""
          style={{ display: currentBanner === 4 ? "block" : "none" }}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50" />
      {/* banner information section  */}
      <div className="bannerInfo text-white text-center w-full">
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
          className="ActionSpan font-light lg:bottom-[47px] md:bottom-[47px] sm: bottom-[84px]"
        >
          Action
        </span>
      </div>
    </div>
  );
};

export default Banner;
