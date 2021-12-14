import React,{useState} from "react";

import '../../assets/css/Body/body.css'
const Index=({openClose})=>{
   
    return (
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
            <h1>Welcome To Jupit</h1>
        </div>
    )
}


export default Index;