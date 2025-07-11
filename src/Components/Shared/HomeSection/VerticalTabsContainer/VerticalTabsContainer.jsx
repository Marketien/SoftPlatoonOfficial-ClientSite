import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeCarousel from "../Section-2/HomeCarousel";
import TabPanelInfo1 from "../TabPanelInfo/TabPanelInfo1";
import TabPanelInfo2 from "../TabPanelInfo/TabPanelInfo2";
import TabPanelInfo3 from "../TabPanelInfo/TabPanelInfo3";
import TabPanelInfo4 from "../TabPanelInfo/TabPanelInfo4";
import TabPanelInfo5 from "../TabPanelInfo/TabPanelInfo5";
import TabPanelInfo6 from "../TabPanelInfo/TabPanelInfo6";
import TabPanelInfo7 from "../TabPanelInfo/TabPanelInfo7";
import TabPanelInfo8 from "../TabPanelInfo/TabPanelInfo8";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

 useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div 
    style={{ fontFamily: "Open Sans,sans-serif" }}
     className="py-[180px] text-black bg-gray-100"
     >
      {/* Tab section  for large device */}
      <div className=" px-5 py-[1px] lg:max-w-6xl md:max-w-3xl
       sm: max-w-sm lg:mx-auto md:mx-0 sm: mx-0 ">
        <h1
          data-aos="zoom-in"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-20 md:flex md:items-center"
        >
         Explore Our<p className="text-purple-900 md:ms-2 sm: ms-0"> Offering</p>
        </h1>
        {/* Tab section  */}
<div className="lg:block md:hidden sm: hidden">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            background: "white",
            marginLeft: "3%",
            borderRadius: "5px",
            height: { lg: 600, md: 730, sm: 730 },
          }}
          data-aos="zoom-in"
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label=""
            sx={{
              borderRight: 1,
              width: "500px",
              // background: 'linear-gradient(to right, #095868, #05819a)',
              background:
                "linear-gradient(to right, #4a2665, #6b2066, #593468)",
              boxShadow: "5px 10px 10px #2d253447",
              marginTop: "-32px",
              marginBottom: "32px",
              marginLeft: "-32px",
              borderRadius: "5px",
            }}
          >
            <Tab
              label="Software Developement"
              {...a11yProps(0)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "45px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 0 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="Testing & QA"
              {...a11yProps(1)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 1 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="Application Service"
              {...a11yProps(2)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 2 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="IT Consulting"
              {...a11yProps(3)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 3 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="Data Analytics"
              {...a11yProps(4)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 4 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="Help Desk Services"
              {...a11yProps(5)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 5 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="Infrastucture Services"
              {...a11yProps(6)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 6 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label="Cybersecurity Services"
              {...a11yProps(7)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "10px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 7 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TabPanelInfo1 />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabPanelInfo2 />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabPanelInfo3 />
          </TabPanel>
          <TabPanel value={value} index={3}>
          <TabPanelInfo4 />
          </TabPanel>
          <TabPanel value={value} index={4}>
          <TabPanelInfo5 />
          </TabPanel>
          <TabPanel value={value} index={5}>
          <TabPanelInfo6 />
          </TabPanel>
          <TabPanel value={value} index={6}>
          <TabPanelInfo7 />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <TabPanelInfo8 />
          </TabPanel>
        </Box>
</div>
{/* Carousel Container  */}
<div className="lg:hidden md:block sm: block">
        <HomeCarousel/>
      </div>
      </div>
    </div>
  );
}
