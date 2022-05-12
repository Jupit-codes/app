import { getStepButtonUtilityClass } from '@mui/material';
import { useEffect, useState } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
const Index = ({stepPage,checked})=>{

    const [quantity,setquantity] = useState(0)
    const [Select,setSelect] = useState()
    const [total,setTotal] = useState()
useEffect(()=>{
    checked(true)
},[])

    const proceed = ()=>{
        stepPage('Step3');
    }
    const handleBack = ()=>{
        checked(false)
        stepPage('Step1');
    }
    const handleQuantity = (e)=>{
        setquantity(e.target.value)
        if(Select > 0){
            let x = Select* e.target.value;
            setTotal(x)
        }
    }
    const handleSelect = (e)=>{
        setSelect(e.target.value);
        if(quantity > 0){
            let x = e.target.value * quantity;
            setTotal(x)
        }
    }
    return (
        
            <div className="">
                <div className='back' onClick={()=>handleBack()}><BsArrowLeftCircle size={25} color='#3498db' /><span>Previous</span></div>
                <div className='rateDiv myformSell'>
                    <div className='Selectrate'>
                          
                           <div className='form-floating'>
                               <select className='form-control floatingselectAmount' id="floatingselectAmount" onChange={handleSelect}>
                                    <option>
                                       Click
                                    </option>
                                   <option value={10}>
                                       10USD
                                   </option>
                                   <option value={150}>
                                       150USD
                                   </option>
                                   <option value={200}>
                                       200USD
                                   </option>
                               </select>
                               <label for="floatingselectAmount">Select Amount</label>
                           </div>

                           <div className='form-floating'>
                                <input type="number" id="floatingnumber" className="form-control floatingnumber" onChange={handleQuantity} value={quantity} min={0}/>
                                <label for="floatingnumber">Quantity</label>
                           </div>

                           <div className='form-floating sum'>
                                
                                <input type="number" id="floatingsum" className="form-control floatingnumber"  value={total} disabled={true}/>
                                <label for="floatingsum">Sum Total</label>
                           </div>
                    </div>
                    <div className='cartSummary'>
                        Cart Summary
                    </div>
                </div>
                <div className="form-group formbtn">
                    <input type="button" className="form-control proceedForm" value="Proceed" onClick={()=>proceed()}/>
                </div>

            </div>


        
    )
}

export default Index;