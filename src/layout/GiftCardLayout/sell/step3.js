import { useEffect } from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
const Index = ({stepPage,checked})=>{


    useEffect(()=>{
        checked(true)
    },[])
    const proceed = ()=>{
        alert('Submitted')
    }
    const handleBack = ()=>{
        checked(false)
        stepPage('Step2');
       
    }
    return (
        
            <div className="">
                <div className='back' onClick={()=>handleBack()}><BsArrowLeftCircle size={25} color='#3498db' /><span>Previous</span></div>
                <div className="form-group">
                    <input type="button" className="form-control proceedForm" value="Submit" onClick={()=>proceed()}/>
                </div>

            </div>


        
    )
}

export default Index;