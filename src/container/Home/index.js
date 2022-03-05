import React,{useState} from "react";
import Hero from '../../layout/HomeLayout/Hero';
import HeroNew from '../../layout/HomeLayout/Hero3';
import Header from '../../component/header';
import Whoweare from '../../layout/HomeLayout/Whoweare'
import Section1 from '../../layout/HomeLayout/Section1';
import Section2 from '../../layout/HomeLayout/Section2';
import Section3 from '../../layout/HomeLayout/Section3';
import Section4 from '../../layout/HomeLayout/Section4';
import Section5 from '../../layout/HomeLayout/Section5';
import Section6 from '../../layout/HomeLayout/Section6';
import Section7 from '../../layout/HomeLayout/Section7';
import Section8 from '../../layout/HomeLayout/Section8';
import Section9 from '../../layout/HomeLayout/Section9';
import Section10 from '../../layout/HomeLayout/Section10';
import Section11 from '../../layout/HomeLayout/Section11';
import Footer from '../../component/footer';
import NewFooter from '../../component/newfooter'
import NextGen from '../../layout/HomeLayout/Nextgen';
import Innovative from '../../layout/HomeLayout/Innovation'
import HowItWorks from '../../layout/HomeLayout/howitworks'
import OurOffer from '../../layout/HomeLayout/Ouroffer'
import Process from '../../layout/HomeLayout/ProcessFlow'
import OurTeam from '../../layout/HomeLayout/Ourteam'
import GetInTouch from '../../layout/HomeLayout/GetIntouch'
import Whatsapp from '../../layout/HomeLayout/Whatsapp'
import {BsWhatsapp} from 'react-icons/bs'
import '../../assets/css/Header/nav.css'
const Index=()=>{
    const [scroll,setscroll] = useState(0)
    console.log(scroll)
    return(
        <div style={{position:'relative',width:'100%',height:'100%'}}>
                
                    
                    <div className="whatsappIcon">
                        <a href="https://wa.me/2348088213177" target='_blank'>
                            <div className="whatsappcover">
                                <BsWhatsapp size={30} color="#fff" />
                            </div>
                        </a>
                        
                        <div className="tooltipDiv">WhatsApp Us</div>
                        
        
                    </div>
                
                
            
            
            <Header getscroll={setscroll} />
            
            
            <HeroNew/>
            <NextGen/>
            <Innovative myscroll={scroll}/>
            <HowItWorks/>
            <OurOffer/>
            <Process/>
            <Section7/>
            <OurTeam/>
            <GetInTouch/>
            <NewFooter/>
            {/* 
            
            
            
            
            
            <Section7/>
            
            <NewFooter/> */}
            {/* <Whoweare/> */}
            {/* <Hero/>
            <Section1/>
            
            <Section3/>
            
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
            <Section10/>
            <Section11/>
            <Footer/> */}
            {/* <Section4/> */}
            
            
        </div>
    )
}

export default Index;