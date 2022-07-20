import React, { useEffect, useState } from "react";
import '../../../assets/css/Section_2/section_2.css'
import wallet from '../../../assets/images/wallet.png'
import { reactLocalStorage } from "reactjs-localstorage";
const Index=()=>{
    const [nairawallet, setnairawallet] = useState();
    useEffect(()=>{
        let x = reactLocalStorage.getObject('user');
        
        setnairawallet(x.naira_wallet[0].balance.$numberDecimal)
    },[])
    return(
        <div className="section_2">
            <div className="section_2_div_1">
                <div className="naira_wallet">Naira Wallet</div>
                <div className="balance">&#x20A6;{nairawallet}</div>
                <div className="btn_deposit">Deposit Into Wallet</div>
            </div>
            <div className="section_2_div_2">
                <img src={wallet} className="wallet"/>
            </div>       
        </div>
    
    )
}
export default Index;