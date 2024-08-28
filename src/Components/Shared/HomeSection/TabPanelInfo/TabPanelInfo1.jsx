import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const TabPanelInfo1 = () => {
  const [tabInfos, setInfos] = useState([]);

  useEffect(() => {
    fetch(" tabpanelinfo.json ")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);

  const softwareDevelopmentInfo = tabInfos.find(
    (info) => "SoftwareDevelopment" in info
  );

  return (
    <div className="bg-white  lg:h-full md:h-full sm:h-[850px] lg:p-0 md:p-0 sm: p-5">
      {softwareDevelopmentInfo && (
        <div style={{ fontFamily: "Open Sans,sans-serif" }}>
          <h2 className="font-bold text-2xl mt-8">
            {softwareDevelopmentInfo.SoftwareDevelopment.title}
          </h2>
          <p 
            className="font-medium text-lg leading-8 mt-5"
          >
            {softwareDevelopmentInfo.SoftwareDevelopment.paragraph}
          </p>
          <ul className="font-medium text-lg leading-10 mt-5">
            {softwareDevelopmentInfo.SoftwareDevelopment.points.map(
              (point, index) => (
                <li className="flex items-center" key={index}> <BsCheckCircleFill className="me-2 text-[#5A287F]"/> {point}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TabPanelInfo1;
