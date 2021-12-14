import React,{useState} from "react";

import '../../assets/css/Body/body.css'
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote'

const Index=({openClose})=>{
   
    return (
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
           <WelcomeNote/>
            {/* <ImportantNotice/> */}
        </div>
    )
}


export default Index;