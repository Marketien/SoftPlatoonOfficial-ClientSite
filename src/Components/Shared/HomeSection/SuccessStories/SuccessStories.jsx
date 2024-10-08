import './SuccessStories.css'
import img1 from  '../../../../../public/Images/story1.png' ;
import img2 from  '../../../../../public/Images/story2.png' ;
import img3 from  '../../../../../public/Images/story3.png' ;
import img4 from  '../../../../../public/Images/story4.png' ;
import img5 from  '../../../../../public/Images/story5.png' ;
import img6 from  '../../../../../public/Images/story6.png' ;
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';

const story =[
    {
        image: img1,
        title:"Innovative Software Products for a Global Leader in Image Processing"
    },
    {
        image: img2,
        title:"Complex Semantic Search Engine to Drive High R&D ROI"
    },
    {
        image: img3,
        title:"BI Implementation for 200 Healthcare Centers"
    },
    {
        image: img4,
        title:"Scalable Azure-Based Software Product for vCIO Service Management"
    },
    {
        image: img5,
        title:"Data Analytics System Enabling Cross Analysis of 30,000 Attributes and 100x Faster Reporting"
    },
    {
        image: img6,
        title:"Web Product For Automated Bond Portfolio Management"
    },
]

const SuccessStories = () => {

    const [showAllData , setShowAllData] = useState(4);

    const handleLoadMore =() =>{
        setShowAllData(story.length);
    }

  return (
    <div className="bg-white py-[180px]  ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:px-7 sm: px-4"
      >
        <h1
          data-aos="fade-right"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          Success
          <span className="text-purple-900 ms-2 "> Stories</span>
        </h1>
        {/* accordion div  */}
        <div
          data-aos="fade-right"
          style={{ fontFamily: "Ubuntu,serif" }}
          className="mt-10 grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5"
        >
{
story.slice(0, showAllData).map(({image, title}, index) =>(
        <div key={index} className='relative bg-white rounded-sm shadow-md hover:shadow-lg pb-8'>
            <div className='relative overflow-hidden h-[200px]'>
            <figure className="zoom-effect">
            <img className='fiterimg w-full h-[200px]' src={image} alt="" />
            </figure>
            </div>
            <div className='px-3 pb-3'>
            <h1 className="text-2xl my-5 ">{title}</h1>
            <button
              className="absolute bottom-2 left-2 flex items-center gap-1 border-2 border-purple-900 hover:border-purple-500 
            text-white hover:text-purple-500 bg-purple-900 hover:bg-gray-100
            rounded-sm px-8 py-1 text-lg font-semibold uppercase"
            >
              Details
            <IoIosArrowRoundForward size={25} />
            </button>
            </div>
        </div>
    ))
}
        </div>
{/* Load More Button --------------- */}
<div className="flex justify-center mt-10">
          {showAllData < story.length && (
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

export default SuccessStories;
