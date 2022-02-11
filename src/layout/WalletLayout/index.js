import { useEffect, useState ,useContext} from 'react'
import '../../assets/css/Wallet/walletdefault.css'
import Marketprice from '../../context/actions/marketprice'
import { GlobalContext } from "../../context/Provider";

import Default from './default'
import NairaMore from './niaraViewMore'
import BTCMore from './btcViewMore'
import USDTMore from './usdtViewMore'
const Index = ()=>{
    const [walletTab,setwalletTab] = useState('Default');

    const getMoreDetails = (ScreenName)=>{
        setwalletTab(ScreenName)
    }
        const _renderWalletDetails = ()=>{
            switch(walletTab){
                case 'Default':
                    return <Default Screen={getMoreDetails}/>
                    break;
                case 'NairaMore':
                    return <NairaMore Screen={getMoreDetails}/>
                    break;
                case 'BTCMore':
                    return <BTCMore  Screen={getMoreDetails}/>
                    break;
                case 'USDTMore':
                    return <USDTMore  Screen={getMoreDetails}/>
                    break;


            }
        }

    return(
        <div>
            {_renderWalletDetails()}
        </div>
    )
}

export default Index;