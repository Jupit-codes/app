import React, { useEffect, useState } from "react";
import '../../../assets/css/Home/section3.css'
import logo from '../../../assets/images/logo_black.png'

const Index = ()=>{
     return(
        <section className="section3">
            <div className="section-3-title"> Why Choose Us</div>
            
                <div className="why-choose-us-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/> Perspiciatis unde omnis iste natus error sit.
                </div>
                
                <div className="card-flex">
                    <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                            <img src={logo} className="cardimg"  />
                            <div className="cardTitle">SAFE AND SECURE</div>
                            <div className="cardBody">
                                Trusted by millions globally for its secure platform, we are confident to say that your crypto is in the right hands.
                            </div>
                            
                    </div>
                    <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                            <img src={logo} className="cardimg"  />
                            <div className="cardTitle">INSTANT EXCHANGE</div>
                            <div className="cardBody">
                            Everyone loves an easy-to-use platform, that is why our top priority is providing you with seamless services you can enjoy without breaking a sweat.
                            </div>
                            
                    </div>
                    <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                            <img src={logo} className="cardimg"  />
                            <div className="cardTitle">EASE OF USE</div>
                            <div className="cardBody">
                            Every one of our services is built with you in mind. Beating our chest we can say, we give you the best crypto experience.
                            </div>
                            {/* <Link to="/services"> 
                                <div className="createButtonOthers">
                                Read More <Icon.ArrowRight/>
                                </div>
                            </Link> */}
                            {/* <div className="buttonParentDiv">
                                <div className="createButton_services">
                                    Read More <Icon.ArrowRight/>
                                </div>
                            </div> */}
                    </div>

               
                </div>
                
            
            
        </section>
    )
}

export default Index;