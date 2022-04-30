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

const Index=({ActivePath,getscroll})=>{
    const [scroll,setscrollPosition] = useState(0);
    const [loadModal,setloadModal] = useState(false);
    const [show,setshow] = useState(false);
    const handleClose = ()=>{
        setshow(false)
    }
    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position)
        
        getscroll(position)
        
    };
    
   
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return (
        
        <div className={scroll != 0 || ActivePath === 'contact-us'  ? 'HeaderScroll': 'Header'}>
             {loadModal && <Modal closeModal={setloadModal}/>}
            <div className="my-nav-container">
                <div className="logo">
                    <NewLink to='/'><img src={scroll != 0 || ActivePath === 'contact-us' ? logo :  logo_white} className="logoX"/></NewLink>
                </div>
                <div className="hamburg">
                    <GiHamburgerMenu  color={scroll === 0 ? '#fff':'#000'} size={35} className="hamburger" onClick={()=>setshow(true)}/>
                </div>
                <div className="mynav">
                    {/* <div className={scroll != 0 || ActivePath === 'aboutus' ? 'mynav-item-scroll':'mynav-item'}><NewLink to="/aboutus" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>About Us</NewLink></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><Link to="/product" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Product</Link></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><Link to='/getIntouch' className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Contact Us</Link></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><NewLink to="/faq" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Faq</NewLink></div>
                    <div className={scroll != 0 || ActivePath === 'contact-us' ? 'mynav-item-scroll':'mynav-item'}><NewLink to="/contact-us" className={scroll != 0 || ActivePath === 'contact-us' ? 'linkScroll':'linkStatic'}>Contact</NewLink></div> */}
               
                    <div className={scroll != 0 ? 'mynav-item-scroll':'mynav-item'}><Link to="aboutus" spy={true} smooth={true}  activeClass ='activeClass'>About Us</Link></div>
                    <div className={scroll != 0  ? 'mynav-item-scroll':'mynav-item'}><Link to="product" spy={true} smooth={true}  activeClass ='activeClass'>Products</Link></div>
                    <div className={scroll != 0  ? 'mynav-item-scroll':'mynav-item'}><Link to="what_defines_us" spy={true} smooth={true} activeClass ='activeClass'>What Defines Us</Link></div>
                    <div className={scroll != 0  ? 'mynav-item-scroll':'mynav-item'}><Link to="roadmap" spy={true} smooth={true} activeClass ='activeClass'>Roadmap</Link></div>
                    <div className={scroll != 0  ? 'mynav-item-scroll':'mynav-item'}><Link to="ourteam" spy={true} smooth={true} activeClass ='activeClass'>Our Team</Link></div>
                    <div className={scroll != 0  ? 'mynav-item-scroll':'mynav-item'}><Link to="faq" spy={true} smooth={true} activeClass ='activeClass'>Faq</Link></div>
                    <div className={scroll != 0  ? 'mynav-item-scroll':'mynav-item'}><Link to="getIntouch" spy={true} smooth={true} activeClass ='activeClass' >Contact</Link></div>
                    
                    
                
                </div>
                
                <div className="my-buttons">
                    {/* <Link to='/client/signin'><div className="create-button-signin">SignIn</div></Link>
                    <Link to='/client/signup'><div className="create-button-register">Register</div></Link> */}
                    {/* <div className="create-button-signin" onClick={()=>setloadModal(true)} >SignIn</div>
                    <div className="create-button-register" onClick={()=>setloadModal(true)}>Register</div> */}
                    <div className="create-button-register" onClick={()=>setloadModal(true)}>Get Started</div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'70%',backgroundColor:'#070722'}}>
                    <Offcanvas.Header closeButton closeVariant='white' >
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=''>
                        <NewLink  to="/" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FaHome color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Home</div>
                            </div>
                        </NewLink>
                        <Link  to="aboutus" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FiBookOpen color='#fff' size={20} />
                                </div>
                                <div className='tagName'>About Us</div>
                            </div>
                        </Link>
                        <Link  to="product" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <GiRegeneration color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Product</div>
                            </div>
                        </Link>
                        <Link  to="what_defines_us" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <MdPayments color='#fff' size={20} />
                                </div>
                                <div className='tagName'>What Defines Us</div>
                            </div>
                        </Link>
                        <Link  to="faq" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <MdVideoLibrary color='#fff' size={20} />
                                </div>
                                <div className='tagName'>faq</div>
                            </div>
                        </Link>
                        <Link  to="roadmap" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <ImPriceTags color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Roadmap</div>
                            </div>
                        </Link>
                        

                       
                        <Link  to="getIntouch" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <BiSupport color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Get In Touch</div>
                            </div>
                        </Link>
                        
                       </div>
                    </Offcanvas.Body>
                </Offcanvas>
            
        </div>
    )
}

export default Index;