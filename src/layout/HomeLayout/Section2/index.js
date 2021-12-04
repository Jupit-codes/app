import React, { useEffect, useState } from "react";
import '../../../assets/css/Home/section2.css'
import makemoney from '../../../assets/images/section2/makemoney.png'
const Index = ()=>{
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
    return(
        <section className="section2">
            <div className="makemoney-div">
                <img src={makemoney} className={scroll >=1350 ? 'makemoney': 'makemoney slideIn'}/>
            </div>
            
            <div className="makemoney-text">
                Trade Cryto with much Ease
                <p>
                Ever imagined crypto being fun as well as functional? Well, we too have, and we have created Jupit to ease your frights and stress of trading. Come on board and experience crypto trading at its best.
                </p>
                <div className={scroll >=1350 ? 'create-button-getstartedII' : 'create-button-getstartedII scrollEffect'}>Get Started For Free</div>
            </div>

            

        </section>
    )
}

export default Index;