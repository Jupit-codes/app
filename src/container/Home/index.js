import React from "react";
import Hero from '../../layout/HomeLayout/Hero';

import Header from '../../component/header';
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
const Index=()=>{
    return(
        <div>
            <Header/>
            <Hero/>
            {/* <Hero2/> */}
            <Section1/>
            <Section2/>
            <Section3/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
            <Section10/>
            <Section11/>
            <Footer/>
            {/* <Section4/> */}
            
            
        </div>
    )
}

export default Index;