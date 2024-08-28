import "./Section1.css";
import logo1 from "../../../../../public/Icons/Untitled-4-01.png";
import logo2 from "../../../../../public/Icons/Untitled-4-02.png";
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
    slidesToShow: 4,
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
    <div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="default-margin "
      >
        <Slider ref={sliderRef} {...settings}>
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
          <img className=" sponseredLogo" src={logo1} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Section1;
