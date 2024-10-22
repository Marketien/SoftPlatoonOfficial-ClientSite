import "./Section1.css";
import logo1 from "../../../../assets/Client Logo File/abroad9.png";
import logo2 from "../../../../assets/Client Logo File/abroad1.png";
import logo3 from "../../../../assets/Client Logo File/abroad2.png";
import logo4 from "../../../../assets/Client Logo File/abroad3.png";
import logo5 from "../../../../assets/Client Logo File/abroad4.png";
import logo6 from "../../../../assets/Client Logo File/abroad5.png";
import logo7 from "../../../../assets/Client Logo File/abroad6.png";
import logo8 from "../../../../assets/Client Logo File/abroad7.png";
import logo9 from "../../../../assets/Client Logo File/abroad8.png";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1 = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-down" className="bg-white py-[50px] ">
      <div
        className=" my-[120px] lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-8"
      >
        <Slider ref={sliderRef} {...settings}>
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo2} alt="" />
          <img className=" sponseredLogo" src={logo3} alt="" />
          <img className=" sponseredLogo" src={logo4} alt="" />
          <img className=" sponseredLogo" src={logo5} alt="" />
          <img className=" sponseredLogo" src={logo6} alt="" />
          <img className=" sponseredLogo" src={logo7} alt="" />
          <img className=" sponseredLogo" src={logo8} alt="" />
          <img className=" sponseredLogo" src={logo9} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Section1;
