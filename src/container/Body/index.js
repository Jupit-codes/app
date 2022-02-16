import React,{useContext, useEffect, useState} from "react";

import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Section_1 from '../../layout/BodyLayout/Section_1';
import Section_2 from '../../layout/BodyLayout/Section_2';
import Section_3 from '../../layout/BodyLayout/Section_3';
import Footer from '.././../layout/BodyLayout/Footer'
import { GlobalContext } from "../../context/Provider";
import { reactLocalStorage } from "reactjs-localstorage";
import UserDetailsRefresh from '../../context/actions/userdetails.js'
const Index=({openClose})=>{

const {userdetailsState:{userdetails:{USER_loading,USER_error,USER_data}},userdetailsDispatch} = useContext(GlobalContext);
    console.log(USER_error,USER_data)
   useEffect(()=>{
       let _id = reactLocalStorage.getObject('user')._id;
       
   UserDetailsRefresh(_id)(userdetailsDispatch)
        if(USER_data){
            console.log('userdetails',USER_data)
        }
   },[USER_data])
    return (
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
           <WelcomeNote/>
           <Section_1/>
           <Section_2/>
           <Section_3/>
           <Footer/>
            {/* <ImportantNotice/> */}
        </div>
    )
}


export default Index;