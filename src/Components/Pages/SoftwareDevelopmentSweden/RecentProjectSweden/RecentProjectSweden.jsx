import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/RecentPosts/AccountManagement/1.png";
import img2 from "../../../../assets/RecentPosts/AccountManagement/9.png";
import img3 from "../../../../assets/RecentPosts/AccountManagement/12.png";
import img4 from "../../../../assets/RecentPosts/AccountManagement/16.png";
import img5 from "../../../../assets/RecentPosts/AccountManagement/24.png";
import img6 from "../../../../assets/RecentPosts/AccountManagement/27.png";
import img7 from "../../../../assets/RecentPosts/AccountManagement/30.png";
import img8 from "../../../../assets/RecentPosts/AccountManagement/32.png";
import img9 from "../../../../assets/RecentPosts/Erp/1.png";
import img10 from "../../../../assets/RecentPosts/Erp/2.png";
import img11 from "../../../../assets/RecentPosts/Erp/3.png";
import img12 from "../../../../assets/RecentPosts/Erp/4.png";
import img13 from "../../../../assets/RecentPosts/Erp/5.png";
import img14 from "../../../../assets/RecentPosts/Movies/1.png";
import img15 from "../../../../assets/RecentPosts/Movies/2.png";
import img16 from "../../../../assets/RecentPosts/Movies/3.png";
import img17 from "../../../../assets/RecentPosts/Movies/4.png";
import img18 from "../../../../assets/RecentPosts/Movies/5.png";
import img19 from "../../../../assets/RecentPosts/Movies/6.png";
import img20 from "../../../../assets/RecentPosts/Movies/7.png";
import img21 from "../../../../assets/RecentPosts/Movies/8.png";
import img22 from "../../../../assets/RecentPosts/Pos/1.png";
import img23 from "../../../../assets/RecentPosts/Pos/2.png";
import img24 from "../../../../assets/RecentPosts/Pos/4.png";
import img25 from "../../../../assets/RecentPosts/Pos/7.png";
import img26 from "../../../../assets/RecentPosts/Pos/8.png";
import img27 from "../../../../assets/RecentPosts/Pos/12.png";
import img28 from "../../../../assets/RecentPosts/Pos/18.png";
import img29 from "../../../../assets/RecentPosts/Pos/31.png";

const RecentProjectSweden = () => {
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

  const accountMng = [
    {
      image: img1,
      title: "image 1",
    },
    {
      image: img2,
      title: "image 2",
    },
    {
      image: img3,
      title: "image 3",
    },
    {
      image: img4,
      title: "image 4",
    },
    {
      image: img5,
      title: "image 5",
    },
    {
      image: img6,
      title: "image 6",
    },
    {
      image: img7,
      title: "image 7",
    },
    {
      image: img8,
      title: "image 8",
    },
  ];
  const erpMng = [
    {
      image: img9,
      title: "image 1",
    },
    {
      image: img10,
      title: "image 2",
    },
    {
      image: img11,
      title: "image 3",
    },
    {
      image: img12,
      title: "image 4",
    },
    {
      image: img13,
      title: "image 5",
    },
  ];
  const movies = [
    {
      image: img14,
      title: "image 1",
    },
    {
      image: img15,
      title: "image 2",
    },
    {
      image: img16,
      title: "image 3",
    },
    {
      image: img17,
      title: "image 4",
    },
    {
      image: img18,
      title: "image 5",
    },
    {
      image: img19,
      title: "image 6",
    },
    {
      image: img20,
      title: "image 7",
    },
    {
      image: img21,
      title: "image 8",
    },
  ];
  const pos = [
    {
      image: img22,
      title: "image 1",
    },
    {
      image: img23,
      title: "image 2",
    },
    {
      image: img24,
      title: "image 3",
    },
    {
      image: img25,
      title: "image 4",
    },
    {
      image: img26,
      title: "image 5",
    },
    {
      image: img27,
      title: "image 6",
    },
    {
      image: img28,
      title: "image 7",
    },
    {
      image: img29,
      title: "image 8",
    },
  ];

  return (
    <div
      className="px-3 py-5 lg:max-w-6xl md:max-w-3xl
       sm: max-w-sm mx-auto md:text-start sm: text-center"
    >
      <h1
        style={{ fontFamily: "Sumana, serif" }}
        className=" font-bold text-5xl mb-2 lg:mx-auto md:mx-4 sm: mx-4"
      >
        Recent <span className="text-purple-800">Projects</span>
      </h1>
      <h3
        style={{ fontFamily: "Ubuntu,sans-serif" }}
        className="text-lg my-5 lg:mx-auto md:mx-4 sm: mx-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab
        repellendus animi distinctio laudantium quia iusto, nostrum perferendis,
        id voluptatum, possimus beatae sunt voluptates porro qui a rerum quis
        nisi?
      </h3>
      {/* ------------------------  Carousel Section ------------------------ */}

      {/* Project Account Management>>>>>>>>>>>>>>>> */}
      <div className="my-10">
        <h1 className="mb-5 text-purple-800">Project Account Management:</h1>
        <Slider {...settings}>
          {accountMng.map(({ image, title }, index) => (
            <div key={index} className="relative px-2">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="relative w-full rounded-lg shadow-lg"
              />
              <p className="absolute bottom-0 right-0 bg-black text-white rounded-md px-3 py-1 w-[90px] text-center">
                {title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* ERP Management>>>>>>>>>>>>>>>> */}
      <div className="my-10">
        <h1 className="mb-5 text-purple-800">Project ERP:</h1>
        <Slider {...settings}>
          {erpMng.map(({ image, title }, index) => (
            <div key={index} className="relative px-2">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="relative w-full rounded-lg shadow-lg"
              />
              <p className="absolute bottom-0 right-0 bg-black text-white rounded-md px-3 py-1 w-[90px] text-center">
                {title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* Movie Site>>>>>>>>>>>>>>>> */}
      <div className="my-10">
        <h1 className="mb-5 text-purple-800">Project Movie Site:</h1>
        <Slider {...settings}>
          {movies.map(({ image, title }, index) => (
            <div key={index} className="relative px-2">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="relative w-full rounded-lg shadow-lg"
              />
              <p className="absolute bottom-0 right-0 bg-black text-white rounded-md px-3 py-1 w-[90px] text-center">
                {title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* Project Pos >>>>>>>>>>>>>>>> */}
      <div className="my-10">
        <h1 className="mb-5 text-purple-800">Project POS:</h1>
        <Slider {...settings}>
          {pos.map(({ image, title }, index) => (
            <div key={index} className="relative px-2">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="relative w-full rounded-lg shadow-lg"
              />
              <p className="absolute bottom-0 right-0 bg-black text-white rounded-md px-3 py-1 w-[90px] text-center">
                {title}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Load More Button --------------- */}
      <div className="flex justify-center mt-[30px]">
        <button
          className="border-2 border-purple-900 hover:border-purple-500 
            text-purple-900 hover:text-purple-500 hover:bg-gray-100
            rounded-sm px-8 py-2 text-lg font-semibold uppercase"
        >
          <Link to="https://wa.me/8801540380460">
            {" "}
            Start Your Custom Software{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RecentProjectSweden;
