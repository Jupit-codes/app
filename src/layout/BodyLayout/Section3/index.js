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
                    <div className='GifttCard'>
                        
                        
                    </div>

                   
            </div>
        </div>
    )
}

export default Index;