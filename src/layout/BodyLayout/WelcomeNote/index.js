import React, { useEffect, useState } from "react";
import '../../../assets/css/Body/welcome.css'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Button} from 'react-bootstrap'
import logo from '../../../assets/images/jupit_100.png'
import { CircularProgressbarWithChildren,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FaBusinessTime} from 'react-icons/fa'
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";
import axios from "axios";

const Index=()=>{
    // console.log(reactLocalStorage.getObject('kyc'))
    const [kycProgress,setkycProgress] = useState();
    const [data,setData]= useState();
   
    let counter=0;
    



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
            setData(res.data)
       })
       .catch((err)=>{
          
           console.log(err)
           kycFetch();
           
       })
   }

   useEffect(()=>{
       kycFetch();
   },[])

    const _renderCircular =()=>{
        
        if(data.level1[0].status === "Verified"){
            counter+=25
        }
        if(data.level2[0].event_status === "Verified"){
            counter+=25
        }
       
        return <div className="progress_div shadow-lg round">
                    <CircularProgressbarWithChildren value={counter}
                    
                    styles={buildStyles({
                       
                       
                        trailColor: '#d6d6d6',
                        pathTransitionDuration: 0.5,
                         
                      })}
                    >
                        
                        <FaBusinessTime  size={30} color="#90ee90"/> 
                         <div style={{ fontSize: 12, }}>
                            <strong>{counter}%</strong> KYC
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
    }
    return(
        <div className="welcome">
            <div className="welcome_text round">
                Dear {reactLocalStorage.getObject('user').username},<br/>
                Congratulations on the successful creation of your account.<br/>
                Kindly click on the Link below to complete your KYC documentation.<br/>
                <Link to="/client/kyc"><button className="btn btn-md btn-primary mt-2" > Kyc Documentation</button></Link>
            </div>
            

                 { data  && _renderCircular()} 
                
            
            
        </div>
    
    )
}
export default Index;