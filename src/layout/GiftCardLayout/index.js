
import { useState } from 'react';
import '../../assets/css/GiftCard/giftcard.css'
import Buy from './buy'
import Sell from './sell'
const Index = ()=>{
    const [option,setoption] = useState('Buy');

    const handleOption= (option)=>{
        setoption(option);
        
    }

    const manageView = ()=>{
       switch(option){
            case 'Buy':
                return <Buy/>
                break;
            case 'Sell':
                return <Sell/>
                break;
            default:

        }
    }

    return(
        <div className="giftcardBody">
           <div className='giftcardTab'>
               <div className={option === "Buy" ? 'activegiftcardTab':''} onClick={()=>handleOption('Buy')}>
                   Buy GiftCard
               </div>
               <div className={option === "Sell" ? 'activegiftcardTab':''}  onClick={()=>handleOption('Sell')}>
                   Sell GiftCard
               </div>
           </div>
           <div className='giftCardView'>
            {manageView()}
           </div>
        </div>
    )
}

export default Index;