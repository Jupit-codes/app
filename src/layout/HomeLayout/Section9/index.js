import React from "react";
import '../../../assets/css/Home/section9.css'
import bg from '../../../assets/images/section9/section9_bg.png'
import path from '../../../assets/images/section9/Path 4.2.png'
import giftcard from '../../../assets/images/section9/giftcard.png'
import perfectmoney from '../../../assets/images/section9/perfectmoney.jfif'


const Index = ()=>{
    return(
        <section className="section9">
            <div className="bg">

            </div>
            <div className="path">
                <img src={path} className="imgpath" />
            </div>

            <div className="digital_asset">
                <div className="digital_asset_div shadow-lg">
                     
                    <div className="otherservices shadow-sm">
                        <div className="otherservices_text">gift cards</div>
                        <img src={giftcard}/>
                        
                    </div>
                    <div className="otherservices shadow-sm">
                        <div className="otherservices_text"> perfect money</div>
                        <img src={giftcard}/>
                        
                    </div>

                </div>
                
            </div>

            
            
          
        </section>
    )
}

export default Index;