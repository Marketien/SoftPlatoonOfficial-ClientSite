import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import user3 from "../../../../../public/Images/user-3.jpg";
import img1 from "../../../../../public/Client Logo File/Qalaat Al Khaleej-Logo-01.png";
import img2 from "../../../../../public/Client Logo File/abroad1.png";
import img3 from "../../../../../public/Client Logo File/abroad2.png";
import img4 from "../../../../../public/Client Logo File/abroad3.png";
import img5 from "../../../../../public/Client Logo File/abroad4.png";
import img6 from "../../../../../public/Client Logo File/abroad5.png";
import img7 from "../../../../../public/Client Logo File/abroad6.png";
import img8 from "../../../../../public/Client Logo File/abroad7.png";
import img9 from "../../../../../public/Client Logo File/abroad8.png";
import clientImg1 from "../../../../../public/Images/Unknownclientjpg.jpg";
import clientImg2 from "../../../../../public/Images/client1.jpg";
import clientImg3 from "../../../../../public/Images/client2.jpg";
import clientImg4 from "../../../../../public/Images/client3.jpg";
import clientImg5 from "../../../../../public/Images/client5.png";
import clientImg6 from "../../../../../public/Images/client4.png";
import clientImg7 from "../../../../../public/Images/client8.png";
import clientImg8 from "../../../../../public/Images/client9.png";
import rating from "../../../../../public/Images/rating.png";

const companies = [
  {
    img: img1,
    clientImg: clientImg1,
    companyName: "Qalaat Al Khaleej",
    clientName: "Mohammed Sawar Hossain",
    position: "Managing Director",
    ReviewText:
      "SoftPlatoon developers used the microservices approach to ensure our scalability; selected and implemented techs that guaranteed high availability and fault-tolerance. The new software performs stably even under heavy load, which helps provide high-quality user experience. SoftPlatoon proved to be a reliable tech partner.",
  },
  {
    img: img2,
    clientImg: clientImg2,
    companyName: "BOOKING MEIN Travel",
    clientName: "Demetrius Jackson",
    position: "CEO",
    ReviewText:
      "My experience with SoftPlatoon was seamless from start to finish. They took the time to understand my business needs and delivered a website that truly reflects my brand. I’ve received numerous compliments on the design!",
  },
  {
    img: img3,
    clientImg: clientImg3,
    companyName: "Vendigo",
    clientName: "Sarayu Kocharlakota",
    position: "Founder",
    ReviewText:
      "I was impressed by SoftPlatoon’s Developers innovative approach to my web application. They integrated cutting-edge technologies that improved performance and scalability. I’m excited about the future growth of my business thanks to their expertise!",
  },
  {
    img: img4,
    clientImg: clientImg4,
    companyName: "Omega Tour",
    clientName: "Abdul Aziz",
    position: "CEO",
    ReviewText:
      "SoftPlatoon went above and beyond to ensure my website met all my needs. They provided ongoing support after launch and even helped with SEO optimization. I’ve seen a noticeable increase in traffic and engagement!",
  },
  {
    img: img5,
    clientImg: clientImg5,
    companyName: "G0-GIVE COACH",
    clientName: "Bob Proctor",
    position: "CEO",
    ReviewText:
      "The team at SoftPlatoon was incredibly responsive throughout the entire development process. They were quick to address any questions I had and offered valuable suggestions that really enhanced the functionality of my site. Highly recommend!",
  },
  {
    img: img6,
    clientImg: clientImg6,
    companyName: "Vital Strandz",
    clientName: "MIchelle J. Borland",
    position: "Founder",
    ReviewText:
      "I worked with SoftPlatoon for my website redesign, and I couldn't be happier. Their team understood my vision and brought it to life with creativity and professionalism. The project was completed on time, and the end result exceeded my expectations!",
  },
  {
    img: img7,
    clientImg: clientImg1,
    companyName: "BILLY AUDREY",
    clientName: "Audrey Billy",
    position: "Founder",
    ReviewText:
      "I hired SoftPlatoon’s Developers for my e-commerce site, and the user experience has improved dramatically. Customers love the new layout and easy navigation. Sales have increased significantly since the launch, and I’m thrilled with the outcome!",
  },
  {
    img: img8,
    clientImg: clientImg7,
    companyName: "Become With Melva",
    clientName: "Melva  Farquharson",
    position: "Founder",
    ReviewText:
      "SoftPlatoon delivered my website ahead of schedule without compromising quality. Their commitment to timelines was remarkable, and I appreciate their attention to detail. It’s refreshing to work with someone so reliable!",
  },
  {
    img: img9,
    clientImg: clientImg8,
    companyName: "COOL AND DEADLY REGGEF",
    clientName: "Damon Young",
    position: "Founder",
    ReviewText:
      "I am blown away by how beautiful my new website looks! SoftPlatoon has a keen eye for design and truly captured my brand’s essence. I’m so proud to share it with my customers!",
  },
];

