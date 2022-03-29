import '../../../assets/css/Body/section1.css'
import BTC from '../../../assets/images/utility/btc.png'
import Equivalent from '../../../assets/images/utility/equivalent.png'
import Upward from '../../../assets/images/utility/upward.png'
import Growth from '../../../assets/images/utility/growth.png'
const Index = ()=>{
    return(
        <div className="body_section1">
            <div className='cardSection1'>
                <div className='imagepart'>
                    <div className='asset-img-div'>
                         <img src={BTC}/>
                    </div>
                    <div className='asset-to-usd'>
                        <span>BTC</span><span><img src={Equivalent}/></span><span>USD</span>
                    </div>
                    <div className='asset-value'>
                        42,02222.5
                    </div>
                    <div className='trend-div'>
                        <img src={Upward}/><span>7.2%</span>
                    </div>
                </div>
                <div className='trend'>
                    <img src={Growth}/>
                </div>
            </div>
            <div className='cardSection1'>
                USDT
            </div>
        </div>
    )
}

export default Index;