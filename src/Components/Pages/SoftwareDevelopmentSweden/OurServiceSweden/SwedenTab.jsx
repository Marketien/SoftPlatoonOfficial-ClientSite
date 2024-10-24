import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwedenTabPanel1 from "./SwedenTabPanel1";
import SwedenTabPanel2 from "./SwedenTabPanel2";
import SwedenTabPanel3 from "./SwedenTabPanel3";
import SwedenTabPanel4 from "./SwedenTabPanel4";
import SwedenCarousel from "./SwedenCarousel";


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
// eslint-disable-next-line react/prop-types
const  SwedenTab = ({language}) =>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div 
    style={{ fontFamily: "Open Sans,sans-serif" }}
     className="my-[80px] bg-[#e7e7eb21] "
     >
      {/* Tab section  for large device */}
      <div className=" px-5 py-[1px] lg:mx-auto md:mx-0 sm: mx-0 ">
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
          data-aos="fade-up"
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
              label= {language === "sv" ? "Skräddarsydda Programvarulösningar" : "Custom Software Solutions"}
              {...a11yProps(0)}
              sx={{
                color: "white",
                padding: "18px",
                marginTop: "80px",
                width: "300px",
                marginLeft: "30px",
                backgroundColor: value === 0 ? "#FBF9F1" : "transparent",
                fontSize: "15px",
              }}
            />
            <Tab
              label= {language === "sv" ? "Företag Programvaruutveckling" : "Enterprise Software Development"}
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
              label={language === "sv" ? "Molnbaserade programvarulösningar" : "Cloud-Based Software Solutions"}
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
              label={language === "sv" ? "Tjänster för programvaruintegration" : "Software Integration Services"}
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
          </Tabs>
          <TabPanel value={value} index={0}>
            <SwedenTabPanel1 language={language}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SwedenTabPanel2 language={language}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            < SwedenTabPanel3 language={language}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <SwedenTabPanel4 language={language}/>
          </TabPanel>
        </Box>
</div>
{/* Carousel Container  */}
<div className="lg:hidden md:block sm: block">
        <SwedenCarousel language={language}/>
      </div>
      </div>
    </div>
  );
}

export default SwedenTab;
