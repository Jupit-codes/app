import '../../../assets/css/Body/section3.css'
import BTC from '../../../assets/images/utility/btc.png'
import USDT from '../../../assets/images/utility/usdt.png'
const Index = ()=>{
    return (
        <div className="body_section3">
           <div className='marketTransaction-list'>
                <div className='marketTRansaction-title'>
                    <div>
                        Recent Transactions
                    </div>
                    <div>
                        <div className='viewmore'>
                                    View More
                        </div>
                    </div>
                </div>
                <div className="recent-transactions">
                    <div className='asset-logo'>
                        <img src={BTC}/>
                    </div>
                    <div className='coin-recent-transaction'>
                        Bitcoin
                    </div>
                    <div className='date-recent-transaction'>
                        10:45:16AM
                    </div>
                    <div className='recent-amount'>
                        +1545,00
                    </div>
                    <div className='status'>
                        Completed
                    </div>
                </div>
                <div className="recent-transactions">
                    <div className='asset-logo'>
                        <img src={BTC}/>
                    </div>
                    <div className='coin-recent-transaction'>
                        Bitcoin
                    </div>
                    <div className='date-recent-transaction'>
                        10:45:16AM
                    </div>
                    <div className='recent-amount'>
                        +1545,00
                    </div>
                    <div className='status'>
                        Completed
                    </div>
                </div>
                <div className="recent-transactions">
                    <div className='asset-logo'>
                        <img src={BTC}/>
                    </div>
                    <div className='coin-recent-transaction'>
                        Bitcoin
                    </div>
                    <div className='date-recent-transaction'>
                        10:45:16AM
                    </div>
                    <div className='recent-amount'>
                        +1545,00
                    </div>
                    <div className='status'>
                        Completed
                    </div>
                </div>
                
               

               
               
            </div>
            <div className='walletbalance-list'>
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
                       GiftCards
                    </div>
            </div>
        </div>
    )
}

export default Index;