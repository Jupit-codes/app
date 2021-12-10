import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import logo_white from '../../assets/images/logo_white_new.png';
import '../../assets/css/Header/nav.css'

const Index=({ActivePath})=>{
    const [scroll,setscrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position)
        console.log(scroll)
    };
    
    console.log('ActivePath',ActivePath)
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return (
        
        <div className={scroll != 0 || ActivePath === 'contact-us'  ? 'HeaderScroll': 'Header'}>
            <div className="my-nav-container">
                <div className="logo">
                    <Link to='/'><img src={scroll != 0 || ActivePath === 'contact-us' ? logo :  logo_white}/></Link>
                </div>
                <div className="mynav">
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><Link to="/aboutus" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>About Us</Link></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}>Products</div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><Link to='/learnwithus' className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Learn</Link></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><Link to="/faq" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Faq</Link></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><Link to="/contact-us" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Contact</Link></div>
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