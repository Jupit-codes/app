import '../../assets/css/Send/send.css'
import {BsArrowLeftCircle} from 'react-icons/bs'
import Icon from "react-crypto-icons";
import Equivalent from '../../assets/images/equivalent.svg'
import {HiCheckCircle} from 'react-icons/hi'
import { useState } from 'react';
import { Select } from '@mui/material';
const Index =()=>{
    const [lowFee, setlowFee]= useState();
    const [mediumFee, setmediumFee]= useState();
    const [highFee, sethighFee]= useState();
    const [customdisable, setcustomdiasble]=useState(true)
    const [ReceipentAddress,setReceipentAddress] = useState()
    const handleChangeFee = (e)=>{
        if(e.target.classList.contains('low')){
            sethighFee(false);
            setmediumFee(false);
            setlowFee(true);
        }
        else if(e.target.classList.contains('medium')){
            sethighFee(false);
            setmediumFee(true);
            setlowFee(false);
        }
        else if(e.target.classList.contains('high')){
            sethighFee(true);
            setmediumFee(false);
            setlowFee(false);
        }
    }
    const _handleReceipent = (e)=>{
        setReceipentAddress(e.target.value);
        
        // setcustomdiasble(!customdisable)
        
    }
    const _selectFee = ()=>{
        return (
            <div className=''>
                <div className='sendBTCFrom'>Select Fee</div>
                <div className='selectFee'>
                    <div className='selectedbox low' onClick={handleChangeFee}>
                        <div>{lowFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype low'>low Fee</div>
                        <div className='selectedAmount low'>0.000005 SATOCHI</div>
                            
                    </div>
                    <div className="selectedbox medium" onClick={handleChangeFee}>
                        <div>{mediumFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype medium'>Medium Fee</div>
                         <div className='selectedAmount medium'>0.00000100 SATOCHI</div>
                    </div>
                    <div className='selectedbox high' onClick={handleChangeFee}>
                        <div>{highFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype high'>High Fee</div>
                         <div className='selectedAmount high'>0.00000100 SATOCHI</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="sendBTC">
            <div className='back'><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to BTC Wallet</span></div>
            <div className='SendBody'>
                <div className='SendBodyI'>
                    <div className='sendBTCFrom'>Send BTC From</div>
                    <div className='fromBTC'>
                        <div>
                            <Icon name="btc" size={30} /> <span>BTC Wallet</span>
                        </div>
                        <div>
                            Balance:0.0000000
                        </div>
                    </div>
                    <div className='toBTC'>
                        <div className='sendBTCFrom'>To</div>
                        <div>
                            <input type="text"  placeholder='Paste Receipent BTC Address' value={ReceipentAddress} onChange={_handleReceipent}/>
                        </div>
                    </div>
                    <div>
                        <div className='sendBTCFrom'>Amount</div>
                        <div className='amount'>
                            <input type="number"  placeholder='BTC'/>
                            <img src={Equivalent}/>
                            <input type="number"  placeholder='USD'/>
                        </div>
                    </div>
                    <div>
                        {_selectFee()}
                    </div>
                    <div className={customdisable? 'sendFund disabled': 'sendFund'} >
                            Continue
                    </div>
                </div>
                <div className='SendBodyII'>
                    2
                </div>
            </div>
        </div>
    )
}

export default Index;