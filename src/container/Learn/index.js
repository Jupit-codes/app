import React,{useState} from "react";
import Header from '../../component/header';
import HeroLearn from '../../layout/LearnLayout/HeroLearn'
import LearnContent from '../../layout/LearnLayout/LearnContent'
import Footer from '../../component/footer';

const Index=()=>{
    const [scroll,setscroll] = useState(0)
    return(
        <div>
            <Header getscroll={setscroll}/>
            <HeroLearn/>
            <LearnContent/>
            <Footer/>
            
        </div>
    )
}

export default Index;