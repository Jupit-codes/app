import '../../../assets/css/Body/section2.css'
import { Chart, LineAdvance} from 'bizcharts';
import LineChart from '../lineChart.js'
import { useContext, useEffect, useState } from 'react';
import Naira from '../../../assets/images/utility/naira.png'
import Illustrator from '../../../assets/images/utility/Illustration.png'
import Ornament from '../../../assets/images/utility/Ornament.png'
import GIFTCARD from '../../../assets/images/utility/giftcard.png'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import Btc from './BTC.js'
import NairaWallet from './NAIRA.js'
import Usdt from './USDT.js'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom';
const Index = ()=>{
    const [showButton,setshowButton] = useState(false)
    const [component,setComponent] = useState('Naira')
    const [clickChart,setClickChart] =  useState('BTC')
    const [activeBTC,setactiveBTC] = useState(true)
    const [activeUSDT,setactiveUSDT] = useState(false)
    const history = useHistory();
        const _renderComponent = ()=>{
        switch (component) {
            case 'Naira':
                return <NairaWallet comp={setComponent}/>
                break;
            case 'Btc':
                return <Btc comp={setComponent}/>
                break;

            // case 'Usdt':
            //     return <Usdt comp={setComponent}/>
            //     break;
        
            default:
                break;
        }
    }

    const _handleWallet = ()=>{
        // navigate('/client/wallet',{state:{wallettype: component}})
        history.push({
            pathname: '/client/wallet',
            state: { wallettype: component }
        });
        
    }

    const opengiftcard = ()=>{
        window.location='/client/tradegiftcard'
    }
    return(
        <div className="body_section2">
            <div className='walletbalance'>
                    <div className='walletBalanceTitle'>
                        <div className='balanceWallet'>
                            Wallet Balances
                        </div>
                        <div className='balanceButton'>
                            <div className={component === "Naira" ? 'naira-trans' :'trans'} onClick={()=>{setComponent('Naira');setshowButton(!showButton)}} >
                                        NAIRA WALLET
                            </div>
                            <div className={component === "Btc" ? 'btc-trans' :'trans'} onClick={()=>{setComponent('Btc');setshowButton(!showButton)}} >
                                        BTC WALLET
                            </div>
                            <div className={component === "Usdt" ? 'usdt-trans' :'trans'}onClick={()=>{setComponent('Usdt');setshowButton(!showButton)}}>
                                        USDT WALLET
                            </div>
                        
                        </div>
                        
                    </div>
                    {/* <div className={showButton ? 'typeBody showtype':'typeBody'} >
                        <div >BTC</div>
                        <div >USDT</div>
                        <div>NAIRA</div>
                    </div> */}
                    <div className='rendercomponent'>
                        {_renderComponent()}
                    </div>
                    <div className='ViewAllAsset'>
                        <div className={component} onClick={()=>_handleWallet()}>
                            All Assets
                        </div>
                    </div>
                    

            </div>
            <div className='marketTransaction'>
                        <img src={GIFTCARD} />
                        <button className='btn btn-secondary mt-2 mb-2' onClick={()=>opengiftcard()}>
                            Trade Your Gift Card with us.
                        </button>
            </div>

      
            
        </div>
    )
}

export default Index