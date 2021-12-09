import React from "react";
import Header from '../../component/header';
import HeroAboutus from '../../layout/AboutusLayout/HeroAbout'
import Section1 from '../../layout/AboutusLayout/Section1'
import Section2 from '../../layout/AboutusLayout/Section2'
import Footer from '../../component/footer';

const Index=()=>{
    return(
        <div>
            <Header/>
            <HeroAboutus/>
            <Section1/>
            <Section2/>
            <Footer/>
            
        </div>
    )
}

export default Index;