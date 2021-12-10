import React from "react";
import Header from '../../component/header';
import HeroLearn from '../../layout/LearnLayout/HeroLearn'
import LearnContent from '../../layout/LearnLayout/LearnContent'
import Footer from '../../component/footer';

const Index=()=>{
    return(
        <div>
            <Header/>
            <HeroLearn/>
            <LearnContent/>
            <Footer/>
            
        </div>
    )
}

export default Index;