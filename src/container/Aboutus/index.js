import React from "react";
import Header from '../../component/header';
// import HeroAboutus from '../../layout/AboutusLayout/HeroAbout'
// import Section1 from '../../layout/AboutusLayout/Section1'
// import Section2 from '../../layout/AboutusLayout/Section2'

// import Section3 from '../../layout/AboutusLayout/Section3'
// import Section4 from '../../layout/AboutusLayout/Section4'
// import Section5 from '../../layout/AboutusLayout/Section5'
// import Team from '../../layout/HomeLayout/Ourteam'
// import Footer from '../../component/xfooter'
import { useState,useEffect } from "react";
const Index=()=>{
    const [scroll,setscroll] = useState(0)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            {/* <Header getscroll={setscroll} />
            <HeroAboutus/>
            <Section5/>
            <Section3/>
            <Section4/>
            <Team/>
            <Footer/> */}
            {/* <Section1/>
            <Section2/> */}
           
            
        </div>
    )
}

export default Index;