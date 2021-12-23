import React from "react";
import '../../../assets/css/Home/section7.css'
import {GrBitcoin} from 'react-icons/gr'
import {BsBank2} from 'react-icons/bs'
import {FaCoins} from 'react-icons/fa'
const Index = ()=>{
    return(
        <section className="section7">
            
            <div className="rates">
              <div className="row mt-3">
                <div className="col-md-4 rate-title">
                        OUR RATES
                </div>
                <div className="col-md-4 rate-title">
                        OUR RESERVE
                </div>
                <div className="col-md-4 rate-title">
                        LATEST EXCHANGE
                </div>
              </div>
              <hr/>
              <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-3"><GrBitcoin size={30}/></div>
                            <div className="col-md-3">BTC</div>
                            <div className="col-md-6 rate-content">We buy @ N560<br/>We buy @ N570</div>
                        </div>

                         
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <BsBank2 size={30}/> Bank Transfer
                            </div>
                            <div className="col-md-6 rate-content">
                                NGN
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 rate-content">
                            #2500000000000.00
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 rate-content">
                            bITCOIN BTC - BANK
                        </div>
                    </div>

             </div>

             <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-3"><FaCoins size={30}/></div>
                            <div className="col-md-3">USDT</div>
                            <div className="col-md-6 rate-content">We buy @ N560<br/>We buy @ N570</div>
                        </div>

                         
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <BsBank2 size={30}/> Bank Transfer
                            </div>
                            <div className="col-md-6 rate-content">
                                NGN
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 rate-content">
                            #2500000000000.00
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 rate-content">
                            bITCOIN BTC - BANK
                        </div>
                    </div>

             </div>
            </div>
           
        </section>
    )
}

export default Index;