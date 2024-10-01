import "./Section1.css";
import logo1 from "../../../../../public/Client Logo File/1Logo-Agrohut.png";
import logo2 from "../../../../../public/Client Logo File/2Logo-Naqwee.png";
import logo3 from "../../../../../public/Client Logo File/3Logo-Blu Eyes-01.png";
import logo4 from "../../../../../public/Client Logo File/4Logo-Hayat Curtains-01.png";
import logo5 from "../../../../../public/Client Logo File/5Logo-Opal.png";
import logo6 from "../../../../../public/Client Logo File/6Logo-Atlanta-01.png";
import logo7 from "../../../../../public/Client Logo File/7Logo-Snackza-01.png";
import logo8 from "../../../../../public/Client Logo File/8Logo-Degchi-Bari.png";
import logo9 from "../../../../../public/Client Logo File/9Kitchen-Asia-Updated-Logo-01.png";
import logo10 from "../../../../../public/Client Logo File/10Logo-File-Meetup-01.png";
import logo11 from "../../../../../public/Client Logo File/11Logo-Parents Kids-01.png";
import logo12 from "../../../../../public/Client Logo File/12Parkway Logo-01.png";
import logo13 from "../../../../../public/Client Logo File/13Logo-GLobal Knowledge-01.png";
import logo14 from "../../../../../public/Client Logo File/14Logo-Golden Hotel Group-01.png";
import logo15 from "../../../../../public/Client Logo File/15Logo-OJ Meat & Fish-01.png";
// import logo16 from "../../../../../public/Client Logo File/16Logo-Prescription Point-01.png";
import logo17 from "../../../../../public/Client Logo File/17Logo-South Indian FOod.png";
import logo18 from "../../../../../public/Client Logo File/18Logo-Titanium Holdings-01.png";
import logo19 from "../../../../../public/Client Logo File/19Logo-Yours-01.png";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  Aos.init();
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <div
        className=" my-[120px] lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
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
          <img className=" sponseredLogo" src={logo10} alt="" />
          <img className=" sponseredLogo" src={logo11} alt="" />
          <img className=" sponseredLogo" src={logo12} alt="" />
          <img className=" sponseredLogo" src={logo13} alt="" />
          <img className=" sponseredLogo" src={logo14} alt="" />
          <img className=" sponseredLogo" src={logo15} alt="" />
          <img className=" sponseredLogo" src={logo17} alt="" />
          <img className=" sponseredLogo" src={logo18} alt="" />
          <img className=" sponseredLogo" src={logo19} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Section1;
