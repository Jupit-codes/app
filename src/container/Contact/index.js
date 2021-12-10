import React from "react";
import Header from '../../component/header';
import Contact from '../../layout/ContactLayout/ContactHero'
import Footer from '../../component/footer';
import { useLocation } from "react-router";

const Index=()=>{
    const location = useLocation();
    const path = location.pathname.replace('/','');

    console.log('path',path)

    return(
        <div>
            <Header ActivePath={path}/>
            <Contact />
            <Footer/>
            
        </div>
    )
}

export default Index;