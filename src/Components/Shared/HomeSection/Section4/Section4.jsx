import "./Section4.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCubes } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { GiBrassEye } from "react-icons/gi";
import { WiFire } from "react-icons/wi";
import { SiChainlink } from "react-icons/si";
import { FaCreativeCommonsRemix } from "react-icons/fa6";



const Section4 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="default-margin "
    >
      <h1 className="text-white text-3xl font-semibold mt-5">
        Improve and Innovate with the Tech Trends
      </h1>
      <p className="default-text-color text-lg mt-5">
        Our team can assist you in transforming your business with the latest
        tech capabilities to stay ahead of the curve
      </p>

      {/* Tab section  */}
      <div className="mt-10">
        <Tabs className="section4Tabs" selectedTabClassName="selectedTab">
          <TabList className="section4TabList">
            <Tab className="section4Tab">
              <p>
                <span>
                  <FaCubes size={50} />
                </span>
                <span className="-ms-2 text-lg font-semibold">Big Data</span>
              </p>
            </Tab>
            <Tab className="section4Tab">
              <p>
                <span>
                  <BsRobot className="text-center ms-[65px]" size={50} />
                </span>
                <span className=" text-center text-lg font-semibold">Artificial Intelligence</span>
              </p>
            </Tab>
            <Tab className="section4Tab">
              <p>
                <span>
                  <GiBrassEye className="text-center ms-[45px]" size={50} />
                </span>
                <span className=" text-center text-lg font-semibold">Computer Vision</span>
              </p>
            </Tab>
            <Tab className="section4Tab">
              <p>
                <span>
                  <WiFire className="text-center ms-[40px]" size={50} />
                </span>
                <span className="-ms-2 text-lg font-semibold">Internet Of Things</span>
              </p>
            </Tab>
            <Tab className="section4Tab">
              <p>
                <span>
                  <SiChainlink className="text-center ms-[15px]" size={50} />
                </span>
                <span className="-ms-2 text-lg font-semibold">BlockChain</span>
              </p>
            </Tab>
            <Tab className="section4Tab">
              <p>
                <span>
                  <FaCreativeCommonsRemix className="text-center ms-[23px]" size={50} />
                </span>
                <span className="-ms-2 text-lg font-semibold">Mixed Reality</span>
              </p>
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Section4;
