import { useState } from 'react'
import '../../../assets/css/newWallet/newWallet.css'
import '../../../assets/css/Body/section2.css'
import Naira from '../../BodyLayout/Section2/NAIRA.js'
import Btc from '../../BodyLayout/Section2/BTC'
import Usdt from '../../BodyLayout/Section2/USDT'
import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Index = ()=>{

    const [component,setComponent] = useState('Naira')
    const now = 80;
    const _renderComponent = ()=>{
        switch (component) {
            case 'Naira':
                return <Naira comp={setComponent}/>
                break;
            case 'Btc':
                return <Btc comp={setComponent}/>
                break;
            case 'Usdt':
                return <Usdt comp={setComponent}/>
                break;
        
            default:
                break;
        }
    }

    return(
        <div className="newWalletDiv">
           <div>
                <div className='cardClassTab'>
                    <div className='cardClassTab-flex1'>
                        Wallet Transactions
                    </div>
                    <div className='cardClassTab-flex2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                </div>
                    <div className='xClass'>
                   
                        <div className='VerveCover'>
                            <div className='verve cardBTC'>
                                Verve
                            </div>
                            <div className='master'>
                                <div class="master-child">
                                <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            Btc Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            $12,000,000
                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            03/09
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            ODEWUMI TEMILOLUWA
                                        </div>
                                        <div>
                                            <img src={cardType} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='visa cardUSDT'>
                                Visa
                            </div>
                        </div>

                        <div class="btn_open_more">
                            <div>
                                View More
                            </div>
                        </div>
                        
                    </div>
                    <div className='YClass'>
                        <div className='myKyc'>
                            <div>
                                Transaction Limit
                            </div>
                            <div>
                                KYC LEVEL
                            </div>
                        </div>
                        <div className='progressbar'>
                                <div className='progressValue'></div>
                        </div>
                    </div>
                    
                    

           </div>

           <div>
               Transaction
               <div className='progressbar'>
                    <ProgressBar variant="success" now={40} />
                </div>
           </div>
        </div>
    )
}

export default Index;