import React from "react";
import '../../../assets/css/Home/section5.css'
import customer from '../../../assets/images/section5/ourcustomer.webp'
const Index = ()=>{
    return(
        <section className="section5">
            
            <div className="testimonia_img">
                <img src={customer}/>
            </div>
            <div  className="testimonia_carousel"> 
                <div className="customer_spotlight">
                    Customer Spotlight
                </div>
            </div>


        </section>
    )
}

export default Index;