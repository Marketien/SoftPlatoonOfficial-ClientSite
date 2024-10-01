import Banner from "../../Shared/HomeSection/Banner/Banner";
import HomeCountUp from "../../Shared/HomeSection/HomeCountUp/HomeCountUp";
import Section0 from "../../Shared/HomeSection/Section-0/Section0";
import Section1 from "../../Shared/HomeSection/Section-1/Section1";
import Section2 from "../../Shared/HomeSection/Section-2/Section2";
import EveryPart from "../../Shared/HomeSection/Section-3/EveryPart";
import Section4 from "../../Shared/HomeSection/Section-4/Section4";
import Section6 from "../../Shared/HomeSection/Section-6/Section6";
import SolutionDeliver from "../../Shared/HomeSection/SolutionDeliver/SolutionDeliver";
import TestingQA from "../../Shared/Navbar/TestingQA/TestingQA";

const Home = () => {
  return (
    <>
      <Banner />
     
      {/*----------------- Home CountUp Section  -----------------*/}
      <HomeCountUp/>
      {/*----------------- Explore Our Popular Service -----------------*/}
      <Section0 />
      {/* ---------------Explore Our Offering -------------*/}
     <Section2 />
      {/* ---------------Solution We Deliver -------------*/}
      <SolutionDeliver/>
      {/*--------------- Every Part of Your IT Ecosystem.----------------- */}
      {/* <Section3 /> */}
      <EveryPart/>
      {/*----------- Improve and Innovate ------------------*/}
      <Section4 />
      {/*----------------- PRICING PLAN------------- */}
      {/* <Section5 /> */}
      {/*---------------Testing & QA----------------  */}
      <TestingQA/>
      {/*---------------our client----------------  */}
      <Section6 />
      {/* ---------------Slider section --------------- */}
      <Section1 />
    </>
  );
};

export default Home;
