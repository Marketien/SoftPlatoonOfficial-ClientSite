import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";


const TabPanelInfo2 = () => {

    const [tabInfos, setInfos] = useState([]);

    useEffect(() => {
      fetch(" tabpanelinfo.json ")
        .then((res) => res.json())
        .then((data) => setInfos(data));
    }, []);
  
    const testingAndQAInfo = tabInfos.find(
      (info) => "TestingAndQA" in info
    );

    return (
        <div className="bg-white  w-full lg:h-full md:h-full sm: h-[850px] lg:p-0 md:p-0 sm: p-5 ">
        {testingAndQAInfo && (
          <div  style={{ fontFamily: "Open Sans,sans-serif" }}>
            <h2 className="font-bold text-2xl mt-8">
              {testingAndQAInfo.TestingAndQA.title}
            </h2>
            <p
              className="font-medium text-lg leading-8 mt-5"
            >
              {testingAndQAInfo.TestingAndQA.paragraph}
            </p>
            <ul className="font-medium text-lg leading-10 mt-5">
              {testingAndQAInfo.TestingAndQA.points.map(
                (point, index) => (
                  <li className="flex items-center" key={index}> <BsCheckCircleFill className="me-2 text-[#095868]"/> {point}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    );
};

export default TabPanelInfo2;