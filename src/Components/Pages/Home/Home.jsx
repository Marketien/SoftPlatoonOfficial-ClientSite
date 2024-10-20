import Banner from "../../Shared/HomeSection/Banner/Banner";
import ExploreServices from "../../Shared/HomeSection/ExploreServices/ExploreServices";
import QuestionAnswer from "../../Shared/HomeSection/FAQ/QuestionAnswer";
import FeaturedInsights from "../../Shared/HomeSection/FeaturedInsights/FeaturedInsights";
import HomeContact from "../../Shared/HomeSection/HomeContact/HomeContact";
import HomeCountUp from "../../Shared/HomeSection/HomeCountUp/HomeCountUp";
import HomeTechnologies from "../../Shared/HomeSection/HomeTechnologies/HomeTechnologies";
import IndustryExpertise from "../../Shared/HomeSection/IndustryExpertise/IndustryExpertise";
import Section1 from "../../Shared/HomeSection/Section-1/Section1";
import Section2 from "../../Shared/HomeSection/Section-2/Section2";
import EveryPart from "../../Shared/HomeSection/Section-3/EveryPart";
import Section4 from "../../Shared/HomeSection/Section-4/Section4";
import Section6 from "../../Shared/HomeSection/Section-6/Section6";
import SecureSuccess from "../../Shared/HomeSection/SecureSuccess/SecureSuccess";
import SolutionDeliver from "../../Shared/HomeSection/SolutionDeliver/SolutionDeliver";
import SuccessStories from "../../Shared/HomeSection/SuccessStories/SuccessStories";
import TestingQA from "../../Shared/HomeSection/TestingQA/TestingQA";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      {/*----------------- Home CountUp Section  -----------------*/}
      <HomeCountUp />
      {/*----------------- Explore  Popular Service -----------------*/}
      <ExploreServices />
      {/* ----------------Explore  Offering -------------*/}
      <Section2 />
      {/* ---------------Solution  -------------*/}
      <SolutionDeliver />
      {/* ---------------  Industry  -------------*/}
      <IndustryExpertise  />
      {/*--------------- Every Part .----------------- */}
      {/* <Section3 /> */}
      <EveryPart />
      {/*--------------- Technologies ----------------- */}
      <HomeTechnologies />
      {/* ---------------Featured Insights -------------*/}
      <FeaturedInsights />
      {/* ---------------Secure the Success -------------*/}
      <SecureSuccess />
      {/* ---------------Success Stories -------------*/}
      <SuccessStories />
      {/*---------------- Improve and Innovate ------------------*/}
      <Section4 />
      {/*---------------- PRICING PLAN------------- */}
      {/* <Section5 /> */}
      {/* ---------------Slider section --------------- */}
      <Section1 />
      {/*---------------our client----------------  */}
      <Section6 />
      {/*---------------Testing & QA----------------  */}
      <TestingQA />
      {/* --------------- Frequently Asked Questions --------------- */}
      <QuestionAnswer />
      {/* --------------- Contact Us --------------- */}
      <HomeContact href="#contact" />
    </div>
  );
};

export default Home;
