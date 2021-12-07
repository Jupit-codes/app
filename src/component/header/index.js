import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import logo_white from '../../assets/images/logo_white_new.png';

const Index=()=>{
    const [scroll,setscrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position)
        console.log(scroll)
    };
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return (
        <div className={scroll === 0 ? 'Header': 'HeaderScroll'}>
            <div className="my-nav-container">
                <div className="logo">
                    <img src={scroll=== 0 ? logo_white : logo}/>
                </div>
                <div className="mynav">
                    <div className={scroll===0? 'mynav-item':'mynav-item-scroll'}>About Us</div>
                    <div className={scroll===0? 'mynav-item':'mynav-item-scroll'}>Products</div>
                    <div className={scroll===0? 'mynav-item':'mynav-item-scroll'}>Learn</div>
                    <div className={scroll===0? 'mynav-item':'mynav-item-scroll'}>Resource</div>
                    <div className={scroll===0? 'mynav-item':'mynav-item-scroll'}>Career</div>
                </div>
                <div className="my-buttons">
                    <div className="create-button-signin">SignIn</div>
                    <div className="create-button-register">Register</div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Index;