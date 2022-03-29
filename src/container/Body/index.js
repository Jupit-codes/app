import React,{useContext, useEffect, useState} from "react";

import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Section_1 from '../../layout/BodyLayout/Section_1';
import Section_2 from '../../layout/BodyLayout/Section_2';
import Section_3 from '../../layout/BodyLayout/Section_3';
import Footer from '.././../layout/BodyLayout/Footer'
import Section1 from '../../layout/BodyLayout/Section1'
import { GlobalContext } from "../../context/Provider";
import { reactLocalStorage } from "reactjs-localstorage";
import UserDetailsRefresh from '../../context/actions/userdetails.js'
import axios from "axios";

const Index=({openClose})=>{

const {userdetailsState:{userdetails:{USER_loading,USER_error,USER_data}},userdetailsDispatch} = useContext(GlobalContext);
const kyc = reactLocalStorage.getObject('kyc')
   useEffect(()=>{
       let _id = reactLocalStorage.getObject('user')._id;
       
   UserDetailsRefresh(_id)(userdetailsDispatch)
        if(USER_data){
            
        }
   },[USER_data])

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

    return (
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
           {/* <WelcomeNote/> */}
           {/* <Section_1/> */}
           {/* <Section_2/>
           <Section_3/>
           <Footer/> */}
            {/* <ImportantNotice/> */}

            <Section1/>

        </div>
    )
}


export default Index;