import React from "react";
import Hero from '../../layout/HomeLayout/Hero';

import Header from '../../component/header';
import Section1 from '../../layout/HomeLayout/Section1';
import Section2 from '../../layout/HomeLayout/Section2';
import Section3 from '../../layout/HomeLayout/Section3';
import Section4 from '../../layout/HomeLayout/Section4';
import Section5 from '../../layout/HomeLayout/Section5';
import Section6 from '../../layout/HomeLayout/Section6';
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
            {/* <Section4/> */}
            
            
        </div>
    )
}

export default Index;