import React from "react";
import '../../../assets/css/Home/section8.css'
import nene from '../../../assets/images/section8/trade.png'
import saly from '../../../assets/images/section8/saly.png'
import readmore from '../../../assets/images/section8/readmore.png'
const Index = ()=>{
    return(
        <section className="section8">
        
            <div className="greatexperience">
                <h1>Great Experience <br/>with Jupit</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </p>
                <p><img src={readmore}/></p>
                
            </div>
            <div className="greatexperience_img">
                    <img src={saly}/>
            </div>
            
           
        </section>
    )
}

export default Index;