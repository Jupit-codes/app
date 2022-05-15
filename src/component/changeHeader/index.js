import React, { useEffect, useState } from "react";
import { Link as NewLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import logo_white from '../../assets/images/logo_white_new.png';
import '../../assets/css/Header/nav.css'
import { Offcanvas } from "react-bootstrap";
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-scroll'
import {FaHome} from 'react-icons/fa'
import {GiRegeneration} from 'react-icons/gi'
import {MdPayments} from 'react-icons/md'
import {MdVideoLibrary} from 'react-icons/md'
import {ImPriceTags} from 'react-icons/im'
import {VscDebugStart} from 'react-icons/vsc'
import {AiOutlineTeam} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'
import {FiBookOpen} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import Modal from '../../utils/modal/wallet_note'

const Index=()=>{
    const [scroll,setscrollPosition] = useState(0);
    const [loadModal,setloadModal] = useState(false);
    const [show,setshow] = useState(false);
  
  
    
   

    return (
        
        <div className='HeaderScroll bgColor'>
            
            <div className="my-nav-container">
                <div className="logo">
                    <NewLink to='/'><img src={logo_white} className="logoX"/></NewLink>
                </div>
                <div className="hamburg">
                    <GiHamburgerMenu  color={scroll === 0 ? '#fff':'#000'} size={35} className="hamburger" onClick={()=>setshow(true)}/>
                </div>
                <div className="mynav">
                   
                
                </div>
                
                <div className="my-buttons">
                    {/* <Link to='/client/signin'><div className="create-button-signin">SignIn</div></Link>
                    <Link to='/client/signup'><div className="create-button-register">Register</div></Link> */}
                    {/* <div className="create-button-signin" onClick={()=>setloadModal(true)} >SignIn</div>
                    <div className="create-button-register" onClick={()=>setloadModal(true)}>Register</div> */}
                    <div className="create-button-register" onClick={()=>setloadModal(true)}>Get Started</div>
                </div>
            </div>
         
            
        </div>
    )
}

export default Index;