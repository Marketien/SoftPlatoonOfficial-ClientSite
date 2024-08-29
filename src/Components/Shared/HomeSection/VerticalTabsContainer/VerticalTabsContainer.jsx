import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanelInfo1 from '../TabPanelInfo/TabPanelInfo1';
import TabPanelInfo2 from '../TabPanelInfo/TabPanelInfo2';
import Aos from "aos";
import "aos/dist/aos.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props; 
  Aos.init();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other} 
     className='w-full'
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

  return (
<div className='my-[80px]'>
{/* Tab section  for large device */}
    {/* <div className='lg:flex md:flex sm: overflow-x-auto justify-center'> */}
    <div className='lg:overflow-x-hidden md:overflow-x-hidden sm: overflow-x-auto px-5'>
    <h1 className="dafault-heading">Explore Our Offering</h1>
      <Box
      sx={{ 
       width: "100%" ,
        display: 'flex',
        flexDirection: 'row',
        background: 'white',
         marginLeft:"3%",
          borderRadius:"5px",
          height: { lg: 600, md: 730, sm: 730 },
        }}  data-aos="fade-right" data-aos-duration="2000">
<Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange} 
        aria-label=""
        sx={{ borderRight: 1, 
          width:"500px", 
        // background: 'linear-gradient(to right, #095868, #05819a)', 
        background: 'linear-gradient(to right, #4a2665, #6b2066, #593468)', 
        boxShadow: "5px 10px 10px #2d253447" ,
        marginTop:"-32px",
         marginBottom:"32px",
         marginLeft: "-32px",
         borderRadius:"5px",
        }}
      >
  <Tab label="Software Developement" 
  {...a11yProps(0)} 
   sx={{color: "white",
   padding:"25px", marginTop:"30px", 
   backgroundColor: value === 0 ? "#FBF9F1" : "transparent" , 
   fontSize:"15px", }} 
   />
  <Tab label="Testing & QA"
   {...a11yProps(1)}
   sx={{color: "white",
    padding:"25px", backgroundColor: value === 1 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }} 
    />
  <Tab label="Application Service"
   {...a11yProps(2)}
   sx={{color: "white",
    padding:"25px", backgroundColor: value === 2 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }} 
   />
  <Tab label="UX/UI Design"
  {...a11yProps(3)}
  sx={{color: "white",
    padding:"25px", backgroundColor: value === 3 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }}  
   />
  <Tab label="IT Consulting" 
  {...a11yProps(4)} 
  sx={{color: "white",
    padding:"25px", backgroundColor: value === 4 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }} 
  />
  <Tab label="Data Analytics" 
  {...a11yProps(5)} 
  sx={{color: "white",
    padding:"25px", backgroundColor: value === 5 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }} 
  />
  <Tab label="Help Desk Services"
   {...a11yProps(6)}
   sx={{color: "white",
    padding:"25px", backgroundColor: value === 6 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }} 
   />
  <Tab label="Infrastucture Services"
   {...a11yProps(7)}
   sx={{color: "white",
    padding:"25px", backgroundColor: value === 7 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }}  
   />
  <Tab label="Cybersecurity Services"
   {...a11yProps(8)}
   sx={{color: "white",
    padding:"25px", backgroundColor: value === 1 ? "#FBF9F1" : "transparent" , 
    fontSize:"15px", }}  
   />
</Tabs>
      <TabPanel value={value} index={0}>
       <TabPanelInfo1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <TabPanelInfo2/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Seven
      </TabPanel>
      </Box>
    </div>
    {/* slider section for small device  */}
      {/* <div className='lg:hidden md:hidden sm: flex'>
    <Carousel className="lg:hidden md:hidden sm: flex">
                <div>
                    <TabPanelInfo1/>
                </div>
                <div>
                    <TabPanelInfo2/>
                </div>
            </Carousel>
      </div> */}
</div>
  );
}