import { useState } from 'react'
import '../../../assets/css/newWallet/newWallet.css'
import '../../../assets/css/Body/section2.css'
import Naira from '../../BodyLayout/Section2/NAIRA.js'
import Btc from '../../BodyLayout/Section2/BTC'
import Usdt from '../../BodyLayout/Section2/USDT'
const Index = ()=>{

    const [component,setComponent] = useState('Naira')
    const _renderComponent = ()=>{
        switch (component) {
            case 'Naira':
                return <Naira comp={setComponent}/>
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

    return(
        <div className="newWalletDiv">
           <div>
                <div className='cardClassTab'>
                    <div className='cardClassTab-flex1'>
                        Wallet Transactions
                    </div>
                    <div className='cardClassTab-flex2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                </div>
                    <div className='rendercomponent'>
                        
                        
                    </div>

           </div>

           <div>
               Transaction
           </div>
        </div>
    )
}

export default Index;