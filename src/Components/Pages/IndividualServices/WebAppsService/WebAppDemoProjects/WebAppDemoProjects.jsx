import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import img1 from "../../../../../assets/RecentPosts/Demo_School/1.png";
import img2 from "../../../../../assets/RecentPosts/Demo_School/3.png";
import img3 from "../../../../../assets/RecentPosts/Demo_School/4.png";
import img4 from "../../../../../assets/RecentPosts/Demo_School/6.png";
import img5 from "../../../../../assets/RecentPosts/Demo_School/7.png";
import img6 from "../../../../../assets/RecentPosts/Demo_Restaurant/1.png";
import img7 from "../../../../../assets/RecentPosts/Demo_Restaurant/3.png";
import img8 from "../../../../../assets/RecentPosts/Demo_Restaurant/4.png";
import img9 from "../../../../../assets/RecentPosts/Demo_Restaurant/8.png";
import img10 from "../../../../../assets/RecentPosts/Demo_Restaurant/9.png";
import img11 from "../../../../../assets/RecentPosts/Demo_Hospital.png";
import img12 from "../../../../../assets/RecentPosts/Demo-Umrah.png";
import img13 from "../../../../../assets/RecentPosts/Demo_Consultancy/1.png";
import img14 from "../../../../../assets/RecentPosts/Demo_Consultancy/2.png";
import img15 from "../../../../../assets/RecentPosts/Demo_Consultancy/3.png";
import img16 from "../../../../../assets/RecentPosts/Demo_Consultancy/4.png";
import img17 from "../../../../../assets/RecentPosts/Demo-E-Commerce.png";
import img18 from "../../../../../assets/RecentPosts/Movies/1.png";
import img19 from "../../../../../assets/RecentPosts/Movies/2.png";
import img20 from "../../../../../assets/RecentPosts/Movies/3.png";
import img21 from "../../../../../assets/RecentPosts/Movies/4.png";
import img22 from "../../../../../assets/RecentPosts/Movies/5.png";
import img23 from "../../../../../assets/RecentPosts/Movies/6.png";
import img24 from "../../../../../assets/RecentPosts/Movies/7.png";
import img25 from "../../../../../assets/RecentPosts/Movies/8.png";
import { Link } from "react-router-dom";


const DemoSchool = [
  {
    image: img1,
    title: "image 1/1",
  },
  {
    image: img2,
    title: "image 1/2",
  },
  {
    image: img3,
    title: "image 1/3",
  },
  {
    image: img4,
    title: "image 1/4",
  },
  {
    image: img5,
    title: "image 1/5",
  },
];
const DemoRestaurant = [
  {
    image: img6,
    title: "image 1/5",
  },
  {
    image: img7,
    title: "image 1/2",
  },
  {
    image: img8,
    title: "image 1/3",
  },
  {
    image: img9,
    title: "image 1/4",
  },
  {
    image: img10,
    title: "image 1/5",
  },
];
const DemoConsultancy = [
  {
    image: img13,
    title: "image 1/5",
  },
  {
    image: img14,
    title: "image 1/2",
  },
  {
    image: img15,
    title: "image 1/3",
  },
  {
    image: img16,
    title: "image 1/4",
  },
];
const DemoMovies = [
  {
    image: img18,
    title: "image 1/8",
  },
  {
    image: img19,
    title: "image 2/8",
  },
  {
    image: img20,
    title: "image 3/8",
  },
  {
    image: img21,
    title: "image 4/8",
  },
  {
    image: img22,
    title: "image 5/8",
  },
  {
    image: img23,
    title: "image 6/8",
  },
  {
    image: img24,
    title: "image 7/8",
  },
  {
    image: img25,
    title: "image 8/8",
  },
];

const WebAppDemoProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="mt-20">
      <h1
        style={{ fontFamily: "Sumana, serif" }}
        className="font-bold text-5xl mb-2"
      >
        Our Demo
        <span className="text-purple-800 ms-2">Projects</span>
      </h1>
      <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-lg my-5">
        The digital world is full of opportunities, but finding the right web
        solution can be challenging. That’s where we come in. <br /> From
        building seamless websites and automating processes to crafting
        personalized online experiences, <br /> we provide innovative solutions
        tailored to your unique needs. Let us help you unlock <br /> the full
        potential of the web for your business or personal project.
      </p>
      <div>
        {/* ------------------------  Carousel Section ------------------------ */}
        <div className="lg:max-w-5xl md:max-w-3xl sm: max-w-sm md:px-0 sm: px-4 mx-auto ">
          {/* Demo School>>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo School:
            </h1>
            <Slider {...settings}>
              {DemoSchool.map(({ image, title }, index) => (
                <div key={index} className="relative px-2">
                  <img
                    src={image}
                    alt="Demo-project-image"
                    className="relative w-full rounded-lg shadow-lg"
                  />
                  <p
                    className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px]  text-sm text-center"
                  >
                    {title}
                  </p>
                </div>
              ))}
            </Slider>
            {/* V See more.text */}
            <div className="mt-10 flex justify-center">
              <Link
                to="/our-services/web-app-Services/web-app-demos"
                className="px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
              >
                See more Details...
              </Link>
            </div>
          </div>

          {/* Demo Restaurant>>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo Restaurant:
            </h1>
            <Slider {...settings}>
              {DemoRestaurant.map(({ image, title }, index) => (
                <div key={index} className="relative px-2">
                  <img
                    src={image}
                    alt="Demo-project-image"
                    className="relative w-full rounded-lg shadow-lg"
                  />
                  <p
                    className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px] text-sm text-center"
                  >
                    {title}
                  </p>
                </div>
              ))}
            </Slider>
            {/* V See more.text */}
            <div className="mt-10 flex justify-center">
              <Link
                to="/"
                className="px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
              >
                See more Details...
              </Link>
            </div>
          </div>

          {/* Demo Hospital>>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo Hospital:
            </h1>
            <div className="relative px-2">
              <img
                src={img11}
                alt="Demo-project-image"
                className="relative w-full rounded-lg shadow-lg"
              />
              <p
                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px] text-sm text-center"
              >
                image 1/1
              </p>
            </div>
          </div>

          {/* Demo Umrah>>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo Umrah:
            </h1>
            <div className="relative px-2">
              <img
                src={img12}
                alt="Demo-project-image"
                className="relative w-full rounded-lg shadow-lg"
              />
              <p
                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px] text-sm text-center"
              >
                image 1/1
              </p>
            </div>
          </div>

          {/* Demo Consultancy>>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo Consultancy:
            </h1>
            <Slider {...settings}>
              {DemoConsultancy.map(({ image, title }, index) => (
                <div key={index} className="relative px-2">
                  <img
                    src={image}
                    alt="Demo-project-image"
                    className="relative w-full rounded-lg shadow-lg"
                  />
                  <p
                    className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px] text-sm text-center"
                  >
                    {title}
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Demo E-Commerce >>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo E-Commerce:
            </h1>
            <div className="relative px-2">
              <img
                src={img17}
                alt="Demo-project-image"
                className="relative w-full rounded-lg shadow-lg"
              />
              <p
                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px] text-sm text-center"
              >
                image 1/1
              </p>
            </div>
          </div>

          {/* Demo Movies>>>>>>>>>>>>>>>> */}
          <div data-aos="zoom-in" className="my-10">
            <h1
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="mb-5 text-purple-800 text-xl font-semibold"
            >
              Demo Movies:
            </h1>
            <Slider {...settings}>
              {DemoMovies.map(({ image, title }, index) => (
                <div key={index} className="relative px-2">
                  <img
                    src={image}
                    alt="Demo-project-image"
                    className="relative w-full rounded-lg shadow-lg"
                  />
                  <p
                    className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-sm 
                  px-3 py-1 w-[90px]  text-sm text-center"
                  >
                    {title}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebAppDemoProjects;
