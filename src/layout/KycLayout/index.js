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



import { useContext, useEffect, useState }  from 'react';
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../../assets/css/Kyc/tab.css'
import AddAccount from './AddAccount'
import IDverification from './IDverification'
import AddressVerification from './AddressVerification'
import Email from './Email'
import {MdFileDownloadDone} from 'react-icons/md'
import {BsCheckCircle} from 'react-icons/bs'
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import Loader from '../../utils/loader/loader.js'
export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  const [content,setContent] = useState('')
  const [firstLevel, setfirstLevel] = useState();
  const [secondLevel, setsecondLevel] = useState();
  const [thirdLevel,setthirdLevel] = useState();
  const[disableFirstLevel,setdisableFirstLevel] = useState(true);
  const[disableSecondLevel,setdisableSecondLevel] = useState(true);
  const[disableThirdLevel,setdisableThirdLevel] = useState(true);
  const[scrollActive,setscrollActive] = useState();
  const[scrollActiveII,setscrollActiveII] = useState();
  const [docAccount,setdocAccount] = useState({})
  const [loaderState, setloaderState] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setContent(newValue)
    
  };
  React.useEffect(()=>{
    getLatestUpdate();
    
  
  },[])
 const getLatestUpdate = async ()=>{
  const Base_url = process.env.REACT_APP_BACKEND_URL;
  
      await axios({
        method: "POST",
        url: `${Base_url}/users/kyc`,
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${reactLocalStorage.get('token')}`

        },
        data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
      })
    .then(res=>{
        
      console.log(res.data)
        
        setfirstLevel(res.data.level1[0].status)
        setsecondLevel(res.data.level2[0].event_status);
        setthirdLevel(res.data.level3[0].callbackStatus)
        setdocAccount(res.data);
        setloaderState(false)
       
        
        if(res.data.level1[0].status === "Verified"){
          setdisableSecondLevel(false);
          setValue('two');
          setContent('Accountlinkage')
         

        }
        if(res.data.level2[0].event_status === "customeridentification.success"){
          setdisableThirdLevel(false)
          setValue('four');
          setContent('Idcard')

            
        }
        if(res.data.level1[0].status === "Verified" && res.data.level2[0].event_status === "customeridentification.success"){
          setscrollActiveII('activeTab')
        }
        else{
          setscrollActive('activeTab')
        }

       

        


    })
    .catch(err=>{
      setloaderState(false)
        console.log(err.response)
    })
 }

  // React.useEffect(()=>{
   
  //   setfirstLevel(reactLocalStorage.getObject('kyc').level1[0].status)
  //   setsecondLevel(reactLocalStorage.getObject('kyc').level2[0].event_status);

  //   if(firstLevel === "Verified"){
  //       setdisableSecondLevel(false);
  //   }
  //   if(secondLevel === "customeridentification.success"){
      
  //     setdisableThirdLevel(false)
      
  //   }
  // })

  
  

    const _renderComponentTab = ()=>{
        
        switch(content){
           case 'Email':
            return <Email/>
            break;        
            case 'Accountlinkage':
              return <AddAccount status={secondLevel} />
                break;
            case 'Idcard':
               return <IDverification />
                break;
            default:
                return <AddAccount/>
                
        }
        
        
        
    }
    const handleEmail = (e)=>{
      
      
      let x = e.target.parentElement;


      
      for (let i =0;i<x.children.length;i++){
        if(x.children[i].classList.contains('activeTab')){
          
          x.children[i].classList.remove('activeTab');
        }
        
    }
      e.target.classList.add('activeTab');
      setContent('Email');
    }
    const handleAcctLinkage= (e)=>{
      
      let x = e.target.parentElement;

      
      
      for (let i =0;i<x.children.length;i++){
          if(x.children[i].classList.contains('activeTab')){
            
            x.children[i].classList.remove('activeTab');
          }
          
      }
      
      e.target.classList.add('activeTab');
     
      setContent('Accountlinkage');
    }
    const handleIdverify = (e)=>{
      let x = e.target.parentElement;

      
      
      for (let i =0;i<x.children.length;i++){
          if(x.children[i].classList.contains('activeTab')){
            
            x.children[i].classList.remove('activeTab');
          }
          
      }
      
      e.target.classList.add('activeTab');
      
      setContent('Idcard');
    }

    const Active = (Content)=>{

    }

  return (

    <div className='kycTab'>
      {loaderState && <Loader/>}

        <div className='myTab'>
            <div onClick={(e)=>{handleEmail(e)}} className="checkactive" >
              Email Verification <span>{firstLevel === "Verified" && <BsCheckCircle size={20} color="#003300" />}</span>
            </div>
            <div onClick={(e)=>{handleAcctLinkage(e)}} className={disableSecondLevel ? 'disableDiv': `checkActive ${scrollActive}`} >
                Verify Bank Account <span>{secondLevel === "customeridentification.success" && <BsCheckCircle size={20} color="#003300" />}</span>
            </div>
            <div onClick={(e)=>{handleIdverify(e)}} className={disableThirdLevel ? 'disableDiv' : `checkActive ${scrollActiveII}`}>
                Idcard Verification <span>{thirdLevel === "Verified" && <BsCheckCircle size={20} color="#003300" />}</span>
            </div>
        </div>
        <div className='tab_content'>
            {_renderComponentTab()}
        </div>

    </div>

    // <Box sx={{ width: '100%', marginTop:3,borderRadius:10 }} className="boxShadow">
    //   {loaderState && <Loader/>}
    //   <Tabs
    //     value={value}
    //     onChange={handleChange}
    //     textColor="primary"
    //     indicatorColor='primary'
    //     aria-label="secondary tabs example"
        
    //     className="kyc_tab"
    //   >
        
    //      <Tab className='emailVerification' icon={firstLevel === "Verified" && <BsCheckCircle size={20} color="#003300" />} label="Email Verification" aria-label="Email" value="one" />
    //      <Tab icon={secondLevel === "customeridentification.success" && <BsCheckCircle size={15} color="#003300" />} label="Verify Bank Account" aria-label="phone" disabled={disableSecondLevel} value="two" />
    //      <Tab icon={thirdLevel === "Verified" && <BsCheckCircle size={15} color="#003300" /> } label="Verify Id Card" aria-label="phone" disabled={disableThirdLevel}   value="four" />
    //   </Tabs>

    //     <div className="tab_content">
        
    //             {_renderComponentTab()}
    //     </div>
      
    // </Box>
  );
}