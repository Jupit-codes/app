import React from "react";
import '../../../assets/css/Home/section6.css'

const Index = ()=>{
    return(
        <section className="section6">
            
            <div className="style-circle">

            </div>

            <div className="ourassets"> Our Cryto Assets</div>
            
            <div className="ourassets_text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/> Perspiciatis unde omnis iste natus error sit.
            </div>

            <div className="asset-flex">

                <div className="asset-btc">
                        <div className="btc shadow-lg">
                            <div className="coin">
                                <div className="coin__front"></div>
                                <div className="coin__edge">
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

                                </div>
                                <div className="coin__back"></div>
                                <div className="coin__shadow"></div>
                            </div> 
                            <div>
                                <button className="btn btn-lg btn-warning ">Buy Bitcoin</button>
                            </div>

                        </div>
                </div>
                <div className="asset-usdt">
                    <div className="usdt shadow-lg" >
                        <div className="coin_usdt">
                            <div className="coin__front_usdt"></div>
                            <div className="coin__edge_usdt">
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

                            </div>
                            <div className="coin__back_usdt"></div>
                            <div className="coin__shadow_usdt"></div>
                        </div> 
                        <button className="btn btn-lg btn-success ">Buy Usdt</button>

                    </div>
                    
                </div>

            </div>
           

        </section>
    )
}

export default Index;