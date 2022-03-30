import '../../../assets/css/Body/section2.css'
import { Chart, LineAdvance} from 'bizcharts';
import LineChart from '../lineChart.js'
import { useEffect } from 'react';
import Naira from '../../../assets/images/utility/naira.png'
import Illustrator from '../../../assets/images/utility/Illustration.png'
const Index = ()=>{
  
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        </div>
                    </div>

                    <div className='walletAmount'>
                       <div className='amountWallet'>
                            <img src={Naira}/><div>Naira</div>
                        </div>
                        <div className='amoutInWallet'>
                            <div>0.00</div>
                        </div>
                        <div className='walletCard'>
                            <img src={Illustrator}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Index