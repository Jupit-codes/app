import { useEffect, useState ,useContext} from 'react'
import '../../assets/css/Wallet/walletdefault.css'
import Marketprice from '../../context/actions/marketprice'
import { GlobalContext } from "../../context/Provider";

import Default from './default'
const Index = ()=>{
    const [walletTab,setwalletTab] = useState('Default');
        const _renderWalletDetails = ()=>{
            switch(walletTab){
                case 'Default':
                    return <Default/>
                    break;
                case 'NairaMore':
                    return 'Naira'
                    break;
                case 'BTCMore':
                    return 'BTC'
                    break;
                case 'USDTMore':
                    return 'USDT'
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