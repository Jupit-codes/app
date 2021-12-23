// import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


// const index =()=>{
//     return(
//         <div>
//             <Tabs>
//                 <TabList>
//                     <Tab>Title 1</Tab>
//                     <Tab>Title 2</Tab>
//                     <Tab>Title 3</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <h2>Any content 1</h2>
//                 </TabPanel>

//                 <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel>

//                 <TabPanel>
//                     <h2>Any content 3</h2>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     )
// }


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function FullWidthTabs() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{  width: '100%', bgcolor: 'background.paper' }}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
          
//           textColor="inherit"
//           variant="fullWidth"
//         //   aria-label="full width tabs example"
//           aria-label = "secondary tabs example"
//         >
//           <Tab label="Add Account" {...a11yProps(0)} />
//           <Tab label="ID Verification" {...a11yProps(1)} />
//           <Tab label="Email Address Verification" {...a11yProps(2)} />
//           <Tab label="Address Verification" {...a11yProps(3)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//         <TabPanel value={value} index={3} dir={theme.direction}>
//           Item Four
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }




import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../../assets/css/Kyc/tab.css'
import AddAccount from './AddAccount'
import IDverification from './IDverification'
import AddressVerification from './AddressVerification'
import Email from './Email'
import {MdFileDownloadDone} from 'react-icons/md'
export default function ColorTabs() {
  const [value, setValue] = React.useState('two');
  const [content,setContent] = React.useState('IDverification')

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setContent(newValue)
  };

  

    const _renderComponentTab = ()=>{
        
        switch(content){
           case 'one':
            return <Email/>
            break;        
            case 'two':
              return <AddAccount/>
                break;
            case 'three':
                return <AddressVerification/> 
                break;
            case 'four':
               return <IDverification/>
                break;
            default:
                return <AddAccount/>
                
        }
        
        
        
    }
  return (
    <Box sx={{ width: '100%', marginTop:3,borderRadius:10 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor='primary'
        aria-label="secondary tabs example"
        style={{backgroundColor:'#fff'}}
      >
        <Tab value="one" label="Email Address Verification"   />
        <Tab value="two" label="Add Bank Account"  />
        <Tab value="three" label="Address Verification"/>
        <Tab value="four" label="ID Card Verification"  />
      </Tabs>

        <div className="tab_content">
        
                {_renderComponentTab()}
        </div>
      
    </Box>
  );
}