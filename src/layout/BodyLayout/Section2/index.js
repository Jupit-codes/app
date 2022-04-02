import '../../../assets/css/Body/section2.css'
import { Chart, LineAdvance} from 'bizcharts';
import LineChart from '../lineChart.js'
import { useContext, useEffect, useState } from 'react';
import Naira from '../../../assets/images/utility/naira.png'
import Illustrator from '../../../assets/images/utility/Illustration.png'
import Ornament from '../../../assets/images/utility/Ornament.png'

import { DropdownButton,Dropdown } from 'react-bootstrap';
import Btc from './BTC.js'
import NairaWallet from './NAIRA.js'
import Usdt from './USDT.js'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Index = ()=>{
    const [showButton,setshowButton] = useState(false)
    const [component,setComponent] = useState('Naira')
    const history = useHistory();
        const _renderComponent = ()=>{
        switch (component) {
            case 'Naira':
                return <NairaWallet comp={setComponent}/>
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

    const _handleWallet = ()=>{
        history.push({
            pathname: '/client/wallet',
            state: { wallettype: component }
        });
        
    }
    return(
        <div className="body_section2">
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
                    <div className={showButton ? 'typeBody showtype':'typeBody'} >
                        <div onClick={()=>{setComponent('Btc');setshowButton(!showButton)}}>BTC</div>
                        <div onClick={()=>{setComponent('Usdt');setshowButton(!showButton)}}>USDT</div>
                        <div onClick={()=>{setComponent('Naira');setshowButton(!showButton)}}>NAIRA</div>
                    </div>
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
            
        </div>
    )
}

export default Index