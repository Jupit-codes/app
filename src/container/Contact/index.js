import React,{useState} from "react";
import Header from '../../component/header';
import Contact from '../../layout/ContactLayout/ContactHero'
import Footer from '../../component/footer';
import { useLocation } from "react-router";

const Index=()=>{
    const location = useLocation();
    const path = location.pathname.replace('/','');
    const [scroll,setscroll] = useState(0)
 

    return(
        <div>
            <Header ActivePath={path}  getscroll={setscroll}/>
            <Contact />
            <Footer/>
            
        </div>
    )
}

export default Index;