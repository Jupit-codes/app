import React, { useState,useEffect } from "react";
import '../../../assets/css/section_1/section_1.css'
import {reactLocalStorage} from 'reactjs-localstorage';

const Index=()=>{
    const [salutation, setsalutation] = useState();
    const[userInfor,setUserInfor] = useState();
    
    useEffect(()=>{
        let x = reactLocalStorage.getObject('user');
        
        setUserInfor(x.username.toUpperCase())
        
        let hour = new Date().getHours();
        console.log(hour)
        if(hour < 12){
            setsalutation('Good Morning')
        }
        else if(hour < 18 ){
            setsalutation('Good Afternoon')
        }
        else {
            setsalutation('Good Evening')
        }
        
    },[])

//     const greeting = document.getElementById("greeting");
// const hour = new Date().getHours();
// const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
// let welcomeText = "";

// if (hour < 12) welcomeText = welcomeTypes[0];
// else if (hour < 18) welcomeText = welcomeTypes[1];
// else welcomeText = welcomeTypes[2];

// greeting.innerHTML = welcomeText;
    return(
        <div className="section_1">
            <div className="greetings">
                <h1>{salutation}, <span>{userInfor}!</span></h1>
                <small>Welcome to your Dashboard</small>
            </div>
                
        </div>
    
    )
}
export default Index;