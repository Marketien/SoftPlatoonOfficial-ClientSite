import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import image from "../../../../assets/Icons/web page-06.png";

const TabPanelInfo3 = () => {

    const [tabInfos, setInfos] = useState([]);

    useEffect(() => {
      fetch(" tabpanelinfo.json ")
        .then((res) => res.json())
        .then((data) => setInfos(data));
    }, []);
    const ApplicationServices = tabInfos.find(
        (info) => "ApplicationServices" in info
      );

    return (
        <div className=" bg-white ">
        {ApplicationServices && (
          <div className="md:px-5 sm: px-4 md:py-0 sm: py-10 lg:h-full md:h-[600px] sm: h-[750px]" style={{ fontFamily: "Open Sans,sans-serif" }}>
            <h2
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="font-bold text-2xl mt-8 text-purple-900"
            >
              {ApplicationServices.ApplicationServices.title}
            </h2>
            <p className="font-medium md:text-lg sm: text-md leading-8 mt-5">
              {ApplicationServices.ApplicationServices.paragraph}
            </p>
            <ul className="flex justify-between items-center font-medium text-lg leading-10 mt-5">
              <li>
                {ApplicationServices.ApplicationServices.points.map(
                  (point, index) => (
                    <p key={index} className="flex mb-4 font-medium">
                    <BsCheckCircleFill size={15} className="me-2 text-[#5A287F]" />
                  <span className="md:text-[18px] sm: text-sm">
                    {point}
                  </span>
                  </p>
                  )
                )}
              </li>
              <li>
                <img className="lg:w-[250px] md:w-[200px] sm: w-0 -mt-[50px]" src={image} alt="" />
              </li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default TabPanelInfo3;