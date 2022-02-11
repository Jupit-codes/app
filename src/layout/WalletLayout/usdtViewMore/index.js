import {BsArrowLeftCircle} from 'react-icons/bs'
import '../../../assets/css/Wallet/walletdefault.css'
const Index = (props)=>{
    return (
        <div className='btcmoreClass'>
            <div className='back' onClick={()=>{props.Screen('Default')}}><BsArrowLeftCircle size={25} color='#3498db'/><span>Return to Wallet</span></div>
            
           
            
        </div>
    )
}


export default Index;