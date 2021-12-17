import React, { useState } from "react";
import '../../../assets/css/Section_3/section_3.css';
import wallet from '../../../assets/images/wallet.png';
import btc from '../../../assets/images/btc.png';
import {MdOutlineHistory} from 'react-icons/md';
import {MdOutlinePending} from 'react-icons/md';
import {MdDownloadDone} from 'react-icons/md';
import {MdCancel} from 'react-icons/md';
import {MdRemoveModerator} from 'react-icons/md';
import empty from '../../../assets/images/empty.png';
import giftcard from '../../../assets/images/cards.svg';
const Index=()=>{

    return(
        <div className="section_3">
              <div className="trade">
                    <div className="BTC">
                        <div className="btc_img">
                            <img src={btc}/>
                        </div>
                        <div className="bitcoin_text">BITCOIN</div>
                        <div className="coin_text">Trade BITCOIN</div>
                    </div>
                    <div className="USDT">
                        <div className="btc_img">
                            <img src={btc}/>
                        </div>
                        <div className="bitcoin_text">USDT</div>
                        <div className="coin_text">Trade USDT</div>
                    </div>
             </div> 
             <div className="statistics">
                    <div className="statistics_title">Statistics</div>

                    <div className="table_structure">
                        
                        <div>
                            
                            <div className="create-icon-circle_total">
                            <MdOutlineHistory  size={30} color="#fff"/>

                            </div>
                        </div>
                        <div className="text_statistics">
                                <div>TOTAL TRANSACTIONS</div>
                                <div>0</div>
                            </div>
                    </div>

                   

                    <div className="table_structure">
                        
                        <div>
                            <div className="create-icon-circle_pending">
                            <MdOutlinePending  size={30} color="#fff"/>

                            </div>
                            
                        </div>
                        <div className="text_statistics">
                                <div>PENDING TRANSACTIONS</div>
                                <div>0</div>
                            </div>
                    </div>
                    <div className="table_structure">
                        
                        <div>
                            
                            <div className="create-icon-circle_success">
                                <MdDownloadDone  size={30} color="#fff"/>
                            </div>
                        </div>
                        <div className="text_statistics">
                                <div>SUCCESSFUL TRANSACTIONS</div>
                                <div>0</div>
                            </div>
                    </div>

                    <div className="table_structure">
                        
                        <div>
                            <div className="create-icon-circle_failed">
                                <MdCancel  size={30} color="#fff"/>
                            </div>
                        </div>
                        <div className="text_statistics">
                                <div>FAILED TRANSACTIONS</div>
                                <div>0</div>
                            </div>
                    </div>
                    <div className="table_structure">
                        
                        <div>
                            <div className="create-icon-circle_declined">
                                <MdRemoveModerator  size={30} color="#fff"/>
                            </div>
                        </div>
                        <div className="text_statistics">
                                <div>DECLINED TRANSACTIONS</div>
                                <div>0</div>
                            </div>
                    </div>
                   
                    
                    

            </div>  
            <div className="transaction-history">
                <div className="th-title">
                     Top 10 Latest Transactions
                </div>
                <div className="empty">
                    <img src={empty}/>
                    <div>No Transaction</div>
                </div>
            </div> 

            <div className="giftCard">
                <div>
                    <img src={giftcard}/>
                </div>
                <div className="coin_gift_card">Trade GiftCards</div>
            </div>
        </div>
    
    )
}
export default Index;