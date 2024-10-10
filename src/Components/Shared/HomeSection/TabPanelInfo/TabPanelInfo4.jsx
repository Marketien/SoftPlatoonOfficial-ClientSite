import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import image from "../../../../../public/Icons/web page-06.png";

const TabPanelInfo4 = () => {

    const [tabInfos, setInfos] = useState([]);

    useEffect(() => {
      fetch(" tabpanelinfo.json ")
        .then((res) => res.json())
        .then((data) => setInfos(data));
    }, []);
    const ITConsulting = tabInfos.find(
        (info) => "ITConsulting" in info
      );

    return (
        <div className=" bg-white ">
        {ITConsulting && (
          <div className="md:px-5 sm: px-2 md:py-0 sm: py-10 lg:h-full md:h-[600px] sm: h-[1150px]" style={{ fontFamily: "Open Sans,sans-serif" }}>
            <h2
              style={{ fontFamily: "Ubuntu,sans-serif" }}
              className="font-bold text-2xl mt-8 text-purple-900"
            >
              {ITConsulting.ITConsulting.title}
            </h2>
            <p className="font-medium text-lg leading-8 mt-5">
              {ITConsulting.ITConsulting.paragraph}
            </p>
            <ul className="flex justify-between items-center font-medium text-lg leading-10 mt-5">
              <li>
                {ITConsulting.ITConsulting.points.map(
                  (point, index) => (
                    <li className="flex items-center" key={index}>
                      {" "}
                      <BsCheckCircleFill className="me-2 text-[#5A287F]" />{" "}
                      {point}
                    </li>
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

export default TabPanelInfo4;