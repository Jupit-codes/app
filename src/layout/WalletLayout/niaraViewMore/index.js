import {BsArrowLeftCircle} from 'react-icons/bs'
import '../../../assets/css/Wallet/walletdefault.css'
import empty from '../../../assets/images/empty.png'
const Index = (props)=>{
    return (
        <div className='btcmoreClass'>
            <div className='back' onClick={()=>{props.Screen('Default')}}><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to Wallet</span></div>
            <div className='flexMoreDetails'>
                <div className='walletInfor slideInLeft'>
                    <div className='sideCard'>
                        <div className='wallet'>Wallet</div>
                        <div className='available-balance'>Available Balance</div>
                        <div className='balance-In'>&#x20A6;0.00</div>
                        <div className='available-balance'>Ledger Balance:&nbsp;<span>&#x20A6;0.00</span></div>
                    </div>
                    <div className='sideCardII'>
                            <input type='submit' value="Withdrawal"/>
                            <input type='submit' value="Deposit"/>
                    </div>
                </div>
                <div className='walletInfor slideInRight advert'></div>
            </div>

            <div className="transaction">
                <div className="th-title">
                        All Transactions
                </div>
                <div className="empty">
                    <img src={empty}/>
                    <div>No Transaction</div>
                </div>
            </div>
        </div>
    )
}


export default Index;