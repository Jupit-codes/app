import '../../../assets/css/Body/section2.css'
import { Chart, LineAdvance} from 'bizcharts';
import LineChart from '../lineChart.js'
import { useEffect, useState } from 'react';
import Naira from '../../../assets/images/utility/naira.png'
import Illustrator from '../../../assets/images/utility/Illustration.png'
import Ornament from '../../../assets/images/utility/Ornament.png'
import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { DropdownButton,Dropdown } from 'react-bootstrap';
const Index = ()=>{
    const [showButton,setshowButton] = useState(false)
    const handleBalanceChangeBalance = ()=>{
        setshowButton(!showButton)
        alert('clicked')
    }
    return(
        <div className="body_section2">

            <div className='marketTransaction'>
                <div className='marketTitle'>
                    <div>
                        Transaction Overview
                    </div>
                    <div className='transDiv'>
                        <div className='trans transFlex'>
                                    BTC
                        </div>
                        <div className='trans transXflex'>
                                    USDT
                        </div>
                        <div className='trans transXflex'>
                                    ALL
                        </div>
                      
                    </div>
                </div>
               <LineChart/>
            </div>
            <div className='walletbalance'>
                    <div className='walletBalanceTitle'>
                        <div className='balanceWallet'>
                            Balances
                        </div>
                        <div className='balanceIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" onClick={()=>{setshowButton(!showButton)}}>
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        
                        </div>
                        
                    </div>
                    <div className={showButton ? 'type showtype':'type'} >
                        <div>BTC</div>
                        <div>USDT</div>
                        <div>NAIRA</div>
                    </div>
                    

                    
   
                    <div className='designcover'>
                    <div className='cardNairaCover'>
                        <div className='overlay'>

                        </div>
                        <div className='cardNaira'>
                            <div className='card_section_a'>
                                <div>
                                    <img src={jupit}/>
                                </div>
                                <div>
                                    **** **** **** 1234
                                </div>

                            </div>
                            <div className='card_section_b'>
                                <div className='card_section_main'>
                                    Main Balance

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
                        <div className='cardDesign'>
                            <div className='cardBTC'>
                                    
                            </div>
                            <div className='cardUSDT'>
                                    
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Index