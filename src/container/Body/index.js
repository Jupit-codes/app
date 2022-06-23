import React,{useContext, useEffect, useState} from "react";

import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Section_1 from '../../layout/BodyLayout/Section_1';
import Section_2 from '../../layout/BodyLayout/Section_2';
import Section_3 from '../../layout/BodyLayout/Section_3';
import Footer from '.././../layout/BodyLayout/Footer'
import Section1 from '../../layout/BodyLayout/Section1'
import Section2 from '../../layout/BodyLayout/Section2'
import Section3 from '../../layout/BodyLayout/Section3'
import { GlobalContext } from "../../context/Provider";
import { reactLocalStorage } from "reactjs-localstorage";
import UserDetailsRefresh from '../../context/actions/userdetails.js'
import axios from "axios";
import PwaModal from '../../utils/modal/pwa'

const Index=({openClose})=>{

const {userdetailsState:{userdetails:{USER_loading,USER_error,USER_data}},userdetailsDispatch} = useContext(GlobalContext);
const kyc = reactLocalStorage.getObject('kyc')
const pwaprompt = reactLocalStorage.get('pwa-data');
    const [pwaprompter,setpwaprompter] = useState(false);
    const [response,setresponse] = useState()
    const [actiondata,setactiondata] = useState()
   useEffect(()=>{
       let _id = reactLocalStorage.getObject('user')._id;
       
   UserDetailsRefresh(_id)(userdetailsDispatch)
        if(USER_data){
            
        }
   },[USER_data])

   const showInAppInstallPromotion= (action)=>{
    if(!reactLocalStorage.get('pwa-data')){
        setactiondata(action);
        setpwaprompter(true);
    }
    
   }

   useEffect(()=>{
    
    window.addEventListener('beforeinstallprompt', (e) => {
    // Prevents the default mini-infobar or install dialog from appearing on mobile
    e.preventDefault();
    // Save the event because you'll need to trigger it later.
    let deferredPrompt = e;
    // Show your customized install prompt for your PWA
    // Your own UI doesn't have to be a single element, you
    // can have buttons in different locations, or wait to prompt
    // as part of a critical journey.
    showInAppInstallPromotion(deferredPrompt);
    });
   },[])

   const Base_url = process.env.REACT_APP_BACKEND_URL;
   const kycFetch = async ()=>{
       let userid = reactLocalStorage.getObject('user')._id;

       await axios({
           method: "POST",
           url: `${Base_url}/users/kyc`,
           headers:{
               'Content-Type':'application/json',
               'Authorization':reactLocalStorage.get('token')
           },
           data:JSON.stringify({userid:userid})
       })
       .then((res)=>{
         reactLocalStorage.setObject('kyc',res.data)
        
         
       })
       .catch((err)=>{
          
        //    console.log(err)
           kycFetch();
           
       })
   }

   useEffect(()=>{
       kycFetch();
       
   },[])

   useEffect(()=>{
    console.log('response',response)
   },[response])

    return (
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            {pwaprompter && <PwaModal closePWA={setpwaprompter} sendresponse={setresponse} action={setactiondata}/>}
           {/* <WelcomeNote/> */}
           {/* <Section_1/> */}
           {/* <Section_2/>
           <Section_3/>
           <Footer/> */}
            {/* <ImportantNotice/> */}

            <Section1/> 
            <Section2/>
            <Section3/>

        </div>
    )
}


export default Index;