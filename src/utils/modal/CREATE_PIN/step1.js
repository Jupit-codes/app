import { useState } from "react"
import {FiEye,FiEyeOff} from 'react-icons/fi'


const Index=({pageContent,pin,geterror})=>{


    const [createdpin,setcreatedpin] =useState('')

    const _handleCreatePIN = (e)=>{
        setcreatedpin(e.target.value)
    }
    
    const handlenext = ()=>{
        
        if(createdpin){
            pin(createdpin);
            pageContent('step2')
        }
        
    }
    
    return (
        <div className='PinInputDiv'>
                {geterror && <div className="pinerror">{geterror}</div>}
                <div className="myInput">
                    <input type="password"  className='form-control' placeholder='Enter Your Wallet PIN' value={createdpin} onChange={_handleCreatePIN} maxLength={6}/>
                    <FiEyeOff  className="iconoff"/>
                </div>
            {/* <input type="password"  className='form-control' placeholder='Enter Your Wallet PIN' value={createdpin} onChange={_handleCreatePIN} maxLength={6}/> */}
            <input type="submit" value="Next" onClick={handlenext} className="buttonNext" />
        </div>
    )
}

export default Index