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

function sum (x){
   let add = 0;
    
    return true;
}

const Index=()=>{

    const _renderComponent = ()=>{

        let name  = "Paul";
      
       

        console.log("xxx",name)

        
    }
        
    

    

    return(
        <div className="welcome">
           
                
            {
                _renderComponent()
            }
            
        </div>
    
    )
}
export default Index;