import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './VerticalTabsContainer.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props; 

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
<div>
{/* Tab section  for large device */}
    <div className='lg:flex md:flex sm: hidden'>
      <Box
      sx={{ 
        display: 'flex',
        flexDirection: 'row',
         background: 'white', 
         marginLeft:"3%",
          width: '98%', 
          height: 600 ,
          boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)",
        }}>
<Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange} 
        aria-label=""
        sx={{ borderRight: 1, 
          width:"500px", 
        background: '#05819a', 
        boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" ,
        marginTop:"-32px",
         marginBottom:"32px",
         marginLeft: "-32px",
        }}
      >
  <Tab label="Item One" {...a11yProps(0)} 
   sx={{ width:"600px" ,color: "white", padding:"25px", marginTop:"30px", backgroundColor: value === 0 ? "#095868" : "transparent" , fontSize:"15px", }} />
  <Tab label="Item Two" {...a11yProps(1)}
   sx={{ color: "white",padding:"25px", backgroundColor: value === 1 ? "#095868" : "transparent" }} />
  <Tab label="Item Three" {...a11yProps(2)}
   sx={{ color: "white",padding:"25px", backgroundColor: value === 2 ? "#095868" : "transparent" }} />
  <Tab label="Item Four" {...a11yProps(3)}
   sx={{ color: "white",padding:"25px", backgroundColor: value === 3 ? "#095868" : "transparent" }} />
  <Tab label="Item Five" {...a11yProps(4)} 
  sx={{ color: "white",padding:"25px", backgroundColor: value === 4 ? "#095868" : "transparent" }} />
  <Tab label="Item Six" {...a11yProps(5)} 
  sx={{ color: "white",padding:"25px", backgroundColor: value === 5 ? "#095868" : "transparent" }} />
  <Tab label="Item Seven" {...a11yProps(6)}
   sx={{ color: "white",padding:"25px", backgroundColor: value === 6 ? "#095868" : "transparent" }} />
</Tabs>
      <TabPanel className="tabPanel" value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={6}>
        Item Seven
      </TabPanel>
      </Box>
    </div>
    {/* slider section for small device  */}
    <div className="lg:hidden md:hidden sm: flex">
<h1>Tomma </h1>
    </div>
</div>
  );
}