import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";


const HomeCountUp = () => {

  Aos.init();

  return (
    <div
      style={{ fontFamily: "Open Sans, sans-serif" }}
      className="my-[180px] lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
    >
      <div
      data-aos="fade-right"
      className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 lg:text-start md:text-center sm: text-center
        lg:gap-5 md:gap-20 sm: gap-20">
        <div className="lg:border-r-2 border-purple-300">
            <span className=" text-5xl font-semibold text-purple-900">
                <span><CountUp start={0} end={4} duration={2}/></span><span>+</span>
            </span>
          <h1 style={{ fontFamily: "Ubuntu,sans-serif" }}  className="text-xl text-gray-500 mt-2">Years of Expertise</h1>
        </div>
        <div className="lg:border-r-2 border-purple-300">
            <span className="text-5xl font-semibold text-purple-900">
                <span><CountUp start={0} end={20} duration={2}/></span><span>+</span>
            </span>
          <h1 style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl text-gray-500 mt-2">IT Professionals</h1>
        </div>
        <div className="lg:border-r-2 border-purple-300">
            <span className="text-5xl font-semibold text-purple-900">
                <span><CountUp start={0} end={230} duration={2}/></span><span>+</span>
            </span>
          <h1 style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl text-gray-500 mt-2">Success Stories</h1>
        </div>
        <div>
            <span className="text-5xl font-semibold text-purple-900">
                <span><CountUp start={0} end={15} duration={2}/></span><span>+</span>
            </span>
          <h1 style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl text-gray-500 mt-2">Industries Covered</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCountUp;
