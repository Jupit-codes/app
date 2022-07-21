import React,{useState} from "react";

import '../../assets/css/Kyc/kyc.css';
import Javscript from '../../layout/BodyLayout/WelcomeNote';

import Footer from '.././../layout/BodyLayout/Footer'
import KYC from '../../layout/KycLayout'


const Index=({openClose})=>{
   
    return (
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
           
            <KYC/>
            <Javscript/>
           {/* <Footer/> */}
            {/* <ImportantNotice/> */}
        </div>
    )
}


export default Index;