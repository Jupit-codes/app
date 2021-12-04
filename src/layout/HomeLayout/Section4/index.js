import React from "react";
import '../../../assets/css/Home/section4.css'
import signup from '../../../assets/images/section4/signup.png';
import deposit from '../../../assets/images/section4/deposit.png';
import makemoney from '../../../assets/images/section4/makemoney.png';
import logo_white from '../../../assets/images/logo_white.png'
import trading from '../../../assets/images/section4/trading.png'
const Index = ()=>{
    return(
        <section className="section4">
            
            <div className="jupit-way">Jupit Way</div>

            <div className="flexCircle">
                <div className="cycle">
                    <div className="number1">
                        <img src={signup}  className="storyImage"/>
                        <small>Open a free account with Jupit</small>
                    </div>
                    <div>
                        <div>
                            <img src={trading}  className="storyImage"/>
                            <small>Trade On Our platform.</small>
                        </div>
                    </div>
                </div>
                <div className="circle">
                    <div className="centerCircle">
                        <img src={logo_white} className="logo_white"/>
                    </div>
                </div>
                <div className="cycle">
                    <div>
                        <img src={deposit}  className="storyImage"/>
                        <small>Deposit/Buy desired coin (BTC/USDT) into your account.</small>
                    </div>
                    <div>
                    <img src={makemoney}  className="storyImage"/>
                        <small>Make money on Trading.</small>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Index;