const Section6 = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  const [showAllData, setShowAllData] = useState(6);

  const handleLoadMore = () => {
    setShowAllData(companies.length);
  };

  return (
    <div className=" my-[180px] lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4">
      <h1
        data-aos="fade-down"
        style={{ fontFamily: "Sumana,serif" }}
        className="text-center text-5xl font-bold mb-5"
      >
        Our
        <span className="text-purple-900"> Clients</span>
      </h1>
      <h1
        data-aos="fade-down"
        style={{ fontFamily: "Open Sans,sans-serif" }}
        className=" text-xl text-center leading-8 font-semibold "
      >
        Since 2019. For millions of users. We transform businesses with powerful
        and adaptable
        <br /> digital solutions that satisfy the needs of today and unlock the
        opportunities of
        <br />
        tomorrow.
      </h1>

      <div
        data-aos="zoom-in"
        style={{ fontFamily: "Open Sans,sans-serif" }}
        className=" mt-[40px]"
      >
         {/* <<<<<<<<<<<<<<<<<<<< cards for large and medium device >>>>>>>>>>>>>>>>>>> */}
        <div className="lg:grid md:grid lg:grid-cols-1 md:grid-cols-1 sm: hidden gap-5 mt-10 ">
          {companies
            .slice(0, showAllData)
            .map(
              (
                {
                  img,
                  clientImg,
                  companyName,
                  clientName,
                  position,
                  ReviewText,
                },
                index
              ) => (
                <div
                  key={index}
                  className="w-full border-t-2 shadow-md hover:shadow-lg px-3 py-8 bg-white rounded-sm"
                >
                  <div className="flex gap-5 items-center">
                    {/* ---------company image ------------  */}
                    <div className="w-1/6">
                      <img className="w-[100px] mb-2" src={img} alt="" />
                      <h1 className="font-semibold hover:underline">
                        {companyName}
                      </h1>
                    </div>
                    {/* ---------------- other information ----------------- */}
                    <div className="relative w-3/4">
                      <div className="relative flex items-center  ">
                        <div className="flex  gap-2 mb-5">
                          <div>
                            <img
                              className="rounded-full w-[50px]"
                              src={clientImg}
                              alt=""
                            />
                          </div>
                          <div>
                            <h1 className="font-semibold">{clientName}</h1>
                            <p
                              style={{ fontFamily: "Ubuntu,sans-serif" }}
                              className="text-gray-500"
                            >
                              {position}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p style={{ fontFamily: "Ubuntu,sans-serif" }}>
                        {ReviewText}
                      </p>
                      <div className="absolute top-0 -right-10 ">
                        <img className="w-[120px]" src={rating} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
        {/* <<<<<<<<<<<<<<<<<<<< cards for small device >>>>>>>>>>>>>>>>>>> */}
        <div className="sm: grid lg:hidden md:hidden sm: grid-cols-1 gap-5 mt-10">
          {companies
            .slice(0, showAllData)
            .map(
              (
                {
                  img,
                  clientImg,
                  companyName,
                  clientName,
                  position,
                  ReviewText,
                },
                index
              ) => (
                <div key={index} className="shadow-md border-t-2 px-3 py-8 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <img className="w-[60px]" src={img} alt="" />
                    <img className="w-[90px] h-[30px]" src={rating} alt="" />
                  </div>
                  <h1 className="font-semibold underline">{companyName}</h1>
                  <div className="flex gap-2 my-5">
                    <div>
                      <img
                        className="rounded-full w-[50px]"
                        src={clientImg}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="font-semibold">{clientName}</h1>
                      <p
                        style={{ fontFamily: "Ubuntu,sans-serif" }}
                        className="text-gray-500"
                      >
                        {position}
                      </p>
                    </div>
                  </div>
                  <p style={{ fontFamily: "Ubuntu,sans-serif" }}>
                    {ReviewText}
                  </p>
                </div>
              )
            )}
        </div>
        {/* Load More Button --------------- */}
        <div className="flex justify-center mt-10">
          {showAllData < companies.length && (
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

export default Section6;
