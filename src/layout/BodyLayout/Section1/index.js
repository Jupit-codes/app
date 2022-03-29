import '../../../assets/css/Body/section1.css'
import BTC from '../../../assets/images/utility/btc.png'
import USDT from '../../../assets/images/utility/usdt.png'
import Equivalent from '../../../assets/images/utility/equivalent.png'
import Upward from '../../../assets/images/utility/upward.png'
import Growth from '../../../assets/images/utility/growth.png'
import Down from '../../../assets/images/utility/down.png'
import Downward from '../../../assets/images/utility/No.png'
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
            <div className='imagepart'>
                    <div className='asset-img-div'>
                         <img src={USDT}/>
                    </div>
                    <div className='asset-to-usd'>
                        <span>USD</span><span><img src={Equivalent}/></span><span>USD</span>
                    </div>
                    <div className='asset-value'>
                        10,000
                    </div>
                    <div className='trend-div'>
                        <img src={Downward}/><span>1.2%</span>
                    </div>
                </div>
                <div className='trend'>
                    <img src={Down}/>
                </div>
            </div>
        </div>
    )
}

export default Index;