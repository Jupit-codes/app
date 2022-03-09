import React,{useState} from "react";
import Header from '../../component/header';
import Footer from '../../component/footer';
import HeroFAQ from '../../layout/FaqLayout/Herofaq'
import ContentFAQ from '../../layout/FaqLayout/faqContent'

const Index=()=>{
    const [scroll,setscroll] = useState(0)

    return(
        <div>
            <Header getscroll={setscroll}/>
                <HeroFAQ/>
                <ContentFAQ/>
            <Footer/>
            
        </div>
    )
}

export default Index;