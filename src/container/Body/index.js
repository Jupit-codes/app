import React,{useState} from "react";

import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Section_1 from '../../layout/BodyLayout/Section_1';
import Section_2 from '../../layout/BodyLayout/Section_2';
import Section_3 from '../../layout/BodyLayout/Section_3';
import Footer from '.././../layout/BodyLayout/Footer'
const Index=({openClose})=>{
   
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