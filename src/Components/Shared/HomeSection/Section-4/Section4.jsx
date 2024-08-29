import "./Section4.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCubes } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { GiBrassEye } from "react-icons/gi";
import { WiFire } from "react-icons/wi";
import { SiChainlink } from "react-icons/si";
import { FaCreativeCommonsRemix } from "react-icons/fa6";
import TabPanelInfo1 from "../TabPanelInfo/TabPanelInfo1";
import TabPanelInfo2 from "../TabPanelInfo/TabPanelInfo2";
import icon1 from '../../../../../public/Icons/cubel (1).png' ;
import icon2 from '../../../../../public/Icons/artificial-intelligence.png' ;
import icon3 from '../../../../../public/Icons/vision.png' ;
import icon4 from '../../../../../public/Icons/innovation.png' ;
import icon5 from '../../../../../public/Icons/blockchain.png' ;
import icon6 from '../../../../../public/Icons/virtual-support.png' ;
import Aos from "aos";
import "aos/dist/aos.css";

const Section4 = () => {

  Aos.init();

  return (
      <div
       data-aos="fade-down" data-aos-duration="2000"
        style={{ fontFamily: "Open Sans,sans-serif" }}
        className="my-[80px] lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-auto sm: mx-4"
      >
        <h1 className=" text-3xl font-semibold mt-5">
          Improve and Innovate with the Tech Trends
        </h1>
        <p className="default-text-color text-lg mt-5">
          Our team can assist you in transforming your business with the latest
          tech capabilities to stay ahead of the curve
        </p>

        {/* Tab section fot large device */}
        <div className="mt-10 lg:flex md:flex">
          <Tabs className="section4Tabs" selectedTabClassName="selectedTab">
            <TabList className="lg:overflow-x-hidden md:overflow-x-hidden sm: overflow-x-scroll  sm: gap-10 section4TabList">
              <Tab className=" section4Tab">
                <p>
                  <span>
                    {/* <FaCubes style={{ color: "#5A287F" }} size={50} /> */}
                    <img className=" w-[50px] " src={icon1} alt="icon" />
                  </span>
                  <span className="-ms-2 lg:text-lg md:text-xs sm: text-xs font-semibold">
                    Big Data
                  </span>
                </p>
              </Tab>
              <Tab className="section4Tab">
                <p>
                  <span>
                    {/* <BsRobot
                      style={{ color: "#5A287F" }}
                      className="text-center lg:ms-[65px] md:ms-[35px]"
                      size={50}
                    /> */}
                    <img className=" w-[50px]  text-center lg:ms-[65px] md:ms-[35px]" src={icon2} alt="icon" />
                  </span>
                  <span className=" text-center lg:text-lg md:text-xs sm: text-xs font-semibold">
                    Artificial Intelligence
                  </span>
                </p>
              </Tab>
              <Tab className="section4Tab">
                <p>
                  <span>
                    {/* <GiBrassEye
                      style={{ color: "#5A287F" }}
                      className="text-center lg:ms-[45px] md:ms-[22.5px]"
                      size={50}
                    /> */}
                    <img className=" w-[50px]  text-center lg:ms-[45px] md:ms-[22.5px]" src={icon3} alt="icon" />
                  </span>
                  <span className=" text-center lg:text-lg md:text-xs sm: text-xs  font-semibold">
                    Computer Vision
                  </span>
                </p>
              </Tab>
              <Tab className="section4Tab">
                <p>
                  <span>
                    {/* <WiFire
                      style={{ color: "#5A287F" }}
                      className="text-center lg:ms-[40px] md:ms-[20px]"
                      size={50}
                    /> */}
                    <img className=" w-[50px]  text-center lg:ms-[40px] md:ms-[20px]" src={icon4} alt="icon" />
                  </span>
                  <span className="-ms-2 lg:text-lg md:text-xs sm: text-xs  font-semibold">
                    Internet Of Things
                  </span>
                </p>
              </Tab>
              <Tab className="section4Tab">
                <p>
                  <span>
                    {/* <SiChainlink
                      style={{ color: "#5A287F" }}
                      className="text-center lg:ms-[15px] md:ms-[0px]"
                      size={50}
                    /> */}
                    <img className=" w-[50px]  text-center lg:ms-[15px] md:ms-[0px]" src={icon5} alt="icon" />
                  </span>
                  <span className="-ms-2 lg:text-lg md:text-xs sm: text-xs font-semibold">
                    BlockChain
                  </span>
                </p>
              </Tab>
              <Tab className="section4Tab">
                <p>
                  <span>
                    {/* <FaCreativeCommonsRemix
                      style={{ color: "#5A287F" }}
                      className="text-center lg:ms-[23px] md:ms-[3px]"
                      size={50}
                    /> */}
                    <img className=" w-[50px]  text-center lg:ms-[23px] md:ms-[3px]" src={icon6} alt="icon" />
                  </span>
                  <span className="-ms-2 lg:text-lg md:text-xs sm: text-xs  font-semibold">
                    Mixed Reality
                  </span>
                </p>
              </Tab>
            </TabList>

            <TabPanel>
              <TabPanelInfo1 />
            </TabPanel>
            <TabPanel>
              <TabPanelInfo2 />
            </TabPanel>
            <TabPanel>
              <TabPanelInfo1 />
            </TabPanel>
            <TabPanel>
              <TabPanelInfo2 />
            </TabPanel>
            <TabPanel>
              <TabPanelInfo1 />
            </TabPanel>
            <TabPanel>
              <TabPanelInfo2 />
            </TabPanel>
          </Tabs>
        </div>
      </div>
  );
};

export default Section4;
