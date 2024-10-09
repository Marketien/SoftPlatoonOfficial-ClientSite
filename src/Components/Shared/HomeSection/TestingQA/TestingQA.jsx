import { BsCheckCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";


const TestingQA = () => {

    Aos.init();

  return (
    <div style={{ fontFamily: "Open Sans,sans-serif" }} className="bg-white py-[180px] ">
      <h1 
      data-aos="fade-down"
        style={{ fontFamily: "Sumana,serif" }}
      className="font-bold text-5xl text-center">
        Testing <span className="text-purple-900"> & QA</span>
      </h1>
      {/* infomation div  */}
      <div className="mt-14 lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4">
        <h1 
       data-aos="fade-down"
        className="text-center text-xl font-semibold">
          We offer full-range testing outsourcing services, can help to develop
          you QA or enhance the existing one, assist you in TCOE setup and
          evolution. We perform end-to-end testing of mobile web and desktop
          aplication at each stage of the development lifecycle
        </h1>
        {/* li div  */}
        <div 
        
       data-aos="fade-right"
        className="mt-10 font-semibold grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1">
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> QA Outsourcing
          </li>
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Usability Testing
          </li>
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> QA Consulting
          </li>
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Performance Testing
          </li>
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Security Testing
          </li>
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Test Automation
          </li>
          <li className="flex items-center text-lg mb-2">
            <BsCheckCircleFill className="me-2 text-[#5A287F]" /> Functional Testing
          </li>
        </div>
      </div>
    </div>
  );
};

export default TestingQA;
